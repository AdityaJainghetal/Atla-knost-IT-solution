import React from "react";

const CookiePolicy = () => {
  const lastUpdated = "March 24, 2026";

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
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none text-[15.8px] leading-relaxed space-y-12">
          <p className="text-lg text-gray-200">
            At <span className="text-red-400 font-medium">ATLA Knots IT Solution</span>, we use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and provide personalized services. 
            This Cookie Policy explains what cookies are, how we use them, and how you can manage them.
          </p>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. 
              They help the website remember your preferences, improve functionality, and provide insights into how the website is used.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">2. Types of Cookies We Use</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Essential Cookies</h3>
                <p className="text-gray-300">
                  These cookies are necessary for the website to function properly. They enable core functionalities like page navigation, 
                  security, and access to secure areas. You cannot opt-out of these cookies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-3">Performance & Analytics Cookies</h3>
                <p className="text-gray-300">
                  These cookies help us understand how visitors interact with our website. We use tools like Google Analytics to collect 
                  information such as pages visited, time spent, and bounce rates. This helps us improve our website and services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-3">Functional Cookies</h3>
                <p className="text-gray-300">
                  These cookies allow the website to remember your choices (such as language preference or region) and provide enhanced, 
                  personalized features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-3">Marketing & Advertising Cookies</h3>
                <p className="text-gray-300">
                  These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. 
                  They may also be used by third-party advertising networks.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">3. Third-Party Cookies</h2>
            <p>
              We may use third-party services (such as Google Analytics, Facebook Pixel, or payment gateways) that set their own cookies 
              when you visit our website. These cookies are governed by the respective third parties' privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">4. How to Manage Cookies</h2>
            <p className="mb-6">You can control and manage cookies in several ways:</p>
            
            <div className="bg-zinc-900 p-7 rounded-2xl border border-zinc-800 space-y-4">
              <p><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies. Please note that disabling essential cookies may affect the functionality of our website.</p>
              <p><strong>Cookie Consent Banner:</strong> When you first visit our website, you will see a cookie consent banner where you can accept or customize your preferences.</p>
              <p><strong>Opt-out Options:</strong> You can opt-out of analytics and marketing cookies through the consent manager.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">5. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. 
              Any updates will be posted on this page with the revised "Last updated" date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-5">6. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please feel free to contact us:
            </p>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-10 rounded-3xl border border-red-900/30">
              <div className="flex flex-col sm:flex-row gap-8 text-sm">
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:support@atlaknots.com" className="text-red-400 hover:text-red-300 transition-colors">
                    support@atlaknots.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+917869636070" className="text-red-400 hover:text-red-300 transition-colors">
                    +91 78696 36070
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p>Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </section>

          <p className="text-center text-sm text-gray-500 pt-10 border-t border-zinc-800">
            By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;