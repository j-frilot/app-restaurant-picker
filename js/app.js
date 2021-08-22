/////     stores data     /////
let stores = [];

/////     STORE OPTIONS     /////
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
    },
    {
        name: "Waffle House",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629604096/random-restaurant/waffle-house_uyzdv5.png"
    },
    {
        name: "Taco Bell",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629604132/random-restaurant/taco-bell_ff8qay.jpg"
    },
    {
        name: "Sonic",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629604165/random-restaurant/sonic_o7mqjw.png"
    }
];

/////     GETTING CHECKBOX STUFF     /////
const checkboxes = document.querySelectorAll("input");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        // console.log("added: ", checkbox.value);
        for (let i = 0; i < optionalStores.length; i++) {
            if (checkbox.checked) {
                //if checked, must add to list of options
                if (checkbox.value == optionalStores[i].name) {
                    stores.push(optionalStores[i]);
                }
            }
        }
        if (!checkbox.checked) {
            //in the case that a choice is unchecked. must be taken off list to prevent unfair advantage
            console.log(checkbox.value);
            const uncheckedIndex = stores.findIndex(
                //finding the index of store in stores array that was unchecked
                (store) => checkbox.value == store.name
            );
            stores.splice(uncheckedIndex, 1); //using the index that was found in order to remove it from the array
            // console.log("removed: ", uncheckedIndex);
        }
        // console.log(stores);
    });
});

/////     CLICK CHOOSE AND SELECT RANDOM STORE      /////
const chooseBtn = document.querySelector(".choose");

const selectStore = (e) => {
    if (stores.length === 0) {
        document.querySelector(".error").style.display = "block";
    }

    const length = stores.length; //get length of store list to help get number for random number expression

    const storeIdx = Math.floor(Math.random() * length); //gives the index of the selected store
    const storeInfoSection = document.querySelector(".store-info-section");

    storeInfoSection.innerHTML = `
    <img class="store-logo" src=${stores[storeIdx].logo} alt="name" />
    <h2 class="store-names display-2 text-warning">${stores[storeIdx].name}</h2>
    `;
};
chooseBtn.addEventListener("click", selectStore);
