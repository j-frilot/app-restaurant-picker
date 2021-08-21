/////     stores data     /////
const stores = [
    {
        id: "0",
        name: "Steak Escape",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629494180/random-restaurant/steak-escape_yz37mn.png"
    },
    {
        id: "1",
        name: "Chick-Fil-A",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629494179/random-restaurant/chick-fil-a_k6llw4.png"
    },
    {
        id: "2",
        name: "Domino's",
        logo: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1629494180/random-restaurant/dominos_fbh8dg.jpg"
    }
];

const chooseBtn = document.querySelector(".choose");

const selectStore = (e) => {
    const length = stores.length; //get length of store list to help get number for random number expression
    const storeId = Math.floor(Math.random() * length); //gives the index of the selected store
    console.log(storeId);

    // const insertStore = stores.map((store) => {
    //     console.log(store);
    //     // return store;
    // });

    const storeInfoSection = document.querySelector(".store-info-section");

    storeInfoSection.innerHTML = `
    <img class="store-logo" src=${stores[storeId].logo} alt="name" />
    <h2 class="store-names display-2 text-warning">${stores[storeId].name}</h2>
    `;
};
chooseBtn.addEventListener("click", selectStore);

/////     list stores in the options list     /////
const optionsList = document.querySelector(".options-list");

const listOptions = () => {
    optionsList.innerHTML = stores
        .map((store) => {
            return `
                <li class="list-group-item bg-secondary">${store.name}</li>
            `;
        })
        .join("");
};

// <img
//     src={`${stores[selectedStore].logo}`}
//     alt="name"
//     className="logo"
// />
// <h2 className="name display-2 text-warning">
//     {" "}
//     {stores[selectedStore].name}{" "}
// </h2>
// <button
//     type="submit"
//     onClick={selectStore}
//     className="btn btn-warning btn-large my-2"
// >
//     Choose!
// </button>
