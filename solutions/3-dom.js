// BEGIN
let bodyContent = document.body.innerHTML;
let lines = bodyContent.trim().split('\n');
let newBodyContent = lines.map(line => `<p>${line.trim()}</p>`).join('\n');
document.body.innerHTML = newBodyContent;
// END