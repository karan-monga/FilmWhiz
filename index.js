const setupTextarea = document.getElementById('setup-textarea')
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

document.getElementById("send-btn").addEventListener("click", () => {
    if(setupTextarea.value){
        setupInputContainer.innerHTML = `<img src ="images/loading.svg" class="loading" id="loading">`
        movieBossText.innerText = `Ok, just wait a second while my digital brain digests that..`
    }
})

const apiKey = "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"

const url = "https://api.openai.com/v1/completions"

fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ${apiKey}'
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'What is the capital of Spain?'
    })
}). then(response => response.json()).then(data => console.log(data))