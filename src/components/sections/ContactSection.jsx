import ContactItem from '../ui/ContactItem'

function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
          Let's build something together.
        </h2>

        <div className="glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 md:mb-12">
          <div className="space-y-6">
            <ContactItem
              label="Email"
              value="Kadlagrohit42@gmail.com"
              href="mailto:Kadlagrohit42@gmail.com"
            />
            <ContactItem label="Phone" value="+91-9082902880" href="tel:+919082902880" />
            <ContactItem
              label="GitHub"
              value="github.com/Rohitkadlag"
              href="https://github.com/Rohitkadlag"
            />
            <ContactItem label="Location" value="Mumbai, India" />
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          © 2026 Rohit Kadlag. Designed with precision.
        </div>
      </div>
    </section>
  )
}

export default ContactSection
