import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";

import { i18n } from "./i18n-config";
import Negotiator from "negotiator";

export function getLocale(request: NextRequest): string | undefined {
	// Transform headers for Negotiator
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// Get supported locales
	const locales: string[] = Array.from(i18n.locales);

	// Use Negotiator and intl-localematcher to determine the best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales
	);
	return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	// Determine the best locale
	const sanitizedPathname = pathname.startsWith("/")
		? pathname.substring(1)
		: pathname;
	const locale = getLocale(request) || i18n.defaultLocale;

	// Check if the pathname already includes a valid locale
	const localeInPathname = i18n.locales.find(
		(locale) =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	// If a valid locale is already in the pathname, do nothing
	if (localeInPathname) {
		// Check if the pathname ends with a PDF file
		if (
			pathname.endsWith(".pdf") &&
			!pathname.includes(`cv-robert-2025-${locale}.pdf`)
		) {
			return NextResponse.redirect(
				new URL(`/cv-robert-2025-${locale}.pdf`, request.url)
			);
		}

		return NextResponse.next();
	}

	// Redirect to the locale-specific URL

	return NextResponse.redirect(
		new URL(`/${locale}/${sanitizedPathname}`, request.url)
	);
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|images/.*|.*\\.pdf$).*)"
	]
};
