// src/app/quran/privacy/page.jsx
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Privacy Policy | Quran Reader App',
  description: 'Privacy Policy for the Quran Reader App by Ridhwaan Mayet',
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageIntro eyebrow="Privacy Policy" title="Quran Reader App">
        <p>Last Updated: March 15, 2025</p>
      </PageIntro>

      <Container className="mt-16 sm:mt-32">
        <div className="prose prose-slate mx-auto max-w-3xl">
          <h2>Introduction</h2>
          <p>
            Welcome to the Quran Reader App (&quot;App&quot;) developed by
            Ridhwaan Mayet. This Privacy Policy is designed to help you
            understand how we handle information when you use our App.
          </p>

          <h2>Summary</h2>
          <p className="font-semibold">
            The Quran Reader App does not collect, store, or transmit any
            personal data.
          </p>
          <p>
            We&apos;ve designed this App with privacy as a fundamental
            principle. The App functions entirely locally on your device and
            doesn&apos;t require an internet connection for its core
            functionality.
          </p>

          <h2>Data We Do Not Collect</h2>
          <p>To be explicit, we do not collect:</p>
          <ul>
            <li>Personal identifiers</li>
            <li>Location data</li>
            <li>Device information</li>
            <li>Usage statistics</li>
            <li>Reading habits or preferences</li>
            <li>Any other personal information</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            The App does not integrate with any third-party analytics,
            advertising, or tracking services.
          </p>

          <h2>Local Storage</h2>
          <p>
            Any preferences or settings you configure in the App (such as
            navigation bar visibility) are stored locally on your device and are
            never transmitted to us or any third parties.
          </p>

          <h2>Changes to the App</h2>
          <p>
            If future versions of the App introduce any features that might
            impact your privacy, this Privacy Policy will be updated
            accordingly, and you will be notified within the App.
          </p>

          <h2>Open Source Commitment</h2>
          <p>
            The Quran Reader App is fully open source. All code is available for
            review at{' '}
            <a
              href="https://github.com/ridhwaanm/quran"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ridhwaanm/quran
            </a>
            . This transparency ensures that our privacy claims can be
            independently verified.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or our
            practices, please contact:
          </p>
          <p>
            Ridhwaan Mayet
            <br />
            <a href="mailto:contact@ridhwaan.xyz">contact@ridhwaan.xyz</a>
            <br />
            <a
              href="https://www.ridhwaan.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ridhwaan.xyz
            </a>
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date at the top of this
            policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </div>
      </Container>
    </>
  )
}
