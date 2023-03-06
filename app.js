/**
 * Function to be used to convert text into marked-down version using JS Marked library
 * @param {String} sourceElementId
 * @param {String} targetElementId
 */
function parseTextUsingMarked(sourceElementId, targetElementId) {
    let sourceElement = document.getElementById(sourceElementId);
    let targetElement = document.getElementById(targetElementId);
    let sourceElementArray = sourceElement.value.split('\n');
    if (sourceElement.value == "") {
        sourceElementArray = sourceElement.placeholder.split('\n');
    }
    let retHtml = marked.parse("");
    sourceElementArray.map((item) => retHtml = retHtml + (marked.parse(item)));
    targetElement.innerHTML = retHtml;
}
/**
 * Function to be used to insert the placeholder text for the input box; in practice, for this project the elementId will always be 'editor'
 * @param {String} elementId
 */
function placeholderText(elementId) {
    let myPHTxtArray = [
        '# On a journey towards markdown magic go we',
        '## Which is to say that we are going to use the JavaScript marked library to avail of some nifty markup.',
        '**Bold text may be rendered by enclosing a string in double-asterisks.**',
        '*If italics are your bag, then just enclose the relevant portion of text between single asterisks.*',
        '- Anyone who wishes to render bullet points just needs to open the line with a single asterisk or a single dash - the result will be the same whichever route you take.',
        'And if you commence the line with a dash, the result looks something like...',
        'To indent a line, just place the right - arrow character in front, e.g.',
        '> This line has been indented by a fixed margin.',
        '>> This line has been double-indented.',
        'You want to render a code-block?',
        '`Well my friend, it is your lucky day because that can be done too: just enclose the line with backticks.`',
        'Nifty, huh?' ,
        'Now suppose you want to put in a horizontal line, to emphasise the end of a section. How easy is that to do? All the easy: just type in three consecutive dashes, and press the carriage return',
        '---',
        'Et voila!',
        'Now, you might also be wondering how to reference the source of this bounty which you have worked to your advantage.Well the site is [here](https://marked.js.org/) and while we were at it, we managed to show you how this markdown tool can be used to create hyperlinks: the display text is shown first, in square brackets, followed by the url in round brackets',
        "But it's not just external links that we can use with this tool - we have the possibility to display external images as well. To do that, we write an exclamation point, the display text in square brackets and we follow that with the url in round brackets, so you can get users seeing the world just the way you do... ![JavaScript Everywhere meme](https://media.makeameme.org/created/javascript-javascript.jpg)",
        "Oh, last thing to be aware of - a pair of consecutive spaces will result in",
        "a line-break.",
    ]
    //let placeholderOutput = document.createElement("div");
    let placeholderOutput = ""
    myPHTxtArray.map((item) => placeholderOutput = placeholderOutput + marked.parse(item));
    //document.getElementById(elementId).appendChild(placeholderOutput);
    document.getElementById(elementId).innerHTML = placeholderOutput;
}
/**
 * Retrieves rich-text html for the clipboard
 * using method in https://stackoverflow.com/a/50067769
 */
function copyMarkedUpText(elementId) {
    let itemForCopy = document.getElementById(elementId).innerHTML;
    const listener = (evnt) => {
        evnt.clipboardData.setData("text/html", itemForCopy);
        evnt.clipboardData.setData("text/plain", itemForCopy);
        evnt.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
}
/**
 * Sub to clear the input and output sections of the form
 */
function clearInputAndOutputAreas() {
    clearOutputArea();
    let inputText = document.getElementById("editor");
    inputText.value = ""
    inputText.placeholder = "";
}
/**
 * Sub to clear the output section of the form
 */
function clearOutputArea() {
    let markedUpText = document.getElementById("preview");
    markedUpText.innerHTML = "";
    paragraphIdCounter = 0;
}