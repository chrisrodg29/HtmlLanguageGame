import { generateWords } from "./genTools/phonetics-generator.js"

//copied
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}

//returns { lower = lowercase-string, upper = TitleCaseString }
function getLowerAndUpper(str) {
    var lower = str.toLowerCase();
    var upper = toTitleCase(str);
    return { lower, upper };
}


function replaceSpans(clazz, userInput, defaultVal) {
    var spans = document.getElementsByClassName(clazz);
    var hasInput = userInput.length != 0;

    var newText = '';
    var masked = true;

    if (hasInput) {
        newText = userInput;
        masked = false;
    }

    const newTextVersions = getLowerAndUpper(newText);

    for (let element of spans) {
        if (!hasInput) {
            element.innerText = defaultVal
        } else {
            if (element.classList.contains('upper')) {
                element.innerText = newTextVersions.upper;
            } else {
                element.innerText = newTextVersions.lower;
            }
            if (element.classList.contains('plural')) {
                element.innerText += 's';
            }
        }

        if (masked) {
            element.classList.add('giant');
        } else {
            element.classList.remove('giant');
        }
    };
}
window.replaceSpans = replaceSpans;

document.addEventListener('DOMContentLoaded', function() {
    var words = generateWords(5, 20);
    var text = "";
    words.forEach(word => {
        text += word + "\n";
    });
    var target = document.getElementById("giantWords");
    target.style.whiteSpace = 'pre';
    target.innerText = text;
});