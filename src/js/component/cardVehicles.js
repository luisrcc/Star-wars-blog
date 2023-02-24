import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";;


const VehiclesList = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getVehicleApi();
    }, []);
    return (
        <div className="cards">
            {!!store.getVehicles &&
                store.getVehicles.map((item, index) => {
                    return (
                        <div
                            className="card"
                            key={index}
                            style={{
                                width: 300
                            }}>
                            <img className="card-img-top" src={img1} />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <Link
                                    to={"/viewVehicles/" + item.name}
                                    className="btn btn-primary"
                                    onClick={() => actions.getVehicleApi(item.url)}>
                                    Learn More
                                </Link>
                                <a
                                    onClick={() => {
                                        actions.addfavorites(item.name);
                                    }}>
                                    <button type="button" className="btn btn-light btn-sm">
                                        {store.favorites.includes(item.name) ? (
                                            <i className="fas fa-heart fa-2x" style={{ color: "#F7DC6F" }} />
                                        ) : (
                                            <i className="far fa-heart fa-2x" />
                                        )}
                                    </button>
                                </a>
                            </div>
                        </div>
                    );
                })}
        </div>

    )
}

export default VehiclesList;