function tabs() {
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(tab => tab.style.display = 'none');
        tabs.forEach(tab => tab.classList.remove('tabheader__item_active'))
    }

    function showTabContent(i) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabParent.addEventListener('click', (e) => {
        e.preventDefault();

        tabs.forEach((item, i) => {
            if (e.target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });

};

export default tabs;