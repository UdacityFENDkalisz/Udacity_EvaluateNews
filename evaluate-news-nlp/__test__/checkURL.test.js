import { checkURL } from '../src/client/js/urlChecker'

describe("URL validate function", () => {
    test("reject URL with space", () => {
        const input = 'https://exa mple.com'
        expect(checkURL(input)).toBe(false)
    })
    test("reject URL with missing protocol", () => {
        const input = 'example.com'
        expect(checkURL(input)).toBe(false)
    })
    test("reject URL with misspelled protocol", () => {
        const input = 'htps://example.com'
        expect(checkURL(input)).toBe(false)
    })
    test("reject URL with protocol not at start", () => {
        const input = 'example.http://com'
        expect(checkURL(input)).toBe(false)
    })
    test("accept valid URL", () => {
        const input = 'https://example.com'
        expect(checkURL(input)).toBe(true)
    })

})