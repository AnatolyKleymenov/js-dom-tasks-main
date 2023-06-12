// BEGIN
export default function prettify(document) {
    const divs = document.getElementsByTagName('div');
  
    for (const div of divs) {
      const childNodes = Array.from(div.childNodes);
      for (const node of childNodes) {
        if (node instanceof Text && /\S/.test(node.textContent)) {
          const p = document.createElement('p');
          p.textContent = node.textContent;
          div.replaceChild(p, node);
        }
      }
    }
  }  
// END