function createElement(data) {
    const extract = JSON.parse(data).query.pages["21721040"].extract
    const p = document.createElement("p")
    p.innerText = extract
    document.body.appendChild(p)
}

function queryWikipedia(callback) {
    const re = new XMLHttpRequest()
    re.onreadystatechange = function () {
    if (re.readyState == XMLHttpRequest.DONE) {
        callback(re.responseText)
    }
}
re.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
re.send("")
}

queryWikipedia(createElement)
