function forms() {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    forms.forEach(item => postData(item));

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const formData = new FormData(form);

            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value
            });

            fetch('server.php', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
                setTimeout(() => statusMessage.remove(), 4000);
            })
            .catch( () => statusMessage.textContent = message.failure)
            .finally(() => form.reset());
        });
    }
};

export default forms;