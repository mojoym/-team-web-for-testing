const filePath = '../json-files/places.json';
const navTabs = document.getElementById('places-nav-tab');
const tabContent = document.getElementById('places-content-tab');

fetch(filePath)
    .then(response => response.json())
    .then(data => {

        // add elements to div with class nav-tabs

        for (const item of data) {
            const newTabsItem = document.createElement('li');
            const newLink = document.createElement('a');
            newLink.classList.add('places-nav-link');
            newLink.textContent = `${item.country}`;
            newLink.href = `#${item.className}`;
            newTabsItem.appendChild(newLink);
            if (item.className === 'oslo') newTabsItem.classList.add("places-nav-item", "active");
            else newTabsItem.classList.add("places-nav-item");
            navTabs.appendChild(newTabsItem);
        }

        // add elements to div with class tab-content
        for (const item of data) {
            const newCountryItem = document.createElement('div');
            if (item.className === 'oslo') newCountryItem.classList.add('places-item', 'active');
            else newCountryItem.classList.add('places-item');
            newCountryItem.id = item.className;

            const newCountryPhoto = document.createElement('div');                                                              // add <div> block with class='city-photo, $country'
            newCountryPhoto.classList.add('city-photo', `${item.className}`);
            newCountryPhoto.style.backgroundImage = `url('${item.photo}')`;

            const newCountryBlock = document.createElement('div');                                                              // add <div> block with class='city'
            newCountryBlock.classList.add('city');

            const newCityPoint = document.createElement('p');                                                                   // add <p> with class='city__point'
            newCityPoint.classList.add('city__point');
            newCityPoint.textContent = item.point;

            const newCityMainInfo = document.createElement('p');                                                                // add <p> with class='city__main-info'
            newCityMainInfo.classList.add('city__main-info');
            newCityMainInfo.textContent = item.mainInfo;

            const newCityNightsQuantity = document.createElement('p');                                                          // add <p> with class='city__nights-quantity'
            newCityNightsQuantity.classList.add('city__nights-quantity');
            newCityNightsQuantity.textContent = item.nightsQuantity;

            const newCityHotelName = document.createElement('p');                                                               // add <p> with class='city__hotel-name'
            newCityHotelName.classList.add('city__hotel-name');
            newCityHotelName.textContent = item.name;

            const newCityHotelMainInfo = document.createElement('p');                                                           // add <p> with class='city__info'
            newCityHotelMainInfo.classList.add('city__info');
            newCityHotelMainInfo.textContent = item.info;

            const newCityHotelInfo = document.createElement('div');                                                             // add <div> block with class='city__hotel-info'
            newCityHotelInfo.classList.add('city__hotel-info');



            for (const hotelInfoItem of item.hotelInfo) {                                                                       // iterate all elements of hotelInfo
                const newCityHotelInfoItem = document.createElement('div');                                                     // add <div> block with class='city__hotel-info_item'
                newCityHotelInfoItem.classList.add('city__hotel-info_item');

                const newImage = document.createElement('img');
                newImage.src = hotelInfoItem.url;
                newImage.alt = hotelInfoItem.text;

                const newText = document.createElement('p');
                newText.textContent = `- ${hotelInfoItem.text}`;

                newCityHotelInfoItem.appendChild(newImage);
                newCityHotelInfoItem.appendChild(newText);
                newCityHotelInfo.appendChild(newCityHotelInfoItem);
            }

            const appluButton = document.createElement('a');                                                                    // add <a> with class='city__button-book'
            appluButton.classList.add('city__button-book');
            appluButton.textContent = "Book now";
            appluButton.href = "#contact-form";

            newCityHotelInfo.appendChild(appluButton);


            // block of code, which appends Child classes step by step

            // adding blocks into <div> with class='city' 
            newCountryBlock.appendChild(newCityPoint);
            newCountryBlock.appendChild(newCityMainInfo);
            newCountryBlock.appendChild(newCityNightsQuantity);
            newCountryBlock.appendChild(newCityHotelName);
            newCountryBlock.appendChild(newCityHotelMainInfo);
            newCountryBlock.appendChild(newCityHotelInfo);



            // adding blocks into <div> with class "tab-pane"
            newCountryItem.appendChild(newCountryPhoto);
            newCountryItem.appendChild(newCountryBlock);
            tabContent.appendChild(newCountryItem);
        }
    })
    .catch(error => console.error(error));