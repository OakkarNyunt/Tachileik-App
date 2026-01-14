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
const hospital = require("@/assets/icons/hospital.jpg");

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
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 2,
    title: "Markets",
    icon: shop,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 3,
    title: "Restaurants",
    icon: restaurant,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 4,
    title: "Phone Shops",
    icon: phone,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 5,
    title: "Computer Shops",
    icon: computer,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 6,
    title: "Hotels",
    icon: hotel,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 7,
    title: "Hospitals",
    icon: hospital,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 8,
    title: "Police Station",
    icon: hotel,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 9,
    title: "Monestary",
    icon: hotel,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 10,
    title: "KTV",
    icon: hotel,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 11,
    title: "Message",
    icon: hotel,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
  {
    id: 12,
    title: "Electronic",
    icon: hotel,
    children: [
      { id: 101, title: "Shwe Dagon", icon: pagoda },
      { id: 102, title: "Kyeikhteeyo", icon: pagoda },

      { id: 103, title: "Ananda Temple", icon: pagoda },
      { id: 104, title: "Ananda Temple", icon: pagoda },
      { id: 105, title: "Ananda Temple", icon: pagoda },
      { id: 106, title: "Ananda Temple", icon: pagoda },
      { id: 107, title: "Ananda Temple", icon: pagoda },
      { id: 108, title: "Ananda Temple", icon: pagoda },
      { id: 109, title: "Ananda Temple", icon: pagoda },
      { id: 110, title: "Ananda Temple", icon: pagoda },
      { id: 111, title: "Ananda Temple", icon: pagoda },
      { id: 112, title: "Ananda Temple", icon: pagoda },
    ],
  },
];
