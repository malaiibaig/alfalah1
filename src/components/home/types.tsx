import { constants } from '@/lib/constants'
import insurance1 from '@/assets/images/insurance.jpg'

export default function Types() {
    return (
        <div className="w-full py-16 bg-bg-solitude">
            <div className="container mx-auto">
                <div className="w-full h-[66rem] lg:h-[52rem] mt-0.5 relative">
                    <img
                        src={insurance1}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
                        <div className="w-[88%] lg:h-[72%]">
                            <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[6rem] lg:auto-rows-[10rem] gap-3">
                                <div className="w-full h-full row-start-2 col-start-2 flex flex-col justify-center items-center order-2 lg:order-1">
                                    <div className="flex justify-center items-start gap-2">
                                        <div className="text-4xl lg:text-5xl text-white">{constants.types.title}</div>
                                    </div>
                                </div>
                                {constants.types.types.map((type) => (
                                    <div className="w-full h-full bg-white rounded-lg flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-start gap-2">
                                            <div className="text-4xl lg:text-4xl">{type.name}</div>
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
