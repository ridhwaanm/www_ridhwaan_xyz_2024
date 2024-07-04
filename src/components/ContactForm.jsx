'use client'

import { useState, useId } from 'react'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : "Let's work together"}
        </Button>
        {submitStatus === 'success' && (
          <p className="mt-4 text-green-600">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-600">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </FadeIn>
  )
}
