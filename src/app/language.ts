/**
 * Preselects from the allowed languages.
 *
 * @param {Array<string>} allowed
 * @returns {string}
 */
export const preselect = (allowed: Array<string> = []): string => {
    // detect users preferred language
    const lang = navigator.language.split('-')[0].toLowerCase()

    // try users language
    if (allowed.includes(lang)) {
        return lang
    }

    // try first allowed language
    if (allowed.length > 0) {
        return allowed[0]
    }

    // fallback to english
    return 'en'
}
