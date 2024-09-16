import { useRef, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import FormLayout from '../components/FormLayout'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import { isRefereeAccessAllowed } from '../constants/featureFlags'

const Contact = () => {
  const formRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const [showRefereeButton, setShowRefereeButton] = useState(false)

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      showAlert({ show: true, text: 'Your message was sent successfully.', type: 'success' })

      setTimeout(() => {
        hideAlert(false)
        setCurrentAnimation('idle')
        setForm({ name: '', email: '', message: '' })
      }, [3000])
    }).catch((error) => {
      setIsLoading(false)
      console.error(error)
      setCurrentAnimation('idle')
      showAlert({ show: true, text: "I didn't receive your message.", type: 'danger' })
    })
  }

  useEffect(() => {
    setShowRefereeButton(isRefereeAccessAllowed())
  }, [location]);

  const contactFields = [
    { label: 'Name', type: 'text', name: 'name', value: form.name, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, required: true },
    { label: 'Email', type: 'email', name: 'email', value: form.email, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, required: true },
    { label: 'Your message', type: 'textarea', name: 'message', value: form.message, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, required: true, placeholder: 'Let me know how I can help!' },
  ]

  return (
    <section className="relative flex lg:flex-row flex-col max-container min-h-screen overflow-y-auto">
      {alert.show && <Alert {...alert} />}
      <FormLayout
        title="Get in Touch"
        fields={contactFields}
        onSubmit={handleSubmit}
        submitButtonText="Send message"
        isLoading={isLoading}
      />
      {showRefereeButton && (
        <div className="mt-10">
          <button
            onClick={() => navigate('/referee-request')}
            className="btn"
          >
            Request References
          </button>
        </div>
      )}
    </section>
  )
}

export default Contact