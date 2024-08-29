// resources/js/Components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function HeaderNavbar({ menu_items }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const OpenMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    // Combined handler for mobile menu actions
    const handleMenuClick = (menuItem) => {
        closeMobileMenu();
        setActiveMenuItem(menuItem)
        openModal();
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="flex justify-start gap-x-[65px] laptop:gap-x-[40px] l-mobile:hidden">
                {menu_items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleMenuClick(item)}
                    >
                        {item.title}
                    </button>
                ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
                onClick={OpenMobileMenu}
                className="l-mobile:flex items-center justify-center p-2 rounded bg-gray-200 hidden -mt-2"
                aria-label="Open menu"
            >
                <FaBars size={20} />
            </button>

            {/* Mobile Menu */}
            {showMobileMenu && (
                <div className="fixed inset-0 flex justify-end z-50">
                    <div
                        className="w-[30%] h-full bg-black bg-opacity-70"
                        onClick={closeMobileMenu}
                    ></div>

                    <div className="w-[70%] h-full bg-white p-6">
                        <button
                            onClick={closeMobileMenu}
                            className="text-right"
                            aria-label="Close menu"
                        >
                            <FaTimes size={24} />
                        </button>
                        <nav className="flex flex-col gap-y-5">
                            {menu_items.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(item)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Modalbox*/}
            {showModal && activeMenuItem && (
                <div className="w-full min-h-screen fixed inset-0 bg-black bg-opacity-70 flex items-stretch justify-center z-50">
                    <div id="modal-content" className="bg-white font-sans font-medium text-xl p-8 m-7 rounded-[30px] shadow-lg w-full max-w-[1440px] flex flex-col justify-between">
                        <h1>{activeMenuItem.title}</h1>
                        <p>{activeMenuItem.description}</p>
                        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
