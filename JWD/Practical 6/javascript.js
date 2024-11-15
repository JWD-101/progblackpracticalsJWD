function getRandomNoun(){
    const nouns = ["meat", "memory", "hall", "setting", "article"]
    return nouns[Math.floor(Math.random()*5)]
}
function getRandomAdjective(){
    const adjectives = ["disagreeable", "repulsive", "obese", "graceful", "mammoth"]
    return adjectives[Math.floor(Math.random()*5)]
}
function getRandomVerb(){
    const verbs = ["fancy", "rule", "stick", "reckon", "earn"]
    return verbs[Math.floor(Math.random()*5)]
}
function getRandomAdverb(){
    const adverbs = ["quietly", "furiously", "simply", "wildly", "wholly"]
    return adverbs[Math.floor(Math.random()*5)]
}
document.getElementById("mainButton").addEventListener("click", function(){
    const sentence = document.getElementById("sentence")
    const randomStuff = ("The " + getRandomAdjective()+" "+ getRandomNoun()+" " +getRandomVerb()+" "+ getRandomAdverb())
    sentence.innerHTML = `<p class="h1"> ${randomStuff} </h1>`;
})