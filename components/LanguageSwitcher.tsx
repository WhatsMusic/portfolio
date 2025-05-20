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
        <div className="w-full sm:w-auto">
            <label htmlFor="locale-select" className="sr-only">Sprache wählen</label>
            <select
                id="locale-select"
                value={locale}
                onChange={(event) => switchLanguage(event.target.value)}
                className="bg-white border border-gray-300 text-sm text-gray-800 rounded-md py-2 px-3 w-full sm:w-auto focus:outline-none"
            >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    );
};
