"use client"

import React from "react"
import { ContactInformationProps } from "./Config"

export const ContactInformation: React.FC<ContactInformationProps> = ({
  heading,
  customerSupport,
  showroom,
  className = "",
}) => {
  if (!customerSupport && !showroom) return null

  return (
    <section
      className={`max-w-max px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-white dark:bg-gray-900 ${className}`}
    >
      {heading && (
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-wide">
            {heading}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
        {customerSupport && (
          <div className="space-y-6">
            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
              {customerSupport.title && (
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  {customerSupport.title}
                </h3>
              )}
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {customerSupport.description && (
                  <p className="text-base sm:text-lg">
                    {customerSupport.description}
                  </p>
                )}
                <div className="space-y-2">
                  {(customerSupport.email || customerSupport.phone) && (
                    <p className="text-base sm:text-lg">
                      {customerSupport.email && (
                        <>
                          You can reach us via email at{" "}
                          <a
                            href={`mailto:${customerSupport.email}`}
                            className="text-gray-900 dark:text-white font-medium hover:underline transition-colors"
                          >
                            {customerSupport.email}
                          </a>
                        </>
                      )}
                      {customerSupport.phone && (
                        <>
                          {" "}
                          or by phone at{" "}
                          <a
                            href={`tel:${customerSupport.phone.replace(
                              /\D/g,
                              ""
                            )}`}
                            className="text-gray-900 dark:text-white font-medium hover:underline transition-colors"
                          >
                            {customerSupport.phone}
                          </a>
                          .
                        </>
                      )}
                    </p>
                  )}
                  {customerSupport.hours && (
                    <p className="text-base sm:text-lg">
                      {customerSupport.hours}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {showroom && (
          <div className="space-y-6">
            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
              {showroom.title && (
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  {showroom.title}
                </h3>
              )}
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {showroom.description && (
                  <p className="text-base sm:text-lg">{showroom.description}</p>
                )}
                {showroom.staffDescription && (
                  <p className="text-base sm:text-lg">
                    {showroom.staffDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
