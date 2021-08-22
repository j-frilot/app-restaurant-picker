/////     stores data     /////
let stores = [];

const optionalStores = [
    {
        name: "Steak Escape",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629494180/random-restaurant/steak-escape_yz37mn.png"
    },
    {
        name: "Chick-Fil-A",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629494179/random-restaurant/chick-fil-a_k6llw4.png"
    },
    {
        name: "Domino's",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629494180/random-restaurant/dominos_fbh8dg.jpg"
    },
    {
        name: "Wendy's",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629584264/random-restaurant/wendy_s_hgf9qd.jpg"
    },

    {
        name: "McDonald's",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629584257/random-restaurant/mcdonalds_zvhoxa.jpg"
    },

    {
        name: "Burger King",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629584256/random-restaurant/burger-king_aooinx.jpg"
    }
];

/////     GETTING CHECKBOX STUFF     /////
const checkboxes = document.querySelectorAll("input");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        console.log(checkbox);
        for (let i = 0; i < optionalStores.length; i++) {
            if (checkbox.checked) {
                if (checkbox.value == optionalStores[i].name) {
                    stores.push(optionalStores[i]);
                }
            }
            //             // if (!checkbox.checked) {
            //             //     const uncheckedIdx = stores.indexOf(optionalStores[i]);
            //             //     console.log(uncheckedIdx);
            //             // }
        }
        console.log(stores);
    });
});

/////     CLICK CHOOSE AND SELECT RANDOM STORE      /////
const chooseBtn = document.querySelector(".choose");

const selectStore = (e) => {
    const length = stores.length; //get length of store list to help get number for random number expression

    const storeIdx = Math.floor(Math.random() * length); //gives the index of the selected store
    const storeInfoSection = document.querySelector(".store-info-section");

    storeInfoSection.innerHTML = `
    <img class="store-logo" src=${stores[storeIdx].logo} alt="name" />
    <h2 class="store-names display-2 text-warning">${stores[storeIdx].name}</h2>
    `;
};
chooseBtn.addEventListener("click", selectStore);

/////     LIST STORES IN THE OPTIONS LIST     /////
// const optionsList = document.querySelector(".options-list");

// optionsList.innerHTML = stores
//     .map((store) => {
//         return `<li class="list-group-item bg-secondary">${store.name}</li>`;
//     })
//     .join("");
