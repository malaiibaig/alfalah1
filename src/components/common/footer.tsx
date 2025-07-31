import { Link } from "@tanstack/react-router";
import { constants } from "@/lib/constants";
import Logo from "@/assets/images/logo.png";
import FacebookIcon from "@/assets/svg/facebook.svg?react";
import TwitterIcon from "@/assets/svg/twitter.svg?react";
import InstagramIcon from "@/assets/svg/instagram.svg?react";
import LinkedInIcon from "@/assets/svg/linkedin.svg?react";
import YouTubeIcon from "@/assets/svg/youtube.svg?react";

const icons = [<FacebookIcon /> , <TwitterIcon />, <InstagramIcon />, <LinkedInIcon />, <YouTubeIcon />]

export default function Footer() {
    const { footer } = constants;

    return (
        <footer className="w-full bg-muted pt-16">
            <div className="container mx-auto">
                <div className="w-[90%] mx-auto grid grid-cols-1 space-y-8 lg:grid-cols-5 lg:gap-2">
                    {/* Logo and Social Links */}
                    <div className="col-span-1">
                        <Link to="/">
                            <img src={Logo} alt="Luxe Balsam Properties" className="h-12 mb-6" />
                        </Link>
                        <div className="flex space-x-2">
                            {icons.map((icon, index) => (
                                <a className="bg-bg-gray rounded-md w-10 h-10 flex items-center justify-center aspect-square p-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer" key={index}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 col-start-3">
                        <h3 className="text-gray-900 text-md font-semibold mb-4">{footer.quickLinks.title}</h3>
                        <ul className="space-y-2">
                            {footer.quickLinks.links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-gray-600 text-sm hover:text-gray-900">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h3 className="text-gray-900 text-md font-semibold mb-4">{footer.services.title}</h3>
                        <ul className="space-y-2">
                            {footer.services.links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-gray-600 text-sm hover:text-gray-900">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-gray-900 text-md font-semibold mb-4">{footer.support.title}</h3>
                        <ul className="space-y-2">
                            {footer.support.links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-gray-600 text-sm hover:text-gray-900">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            {/* Bottom Section */}
            <div className="mt-12 py-12 border-t border-gray-200 w-full mx-auto relative overflow-hidden">
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
                    <span className="text-[14rem] font-bold whitespace-nowrap">BANK AL FALAH</span>
                </div>

                <div className="container mx-auto">
                    <div className="w-[90%] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
                            <p className="text-gray-600 text-sm mb-4 md:mb-0 text-center">
                                {footer.copyright}
                            </p>
                            <div className="flex space-x-6">
                                <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
                                    {footer.legal.terms}
                                </Link>
                                <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
                                    {footer.legal.privacy}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}