const users = [
  {
    username: "user1",
    password: "user1",
    id: 1,
  },
  {
    username: "user2",
    password: "user2",
    id: 1,
  },
];

const items = [
  {
    id: 1,
    name: "CLEANSING LOTION  SENSITIVE 125ML",
    category: "Cleaners",
    price: "25.67",
    image: "CLEANSING LOTION  SENSITIVE 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 2,
    name: "CREAM CLEANSER PUMP  SIGNATURE 125ML",
    category: "Cleaners",
    price: "23.00",
    image: "CREAM CLEANSER PUMP  SIGNATURE 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 3,
    name: "FOAMING FACIAL CLEANSER PUMP  SIGNATURE 125ML",
    category: "Cleaners",
    price: "54.90",
    image: "FOAMING FACIAL CLEANSER PUMP  SIGNATURE 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 4,
    name: "GEL CLEANSER  SENSITIVE 125ML",
    category: "Cleaners",
    price: "12.67",
    image: "GEL CLEANSER  SENSITIVE 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 5,
    name: "MICELLAR CLEANSING WATER 250ML",
    category: "Cleaners",
    price: "45.23",
    image: "MICELLAR CLEANSING WATER 250ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 6,
    name: "NOURISHING CREAM CLEANSER  ROSEHIP 125ML",
    category: "Cleaners",
    price: "12.76",
    image: "NOURISHING CREAM CLEANSER  ROSEHIP 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 7,
    name: "PURIFYING GEL CLEANSER  OIL BALANCING 125ML",
    category: "Cleaners",
    price: "35.67",
    image: "PURIFYING GEL CLEANSER  OIL BALANCING 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 8,
    name: "RADIANCE GEL CLEANSER  BRIGHTENING  125ML",
    category: "Cleaners",
    price: "34.27",
    image: "RADIANCE GEL CLEANSER  BRIGHTENING  125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 9,
    name: "DETOXIFYING FACIAL SCRUB  SUPER GREENS 125ML",
    category: "Exfoliators",
    price: "14.23",
    image: "DETOXIFYING FACIAL SCRUB  SUPER GREENS 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 10,
    name: "JELLY EXFOLIATOR  BRIGHTENING  125ML",
    category: "Exfoliators",
    price: "14.26",
    image: "JELLY EXFOLIATOR  BRIGHTENING  125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 11,
    name: "PORE REFINING FACIAL SCRUB  OIL BALANCING 125ML",
    category: "Exfoliators",
    price: "64.23",
    image: "PORE REFINING FACIAL SCRUB  OIL BALANCING 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 12,
    name: "REJUVENATING FACIAL SCRUB  ROSEHIP 125ML",
    category: "Exfoliators",
    price: "23.67",
    image: "REJUVENATING FACIAL SCRUB  ROSEHIP 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 13,
    name: "REVITALIZING FACIAL SCRUB  SIGNATURE 125ML",
    category: "Exfoliators",
    price: "42.23",
    image: "REVITALIZING FACIAL SCRUB  SIGNATURE 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 14,
    name: "DETOXIFYING CLAY MASQUE  SUPER GREENS 100ML",
    category: "Masks",
    price: "14.73",
    image: "DETOXIFYING CLAY MASQUE  SUPER GREENS 100ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 15,
    name: "HYDRATING FACIAL MASQUE  SIGNATURE 100ML",
    category: "Masks",
    price: "18.90",
    image: "HYDRATING FACIAL MASQUE  SIGNATURE 100ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 16,
    name: "PINK CLAY FACIAL MASQUE  SENSITIVE 100ML",
    category: "Masks",
    price: "44.21",
    image: "PINK CLAY FACIAL MASQUE  SENSITIVE 100ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 17,
    name: "PURIFYING FACIAL MASQUE  SIGNATURE 100ML",
    category: "Masks",
    price: "67.12",
    image: "PURIFYING FACIAL MASQUE  SIGNATURE 100ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 18,
    name: "RICH MOISTURE FACIAL MASQUE  ROSEHIP 100ML",
    category: "Masks",
    price: "46.77",
    image: "RICH MOISTURE FACIAL MASQUE  ROSEHIP 100ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 19,
    name: "GLOW NIGHT MOISTURISER  BRIGHTENING  50ML",
    category: "Moisturizers",
    price: "57.77",
    image: "GLOW NIGHT MOISTURISER  BRIGHTENING  50ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 20,
    name: "HYDRAFUSION NIGHT CREAM  HYDRATION 60ML",
    category: "Moisturizers",
    price: "12.65",
    image: "HYDRAFUSION NIGHT CREAM  HYDRATION 60ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 21,
    name: "ILLUMINATING MOISTURISER  BRIGHTENING  60ML",
    category: "Moisturizers",
    price: "65.25",
    image: "ILLUMINATING MOISTURISER  BRIGHTENING  60ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 22,
    name: "MOISTURE RESTORING NIGHT CREAM  SIGNATURE 120ML",
    category: "Moisturizers",
    price: "43.67",
    image: "MOISTURE RESTORING NIGHT CREAM  SIGNATURE 120ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 23,
    name: "NUTRIENT RICH FACIAL MOISTURISER  SUPER GREENS 125ML",
    category: "Moisturizers",
    price: "67.34",
    image: "NUTRIENT RICH FACIAL MOISTURISER  SUPER GREENS 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  {
    id: 24,
    name: "REHYDRATING GEL CREAM  HYDRATION 60ML",
    category: "Moisturizers",
    price: "67.34",
    image: "REHYDRATING GEL CREAM  HYDRATION 60ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 25,
    name: "RESTORATIVE NIGHT CREAM  PURELY AGELESS 120ML",
    category: "Moisturizers",
    price: "41.32",
    image: "RESTORATIVE NIGHT CREAM  PURELY AGELESS 120ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 26,
    name: "CLARIFYING FACIAL TONIC  OIL BALANCING 125ML",
    category: "Toners",
    price: "53.23",
    image: "CLARIFYING FACIAL TONIC  OIL BALANCING 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
  ,
  {
    id: 27,
    name: "HYDRATING MIST TONER  SIGNATURE 125ML",
    category: "Toners",
    price: "56.22",
    image: "HYDRATING MIST TONER  SIGNATURE 125ML",
    availableQty: "",
    soldQty: "",
    description: "",
  },
];

module.exports = { users, items };
