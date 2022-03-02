import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import globalStylesUrl from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }]

export function meta() {
  const description = 'Portfolio website for Andy Birosak'
  const keywords = 'andy birosak, birosak, andy birosak portfolio'
  const title = 'Andy Birosak Portfolio'
  return { description, keywords, title }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/portfolio' className='nav-item'>
          Portfolio
        </Link>
        <Link to='/music' className='nav-item'>
          Music
        </Link>
        <Link to='/' className='logo'>
          Andy Birosak
        </Link>
        <Link to='/about' className='nav-item'>
          About
        </Link>
        <Link to='/contact' className='nav-item'>
          Contact
        </Link>
      </nav>
      <div className='container'>{children}</div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}
