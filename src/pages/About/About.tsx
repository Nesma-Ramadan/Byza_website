import heroIllustration from "../../assets/OBJECTS_1_.svg";
import logoIcon from "../../assets/OBJECTS_1_.svg";
import heroImg from "../../assets/images/2148101678.jpg";









export default function About() {

  
  return (
    <section className="w-full min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span className="text-xs font-medium text-secondary">
              About Byza
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Online shopping made{" "}
                <span className="text-secondary">simple, fast & enjoyable</span>
              </h1>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Byza is a modern e‑commerce platform designed to make online
                shopping smooth and enjoyable. We combine an easy‑to‑use
                interface with a wide range of products and fair prices, so you
                can find everything you need online with confidence and peace of
                mind.
              </p>
            </div>

            <div className="w-full md:w-1/2  rounded-3xl overflow-hidden relative shadow-xl border-4 border-white bg-gray-100">
              <img
                src={heroImg}
                alt="Byza shopping experience"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl bg-white shadow-sm p-4 border border-gray-100">
              <p className="text-xs font-semibold text-secondary mb-1">
                +10,000
              </p>
              <p className="text-[13px] text-gray-700">Products available</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm p-4 border border-gray-100">
              <p className="text-xs font-semibold text-secondary mb-1">
                24/7
              </p>
              <p className="text-[13px] text-gray-700">Customer support</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm p-4 border border-gray-100">
              <p className="text-xs font-semibold text-secondary mb-1">
                %100
              </p>
              <p className="text-[13px] text-gray-700">Secure payments</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-secondary text-lg">✓</span>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-1">
                  Our vision
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  To build a trusted digital shopping experience that helps
                  people reach quality products in less time and with less
                  effort.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-secondary text-lg">★</span>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-1">
                  Our values
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Simplicity in experience, transparency in pricing, and putting
                  customer satisfaction first after every order.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-md mx-auto w-full">
          <div className="absolute -top-6 -right-4 h-16 w-16 rounded-3xl bg-secondary/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-6 h-16 w-16 rounded-3xl bg-primary/5 blur-2xl" />

          <div className="relative rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
            <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <img
                    src={logoIcon}
                    alt="Byza logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Byza E‑commerce
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Shop more. Save time.
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-green-100 text-green-700 text-[11px] font-medium px-3 py-1">
                Online
              </span>
            </div>

            <div className="p-6">
              <div className="rounded-2xl bg-gray-50 border border-dashed border-gray-200 p-4 mb-4">
                <img
                  src={heroIllustration}
                  alt="Online shopping illustration"
                  className="w-full h-40 object-contain"
                />
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <p className="flex items-center justify-between">
                  <span>Delivery speed</span>
                  <span className="font-semibold text-gray-900">3–5 days</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Payment methods</span>
                  <span className="font-semibold text-gray-900">
                    Visa / Mada / Cash
                  </span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Return policy</span>
                  <span className="font-semibold text-gray-900">
                    Within 14 days
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
