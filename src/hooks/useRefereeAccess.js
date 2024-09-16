import { useState, useCallback } from 'react'

const useRefereeAccess = () => {
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const verifyToken = useCallback(async (token) => {
    if (!token) {
      setError('No token provided')
      return false
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/verify-referee-access?token=${token}`)
      const data = await response.json()
      setIsValid(data.isValid)
      if (!data.isValid) {
        setError(data.message || 'Invalid token')
      }
      return data.isValid
    } catch (error) {
      console.error('Error verifying token:', error)
      setError('Error verifying token')
      return false
    } finally {
      setIsLoading(false)
    }
  }, [])

  const requestAccess = useCallback(async (email, company) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/request-referee-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })
      const data = await response.json()
      if (response.ok) {
        return { success: true, message: data.message }
      } else {
        setError(data.message || 'An error occurred')
        return { success: false, message: data.message }
      }
    } catch (error) {
      console.error('Error requesting access:', error)
      setError('An error occurred. Please try again.')
      return { success: false, message: 'An error occurred. Please try again.' }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { isValid, isLoading, error, verifyToken, requestAccess }
}

export default useRefereeAccess