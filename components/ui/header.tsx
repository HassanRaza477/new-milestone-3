"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-100 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
                {/* Search Input */}
                <div className="relative flex items-center md:w-[20%]">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-transparent text-black placeholder-gray-500 pl-10 pr-4 py-2 border-b border-black focus:outline-none focus:border-gray-800 text-sm"
                    />
                    <AiOutlineSearch className="absolute right-3 text-black text-lg" />
                </div>

                {/* Menu Button for Mobile */}
                <button
                    className="text-gray-700 text-2xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

                {/* Navigation Links */}
                <nav
                    className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-100 md:bg-transparent md:flex items-center ${menuOpen ? 'block' : 'hidden'
                        } md:block`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6 text-sm font-medium text-gray-700">
                        <li className="hover:text-blue-500 text-center py-4 md:py-0">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-500 text-center py-2 md:py-0">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-blue-500 text-center py-2 md:py-0">
                            <Link href="/travel">Travel</Link>
                        </li>
                        <li className="hover:text-blue-500 text-center py-2 md:py-0">
                            <Link href="/eat">Eat</Link>
                        </li>
                        <li className="hover:text-blue-500 text-center py-2 md:py-0">
                            <Link href="/relax">Relax</Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="hidden md:flex space-x-4 text-gray-600">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <FaPinterest size={20} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
        </header>
    );
}
