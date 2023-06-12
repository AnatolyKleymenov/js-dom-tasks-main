import escapeHtml from 'escape-html';

// BEGIN
export default () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = escapeHtml(event.target.elements.email.value);
    const name = escapeHtml(event.target.elements.name.value);
    const comment = escapeHtml(event.target.elements.comment.value);
  
    const newContent = `
      <div>
        <p>Feedback has been sent</p>
        <div>Email: ${email}</div>
        <div>Name: ${name}</div>
        <div>Comment: ${comment}</div>
      </div>
    `;
    
    form.innerHTML = newContent;
  });
};
// END