"use client"

import type React from "react"
import { useState } from "react"
import type { FormBlockProps } from "./Config"

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
    const response = await fetch(formAction || "/default-action-url", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const result = await response.json()
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
    <section className="w-full bg-[#FAF9F7]">
      <div
        className={`mx-auto h-full ${
          disableInnerContainer ? "max-w-none" : "max-w-7xl"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-lg">
              {eyebrow && (
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground mb-8">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-5xl lg:text-6xl font-normal leading-tight mb-8 text-secondary">
                  {title}
                </h2>
              )}
              {description && (
                <div className="space-y-6 text-base leading-relaxed text-foreground">
                  {description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 bg-white">
            <div className="max-w-md w-full">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-12">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={formSettings?.nameLabel || "Name"}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-0 border-b border-foreground bg-transparent py-4 px-0 text-lg text-secondary placeholder-foreground focus:border-secondary focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={formSettings?.emailLabel || "Email Address"}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-0 border-b border-foreground bg-transparent py-4 px-0 text-lg text-secondary placeholder-foreground focus:border-secondary focus:ring-0 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder={formSettings?.messageLabel || "Message"}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={1}
                      className="w-full resize-none border-0 border-b border-foreground bg-transparent py-4 px-0 text-lg text-secondary placeholder-foreground focus:border-secondary focus:ring-0 focus:outline-none transition-colors duration-300 min-h-[60px]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 text-white bg-gray-900 font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  style={{ backgroundColor: "#2D2D2D" }}
                >
                  {formSettings?.submitLabel || "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
