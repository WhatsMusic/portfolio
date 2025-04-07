// components/Navbar.tsx
"use client"; // Needed for hooks like usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using lucide-react for icons
import LanguageSwitcher from './LanguageSwitcher';
import { getDictionary } from '@/lang/dictionaries';
import { Dictionary } from '@/data/cvDatas';

const Navbar = ({ params }: { params: { lang: 'de' | 'en' } }) => {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] as 'de' | 'en';


    const navLinks = [
        { href: '/', label: lang === 'de' ? 'Startseite' : 'Home' },
        { href: '/about', label: lang === 'de' ? 'Über uns' : 'About' },
        { href: '/experience', label: lang === 'de' ? 'Erfahrung' : 'Experience' },
        { href: '/education', label: lang === 'de' ? 'Bildung' : 'Education' },
        { href: '/projects', label: lang === 'de' ? 'Projekte' : 'Projects' },
        { href: '/contact', label: lang === 'de' ? 'Kontakt' : 'Contact' },
    ];


    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const [dict, setDict] = useState<Dictionary | null>(null); // Add state for dictionary
    useEffect(() => {
        const fetchDictionary = async () => {
            const fetchedDict = await getDictionary(params.lang);
            setDict(fetchedDict); // Store the dictionary in state
            setLoading(false);
        };
        fetchDictionary();
    }, [params.lang]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full flex flex-col items-center justify-between md:space-y-5 space-y-2 bg-white shadow-md fixed py-2 z-50">
            <div className="">
                <Link href={`/${lang}`} className="text-black font-bold text-[1.3rem] lg:text-3xl py-6 lg:py-18">
                    {dict && dict.name && dict.degree ? dict.degree + ' ' + dict.name : 'Loading...'}
                </Link>
            </div>
            <div className="w-full flex flex-row justify-around items-center">
                <div className="ml-10 hidden md:flex items-baseline space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={`/${lang}${link.href}`}
                            className={`px-3 py-2 rounded-md text-base font-medium ${pathname === `/${params.lang}${link.href}`
                                ? 'bg-secondary text-black'
                                : 'text-mediumText hover:bg-gray-100 hover:text-darkText'
                                } transition duration-150 ease-in-out`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-mediumText hover:text-darkText hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-secondary"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                </button>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={`/${params.lang}${link.href}`}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === `/${params.lang}${link.href}`
                                ? 'bg-secondary text-black'
                                : 'text-mediumText hover:bg-gray-100 hover:text-darkText'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                </div>
                <div className="block md:hidden">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Navbar;