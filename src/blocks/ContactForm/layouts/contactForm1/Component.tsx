"use client"

import React, { useState } from "react"
import { FormBlockProps } from "./Config"

export const ContactFormComponent: React.FC<FormBlockProps> = ({
  eyebrow,
  title,
  description,
  formAction,
  formSettings = {},
  disableInnerContainer,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Dynamically handle form submission
    const response = await fetch(formAction || "/default-action-url", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const result = await response.json()
    // Handle response or form submission result here
    console.log(result)
  }

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
      className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:text-gray-100 font-dmsans`}
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
                <p className="text-sm font-semibold tracking-widest uppercase">
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
                    {formSettings?.nameLabel || "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={formSettings?.nameLabel || "Name"}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-4 px-0 text-base text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="email" className="sr-only">
                    {formSettings?.emailLabel || "Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={formSettings?.emailLabel || "Email Address"}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-4 px-0 text-base text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="message" className="sr-only">
                    {formSettings?.messageLabel || "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={formSettings?.messageLabel || "Message"}
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
                className="w-full py-4 px-8 text-primary bg-black text-caption tracking-widest uppercase transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                {formSettings?.submitLabel || "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
