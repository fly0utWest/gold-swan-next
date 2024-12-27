import React from 'react'

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8 w-full max-w-lg">
      <input
        type="text"
        placeholder="Your name"
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <input
        type="email"
        placeholder="Your email"
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <input
        type="tel"
        placeholder="Your phone number (WhatsApp or Telegram)"
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <input
        type="text"
        placeholder="+33"
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <label className="text-neutral-800 dark:text-neutral-300">
        Which of our services are you interested in?
      </label>
      <select className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800">
        <option>Digital Marketing</option>
        <option>Brand Development and PR</option>
        <option>Reputation and Data Protection</option>
        <option>Analytics and Strategy</option>
        <option>Photo and Video Shooting</option>
        <option>Website and Web Application Development</option>
        <option>Personalized service type</option>
      </select>
      <label className="text-neutral-800 dark:text-neutral-300">
        Which industry or sector does your business operate in?
      </label>
      <select className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800">
        <option>Retail and E-commerce</option>
        <option>Technology and Software</option>
        <option>Healthcare and Pharmaceuticals</option>
        <option>Finance and Insurance</option>
        <option>Education and Training</option>
        <option>Hospitality and Tourism</option>
        <option>Manufacturing and Production</option>
        <option>Real Estate and Construction</option>
        <option>Arts, Entertainment, and Media</option>
        <option>Transportation and Logistics</option>
        <option>Nonprofit and Community Services</option>
        <option>Other (please specify)</option>
      </select>
      <label className="text-neutral-800 dark:text-neutral-300">
        Have you previously worked with a similar service or provider?
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="previouslyWorked"
            value="yes"
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="previouslyWorked"
            value="no"
            className="mr-2"
          />
          No
        </label>
        <input
          type="text"
          placeholder="Your custom answer"
          className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
        />
      </div>
      <label className="text-neutral-800 dark:text-neutral-300">
        How did you hear about our agency?
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="friends"
            className="mr-2"
          />
          Advice from friends
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="family"
            className="mr-2"
          />
          Advice from family members
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="dentist"
            className="mr-2"
          />
          Advice from another dentist
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="advertising"
            className="mr-2"
          />
          Advertising
        </label>
        <input
          type="text"
          placeholder="Your custom answer"
          className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
        />
      </div>
      <label className="text-neutral-800 dark:text-neutral-300">
        How long has your business been in operation?
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="lessThanYear"
            className="mr-2"
          />
          Less than a year
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="oneYear"
            className="mr-2"
          />
          One year
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="twoYears"
            className="mr-2"
          />
          Two years
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="threeYears"
            className="mr-2"
          />
          More than three years
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="fiveYears"
            className="mr-2"
          />
          More than five years
        </label>
        <input
          type="text"
          placeholder="Your custom answer"
          className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
        />
      </div>
      <label className="text-neutral-800 dark:text-neutral-300">
        Would you like to receive additional resources or materials after the
        consultation?
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="additionalResources"
            value="yes"
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="additionalResources"
            value="no"
            className="mr-2"
          />
          No
        </label>
      </div>
      <textarea
        placeholder="Message"
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <button
        type="submit"
        className="rounded-3xl bg-primary-500 text-white px-5 py-4 hover:bg-primary-400 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm