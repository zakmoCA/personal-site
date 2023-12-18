import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const handleFocus = () => {

  }

  const handleBlur = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const email = import.meta.env.VITE_APP_MY_EMAIL


    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      // {
      //   from_name: form.name,
      //   to_name: 'Zak',
      //   from_email: form.email,
      //   to_email: email,
      //   message: form.message
      // },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      // TODO: show success msg
      // TODO: hide an alert
    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
      // TODO: show error msg
    })
  }

  return (
    <section className="relative-flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          ref={formRef}
          onSubmit={handleSubmit}
        >
        
          <label className="text-black-500 font-semibold">
            Name 
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Zak"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email 
            <input
              type="email"
              name="email"
              className="input"
              placeholder="zak@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your message 
            <textarea
              name="message"
              className="input"
              placeholder="Let me know how I can help"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmit={handleSubmit}
          >
            {isLoading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact