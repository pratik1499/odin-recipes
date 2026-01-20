import React from 'react'

/**
 * Application header with logo, navigation menu, and contact button
 */
function Header() {
  return (
    <>
      {/* Logo */}
      <p className="absolute font-bold leading-[0] left-[72px] not-italic text-primary text-[30px] top-[40px]">
        <span className="leading-[normal] text-white">Meal</span>
        <span className="leading-[normal] text-lime-green">plan</span>
      </p>

      {/* Navigation Menu */}
      <nav className="absolute bg-card-bg flex gap-[16px] items-center left-1/2 p-[8px] rounded-[71px] top-[31px] translate-x-[-50%]">
        <ul className="flex gap-[16px] items-center list-none m-0 p-0">
          <li>
            <a href="/" className="bg-secondary flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="/services" className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-[18px] text-white">
                Services
              </span>
            </a>
          </li>
          <li>
            <a href="/contact" className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-[18px] text-white">
                Contact
              </span>
            </a>
          </li>
          <li>
            <a href="/choose-plan" className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-[18px] text-white">
                Choose Plan
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Us Button */}
      <div className="absolute bg-secondary flex items-center justify-center right-[72px] px-[24px] py-[16px] rounded-[33px] top-[33px]">
        <p className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">
          Contact Us
        </p>
      </div>
    </>
  )
}

export default Header
