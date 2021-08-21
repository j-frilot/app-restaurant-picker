import React, { useState } from "react";
import stores from "./stores";

const Random = () => {
    const [selectedStore, setSelectedStore] = useState(0);

    const selectStore = (e) => {
        const length = stores.length; //get length of store list to help get number for random number expression
        setSelectedStore(Math.floor(Math.random() * length)); //gives the index of the selected store
    };

    return (
        <div>
            <img
                src={`${stores[selectedStore].logo}`}
                alt="name"
                className="logo"
            />
            <h2 className="name display-2 text-warning">
                {" "}
                {stores[selectedStore].name}{" "}
            </h2>
            <button
                type="submit"
                onClick={selectStore}
                className="btn btn-warning btn-large my-2"
            >
                Choose!
            </button>
        </div>
    );
};

export default Random;
