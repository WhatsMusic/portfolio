// /components/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";


export default function LanguageSwitcher() {


    const router = useRouter();
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'en'; // Extract the current locale or default to 'en'

    // Toggle language between 'de' and 'en'
    const switchLanguage = (language: string) => {
        const segments = pathname.split('/').filter(Boolean); // Split and remove empty segments
        if (segments[0] === 'de' || segments[0] === 'en') {
            segments[0] = language; // Replace the language prefix
        } else {
            segments.unshift(language); // Add the language prefix if missing
        }
        const newPathname = `/${segments.join('/')}`;
        router.push(newPathname);
    };

    return (
        <div className="flex items-center space-x-4">
            {/* Mobile View: Show only the other language */}
            <div className="block md:hidden">
                {locale === 'en' && (
                    <button
                        onClick={() => switchLanguage('de')}
                        className="flex items-center space-x-2"
                    >
                        <span>🇩🇪</span>
                        <span>Deutsch</span>
                    </button>
                )}
                {locale === 'de' && (
                    <button
                        onClick={() => switchLanguage('en')}
                        className="flex items-center space-x-2"
                    >
                        <span>🇬🇧</span>
                        <span>English</span>
                    </button>
                )}
            </div>

            {/* Desktop View: Show dropdown menu with only the other language */}
            <div className="relative md:inline-block text-left w-full sm:w-auto hidden">
                <select
                    id="locale-select"
                    defaultValue={locale}
                    onChange={(event) => switchLanguage(event.target.value)}
                    className="appearance-none bg-transparent border border-gray-300 text-sm rounded-md py-2 pl-3 pr-8 w-full sm:w-auto focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary cursor-pointer"
                >
                    <option value="en">🇬🇧 English</option>
                    <option value="de">🇩🇪 Deutsch</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>

    );
};


