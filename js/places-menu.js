setTimeout(() => {
    const navItem = document.querySelectorAll('.places-nav-item');
    const navLink = document.querySelectorAll('.places-nav-link');
    const placesItem = document.querySelectorAll('.places-item');

    navLink.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();                         // disable transfor using link

            navItem.forEach((item) => {                     // del class active from places-nav-item
                item.classList.remove('active');
            });

            navItem[index].classList.add('active');         // add class active to selected places-nav-item

            placesItem.forEach((tab) => {                   // del class active from placesItem
                tab.classList.remove('active');
            });

            const targetId = link.getAttribute('href').substring(1);    // get id
            const targetTab = document.getElementById(targetId);        // find element by id
            targetTab.classList.add('active');                          // add class active to places-nav-link
        });
    });
}, 3000);                                                               // timeout 3000 because we build places.partial from json file

