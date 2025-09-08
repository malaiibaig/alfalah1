import { constants } from "@/lib/constants";
import about1 from '@/assets/images/about1.png'
import about2 from '@/assets/images/about2.png'
import about3 from '@/assets/images/about3.png'
export default function About() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
            <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-10 md:mb-16 px-4" dangerouslySetInnerHTML={{ __html: constants.about.title }} />
            <div className="flex w-[80%] mx-auto">
                <div className="flex flex-col items-center w-[33%] border-r-2 border-gray-200 group overflow-hidden px-8">
                    <img
                        src={about1}
                        alt="about1"
                        className="w-24 transform transition-transform duration-500 ease-in-out group-hover:scale-110 mt-6"
                    />
                    <div className="flex flex-col justify-center">
                        <h3
                            className="text-2xl sm:text-3xl md:text-3xl font-semibold text-center my-4 px-4"
                            dangerouslySetInnerHTML={{ __html: constants.about.claim }}
                        />
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-500 text-center"
                            dangerouslySetInnerHTML={{ __html: constants.about.claimDescription }}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-[33%] border-r-2 border-gray-200 group overflow-hidden px-8">
                    <img
                        src={about2}
                        alt="about1"
                        className="w-24 transform transition-transform duration-500 ease-in-out group-hover:scale-110 mt-6"
                    />
                    <div className="flex flex-col justify-center">
                        <h3
                            className="text-2xl sm:text-3xl md:text-3xl font-semibold text-center my-4 px-4"
                            dangerouslySetInnerHTML={{ __html: constants.about.report }}
                        />
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-500 text-center"
                            dangerouslySetInnerHTML={{ __html: constants.about.reportDescription }}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-[33%] group overflow-hidden px-8">
                    <img
                        src={about3}
                        alt="about1"
                        className="w-24 transform transition-transform duration-500 ease-in-out group-hover:scale-110 mt-6"
                    />
                    <div className="flex flex-col justify-center">
                        <h3
                            className="text-2xl sm:text-3xl md:text-3xl font-semibold text-center my-4 px-4"
                            dangerouslySetInnerHTML={{ __html: constants.about.panel }}
                        />
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-500 text-center"
                            dangerouslySetInnerHTML={{ __html: constants.about.panelDescription }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}