import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useRefereeAccess from '../hooks/useRefereeAccess'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const VerifyAccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isLoading, error, verifyToken } = useRefereeAccess()
  const { alert, showAlert } = useAlert()

  useEffect(() => {
    const verify = async () => {
      const searchParams = new URLSearchParams(location.search)
      const token = searchParams.get('token')

      if (!token) {
        showAlert({
          show: true,
          text: 'No token provided',
          type: 'danger'
        })
        return
      }

      const isValid = await verifyToken(token)
      if (isValid) {
        navigate(`/references?token=${token}`)
      } else {
        showAlert({
          show: true,
          text: error || 'Invalid token',
          type: 'danger'
        })
      }
    }

    verify()
  }, [location, navigate, verifyToken, error, showAlert])

  if (isLoading) {
    return <div>Verifying access...</div>
  }

  return (
    <div>
      {alert.show && <Alert {...alert} />}
      {!isLoading && error && <p>Verification failed. Please request access again.</p>}
    </div>
  )
}

export default VerifyAccess