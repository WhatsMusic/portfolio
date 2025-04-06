// /components/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";

/**
 * LanguageSwitcher component allows users to toggle between German and English.
 */



export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

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
        <div className="text-sm font-medium">
            <button onClick={() => switchLanguage('de')} className="mr-2">
                Deutsch
            </button>
            <button onClick={() => switchLanguage('en')}>
                English
            </button>
        </div>
    );
};


