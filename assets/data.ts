const img1 = require("@/assets/photo/tachileik-1.jpg");
const img2 = require("@/assets/photo/tachileik-2.jpg");
const img3 = require("@/assets/photo/tachileik-3.webp");

const coffee = require("@/assets/icons/coffee.jpg");
const computer = require("@/assets/icons/computer.png");
const hotel = require("@/assets/icons/hotel.png");
const phone = require("@/assets/icons/phone.png");
const restaurant = require("@/assets/icons/restaurant.jpg");
const shop = require("@/assets/icons/shop.png");
const pagoda = require("@/assets/icons/pagoda.png");

export const CarouselImages = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
];
// coffee, Pagoda, market, restaurants, phone, computer shop , hotel, Bar

export const Categories = [
  {
    id: 1,
    title: "Pagodas",
    icon: pagoda,
  },
  {
    id: 2,
    title: "Markets",
    icon: shop,
  },
  {
    id: 3,
    title: "Restaurants",
    icon: restaurant,
  },
  {
    id: 4,
    title: "Phone Shops",
    icon: phone,
  },
  {
    id: 5,
    title: "Computer Shops",
    icon: computer,
  },
  {
    id: 6,
    title: "Hotels",
    icon: hotel,
  },
];
