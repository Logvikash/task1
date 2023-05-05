import 'tailwindcss/tailwind.css';
import './header.css'


import React from 'react';

function Header() {
    return (
        <div>
            {/* Header */}
            <nav className="headerclg">
                <div className="header flex flex-wrap items-center justify-between mx-auto p-2">
                    <a href="#" className="flex items-center">
                        <img src="/images/nathcorp.png" className="h-8 mr-3" alt="Nathcorp Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"> Home</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <img src="/images/user_img.png" className="h-8 mr-3" alt="Flowbite Logo" />
                        <a href="#" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            Nathcorp
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;