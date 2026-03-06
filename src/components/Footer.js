

import { Outlet } from "react-router";

export default function Footer() {
    return (
        <>
            <Outlet />
            <div className="bg-gray-100 py-8 md:py-10 mt-10 px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pb-10">
                    {/* Logo Section */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <img 
                            className="w-32 md:w-40 h-auto" 
                            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" 
                            alt="Swiggy Logo"
                        />
                        <p className="mt-2 text-sm md:text-base">© 2026 Swiggy Limited</p>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-3">
                        <p className="text-base md:text-lg font-bold text-gray-900">Company</p>
                        <div className="grid grid-cols-1 gap-2 text-sm md:text-base">
                            {[
                                ["About Us", "https://careers.swiggy.com/#/"],
                                ["Swiggy Corporate", "https://www.swiggy.com/corporate/"],
                                ["Careers", "https://careers.swiggy.com/#/"],
                                ["Team", "https://careers.swiggy.com/#/"],
                                ["Swiggy One", "https://www.swiggy.com/swiggy-super"],
                                ["Swiggy Instamart", "https://www.swiggy.com/instamart"],
                                ["Swiggy Dineout", "https://www.swiggy.com/dineout"],
                                ["Minis", "https://mini.store/"],
                                ["Pyng", "https://pyng.co.in/"]
                            ].map(([text, href]) => (
                                <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Legal */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-base md:text-lg font-bold text-gray-900">Contact us</p>
                            <div className="grid grid-cols-1 gap-2 text-sm md:text-base">
                                {[
                                    ["Help & Support", "https://www.swiggy.com/support"],
                                    ["Partner with us", "https://partner.swiggy.com/login#/swiggy"],
                                    ["Ride with us", "http://ride.swiggy.com/"]
                                ].map(([text, href]) => (
                                    <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                                        {text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-base md:text-lg font-bold text-gray-900">Legal</p>
                            <div className="grid grid-cols-1 gap-2 text-sm md:text-base">
                                {[
                                    ["Terms & Conditions", "https://www.swiggy.com/terms-and-conditions"],
                                    ["Cookie Policy", "https://www.swiggy.com/cookie-policy"],
                                    ["Privacy Policy", "https://www.swiggy.com/privacy-policy"]
                                ].map(([text, href]) => (
                                    <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                                        {text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Available Cities */}
                    <div className="flex flex-col gap-3">
                        <p className="text-base md:text-lg font-bold text-gray-900">Available in:</p>
                        <div className="grid grid-cols-1 gap-2 text-sm md:text-base">
                            {[
                                ["Bangalore", "https://www.swiggy.com/city/bangalore"],
                                ["Gurgaon", "https://www.swiggy.com/city/gurgaon"],
                                ["Hyderabad", "https://www.swiggy.com/city/hyderabad"],
                                ["Delhi", "https://www.swiggy.com/city/delhi"],
                                ["Mumbai", "https://www.swiggy.com/city/mumbai"],
                                ["Pune", "https://www.swiggy.com/city/pune"]
                            ].map(([text, href]) => (
                                <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Life at Swiggy & Social Links */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-base md:text-lg font-bold text-gray-900">Life at Swiggy</p>
                            <div className="grid grid-cols-1 gap-2 text-sm md:text-base">
                                {[
                                    ["Explore with Swiggy", "https://blog.swiggy.com/"],
                                    ["Swiggy News", "https://blog.swiggy.com/category/swiggy-restaurant-awards/"],
                                    ["Snackables", "https://blog.swiggy.com/category/snackables/campaigns/"]
                                ].map(([text, href]) => (
                                    <a key={text} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                                        {text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-base md:text-lg font-bold">Social Links</p>
                            <div className="flex gap-4">
                                {[
                                    ["LinkedIn", "https://www.linkedin.com/company/swiggy-in/", "https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"],
                                    ["Instagram", "https://www.instagram.com/swiggyindia/?hl=en", "https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"],
                                    ["Facebook", "https://www.facebook.com/swiggy.in/", "https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"],
                                    ["Pinterest", "https://in.pinterest.com/swiggyindia/", "https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"],
                                    ["Twitter", "https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"]
                                ].map(([alt, href, src]) => (
                                    <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                                        <img className="w-5 h-5 hover:opacity-80" src={src} alt={alt} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-300 w-full max-w-6xl mx-auto my-4" />

                {/* App Download Section */}
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 text-center lg:text-left">
                        For better experience, download the Swiggy app now
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                        <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            <img 
                                className="w-40 md:w-48 h-auto hover:scale-95 transition-transform" 
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" 
                                alt="Download on App Store"
                            />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            <img 
                                className="w-40 md:w-48 h-auto hover:scale-95 transition-transform" 
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" 
                                alt="Get it on Google Play"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}