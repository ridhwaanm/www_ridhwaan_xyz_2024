import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function EducationSection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Education and Qualifications"
        title="A Foundation of Continuous Learning"
        invert
      >
        <p>
          My academic background and ongoing professional development form the
          bedrock of my expertise in data science and analytics.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="University Education" invert>
            Studied Econometrics, Economics and Actuarial Science at the{' '}
            <strong className="font-semibold">
              University of Witwatersrand
            </strong>
            , South Africa.
          </GridListItem>
          <GridListItem title="Professional Certifications" invert>
            Professional Data Scientist certification from{' '}
            <strong className="font-semibold">IBM</strong>, and Julia for
            Scientific Programming from the{' '}
            <strong className="font-semibold">University of Cape Town</strong>.
          </GridListItem>
          <GridListItem title="Specialized Training" invert>
            Completed courses in Strategic Management and Innovation{' '}
            <strong className="font-semibold">
              Copenhagen Business School
            </strong>
            , Econometrics{' '}
            <strong className="font-semibold">
              Erasmus University Rotterdam
            </strong>
            , and AWS Cloud certification.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function SkillsExpertiseSection() {
  return (
    <div className="mt-24 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Skills and Expertise"
        title="Mastering the Tools of Data Science"
      >
        <p>
          My technical skills span a wide range of programming languages and
          data science tools, enabling me to tackle complex analytical
          challenges.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Programming Languages">
            Proficient in Julia, Python, and JavaScript for versatile data
            manipulation and analysis.
          </GridListItem>
          <GridListItem title="Predictive Analytics">
            Expert in libraries such as FluxML, TensorFlow, PyTorch, Keras,
            Scikit-learn, and MXNet.
          </GridListItem>
          <GridListItem title="Data Processing">
            Skilled in using Pandas, NumPy, DataFrames.jl, DataFramesMeta.jl,
            and CSV.jl for efficient data handling.
          </GridListItem>
          <GridListItem title="Web Development">
            Experienced with React, Next.js, Node.js, and Tailwind CSS for
            creating data-driven web applications.
          </GridListItem>
          <GridListItem title="Data Visualization">
            Proficient in Plotly, Recharts, and D3.js for creating insightful
            and interactive data visualizations.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
function MyApproachSection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My Approach"
        title="Collaborative, Data-Driven Solutions"
        invert
      >
        <p>
          I believe in close collaboration with clients, focusing on clear
          communication and measurable results. My process involves four key
          stages, guided by core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Strategy" invert>
            Work closely with clients to identify and prioritize challenges and
            opportunities, combining their industry knowledge with my data
            expertise.
          </GridListItem>
          <GridListItem title="Build" invert>
            Employ rapid prototyping to develop minimum viable products (MVPs)
            that address key business needs identified in the planning stage.
          </GridListItem>
          <GridListItem title="Scale" invert>
            Create robust, enterprise-grade solutions that can handle growing
            data volumes and integrate seamlessly with existing infrastructure.
          </GridListItem>
          <GridListItem title="Continuous Improvement" invert>
            Regularly assess system performance against key business metrics and
            user feedback, ensuring solutions evolve with changing needs.
          </GridListItem>
        </GridList>
      </Container>
      <Container className="mt-16">
        <SectionIntro
          eyebrow="Core Values"
          title="Principles Guiding My Work"
          invert
        >
          <p>
            My approach is underpinned by six core values that drive me to
            create impactful data science solutions.
          </p>
        </SectionIntro>
        <GridList>
          <GridListItem title="Innovation" invert>
            Exploring cutting-edge techniques to keep clients ahead in their
            industries.
          </GridListItem>
          <GridListItem title="Integrity" invert>
            Upholding the highest standards of honesty and ethical conduct.
          </GridListItem>
          <GridListItem title="Impact" invert>
            Creating solutions that deliver measurable, meaningful results.
          </GridListItem>
          <GridListItem title="Collective Intelligence" invert>
            Leveraging diverse perspectives for robust solutions.
          </GridListItem>
          <GridListItem title="Fairness" invert>
            Treating all clients with respect and ensuring transparent
            practices.
          </GridListItem>
          <GridListItem title="Purpose-led" invert>
            Harnessing data science for positive societal impact.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
function PersonalSection() {
  return (
    <div className="mt-24 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Personal Interests" title="Beyond the Data">
        <p>
          Outside of work, I&apos;m a family man with diverse interests that
          complement my professional life.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Family">
            Married with children, balancing professional pursuits with family
            life.
          </GridListItem>
          <GridListItem title="Horse Riding">
            Passionate about horse riding, finding balance and perspective
            outside the world of data.
          </GridListItem>
          <GridListItem title="Culinary Adventures">
            An enthusiast of spicy food, always ready to try new flavors and
            cuisines.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About me" title="Transforming Data into Value">
        <p>
          I convert data into value. For 14 years, I&apos;ve looked at
          consumers, businesses, and markets through a scientific lens. By
          deconstructing patterns in data, I have unlocked new business
          performance for clients across various industries.
        </p>
        <p className="mt-8">
          My career has evolved from economic research to data science, always
          focused on extracting value from complex information.
        </p>
      </PageIntro>

      <EducationSection />
      <SkillsExpertiseSection />
      <MyApproachSection />
      <PersonalSection />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
