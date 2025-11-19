import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Page not found.</h1>
      <p className="max-w-2xl text-muted">
        If you're a broker and ended up here, use the navigation above or schedule a 15 min call.
      </p>
      <Link
        href="/"
        className="inline-flex w-fit rounded-full bg-accentFill px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Back to home
      </Link>
    </div>
  )
}

