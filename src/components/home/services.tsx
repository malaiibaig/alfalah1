import { FaCarSide } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { LuHeartPulse } from "react-icons/lu";

import search1 from '@/assets/images/search1.jpg'
import search2 from '@/assets/images/search2.jpg'
import search3 from '@/assets/images/search3.jpg'
import { constants } from '@/lib/constants'
import { Button } from '@/components/ui/button'

const buy = [
    {
        image: search1,
        name: constants.services.title1,
        description: constants.services.description1,
        icon: <FaCarSide className="w-14 h-14" />,
    },
    {
        image: search2,
        name: constants.services.title2,
        description: constants.services.description2,
        icon: <FiHeart className="w-12 h-12" />,
    },
    {
        image: search3,
        name: constants.services.title3,
        description: constants.services.description3,
        icon: <LuHeartPulse className="w-14 h-14" />,
    },
]

export default function Services() {
    return (
        <div className="w-full lg:pt-16 bg-bg-solitude">
            <div className="container mx-auto">
                <h1 className="text-2xl lg:text-5xl text-center font-bold" dangerouslySetInnerHTML={{ __html: constants.services.heading }} />
                <div className="flex flex-col lg:flex-row mt-10 justify-center">
                    {
                        buy.map((community, index) => (
                            <div key={index} className="w-full lg:w-[33.5%] lg:h-[34rem] h-[20rem] border-2 lg:order-1 border-w lg:order-1hite group relative">
                                <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
                                <div className="hidden flex-col justify-center transition-all duration-300 items-center absolute top-0 left-0 w-full h-full bg-black/50 group-hover:flex">
                                    <div className="text-white text-3xl flex justify-center w-full">{community.icon}</div> 
                                    <h2 className="text-white text-3xl text-center w-[60%]">{community.name}</h2>
                                    <p className="text-white text-center w-[60%] mt-2">{community.description}</p>
                                    <Button className="w-[60%] mt-2">
                                        {constants.services.button}

                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
}
