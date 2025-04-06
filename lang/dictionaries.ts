"use server";

const dictionaries = {
	de: () => import("@/lang/de.json").then((module) => module.default),
	en: () => import("@/lang/en.json").then((module) => module.default)
};

export const getDictionary = async (locale: "de" | "en") => {
	const dictionaryLoader = dictionaries[locale];

	if (typeof dictionaryLoader !== "function") {
		throw new TypeError(
			`No dictionary loader found for locale: "${locale}"`
		);
	}

	return dictionaryLoader();
};
