"use client"

import React, { useState } from "react"
import type { FormBlockProps } from "./Config"

export const FormComponent: React.FC<FormBlockProps> = ({
  eyebrow = "CONTACT US",
  title = "Get in Touch",
  description = `At Axels, we value your feedback, inquiries, and any assistance you may need. Our dedicated team is ready to provide you with the support you require.

Whether you have questions about our jewelry collections, need assistance with an order, or simply want to share your thoughts, please don't hesitate to reach out to us.`,
  formSettings = {
    nameLabel: "Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    submitLabel: "SUBMIT",
  },
  disableInnerContainer,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = () => {}

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      className={`w-full py-16 px-4 sm:px-6 lg:px-8  bg-white text-gray-900 dark:text-gray-100 font-dmsans`}
    >
      <div
        className={`mx-auto ${
          disableInnerContainer ? "max-w-none" : "max-w-7xl"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              {eyebrow && (
                <p className="text-sm font-semibold tracking-widest  uppercase">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight font-playfair">
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2 relative">
                  <label htmlFor="name" className="sr-only">
                    {formSettings.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={formSettings.nameLabel}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-4 px-0 text-base text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="email" className="sr-only">
                    {formSettings.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={formSettings.emailLabel}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-4 px-0 text-base text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="message" className="sr-only">
                    {formSettings.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={formSettings.messageLabel}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full resize-none border-b border-gray-300 bg-transparent py-4 px-0 text-base text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-4 px-8 text-primary bg-black text-caption tracking-widest uppercase transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 `}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
