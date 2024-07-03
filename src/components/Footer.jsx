import Link from 'next/link'
import React, { useState } from 'react';
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Nestify', href: '/work/nestify' },
      { title: 'Hello Group', href: '/work/hello' },
      { title: 'Hollard', href: '/work/hollard' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact me', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

// function NewsletterForm() {
//   return (
//     <form className="max-w-sm">
//       <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
//         Sign up for my newsletter
//       </h2>
//       <p className="mt-4 text-sm text-neutral-700">
//         Subscribe to get the latest AI news, articles, resources and
//         inspiration.
//       </p>
//       <div className="relative mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
//         />
//         <div className="absolute inset-y-1 right-1 flex justify-end">
//           <button
//             type="submit"
//             aria-label="Submit"
//             className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
//           >
//             <ArrowIcon className="w-4" />
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // The adjusted Google Form URL for form submission
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfNlgYecpo74Z6Le4Hoj5uASQs522SqcYq7zD7soxOf1YhJ0g/formResponse';
  
  // The correct form field name from the provided pre-filled URL
  const FORM_EMAIL_FIELD = 'entry.1878526624';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append(FORM_EMAIL_FIELD, email);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // This is important for CORS policy
        body: formData
      });
      
      // Since we're using no-cors, we can't actually check the response
      // We'll just assume it worked if no error was thrown
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for my newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest AI news, articles, resources and inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
      {message && <p className="mt-4 text-sm text-neutral-700">{message}</p>}
    </form>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-16" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Ridhwaan Mayet {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
