import Link from 'next/link'
import clsx from 'clsx'

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 12,0.00499828
A 11.995863,11.995863 0 0 0 0.00499833,12 11.995863,11.995863 0 0 0 12,23.996955 11.995863,11.995863 0 0 0 23.995002,12 11.995863,11.995863 0 0 0 12,0.00499828
Z

M 6.4859322,4.5170412
c 1.094884,0 1.9865201,0.8899712 1.9864708,1.9845174 0,1.0949805 -0.8915868,1.9864706 -1.9864708,1.9864706 -1.0957548,0 -1.9864706,-0.8914426 -1.9864706,-1.9864706 0,-1.0945462 0.8907158,-1.9845174 1.9864706,-1.9845174
z

m 9.1647208,4.5686871
c 3.391934,0 3.849885,2.4514827 3.849885,4.8499577
v 5.307021
c 0,0.133664 -0.108542,0.242206 -0.242205,0.242206
h -3.006075
c -0.133664,0 -0.242206,-0.108542 -0.242206,-0.242206
v -4.703462
c 0,-1.316997 -0.09584,-2.324386 -1.320407,-2.324386 -1.124402,0 -1.562612,0.627395 -1.562612,2.240395
v 4.787453
c 0,0.133667 -0.108542,0.242206 -0.242206,0.242206
H 9.878754
c -0.1336663,0 -0.2422057,-0.108539 -0.2422057,-0.242206
V 9.5681849
c 0,-0.1336122 0.1085419,-0.2422058 0.2422057,-0.2422058
h 2.884973
c 0.133663,0 0.242205,0.1085936 0.242205,0.2422058
V 10.195183
C 13.548245,9.6043839 14.441131,9.0857283 15.650653,9.0857283
Z

M 4.9799647,9.3259804
h 3.0119349
c 0.1336638,0 0.2422058,0.1085936 0.2422058,0.2422058
v 9.6745228
c 0,0.133666 -0.108542,0.242206 -0.2422058,0.242206
H 4.9799647
c -0.1336638,0 -0.2422058,-0.10854 -0.2422058,-0.242206
V 9.5681849
c 0,-0.1336122 0.108542,-0.2422058 0.2422058,-0.2422045
z"
      />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  )
}

export const socialMediaProfiles = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/ridhwaan-mayet/', icon: LinkedInIcon },
  { title: 'GitHub', href: 'https://github.com/ridhwaanm', icon: GitHubIcon },
]

export function SocialMedia({ className, invert = false }) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
