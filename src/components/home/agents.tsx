import { MdArrowOutward } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { constants } from '@/lib/constants'
import agent1 from '@/assets/images/agent1.png'
import agent2 from '@/assets/images/agent2.png'


const agentImages = [
  'https://placehold.co/100x100',
  'https://placehold.co/100x100',
  'https://placehold.co/100x100',
  'https://placehold.co/100x100',
]

export default function Agents() {
  return (
    <section className="w-full bg-[#F7F8F9] mx-auto px-8 py-12">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start gap-6 w-full">
          {/* Left Text */}
          <div className="w-full md:w-2/3 flex gap-4 h-full">
            <div className="w-[20%] flex justify-center items-center">
              <img src={agent1} alt="agent1" className='p-4 rounded-md bg-primary' />
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <h3 className="text-2xl font-semibold mb-2">
                {constants.agents.title1}
              </h3>
              <Button
                variant="secondary"
                className="text-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                <MdArrowOutward className="w-4 h-4" />
                {constants.agents.button}
              </Button>
            </div>
          </div>

          {/* Image Columns */}
          <div className="w-full md:w-1/3 h-40 overflow-hidden sm:mt-4 md:mt-0 pr-2">
            <div className="grid grid-cols-2 gap-2 h-full">
              {/* Left Column - scrolls down */}
              <div className="relative h-full overflow-hidden">
                <div className="flex flex-col animate-scroll-down">
                  {[...agentImages, ...agentImages].map((src, idx) => (
                    <img
                      key={`left-${idx}`}
                      src={src}
                      alt={`Agent ${idx + 1}`}
                      className="rounded-lg translate-y-3 mb-2"
                    />
                  ))}
                </div>
              </div>

              {/* Right Column - scrolls up */}
              <div className="relative h-full overflow-hidden">
                <div className="flex flex-col animate-scroll-up">
                  {[...agentImages, ...agentImages].map((src, idx) => (
                    <img
                      key={`right-${idx}`}
                      src={src}
                      alt={`Agent ${idx + 1}`}
                      className="rounded-lg mb-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between w-full">
          <div className="w-full flex gap-4 h-full">
            <div className="w-[20%] flex justify-center items-center">
              <img src={agent1} alt="agent1" className='p-4 rounded-md bg-primary' />
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <h3 className="text-2xl font-semibold mb-2">
                {constants.agents.title2}
              </h3>
              <Button
                variant="secondary"
                className="text-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                <MdArrowOutward className="w-4 h-4" />
                {constants.agents.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
