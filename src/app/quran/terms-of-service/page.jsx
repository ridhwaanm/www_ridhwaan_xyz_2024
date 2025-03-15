// src/app/quran/terms-of-service/page.jsx
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Terms of Service | Quran Reader App',
  description: 'Terms of Service for the Quran Reader App by Ridhwaan Mayet',
}

export default function TermsOfService() {
  return (
    <>
      <PageIntro eyebrow="Terms of Service" title="Quran Reader App">
        <p>
          Last Updated: March 15, 2025
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-32">
        <div className="prose prose-slate max-w-3xl mx-auto">
          <h2>Introduction</h2>
          <p>
            Welcome to the Quran Reader App ("App"). By downloading, installing, or using this App, 
            you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, 
            please do not use the App.
          </p>

          <h2>Use of the App</h2>
          <p>
            The Quran Reader App is provided to you as a free service for personal, non-commercial use. 
            The App is designed to facilitate reading and studying the Quran.
          </p>

          <h2>Open Source License</h2>
          <p>
            The Quran Reader App is open source software. All code is available at{' '}
            <a href="https://github.com/ridhwaanm/quran" target="_blank" rel="noopener noreferrer">
              https://github.com/ridhwaanm/quran
            </a> 
            and is provided under the terms of an open source license. You are free to use, modify, 
            and distribute the code in accordance with that license.
          </p>

          <h2>No Credits Required</h2>
          <p>
            While attribution is appreciated, you are not required to provide credits when using, 
            modifying, or redistributing the App or its code.
          </p>

          <h2>Content</h2>
          <p>
            The Quran text provided within the App is considered to be in the public domain. 
            We have made every effort to ensure its accuracy, but we do not guarantee the 
            complete accuracy of the content.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p className="font-bold">
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND.
          </p>
          <p>
            To the maximum extent permitted by law, we explicitly disclaim all warranties, 
            whether express, implied, or statutory, including but not limited to warranties 
            of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>We make no warranty that:</p>
          <ul>
            <li>The App will meet your requirements</li>
            <li>The App will be uninterrupted, timely, secure, or error-free</li>
            <li>The results obtained from using the App will be accurate or reliable</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p className="font-bold">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE 
            OF OR INABILITY TO USE THE APP.
          </p>
          <p>
            We accept no liability for any harm that may result from the use of this App or its code. 
            This includes, but is not limited to, any harm to your device, loss of data, or any 
            other negative consequences.
          </p>

          <h2>Changes to the App</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the App, temporarily or permanently, 
            with or without notice. We shall not be liable to you or any third party for any such 
            modifications, suspensions, or discontinuations.
          </p>

          <h2>Changes to the Terms</h2>
          <p>
            We may revise these Terms at any time. The most current version will always be available 
            within the App or on our website. By continuing to use the App after any changes to the Terms, 
            you accept those changes.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of South Africa, 
            without regard to its conflict of law provisions.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact:
          </p>
          <p>
            Ridhwaan Mayet<br />
            <a href="mailto:contact@ridhwaan.xyz">contact@ridhwaan.xyz</a><br />
            <a href="https://www.ridhwaan.xyz" target="_blank" rel="noopener noreferrer">
              https://www.ridhwaan.xyz
            </a>
          </p>
        </div>
      </Container>
    </>
  )
}
