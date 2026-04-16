export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  fuel: string;
  transmission: string;
  horsepower: number;
  color: string;
  image: string;
  images: string[];
  description: string;
}

// Placeholder data until Autonet API is connected
export const placeholderCars: Car[] = [
  {
    id: "1",
    make: "BMW",
    model: "520d xDrive",
    year: 2021,
    mileage: 45000,
    price: 549000,
    fuel: "Diesel",
    transmission: "Automat",
    horsepower: 190,
    color: "Svart",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80",
    ],
    description: "Velholdt BMW 520d med xDrive firehjulsdrift. Fullt utstyrt med navigasjon, skinninteriør og sportspakke.",
  },
  {
    id: "2",
    make: "Mercedes-Benz",
    model: "GLC 300e",
    year: 2022,
    mileage: 28000,
    price: 699000,
    fuel: "Hybrid",
    transmission: "Automat",
    horsepower: 313,
    color: "Hvit",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    ],
    description: "Premium SUV med lavt forbruk. AMG-Line, panoramatak, adaptiv cruisekontroll.",
  },
  {
    id: "3",
    make: "Audi",
    model: "A6 Avant 45 TFSI",
    year: 2020,
    mileage: 62000,
    price: 489000,
    fuel: "Bensin",
    transmission: "Automat",
    horsepower: 245,
    color: "Grå",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    ],
    description: "Romslig stasjonsvogn med quattro. S-Line, Matrix LED, virtuell cockpit.",
  },
  {
    id: "4",
    make: "Volvo",
    model: "XC60 T6 Recharge",
    year: 2023,
    mileage: 15000,
    price: 749000,
    fuel: "Hybrid",
    transmission: "Automat",
    horsepower: 350,
    color: "Blå",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    ],
    description: "Nesten ny Volvo XC60 med plug-in hybrid. Inscription, luftfjæring, Bowers & Wilkins.",
  },
  {
    id: "5",
    make: "Tesla",
    model: "Model 3 Long Range",
    year: 2023,
    mileage: 12000,
    price: 399000,
    fuel: "Elektrisk",
    transmission: "Automat",
    horsepower: 351,
    color: "Rød",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    ],
    description: "Tesla Model 3 med lang rekkevidde. Autopilot, premium interiør, 580 km rekkevidde.",
  },
  {
    id: "6",
    make: "Porsche",
    model: "Cayenne E-Hybrid",
    year: 2021,
    mileage: 38000,
    price: 1089000,
    fuel: "Hybrid",
    transmission: "Automat",
    horsepower: 462,
    color: "Svart",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    ],
    description: "Eksklusiv Porsche Cayenne med hybrid. Sport Chrono, PASM, 21\" felger.",
  },
];
