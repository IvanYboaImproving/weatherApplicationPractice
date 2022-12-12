const cities = [
    { city: "Guadalajara", country: "México", lat: "20.676655020772536", lon: "-103.34701838047076" },
    { city: "Zapopan", country: "México", lat: "20.71153210946333", lon:"-103.41000846699498" },
    { city: "Tlaquepaque", country: "México", lat: "20.639709256720273", lon:"-103.31184347458104" },
    { city: "Tlajomulco de Zuñiga", country: "México", lat: "20.474965135263087", lon:"-103.44777841940162" },
    { city: "Tonalá", country: "México", lat: "20.624641475269556", lon:"-103.24182613132547" }
  ];


  export const getCities = () => (cities);

  export const getCountryNameByCoords = (lat) => {
    return cities.filter(c => c.lat === lat)[0].country
  }