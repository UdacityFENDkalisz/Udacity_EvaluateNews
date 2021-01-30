const fetch = require('node-fetch')

// Receives the click event
export async function handleSubmit(event) {
    event.preventDefault()

    // Clears the result fields in case of repeat use
    document.getElementById('results').innerHTML = ""
    document.getElementById('subjectivity').innerHTML = ""
    document.getElementById('score').innerHTML = ""

    // Validate the user input into the form field
    let userInput = document.getElementById('inputURL').value
    const errorElement = document.getElementById('errorMessage')
    if (!Client.checkURL(userInput)) {
        console.log('Bad input')
        errorElement.innerHTML = 'Input is not a valid URL. It should start with http:// or https:// and contain no spaces.'
        return
    } else {
        errorElement.innerHTML = ""
    }

    console.log("::: Form Submitted :::")

    // Calls function to start the API call in server
    let apiData = await getAnalysis('http://localhost:8081/call', userInput)

        // Convert response to JSON, call updateUI
        .then(apiData => apiData.json())
        .then(function (res) {
            updateUI(res)
        })
}

// Post route to server which will do API call
export async function getAnalysis(url, userInput) {

    let response = await fetch(url, {
        // Must use POST. GET can't have a body, so can't send URL to server
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain',
        },
        // Body data type must match "Content-Type" header        
        body: userInput,
    })

    return response
}

// Updates the UI so user can see the result of analysis
function updateUI(res) {

    // Find the elements
    const resultsElement = document.getElementById('results')
    const subjectivityElement = document.getElementById('subjectivity')
    const scoreElement = document.getElementById('score')

    // Update UI with the status message from the server
    resultsElement.innerHTML = `Status - ${res.message}`

    // If result was good, (contains a status key), update the rest of 
    // the UI elements
    if ("status" in res) {
        console.log('good data, should update')
        let subjectivity = res.subjectivity
        subjectivity = subjectivity.toLowerCase()
        subjectivity = subjectivity[0].toUpperCase() + subjectivity.substring(1);
        subjectivityElement.innerHTML = `Subjectivity - ${subjectivity}`

        // This score element uses the result of the function call
        // to scoreDescription
        scoreElement.innerHTML = `Positivity - ${scoreDescription(res.score_tag)}`
    }
}

// Takes the score returned from API and converts it to English
export function scoreDescription(score) {
    switch (score) {
        case "P+":
            return "Strongly Positive"
        case "P":
            return "Positive"
        case "NEU":
            return "Neutral"
        case "N":
            return "Negative"
        case "N+":
            return "Strongly Negative"
        case "NONE":
            return "No sentiment"
        default:
            return "Invalid data"
    }
}