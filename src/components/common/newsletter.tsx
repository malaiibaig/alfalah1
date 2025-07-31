import { constants } from '@/lib/constants'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Arrow from '@/assets/svg/arrow.svg?react'

export default function Newsletter() {
  return (
    <section className="w-full py-14 px-4 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="container mx-auto isolate">
        <div className="w-[90%] mx-auto">
          <h1
            className="text-4xl md:text-5xl font-normal text-white text-center mb-4"
            dangerouslySetInnerHTML={{ __html: constants.newsletter.title }}
          />
          <p className="text-white text-center text-lg">
            {constants.newsletter.description}
          </p>
          <form className="flex flex-col lg:flex-row items-center justify-center mt-8 w-full mx-auto bg-white rounded-xl lg:rounded-full p-1">
            {/* Search Input */}
            <div className="flex items-center bg-bg-solitude rounded-full w-full mx-2">
              <Input
                type="text"
                placeholder={constants.newsletter.placeholder}
                className="border-none rounded-full bg-white"
              />
            </div>
            {/* Search Button */}
            <Button
              variant="default"
              size="lg"
              className="lg:w-auto w-full mt-1 lg:mt-0"
            >
              <span className="flex items-center justify-center gap-1">
                <Arrow className="text-white w-4 h-4" />
                {constants.newsletter.button}
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
