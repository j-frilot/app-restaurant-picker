import React from "react";
import stores from "./stores";

const Options = () => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-4 col-md-4">
                <h3>Options:</h3>
                <ul className="list-group list-group-flush ">
                    {stores.map((store) => (
                        <li
                            key={store.id}
                            className="list-group-item bg-secondary"
                        >
                            {store.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6"></div>
        </div>
    );
};

export default Options;
