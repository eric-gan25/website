import { ContactButton } from "@/components/ui/contactButton"

export default function Contact() {
  return (
    <section id="contact" className="py-14 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
          Let's connect!
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <ContactButton
            href="mailto:e225li@uwaterloo.ca"
            label="e225li@uwaterloo.ca"
          />
          <ContactButton
            href="https://www.linkedin.com/in/ellarachelli"
            label="in/ellarachelli"
            target="_blank"
            rel="noopener noreferrer"
          />
          <ContactButton
            href="tel:+16475312202"
            label="+1 (647) 531-2202"
          />
        </div>
      </div>
    </section>
  )
}
