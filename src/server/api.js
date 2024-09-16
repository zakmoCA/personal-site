import express from 'express'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import dotenv from 'dotenv'
import process from 'node:process'

dotenv.config()

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

console.log('JWT_SECRET:', JWT_SECRET)

const SITE_URL = process.env.NODE_ENV === 'production' 
  ? process.env.PROD_SITE_URL : process.env.DEV_SITE_URL

if (!JWT_SECRET) {
  console.error('JWT_SECRET is not set in the environment variables')
  process.exit(1)
}

router.use(helmet())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})
router.use(limiter)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.PASS
  }
})

const tokenBlacklist = new Set()

router.post('/request-referee-access', async (req, res) => {
  const { email, company } = req.body

  if (!email || !company) {
    return res.status(400).json({ message: 'Email and company are required' })
  }

  const token = jwt.sign({ email, company }, JWT_SECRET, { expiresIn: '1h' })
  const verificationUrl = `${SITE_URL}/verify-access?token=${token}&from=resume`
  const referencesUrl = `${SITE_URL}/references?token=${token}&from=resume`


  try {
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Zak Mohamed's CV References",
      text: `Please click on this link to verify your access: ${verificationUrl}. Once verified, you can access the references here: ${referencesUrl}`,
      html: `
        <p>Please click <a href="${verificationUrl}">here</a> to verify your access to Zak Mohamed's CV references.</p>
        <p>Once verified, you can access the references <a href="${referencesUrl}">here</a>.</p>
      `
    })

    res.json({ message: 'Verification email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Error sending verification email' })
  }
})

router.get('/verify-referee-access', (req, res) => {
  const { token } = req.query

  if (!token) {
    return res.status(400).json({ isValid: false, message: 'Token is required' })
  }

  try {
    if (tokenBlacklist.has(token)) {
      return res.status(400).json({ isValid: false, message: 'Token has been revoked' })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(decoded)
    res.json({ isValid: true })
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(400).json({ isValid: false, message: 'Token has expired' })
    } else {
      res.status(400).json({ isValid: false, message: 'Invalid token' })
    }
  }
})

router.get('/references', (req, res) => {
  const { token } = req.query

  if (!token) {
    return res.status(400).json({ message: 'Token is required' })
  }

  try {
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ message: 'Token has been revoked' })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    
    const references = [
      {
        name: process.env.TANDA_REF_NAME,
        address: process.env.TANDA_REF_COMPANY_ADDRESS,
        position: process.env.TANDA_REF_POSITION,
        email: process.env.TANDA_REF_EMAIL,
        phone: process.env.TANDA_REF_PHONE
      },
      {
        name: process.env.RESP_REF_NAME,
        address: process.env.RESP_REF_COMPANY_ADDRESS,
        position: process.env.RESP_REF_POSITION,
        email: process.env.RESP_REF_EMAIL,
        phone: process.env.RESP_REF_PHONE
      },
      {
        name: process.env.SLEEP_REF_NAME,
        address: process.env.SLEEP_REF_COMPANY_ADDRESS,
        position: process.env.SLEEP_REF_POSITION,
        email: process.env.SLEEP_REF_EMAIL,
        phone: process.env.SLEEP_REF_PHONE
      }
    ]

    res.json({ references })
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: 'Token has expired' })
    } else {
      res.status(401).json({ message: 'Invalid token' })
    }
  }
})

router.post('/logout', (req, res) => {
  const { token } = req.body
  if (token) {
    tokenBlacklist.add(token)
  }
  res.json({ message: 'Logged out successfully' })
})

export default router