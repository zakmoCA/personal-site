import React from 'react'

const FormLayout = ({ title, fields, onSubmit, submitButtonText, isLoading }) => {
  return (
    <div className="flex-1 min-w-[50%] flex flex-col">
      <h2 className="head-text mb-5">{title}</h2>
      <form className="w-full flex flex-col gap-7 mt-14" onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <label key={index} className="text-black-500 font-semibold">
            {field.label}
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                className="input"
                placeholder={field.placeholder}
                required={field.required}
                value={field.value}
                onChange={field.onChange}
                onFocus={field.onFocus}
                onBlur={field.onBlur}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                className="input"
                required={field.required}
                value={field.value}
                onChange={field.onChange}
                onFocus={field.onFocus}
                onBlur={field.onBlur}
              />
            )}
          </label>
        ))}
        <button
          type="submit"
          className="btn"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : submitButtonText}
        </button>
      </form>
    </div>
  )
}

export default FormLayout