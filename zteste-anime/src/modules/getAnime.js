const form = document.querySelector('.form');
const input = document.querySelector('.input-search');

export function setupSearchListener(callback) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const query = input.value.trim();

        if(query) callback(query);

        input.value = '';
    });
}

export function setupAutoCompleteListener(callback) {
    input.addEventListener('input', () => {
        const query = input.value.trim();
        callback(query);
    });
}
