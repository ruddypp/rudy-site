import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export default function NotFound() {
  return (
    <div className="relative min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
      <Head>
        <title>Page not found — Rudy Paningal</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="relative z-10 flex min-h-screen flex-col gap-8 pb-6">
        <Navbar />
        <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy dark:text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-lg text-brand-navy/70 dark:text-white/70">
            That page does not exist. The work and contact details are on the homepage.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-brand-purple px-8 py-3 font-bold text-white transition-colors hover:bg-brand-purple/90"
          >
            Back to homepage
          </Link>
        </main>
        <Footer />
      </div>
    </div>
  )
}
