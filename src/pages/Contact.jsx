import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setform] = useState({ name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = () => {}
  const handleFocus = () => {}
  const handleBlur = () => {}
  const handleSubmit = () => {}

  return (
    <section className="relative-flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        />
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
          >
            {isLoading ? 'Sending...' : 'Send message'}
          </button>
      </div>
    </section>
  )
}

export default Contact