const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			getPerson: [],
			getVehicles: [],
			getPlanet: [],
			favorites: [],
			characterDetail:[],
			vehiclesDetails: [],
			planetDetail:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPersonApi: async ()=>{
				const settings = {
					method: "GET",
					headers:{
						"Content-Type": "application.json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/people", settings);
				const json = await response.json();

				setStore({getPerson: json.results});
			},
			getVehicleApi: async ()=>{
				const settings = {
					method: "GET",
					headers: {
						"content-Type": "application.json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/vehicles", settings);
				const json = await response.json();

				setStore({getVehicles: json.results});
			},
			getPlanetApi: async () =>{
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application.json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/planets");
				const json = await response.json();

				setStore({ getPlanet: json.results});
			},
			addFavorites: item =>{
				const store = getStore();
				setStore({favorites:[...store.favorites,item]});
			},
			removeFavorites: item =>{
				const store = getStore();
				const removeName = store.favorites(name=> name != item);
				setStore({ favorites: removeName});
			}

		}
	};
};

export default getState;
