
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

// import { useState } from 'react'
// import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
// import emaar from '@/assets/icons/emaar.png'
// import damac from '@/assets/icons/damac.png'
// import nakheel from '@/assets/icons/nakheel.png'
// import dubai from '@/assets/icons/dubai.png'
// import meraas from '@/assets/icons/meraas.png'

// const partnerLogos = [emaar, damac, nakheel, dubai, meraas]

// // Dummy Data
// const testimonials = [
//     {
//         text: "Together with my wife, I've been choosing apartments in Dubai for a long time and decided to contact Luxe Balsam Properties. We were offered several options, an apartment tour, and helped to find the best price. Thank you for your professionalism!",
//         name: 'Yusef Karim',
//         role: 'Apartments in Dubai',
//         stars: 5,
//     },
//     {
//         text: "Together with my wife, I've been choosing apartments in Dubai for a long time and decided to contact Luxe Balsam Properties. We were offered several options, an apartment tour, and helped to find the best price. Thank you for your professionalism!",
//         name: 'Sarah Khan',
//         role: 'Apartments in Dubai',
//         stars: 4,
//     },
//     {
//         text: "Together with my wife, I've been choosing apartments in Dubai for a long time and decided to contact Luxe Balsam Properties. We were offered several options, an apartment tour, and helped to find the best price. Thank you for your professionalism!",
//         name: 'Daniel Smith',
//         role: 'Apartments in Dubai',
//         stars: 5,
//     },
// ]

// export default function Testimonials() {
//     const [currentIndex, setCurrentIndex] = useState(0)

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
//     }

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
//     }

//     const testimonial = testimonials[currentIndex]

//     return (
//         <section className="relative bg-[#F6F3ED] mx-auto container py-20 overflow-hidden">
//             {/* Heading */}
//             <h2 className="text-center text-4xl mb-12">
//                 Our <span className="font-extrabold">Success </span>Stories
//             </h2>

//             {/* Testimonial Slider */}
//             <div className="relative flex justify-center items-center max-w-4xl mx-auto px-4">
//                 <button
//                     onClick={handlePrev}
//                     className="absolute left-0 z-10 bg-white shadow p-2 rounded-full cursor-pointer"
//                 >
//                     <FaChevronLeft />
//                 </button>

//                 <div className="w-full mx-12 p-8 text-center bg-transparent">
//                     <p className="text-black italic mb-6 text-lg leading-relaxed">
//                         “{testimonial.text}”
//                     </p>
//                     <div className="flex justify-center mb-3">
//                         {[...Array(testimonial.stars)].map((_, i) => (
//                             <FaStar key={i} className="text-yellow-500" />
//                         ))}
//                     </div>
//                     <p className="font-bold">{testimonial.name}</p>
//                     <p className="text-sm text-gray-900">{testimonial.role}</p>
//                 </div>

//                 <button
//                     onClick={handleNext}
//                     className="absolute right-0 z-10 bg-white shadow p-2 rounded-full cursor-pointer"
//                 >
//                     <FaChevronRight />
//                 </button>
//             </div>

//             {/* Partners Section */}
//             <div className="mt-20 text-center">
//                 <h3 className="text-3xl font-semibold mb-6">Partners with</h3>
//                 <div className="flex justify-center items-center gap-12 flex-wrap">
//                     {partnerLogos.map((src, i) => (
//                         <div
//                             key={i}
//                             className="w-40 h-16 flex items-center justify-center overflow-hidden"
//                         >
//                             <img
//                                 src={src}
//                                 alt={`partner-${i}`}
//                                 className="object-contain max-h-full max-w-full mix-blend-multiply"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }
