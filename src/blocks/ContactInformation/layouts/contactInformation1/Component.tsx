"use client"

import type React from "react"
import type { ContactInformationProps } from "./Config"

export const ContactInformationComponent: React.FC<ContactInformationProps> = ({
  heading,
  customerSupport,
  showroom,
}) => {
  if (!customerSupport && !showroom) return null

  return (
    <section className={`w-full bg-white py-16 lg:py-24`}>
      <div className=" max-w-full mx-auto px-6 lg:px-8">
        {heading && (
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-secondary tracking-wide font-serif">
              {heading}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {customerSupport && (
            <div className="flex">
              <div className="w-0.5 bg-yellow-600 mr-6 h-7 flex-shrink-0"></div>
              <div className="space-y-6">
                {customerSupport.title && (
                  <h3 className="text-xl font-medium text-secondary mb-4">
                    {customerSupport.title}
                  </h3>
                )}

                {customerSupport.description && (
                  <p className="text-secondary leading-relaxed text-base">
                    {customerSupport.description}
                  </p>
                )}
                <br />

                <span className="text-secondary leading-relaxed text-base space-y-1">
                  <p>
                    You can reach us via email at{" "}
                    <a
                      href={`mailto:${customerSupport.email}`}
                      className="font-medium text-secondary hover:underline"
                    >
                      {customerSupport.email}
                    </a>{" "}
                    or by phone at{" "}
                    <a
                      href={`tel:${customerSupport.phone.replace(/\D/g, "")}`}
                      className="font-medium text-secondary hover:underline"
                    >
                      {customerSupport.phone}
                    </a>
                    . <span> </span>
                    {customerSupport.hours && (
                      <span className="text-secondary">
                        {customerSupport.hours}
                      </span>
                    )}
                  </p>
                </span>
              </div>
            </div>
          )}

          {/* Showroom */}
          {showroom && (
            <div className="flex">
              <div className="w-0.5 bg-yellow-600 mr-6 h-7 flex-shrink-0"></div>
              <div className="space-y-6">
                {showroom.title && (
                  <h3 className="text-xl font-medium text-secondary mb-4">
                    {showroom.title}
                  </h3>
                )}

                {showroom.description && (
                  <p className="text-secondary leading-relaxed text-base">
                    {showroom.description}
                    {showroom.address && (
                      <>
                        {" "}
                        located at{" "}
                        <span className="font-medium text-secondary">
                          {showroom.address}
                        </span>
                        .
                      </>
                    )}
                  </p>
                )}

                {showroom.staffDescription && (
                  <p className="text-secondary leading-relaxed text-base">
                    {showroom.staffDescription}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
