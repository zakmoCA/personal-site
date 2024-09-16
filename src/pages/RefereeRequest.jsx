import { useState } from 'react'
import useRefereeAccess from '../hooks/useRefereeAccess'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import FormLayout from '../components/FormLayout'

const RefereeRequest = () => {
  const [form, setForm] = useState({ email: '', company: '' })
  const { isLoading, requestAccess } = useRefereeAccess()
  const { alert, showAlert } = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await requestAccess(form.email, form.company)
    if (result.success) {
      showAlert({ show: true, text: result.message, type: 'success' })
      setForm({ email: '', company: '' }) // Reset form after successful submission
    } else {
      showAlert({ show: true, text: result.message, type: 'danger' })
    }
  }

  const refereeFields = [
    { label: 'Email', type: 'email', name: 'email', value: form.email, onChange: handleChange, required: true },
    { label: 'Company', type: 'text', name: 'company', value: form.company, onChange: handleChange, required: true },
  ]

  return (
    <section className="relative flex lg:flex-row flex-col max-container min-h-screen overflow-y-auto">
      {alert.show && <Alert {...alert} />}
      <FormLayout
        title="Request Referee Access"
        fields={refereeFields}
        onSubmit={handleSubmit}
        submitButtonText="Request Access"
        isLoading={isLoading}
      />
    </section>
  )
}

export default RefereeRequest