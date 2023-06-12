import 'whatwg-fetch';

export default () => {
  // BEGIN
    const inputs = document.querySelectorAll('input[data-autocomplete]');

    inputs.forEach((input) => {
        input.addEventListener('input', async (e) => {
            const { value } = e.target;
            const url = new URL(e.target.dataset.autocomplete, window.location.origin);
            url.searchParams.set('search', value);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const listName = e.target.dataset.autocompleteName;
            const list = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);

            if (data.length > 0) {
                list.innerHTML = data.map((item) => `<li>${item}</li>`).join('');
            } else {
                list.innerHTML = '<li>Nothing</li>';
            }
        });
    });

  // END
};
