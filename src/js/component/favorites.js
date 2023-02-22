import React from "react";


const Favorites = () => {
    return (
        <div>
            <div className="dropdown dropleft">
                <button type="buttom" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    <span>
                        holo
                        {/* {`Favorites ${store.favorites.length}`} */}
                    </span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <ul>
                        {store.favorites.length > 0 ? (
                            store.favorites.map((item, index) => {
                                return (
                                    <li key={index} className="dropdown-item" style={{ backgroundColor: "white" }}>
                                        {p.name}
                                        <h5 className="nameCharacters" style={{ color: "black" }}>
                                            {item}
                                            <button
                                                className="btn"
                                                onClick={() => {
                                                    actions.removeFavorites(item);
                                                }}>
                                                <i className="fas fa-minus-circle" style={{ color: "red" }} />
                                            </button>

                                        </h5>
                                    </li>
                                )
                            })
                        ) : (
                            <div>

                            </div>

                        )}

                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default Favorites;