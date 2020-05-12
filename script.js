// alert("HELLO");
censor(document.body);

function censor(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(censor);
    } else if (element.nodeType === Text.TEXT_NODE) {
        element.textContent = element.textContent.replace(/coronavirus/gi, "██████████")
        element.textContent = element.textContent.replace(/covid-19/gi, "██████████")
        element.textContent = element.textContent.replace(/covid19/gi, "██████████")
    }
}