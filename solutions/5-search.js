export default (document) => {
  // BEGIN
  const title = document.querySelector('.content h1').textContent.trim();
  const description = document.querySelector('.content .description').textContent.trim();
  const articlesElements = document.querySelectorAll('.content .links div');
  const items = Array.from(articlesElements).map((articleElement) => {
    const articleTitle = articleElement.querySelector('h2 a').textContent.trim();
    const articleDescription = articleElement.querySelector('p').textContent.trim();
    return { title: articleTitle, description: articleDescription };
  });
  return { title, description, items };
  // END
};
