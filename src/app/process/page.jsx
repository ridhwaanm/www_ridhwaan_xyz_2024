import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageBuild from '@/images/build.jpg'
import imageEnterprise from '@/images/enterprise.jpg'
import imageCI from '@/images/spacerocket.png'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Strategy() {
  return (
    <Section title="Strategy" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I work closely with you, the client, to identify and prioritise{' '}
          <strong className="font-semibold text-neutral-950">
            challenges and opportunities
          </strong>{' '}
          within your business.
        </p>
        <p>
          Through{' '}
          <strong className="font-semibold text-neutral-950">
            collaborative intelligence
          </strong>
          , we combine your deep understanding of your business and industry
          with my expertise in data solutions. This integration of knowledge
          allows us to tackle complex problems that may exceed the capabilities
          of any single individual.
        </p>
        <p>
          We create a{' '}
          <strong className="font-semibold text-neutral-950">
            strategic roadmap
          </strong>{' '}
          that outlines a sequence of data solutions projects, each building
          upon the previous one, to unlock greater{' '}
          <strong className="font-semibold text-neutral-950">
            business value
          </strong>{' '}
          over time.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Data Modelling</TagListItem>
        <TagListItem>Data Entry forms</TagListItem>
        <TagListItem>Data Strategy Consulting</TagListItem>
        <TagListItem>Roadmap Development</TagListItem>
        <TagListItem>Business Value Definition</TagListItem>
        <TagListItem>Exploratory Data Analysis</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageBuild, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Rapid prototyping transforms strategic plans into tangible solutions.
          This phase focuses on quick iterations, developing minimum viable
          products (MVPs) that address key business needs identified in the
          planning stage.
        </p>
        <p>
          The process involves cycles of data loading, cleansing, preparation,
          and model development. Each iteration refines the solution, ensuring
          it aligns with business objectives and delivers immediate business
          value.
        </p>
        <p>
          By prioritizing speed and flexibility, rapid prototyping allows for
          swift validation of concepts and early identification of potential
          challenges, setting the stage for more robust implementation.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Data Asset Creation (initial)">
          I begin building your foundational data assets, focusing on quick wins
          and immediate value to your business operations.
        </ListItem>
        <ListItem title="Minimum Viable Product (MVP) Development">
          My agile approach allows me to rapidly develop and iterate on MVPs,
          providing tangible solutions to your most pressing data needs.
        </ListItem>
        <ListItem title="Iterative Data Pipeline Construction">
          I construct initial data pipelines, continuously refining them to
          ensure efficient data flow and processing for your specific use cases.
        </ListItem>
        <ListItem title="Preliminary Dashboard Design">
          I create early versions of dashboards, focusing on key metrics
          identified in the planning phase to provide immediate insights.
        </ListItem>
        <ListItem title="Basic Analytics Model Development">
          I develop initial analytics models, laying the groundwork for more
          advanced analysis in later stages.
        </ListItem>
        <ListItem title="Rapid Feedback Loop Implementation">
          I establish quick feedback mechanisms to gather user input and swiftly
          incorporate improvements into my prototypes.
        </ListItem>
        <ListItem title="Proof of Concept (POC) Validation">
          Through rigorous testing and validation, I ensure that my prototypes
          effectively address your business needs before moving to full
          implementation.
        </ListItem>
      </List>
    </Section>
  )
}

function Scale() {
  return (
    <Section title="Scale" image={{ src: imageEnterprise, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Scalable implementation builds on the insights gained from prototyping
          to create robust,{' '}
          <strong className="font-semibold text-neutral-950">
            enterprise-grade solutions
          </strong>
          . This stage focuses on developing systems that can handle growing
          data volumes and integrate seamlessly with existing infrastructure.
        </p>
        <p>
          Emphasis is placed on creating{' '}
          <strong className="font-semibold text-neutral-950">
            resilient architectures
          </strong>{' '}
          that can adapt to changing business needs. This includes implementing
          best practices for data governance, security, and performance
          optimization to ensure long-term sustainability
        </p>
        <p>
          User-centric design principles are applied to ensure that solutions
          are intuitive and easily adopted by operational teams, maximizing the
          impact and value of the implemented systems.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Enterprise-grade Data Asset Development">
          I evolve your initial data assets into robust, scalable solutions
          capable of supporting your growing business needs.
        </ListItem>
        <ListItem title="Robust Data Pipeline Engineering">
          I designs and implement sophisticated data pipelines that ensure
          reliable, efficient data processing at scale.
        </ListItem>
        <ListItem title="Advanced Dashboard Implementation">
          I transform preliminary dashboards into comprehensive, interactive
          tools that provide deep insights across your organization.
        </ListItem>
        <ListItem title="Deep Analytics Integration">
          Leveraging your mature data assets, I implement advanced analytics
          capabilities to uncover complex patterns and relationships in your
          data.
        </ListItem>
        <ListItem title="Initial Predictive Model Deployment">
          I begin deploying predictive models, using machine learning techniques
          to forecast trends and support proactive decision-making.
        </ListItem>
        <ListItem title="Data Governance Framework Implementation">
          I establish a comprehensive data governance framework to ensure data
          quality, security, and compliance as your data operations scale.
        </ListItem>
        <ListItem title="User-Centric Interface Design">
          I create intuitive, user-friendly interfaces for your data tools,
          ensuring high adoption rates and maximizing the value of your data
          investments.
        </ListItem>
      </List>
    </Section>
  )
}

function CI() {
  return (
    <Section title="Continuous Improvement" image={{ src: imageCI, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Continuous improvement is the ongoing process of refining and
          enhancing implemented solutions. This stage involves regular
          assessment of system performance against key business metrics and user
          feedback.
        </p>
        <p>
          Through{' '}
          <strong className="font-semibold text-neutral-950">
            iterative updates and optimizations
          </strong>
          , solutions evolve to meet changing business needs and technological
          advancements. This phase also includes ongoing training and upskilling
          of teams to drive innovation and maintain competitive edge.
        </p>
        <p>
          By fostering a culture of{' '}
          <strong className="font-semibold text-neutral-950">
            continuous learning
          </strong>{' '}
          and adaptation, this stage ensures that data solutions remain aligned
          with business objectives and continue to deliver increasing value over
          time.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Ongoing Data Quality Management">
          I continuously monitor and enhance your data quality, ensuring your
          data remains accurate, consistent, and reliable over time.
        </ListItem>
        <ListItem title="Dashboard Refinement and Expansion">
          I regularly update and expand your dashboards, incorporating new data
          sources and insights to meet evolving business needs.
        </ListItem>
        <ListItem title="Advanced Analytics Model Optimization">
          I consistently refine and optimize your analytics models, improving
          their accuracy and expanding their capabilities to drive deeper
          insights.
        </ListItem>
        <ListItem title="Predictive Model Enhancement">
          I continuously improve your predictive models, incorporating new data
          and advanced techniques to increase forecasting accuracy.
        </ListItem>
        <ListItem title="Performance Monitoring and Tuning">
          I implement robust monitoring systems and regularly tune your data
          infrastructure to ensure optimal performance as your data volumes
          grow.
        </ListItem>
        <ListItem title="Continuous Team Upskilling">
          I provide ongoing training and support to your team, ensuring they
          stay up-to-date with the latest data technologies and best practices.
        </ListItem>
        <ListItem title="Innovation Workshops and Ideation Sessions">
          I facilitate regular innovation workshops, helping you identify new
          opportunities to leverage your data assets for competitive advantage.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="My values"
        title="Guiding Principles for Client Success"
      >
        <p>
          I believe in harnessing data, analytics, and AI to deliver tailored
          solutions that drive business value.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Innovation">
            I continuously explore cutting-edge data science techniques and
            technologies to develop innovative solutions that help clients stay
            ahead in their industries. By combining creativity with technical
            expertise, I deliver groundbreaking insights and drive business
            transformation.
          </GridListItem>
          <GridListItem title="Integrity">
            I uphold the highest standards of honesty, transparency, and ethical
            conduct in every client engagement. I maintain strict data
            confidentiality, provide truthful advice, and prioritize client
            interests over personal gain, building trust through consistent and
            reliable service.
          </GridListItem>
          <GridListItem title="Impact">
            I am dedicated to creating data science solutions that deliver
            measurable, meaningful impact for my clients. By deeply
            understanding their goals and challenges, I develop targeted
            strategies that drive efficiency, optimize processes, and uncover
            valuable insights for sustainable growth.
          </GridListItem>
          <GridListItem title="Collective intelligence">
            I believe in the power of collaboration and diverse perspectives. I
            actively seek input from clients and stakeholders, fostering open
            communication and knowledge sharing. By leveraging collective
            intelligence, I develop robust solutions that benefit from a wide
            range of expertise.
          </GridListItem>
          <GridListItem title="Fairness">
            I am committed to treating all clients with fairness and respect,
            regardless of their size or background. I ensure transparent
            pricing, clear communication, and equitable allocation of resources.
            I strive to create a level playing field where every client receives
            high-quality service.
          </GridListItem>
          <GridListItem title="Purpose-led">
            I am driven by a strong sense of purpose to harness the power of
            data science for the greater good. I prioritize projects that align
            with my values and have the potential to make a positive impact on
            society. I use my skills to address important challenges and drive
            meaningful change.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'My Process',
  description:
    'I harness data, analytics, and AI to deliver tailored solutions that drive business value',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="My process" title="How I work">
        <p>
          My process involves close collaboration with clients, from
          understanding their needs to delivering tailored data science
          solutions that drive business value. I focus on clear communication,
          measurable results, and continuous improvement.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Strategy />
        <Build />
        <Scale />
        <CI />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
