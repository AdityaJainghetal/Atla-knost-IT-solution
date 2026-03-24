import React from "react";

const PrivacyPolicy = () => {
  

  return (
    <div className="bg-zinc-950 text-gray-300 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-[3px] text-sm font-medium">Legal</span>
            <div className="w-8 h-px bg-red-500"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-3">
            Privacy Policy
          </h1>
      
        </div>

        <div className="prose prose-invert max-w-none text-[15.8px] leading-relaxed space-y-12">
          <p className="text-lg text-gray-200">
            At <span className="text-red-400 font-medium">ATLA Knots IT Solution</span>, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, request services, or interact with us.
          </p>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">1. Information We Collect</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/70 p-7 rounded-2xl border border-zinc-800">
                <h3 className="text-xl font-medium text-white mb-4">Personal Information</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Name, email address, phone number, and company details</li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Project requirements, business needs, and inquiry details</li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Payment and billing information (processed securely via third-party gateways)</li>
                </ul>
              </div>

              <div className="bg-zinc-900/70 p-7 rounded-2xl border border-zinc-800">
                <h3 className="text-xl font-medium text-white mb-4">Technical Information</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> IP address, browser type, device, and operating system</li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Website usage data, pages visited, and session duration</li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">•</span> Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">2. How We Use Your Information</h2>
            <p className="mb-5">We use your data to deliver excellent service and improve your experience:</p>
            <div className="space-y-4 pl-2">
              {[
                "Provide software development, digital marketing, web design, and IT consulting services",
                "Respond to your inquiries, prepare proposals, and communicate about projects",
                "Send important updates, service information, and occasional promotional content",
                "Analyze website performance and enhance user experience",
                "Comply with legal obligations and ensure security"
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-sm font-medium shrink-0 mt-0.5">0{i+1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">3. Data Sharing & Third Parties</h2>
            <p>We do not sell your personal data. We may share information only with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
              <li>Trusted service providers (cloud hosting, analytics, payment processors, email tools)</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners in case of merger, acquisition, or company restructuring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">4. Your Rights (DPDP Act, 2023)</h2>
            <p className="mb-6">As per the Digital Personal Data Protection Act, you have the right to:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Access and obtain a copy of your personal data",
                "Correct inaccurate or incomplete data",
                "Request deletion or withdrawal of consent",
                "File a grievance with our Data Protection Officer"
              ].map((right, i) => (
                <div key={i} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 flex items-start gap-3">
                  <span className="text-red-400 text-xl">✓</span>
                  <p className="text-gray-200">{right}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-red-400">
              To exercise any of these rights, email us at <a href="mailto:support@atlaknots.com" className="underline hover:text-red-300">support@atlaknots.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">5. Data Security & Retention</h2>
            <p>
              We use industry-standard security measures to protect your data. We retain your personal information only as long as necessary for the purposes mentioned or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">6. Cookies</h2>
            <p>
              Our website uses cookies to improve functionality and analyze traffic. You can manage your cookie preferences through your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. Any changes will be posted on this page with the updated date. We encourage you to review it periodically.
            </p>
          </section>     
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;