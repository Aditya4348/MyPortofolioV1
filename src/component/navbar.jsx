import { useState } from "react";

const MenuItem = ({className}) => {
    return (
        <div className={className}>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-500 transition duration-300">Home</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-500 transition duration-300">About</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-500 transition duration-300">Services</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-500 transition duration-300">Contact</a>
            <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
                Download CV
            </button>
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const menuActive = isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none';

    return (
        <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm text-white shadow-lg z-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Container */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold">Portofolio</h1>
                    </div>

                    {/* Desktop Menu Container */}
                    <div className="hidden md:block ">
                        <MenuItem className="ml-10 flex items-center space-x-8"/>                   
                    </div>

                    {/* Mobile Menu Button Container */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={handleClick}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-500 focus:outline-none"
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Container */}
            <div className={`md:hidden absolute w-full bg-gray-900/80 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${menuActive}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <MenuItem className="px-2 pt-2 pb-3 space-y-1"/>
                </div>
            </div>
        </nav>
    )
}
