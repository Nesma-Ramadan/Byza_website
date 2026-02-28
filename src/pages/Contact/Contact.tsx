

import { type FormEvent, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-medium text-secondary">Get in touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Have a question about an order, a product, or a partnership?
            Reach out and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Send us a message
              </h2>

              {submitted && (
                <div className="rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 mb-4">
                  Your message has been received. We will contact you soon.
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary"
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary"
                    placeholder="What is your inquiry about?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary min-h-[140px] resize-y"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-2.5 rounded-full bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition-colors shadow-sm"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact information
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-secondary text-xs" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p>Byze Store, Cairo, Egypt</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-phone text-secondary text-xs" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p>+20 100 000 0000</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope text-secondary text-xs" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p>support@byze-shop.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Business hours
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                We are here to help you all week:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Saturday - Thursday: 10:00 AM - 10:00 PM</li>
                <li>Friday: 2:00 PM - 10:00 PM</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
