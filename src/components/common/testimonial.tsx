
import { constants } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import partner1 from '@/assets/images/partner1.png'
import partner2 from '@/assets/images/partner2.png'
import partner3 from '@/assets/images/partner3.png'
import partner4 from '@/assets/images/partner4.png'

const partnerLogos = [partner1, partner2, partner3, partner4]

export default function Testimonials() {

  return (
    <section className="relative bg-gray-100 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-xl font-semibold mb-2 px-4" dangerouslySetInnerHTML={{ __html: constants.testimonials.title }} />
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-10 md:mb-16 px-4" dangerouslySetInnerHTML={{ __html: constants.testimonials.heading }} />

      {/* Testimonial Slider */}
      <div className="relative max-w-full sm:max-w-2xl md:max-w-4xl mx-auto px-4">
          <p className="text-black italic text-center mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
            “{constants.testimonials.description}”
          </p>
      </div>
      <Button variant="default" className="!block text-lg w-52 mx-auto">
        {constants.testimonials.button}
      </Button>

      {/* Partners Section */}
      <div className="mt-12 sm:mt-16 md:mt-10 px-4">
        {/* Scrollable on mobile, wrap on tablet+ */}
        <div className="mt-20 text-center px-2">
          <h3 className="text-3xl font-semibold mb-6">Partners with</h3>

          <div className="relative">
            <div className="flex gap-12 sm:justify-center sm:flex-wrap overflow-x-auto sm:overflow-visible px-1 hide-scrollbar">
              {partnerLogos.map((src, i) => (
                <div
                  key={i}
                  className="min-w-[96px] sm:w-52 sm:h-16 h-12 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`partner-${i}`}
                    className="object-contain max-h-full max-w-full mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
