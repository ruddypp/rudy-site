import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'

const RECIPIENT = 'paningalrudy@gmail.com'

/**
 * Composes a prefilled email in the visitor's own mail client instead of
 * posting to a backend. No server, no third-party form service, and nothing
 * to keep credentials for — while still giving GA4 a lead event to count.
 *
 * To move this onto a real endpoint later, replace the body of handleSubmit
 * with a fetch to that endpoint; the fields and the tracking call stay as is.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const leadTracked = useRef(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    // `required` accepts a field of only spaces. Trim first and re-check, so a
    // blank enquiry is stopped with the browser's own message and never counts
    // as a lead.
    for (const field of form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea')) {
      field.value = field.value.trim()
    }
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = `Project enquiry from ${name || 'the website'}`
    const body = `${message}\n\n—\n${name}\n${email}`

    // One lead per page view: resubmitting the same enquiry is not a new lead.
    if (!leadTracked.current) {
      trackEvent('generate_lead', { method: 'contact_form' })
      leadTracked.current = true
    }
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-white/90">Your name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-2xl border-2 border-white/40 bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none transition-colors focus:border-white focus:bg-white/30"
            placeholder="Jane Tan"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-white/90">Your email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-2xl border-2 border-white/40 bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none transition-colors focus:border-white focus:bg-white/30"
            placeholder="jane@company.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-bold text-white/90">What are you building?</span>
        <textarea
          name="message"
          required
          rows={4}
          className="resize-y rounded-2xl border-2 border-white/40 bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none transition-colors focus:border-white focus:bg-white/30"
          placeholder="A company profile site with a catalogue my team can update ourselves."
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-all hover:bg-gray-100"
      >
        Send enquiry
        <ArrowUpRight className="h-4 w-4" />
      </button>

      <p aria-live="polite" className="text-sm text-white/80">
        {sent
          ? `Your mail app should have opened with the message ready. If it did not, email ${RECIPIENT} directly.`
          : 'This opens your own mail app with the message prefilled — nothing is sent from this page.'}
      </p>
    </form>
  )
}
