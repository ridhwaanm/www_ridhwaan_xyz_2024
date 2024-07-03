import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBMW from '@/images/clients/BMW/logo-light.svg'
import logoHollard from '@/images/clients/hollard/logo-light.svg'
import logoStandardBank from '@/images/clients/standardbank/logo-light.svg'
import logoACSA from '@/images/clients/ACSA/logo-light.svg'
import logoGCIS from '@/images/clients/GCIS/logo-light.svg'
import logoAMKA from '@/images/clients/AMKA/logo-light.svg'
import logoMTNDark from '@/images/clients/mtn/logo-dark.svg'
import logoMTNLight from '@/images/clients/mtn/logo-light.svg'
import logoMastercard from '@/images/clients/mastercard/logo-light.svg'
import logoHelloPaisa from '@/images/clients/HelloPaisa/logo-dark.svg'
import imageBuild from '@/images/build.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['MTN', logoMTNLight],
  ['Hollard', logoHollard],
  ['Mastercard', logoMastercard],
  ['Government Communication and Information System', logoGCIS],
  ['ACSA', logoACSA],
  ['Green Life', logoStandardBank],
  ['BMW', logoBMW],
  ['AMKA', logoAMKA],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            I’ve worked with amazing companies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Selected work"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Discover real-world examples of how my data science expertise has transformed 
        businesses in the manufacturing and agriculture sectors, from building data 
        assets to delivering actionable insights.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Empowering businesses with data-driven insights for informed decision-making."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        I help businesses make informed decisions by creating organised data assets, 
        developing insightful dashboards, uncovering hidden patterns through deep analytics, 
        and providing accurate predictions using machine learning.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageBuild}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Data Asset Creation">
            I lay the groundwork for your data-driven success with my comprehensive data asset creation service. 
            Through expert data modelling, user-friendly forms, efficient data fetching, and robust engineering of relational data storage, 
            I ensure that your data is organised, accessible, and ready to power your business decisions.
            </ListItem>
            <ListItem title="Dashboard Development">
            I transform scattered data sources into a unified, intuitive dashboard that empowers business managers 
            to make informed decisions when opportunities or threats arise. 
            My dashboard development service consolidates your data into a single, easy-to-understand frame, 
            providing the clarity and insight you need to navigate complex business landscapes with confidence.
            </ListItem>
            <ListItem title="Deep Analytics">
            I help you dive beneath the surface of your data with my deep analytics service. 
            By leveraging advanced statistical and mathematical methods, combined with my domain expertise, 
            I uncover the hidden patterns and relationships that can be lost in the noise of simultaneous trends. 
            My insights enable you to make data-driven decisions that reduce costs, increase revenue, and create a competitive edge.
            </ListItem>
            <ListItem title="Predictive Modelling">
            I enable you to unlock the predictive potential of your data streams with my cutting-edge predictive modelling service. 
            By combining statistical methods with the learning and improvement capabilities of machine learning models, 
            I develop highly accurate forecast models that leverage the vast computing power of the cloud. 
            My models continuously learn from your data assets, enabling you to stay ahead of the curve and make proactive, 
            data-driven decisions that drive your business forward.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          From Data Assets to AI Insights
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Data-Driven Solutions for Manufacturing and Agriculture
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Hello Paisa', logo: logoHelloPaisa }}
      >
        Few people show such passion for understanding their client and their business—but Ridhwaan does. 
        I had the pleasure of working closely with Ridhwaan for almost a year. 
        Ridhwaan was hands-on as he managed the project and provided valuable analysis. 
        I was particularly impressed by Ridhwaan&apos;s ability to unpack data into meaningful insights for the business. 
        I look forward to working with Ridhwaan in the future. He provides true value to any client. - Ahmed Cassim, MD at Hello Group
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
