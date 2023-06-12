// BEGIN
export default function extractData(document) {
    let paragraphs = document.querySelectorAll('p');
    return Array.from(paragraphs).map(p => p.textContent.trim());
  }
// END