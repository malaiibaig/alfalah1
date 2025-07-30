// * npx shadcn@latest add button input

import { constants } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Arrow from "@/assets/svg/arrow.svg?react";
import headerbg from "@/assets/images/headerbg.png"

export default function Header() {

    return (
        <div className="w-full h-[36rem] lg:h-[54rem] z-0 relative">
            <img src={headerbg} alt="headerbg" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
            <div className="px-4 absolute top-1/2 lg:-mt-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full max-w-4xl">
                <h1 className="text-3xl lg:text-6xl lg:leading-18 w-full lg:w-[86%] mx-auto" dangerouslySetInnerHTML={{ __html: constants.header.title }} />
                <p className="text-md lg:text-lg mt-2">
                    {constants.header.description}
                </p>
                <form className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center mt-8 w-full mx-auto bg-white rounded-md lg:rounded-full p-2">
                    {/* Search Input */}
                    <div className="flex items-center bg-bg-smoke rounded-full w-full mx-2">
                        <Input
                            type="text"
                            placeholder={constants.header.placeholder}
                            className="border-none rounded-full text-black"
                        />
                    </div>
                    {/* Search Button */}
                    <Button
                        variant="default"
                        size="lg"
                    >
                        <span className="flex items-center justify-center gap-1">
                            <Arrow className="text-white w-4 h-4" />
                            {constants.header.button}
                        </span>
                    </Button>
                </form>
            </div>
        </div>
    )
}
