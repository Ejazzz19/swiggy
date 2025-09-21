export const locations = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad"
];

export const restaurants = [
  // Mumbai Restaurants
  {
    id: 1,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    cuisine: "Indian, Chinese",
    rating: 4.2,
    deliveryTime: "30-40 min",
    priceForTwo: 500,
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Mumbai Local",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
    cuisine: "Street Food, Chaat",
    rating: 4.4,
    deliveryTime: "20-30 min",
    priceForTwo: 300,
    location: "Mumbai"
  },
  {
    id: 3,
    name: "Coastal Flavors",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    cuisine: "Seafood, Coastal",
    rating: 4.5,
    deliveryTime: "35-45 min",
    priceForTwo: 800,
    location: "Mumbai"
  },

  // Delhi Restaurants
  {
    id: 4,
    name: "Punjab Grill",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800",
    cuisine: "North Indian, Punjabi",
    rating: 4.6,
    deliveryTime: "30-40 min",
    priceForTwo: 700,
    location: "Delhi"
  },
  {
    id: 5,
    name: "Delhi 6",
    image: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=800",
    cuisine: "Street Food, North Indian",
    rating: 4.3,
    deliveryTime: "25-35 min",
    priceForTwo: 400,
    location: "Delhi"
  },
  {
    id: 6,
    name: "Mughal Darbar",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    cuisine: "Mughlai, North Indian",
    rating: 4.4,
    deliveryTime: "35-45 min",
    priceForTwo: 600,
    location: "Delhi"
  },

  // Bangalore Restaurants
  {
    id: 7,
    name: "South Indies",
    image: "https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=800",
    cuisine: "South Indian",
    rating: 4.5,
    deliveryTime: "25-35 min",
    priceForTwo: 450,
    location: "Bangalore"
  },
  {
    id: 8,
    name: "Brew & Bites",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    cuisine: "Cafe, Continental",
    rating: 4.3,
    deliveryTime: "30-40 min",
    priceForTwo: 600,
    location: "Bangalore"
  },
  {
    id: 9,
    name: "Asian Fusion",
    image: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=800",
    cuisine: "Pan Asian, Sushi",
    rating: 4.4,
    deliveryTime: "35-45 min",
    priceForTwo: 800,
    location: "Bangalore"
  },

  // Chennai Restaurants
  {
    id: 10,
    name: "Chennai Express",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800",
    cuisine: "South Indian",
    rating: 4.5,
    deliveryTime: "25-35 min",
    priceForTwo: 400,
    location: "Chennai"
  },
  {
    id: 11,
    name: "Coastal Spice",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    cuisine: "Seafood, South Indian",
    rating: 4.4,
    deliveryTime: "30-40 min",
    priceForTwo: 600,
    location: "Chennai"
  },
  {
    id: 12,
    name: "Royal Kitchen",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
    cuisine: "Multi-cuisine",
    rating: 4.3,
    deliveryTime: "35-45 min",
    priceForTwo: 700,
    location: "Chennai"
  },

  // Hyderabad Restaurants
  {
    id: 13,
    name: "Paradise Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    cuisine: "Hyderabadi, Mughlai",
    rating: 4.7,
    deliveryTime: "25-35 min",
    priceForTwo: 600,
    location: "Hyderabad"
  },
  {
    id: 14,
    name: "Andhra Spice",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    cuisine: "Andhra, South Indian",
    rating: 4.4,
    deliveryTime: "30-40 min",
    priceForTwo: 500,
    location: "Hyderabad"
  },
  {
    id: 15,
    name: "Cafe Bahar",
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800",
    cuisine: "Mughlai, Chinese",
    rating: 4.3,
    deliveryTime: "35-45 min",
    priceForTwo: 450,
    location: "Hyderabad"
  }
];

export const menuItems = {
  // Mumbai - Spice Garden
  1: [
    {
      id: 101,
      name: "Butter Chicken",
      description: "Creamy tomato based curry with tender chicken pieces",
      price: 320,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      category: "Main Course"
    },
    {
      id: 102,
      name: "Paneer Tikka",
      description: "Grilled cottage cheese with spices",
      price: 280,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
      category: "Starters"
    },
    {
      id: 103,
      name: "Veg Biryani",
      description: "Fragrant rice cooked with mixed vegetables",
      price: 250,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
      category: "Rice"
    },
    {
      id: 104,
      name: "Masala Chai",
      description: "Indian spiced tea with milk",
      price: 40,
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800",
      category: "Beverages"
    },
    {
      id: 105,
      name: "Mango Lassi",
      description: "Sweet yogurt drink with mango pulp",
      price: 80,
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800",
      category: "Beverages"
    }
  ],

  // Mumbai Local
  2: [
    {
      id: 201,
      name: "Vada Pav",
      description: "Mumbai's favorite street food - spiced potato patty in a bun",
      price: 40,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
      category: "Street Food"
    },
    {
      id: 202,
      name: "Pav Bhaji",
      description: "Mashed vegetables in spicy gravy with buttered bread",
      price: 120,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
      category: "Street Food"
    },
    {
      id: 203,
      name: "Bhel Puri",
      description: "Puffed rice with tangy chutneys and vegetables",
      price: 80,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
      category: "Chaat"
    },
    {
      id: 204,
      name: "Masala Cola",
      description: "Spiced cola drink",
      price: 50,
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
      category: "Beverages"
    },
    {
      id: 205,
      name: "Fresh Lime Soda",
      description: "Refreshing lime soda - sweet or salt",
      price: 60,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Coastal Flavors
  3: [
    {
      id: 301,
      name: "Pomfret Fry",
      description: "Marinated and fried pomfret fish",
      price: 450,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Seafood"
    },
    {
      id: 302,
      name: "Prawn Curry",
      description: "Coconut based curry with prawns",
      price: 380,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Main Course"
    },
    {
      id: 303,
      name: "Fish Thali",
      description: "Complete meal with fish curry, rice, and sides",
      price: 320,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Main Course"
    },
    {
      id: 304,
      name: "Sol Kadhi",
      description: "Kokum and coconut milk digestive drink",
      price: 70,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 305,
      name: "Coconut Water",
      description: "Fresh tender coconut water",
      price: 60,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Delhi - Punjab Grill
  4: [
    {
      id: 401,
      name: "Dal Makhani",
      description: "Creamy black lentils cooked overnight",
      price: 299,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
      category: "Main Course"
    },
    {
      id: 402,
      name: "Butter Naan",
      description: "Soft bread brushed with butter",
      price: 60,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
      category: "Breads"
    },
    {
      id: 403,
      name: "Chicken Tikka",
      description: "Grilled chicken marinated in spices",
      price: 350,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
      category: "Starters"
    },
    {
      id: 404,
      name: "Sweet Lassi",
      description: "Sweetened yogurt drink",
      price: 80,
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800",
      category: "Beverages"
    },
    {
      id: 405,
      name: "Masala Chaas",
      description: "Spiced buttermilk",
      price: 60,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Delhi 6
  5: [
    {
      id: 501,
      name: "Chole Bhature",
      description: "Spiced chickpeas with fried bread",
      price: 150,
      image: "https://images.unsplash.com/photo-1626132647523-66f3bf15be46?w=800",
      category: "Main Course"
    },
    {
      id: 502,
      name: "Aloo Tikki",
      description: "Spiced potato patties",
      price: 80,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
      category: "Starters"
    },
    {
      id: 503,
      name: "Dahi Bhalla",
      description: "Lentil dumplings in yogurt",
      price: 120,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
      category: "Chaat"
    },
    {
      id: 504,
      name: "Jal Jeera",
      description: "Cumin flavored refreshing drink",
      price: 50,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 505,
      name: "Rose Milk",
      description: "Chilled milk flavored with rose syrup",
      price: 70,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Mughal Darbar
  6: [
    {
      id: 601,
      name: "Mutton Korma",
      description: "Rich and creamy mutton curry",
      price: 400,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      category: "Main Course"
    },
    {
      id: 602,
      name: "Chicken Biryani",
      description: "Fragrant rice cooked with chicken and spices",
      price: 350,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
      category: "Rice"
    },
    {
      id: 603,
      name: "Seekh Kebab",
      description: "Grilled minced meat kebabs",
      price: 320,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
      category: "Starters"
    },
    {
      id: 604,
      name: "Shahi Thandai",
      description: "Traditional milk drink with nuts and spices",
      price: 100,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 605,
      name: "Mint Chaas",
      description: "Buttermilk flavored with mint",
      price: 60,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Bangalore - South Indies
  7: [
    {
      id: 701,
      name: "Masala Dosa",
      description: "Crispy crepe with potato filling",
      price: 120,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
      category: "Breakfast"
    },
    {
      id: 702,
      name: "Idli Sambar",
      description: "Steamed rice cakes with lentil soup",
      price: 100,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
      category: "Breakfast"
    },
    {
      id: 703,
      name: "Filter Coffee",
      description: "Traditional South Indian coffee",
      price: 60,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
      category: "Beverages"
    },
    {
      id: 704,
      name: "Badam Milk",
      description: "Almond flavored milk",
      price: 80,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 705,
      name: "Fresh Lime Soda",
      description: "Refreshing lime soda - sweet or salt",
      price: 60,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Brew & Bites
  8: [
    {
      id: 801,
      name: "Classic Burger",
      description: "Beef patty with cheese and veggies",
      price: 250,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      category: "Main Course"
    },
    {
      id: 802,
      name: "Pasta Alfredo",
      description: "Creamy pasta with parmesan",
      price: 280,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",
      category: "Main Course"
    },
    {
      id: 803,
      name: "French Fries",
      description: "Crispy potato fries",
      price: 150,
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800",
      category: "Sides"
    },
    {
      id: 804,
      name: "Cappuccino",
      description: "Italian coffee with steamed milk",
      price: 120,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
      category: "Beverages"
    },
    {
      id: 805,
      name: "Iced Tea",
      description: "Chilled tea with lemon",
      price: 100,
      image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=800",
      category: "Beverages"
    }
  ],

  // Asian Fusion
  9: [
    {
      id: 901,
      name: "Sushi Roll",
      description: "California roll with crab and avocado",
      price: 400,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
      category: "Sushi"
    },
    {
      id: 902,
      name: "Pad Thai",
      description: "Thai style noodles with prawns",
      price: 350,
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
      category: "Main Course"
    },
    {
      id: 903,
      name: "Dim Sum",
      description: "Assorted steamed dumplings",
      price: 300,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
      category: "Starters"
    },
    {
      id: 904,
      name: "Green Tea",
      description: "Traditional Japanese green tea",
      price: 100,
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800",
      category: "Beverages"
    },
    {
      id: 905,
      name: "Bubble Tea",
      description: "Milk tea with tapioca pearls",
      price: 150,
      image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=800",
      category: "Beverages"
    }
  ],

  // Chennai Express
  10: [
    {
      id: 1001,
      name: "Chicken Chettinad",
      description: "Spicy chicken curry with ground spices",
      price: 280,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      category: "Main Course"
    },
    {
      id: 1002,
      name: "Mysore Masala Dosa",
      description: "Spicy dosa with red chutney",
      price: 140,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
      category: "Breakfast"
    },
    {
      id: 1003,
      name: "Vada",
      description: "Crispy lentil donuts",
      price: 60,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
      category: "Snacks"
    },
    {
      id: 1004,
      name: "Filter Coffee",
      description: "Traditional South Indian coffee",
      price: 50,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
      category: "Beverages"
    },
    {
      id: 1005,
      name: "Nannari Sarbath",
      description: "Traditional root beer drink",
      price: 70,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Coastal Spice
  11: [
    {
      id: 1101,
      name: "Fish Curry",
      description: "Traditional fish curry with coconut",
      price: 300,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Main Course"
    },
    {
      id: 1102,
      name: "Prawn Masala",
      description: "Spicy prawns in onion tomato gravy",
      price: 350,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Main Course"
    },
    {
      id: 1103,
      name: "Crab Roast",
      description: "Spicy crab roast",
      price: 400,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Main Course"
    },
    {
      id: 1104,
      name: "Buttermilk",
      description: "Spiced buttermilk",
      price: 50,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 1105,
      name: "Lime Soda",
      description: "Fresh lime soda",
      price: 60,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Royal Kitchen
  12: [
    {
      id: 1201,
      name: "Mixed Veg Curry",
      description: "Assorted vegetables in rich gravy",
      price: 220,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
      category: "Main Course"
    },
    {
      id: 1202,
      name: "Chicken Biryani",
      description: "Aromatic rice with chicken",
      price: 300,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
      category: "Rice"
    },
    {
      id: 1203,
      name: "Paneer Butter Masala",
      description: "Cottage cheese in rich tomato gravy",
      price: 250,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
      category: "Main Course"
    },
    {
      id: 1204,
      name: "Masala Tea",
      description: "Indian spiced tea",
      price: 40,
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800",
      category: "Beverages"
    },
    {
      id: 1205,
      name: "Cold Coffee",
      description: "Chilled coffee with ice cream",
      price: 120,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
      category: "Beverages"
    }
  ],

  // Paradise Biryani
  13: [
    {
      id: 1301,
      name: "Hyderabadi Chicken Biryani",
      description: "Aromatic basmati rice cooked with tender chicken and authentic spices",
      price: 349,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
      category: "Biryani"
    },
    {
      id: 1302,
      name: "Mutton Biryani",
      description: "Traditional Hyderabadi mutton biryani with tender meat pieces",
      price: 399,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800",
      category: "Biryani"
    },
    {
      id: 1303,
      name: "Double Ka Meetha",
      description: "Traditional Hyderabadi dessert made with bread",
      price: 149,
      image: "https://images.unsplash.com/photo-1528975604071-b102401cd7b9?w=800",
      category: "Desserts"
    },
    {
      id: 1304,
      name: "Chicken 65",
      description: "Spicy deep-fried chicken",
      price: 279,
      image: "https://images.unsplash.com/photo-1603496987314-62670e6d0822?w=800",
      category: "Starters"
    },
    {
      id: 1305,
      name: "Mutton Sheekh Kebab",
      description: "Minced mutton kebabs with herbs and spices",
      price: 329,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
      category: "Starters"
    },
    {
      id: 1306,
      name: "Falooda",
      description: "Traditional dessert drink with rose syrup",
      price: 150,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 1307,
      name: "Sulaimani Tea",
      description: "Black tea with cardamom",
      price: 40,
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800",
      category: "Beverages"
    }
  ],

  // Andhra Spice
  14: [
    {
      id: 1401,
      name: "Guntur Chicken",
      description: "Spicy chicken curry with Guntur chilies",
      price: 320,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      category: "Main Course"
    },
    {
      id: 1402,
      name: "Andhra Fish Curry",
      description: "Tangy and spicy fish curry",
      price: 350,
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
      category: "Main Course"
    },
    {
       
      id: 1403,
      name: "Gongura Mutton",
      description: "Mutton cooked with sorrel leaves",
      price: 380,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      category: "Main Course"
    },
    {
      id: 1404,
      name: "Buttermilk",
      description: "Spiced yogurt drink",
      price: 50,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    },
    {
      id: 1405,
      name: "Rose Milk",
      description: "Chilled milk with rose syrup",
      price: 80,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ],

  // Cafe Bahar
  15: [
    {
      id: 1501,
      name: "Chicken Manchurian",
      description: "Indo-Chinese style chicken in spicy sauce",
      price: 280,
      image: "https://images.unsplash.com/photo-1603496987314-62670e6d0822?w=800",
      category: "Starters"
    },
    {
      id: 1502,
      name: "Veg Fried Rice",
      description: "Chinese style rice with vegetables",
      price: 220,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
      category: "Rice"
    },
    {
      id: 1503,
      name: "Chilli Paneer",
      description: "Cottage cheese in spicy Indo-Chinese sauce",
      price: 250,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
      category: "Starters"
    },
    {
      id: 1504,
      name: "Cold Coffee",
      description: "Chilled coffee with ice cream",
      price: 120,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
      category: "Beverages"
    },
    {
      id: 1505,
      name: "Masala Soda",
      description: "Spiced carbonated drink",
      price: 70,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
      category: "Beverages"
    }
  ]
};