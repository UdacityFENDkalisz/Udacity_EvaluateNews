// Checks that the user input starts with http:// or https://
// and has no whitespace
// Uses regular expression as test condition
export function checkURL(userInput) {
    console.log("::: Running checkURL :::", userInput)
    const httpCheck = /^http:\/\/|^https:\/\//i
    const spaceCheck = /\s/
    return (httpCheck.test(userInput) && !spaceCheck.test(userInput))
}
