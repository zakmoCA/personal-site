import { useEffect, useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useRefereeAccess from '../hooks/useRefereeAccess'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const References = () => {
  const location = useLocation()
  const { isValid, isLoading, error, verifyToken } = useRefereeAccess()
  const [references, setReferences] = useState([])
  const { alert, showAlert } = useAlert()

  useEffect(() => {
    const fetchReferences = async () => {
      const searchParams = new URLSearchParams(location.search)
      const token = searchParams.get('token')

      if (!token) {
        showAlert({ show: true, text: 'No token provided', type: 'danger' })
        return
      }

      const tokenIsValid = await verifyToken(token)
      if (tokenIsValid) {
        try {
          const response = await fetch(`/api/references?token=${token}`)
          if (!response.ok) {
            throw new Error('Failed to fetch references')
          }
          const data = await response.json()
          setReferences(data.references)
        } catch (error) {
          console.error('Error fetching references:', error)
          showAlert({ show: true, text: 'Error fetching references', type: 'danger' })
        }
      }
    }

    fetchReferences()
  }, [location, verifyToken, showAlert])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isValid) {
    return <Navigate to="/referee-request" replace />
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <h1 className="head-text">References</h1>
      <div className="mt-10">
        {references.map((ref, index) => (
          <div key={index} className={index > 0 ? 'mt-8' : ''}>
            <h2 className="text-2xl font-bold mb-4">Reference {index + 1}</h2>
            <p>Name: {ref.name}</p>
            <p>Company Address: {ref.address}</p>
            <p>Position: {ref.position}</p>
            <p>Email: {ref.email}</p>
            <p>Phone: {ref.phone}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default References