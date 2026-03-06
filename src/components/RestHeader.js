
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {
    const counter = useSelector(state => state.cartslice.count);

    return (
        <div className="w-full py-3 px-4 bg-gray-100 flex flex-col sm:flex-row justify-between items-center sm:px-6 md:px-8 lg:px-10">
            {/* Logo and Location */}
            <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start mb-3 sm:mb-0">
                <Link to={"/"}>
                    <img 
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl" 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                    />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="w-full sm:w-auto overflow-x-auto whitespace-nowrap hidden-scroll">
                <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 font-semibold text-sm sm:text-base md:text-[18px] text-gray-900">
                    <a href="https://www.swiggy.com/corporate/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 flex items-center gap-1 sm:gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect
                                x="2.46094"
                                y="7.98145"
                                width="15.0784"
                                height="10.7765"
                                rx="1.52523"
                                stroke="#02060C"
                                strokeOpacity="0.75"
                                fill="none"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z"
                                fill="#02060C"
                                fillOpacity="0.75"
                            />
                        </svg>
                        <span className="hidden sm:inline">Swiggy Corporate</span>
                        <span className="sm:hidden">Corporate</span>
                    </a>
                    
                    <a href="https://www.swiggy.com/search" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 flex items-center gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                            <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.6 5.6a7.5 7.5 0 0 0 11.05 11.05Z" 
                                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Search</span>
                    </a>
                    
                    <a href="https://www.swiggy.com/offers-near-me" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 flex items-center gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                            <path d="M20.59 13.41l-7.99 8a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l8-8a2 2 0 0 1 2.83 0l7.16 7.17a2 2 0 0 1 0 2.83z" 
                            stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="8.5" cy="8.5" r="1.5" fill="#000"/>
                        </svg>
                        <span>Offers</span>
                    </a>
                    
                    <a href="https://www.swiggy.com/support" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 flex items-center gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="2"/>
                            <path d="M9.09 9a3 3 0 1 1 4.91 2.36c-.49.37-.82.63-.97.79a1.99 1.99 0 0 0-.63 1.39v.12M12 17h.01" 
                            stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Help</span>
                    </a>
                    
                    <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 flex items-center gap-1 sm:gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"/>
                        </svg>
                        <span>Sign In</span>
                    </a>
                    
                    <Link to={"/checkout"} className="hover:text-orange-600 flex items-center gap-1 sm:gap-2">
                        <span>🛒</span>
                        <span>Cart ({counter})</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}