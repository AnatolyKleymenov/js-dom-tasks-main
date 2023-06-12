import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
  const elements = document.body.getElementsByTagName('*');

  for (const element of elements) {
    const classes = Array.from(element.classList);

    for (const oldClass of classes) {
      const newClass = camelCase(oldClass);
      element.classList.replace(oldClass, newClass);
    }
  }
}
// END