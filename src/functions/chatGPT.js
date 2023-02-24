
const style = "javascript";
console.log(style)
const topic = "Tecnología"
console.log(topic)
const mood = "normal";
console.log(mood)
const prompt = `Write a blog post and its title, with a ${mood} tone, on the topic of ${topic}. Consider the following themes: ${style}.\n##`;
const API_KEY = "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";
var API_URL = "https://api.openai.com/v1/completions";



const requestData = {
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 7
};

const requestHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
};


const api = () => {
    fetch(API_URL, {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(requestData)
    })
        .then(response => response.json())
        .then(data =>console.log(data))
        .catch(error => console.error(error));

}

