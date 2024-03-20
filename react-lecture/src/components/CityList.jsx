import City from "./City";


function CityList() {
  const cities = [
    {
      id: 1,
      name: "Tokyo",
      population: 37400068,
      country: "Japan",
    },
    {
      id: 2,
      name: "Delhi",
      population: 29399141,
      country: "India",
    },
    {
      id: 3,
      name: "Shanghai",
      population: 26317104,
      country: "China",
    },
    {
      id: 4,
      name: "São Paulo",
      population: 22071600,
      country: "Brazil",
    },
    {
      id: 5,
      name: "Mexico City",
      population: 21782378,
      country: "Mexico",
    },
    {
      id: 6,
      name: "Cairo",
      population: 20484955,
      country: "Egypt",
    },
  ];
  return (
    <>
      <ul>
        {cities.map((city) => {
          return <City
              key={city.id}
              name={city.name}
              population={city.population}
              country={city.country}
            />
		  
          
        })}
      </ul>
    </>
  );
}

export default CityList;
