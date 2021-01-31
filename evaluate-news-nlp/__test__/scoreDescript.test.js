import { scoreDescription } from '../src/client/js/formHandler'

describe("Test various score levels", () => {
    test("should return \"Strongly Positive\"", () => {
        expect(scoreDescription("P+")).toBe("Strongly Positive")
    })
    test("should return \"Positive\"", () => {
        expect(scoreDescription("P")).toBe("Positive")
    })
    test("should return \"Neutral\"", () => {
        expect(scoreDescription("NEU")).toBe("Neutral")
    })
    test("should return \"Negative\"", () => {
        expect(scoreDescription("N")).toBe("Negative")
    })
    test("should return \"Strongly Negative\"", () => {
        expect(scoreDescription("N+")).toBe("Strongly Negative")
    })
    test("should return \"No sentiment\"", () => {
        expect(scoreDescription("NONE")).toBe("No sentiment")
    })
    test("should return \"Invalid data\"", () => {
        expect(scoreDescription("X")).toBe("Invalid data")
    })
})