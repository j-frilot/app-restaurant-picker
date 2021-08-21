import React from "react";
import stores from "./stores";

const Random = () => {
    const storeId = Math.floor(Math.random() * 3);
    const selectedLogo = stores[storeId].logo;
    const selectedName = stores[storeId].name;

    return (
        <div>
            <img src={`${selectedLogo}`} alt="name" className="logo" />
            <h2 className="name display-2 text-warning"> {selectedName} </h2>
        </div>
    );
};

export default Random;
