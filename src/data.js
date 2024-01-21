const rooms = [
    {
      type: "Single Compact Size",
      size: 16,
      person: 1,
      bed: 1,
      price: 1,
    },
    {
      type: "Single King Size",
      size: 28,
      person: 1,
      bed: 1,
      price: 1.1,
    },
    {
      type: "Couple Compact Size",
      size: 25,
      person: 2,
      bed: 1,
      price: 1.2,
    },
    {
      type: "Couple King Size",
      size: 36,
      person: 2,
      bed: 1,
      price: 1.35,
    },
    {
      type: "Couple King Size",
      size: 36,
      person: 2,
      bed: 2,
      price: 1.4,
    },
  ];
  
  const features = {
    wifi: true,
    tv: true,
    desk: true,
    coffee_tee: true,
    locker: true,
    iron: true,
    hair_dryer: true,
    magnifiying_mirror: true,
    rain_shower: true,
    climate_control: true,
    news_paper: true,
    slippers: true,
    carpet: true,
    breakfast: true,
  };
  
  export const roomData = {
    categories: [
      {
        type: "Superior",
        base_price: 2000,
        features: {
          ...features,
          magnifiying_mirror: false,
          climate_control: false,
          news_paper: false,
          curpate: false,
          breakfast: false,
        },
        rooms: rooms,
        number_of_rooms: [12, 5, 10, 6, 0],
        room_images: [
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
        ],
      },
      {
        type: "Deluxe",
        base_price: 2500,
        features: {
          ...features,
          climate_control: false,
          curpate: false,
          breakfast: false,
        },
        rooms: rooms,
        number_of_rooms: [8, 5, 7, 4, 3],
        room_images: [
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
        ],
      },
      {
        type: "Business_class",
        base_price: 5000,
        features: {
          ...features,
        },
        rooms: rooms,
        number_of_rooms: [6, 3, 5, 3, 2],
        room_images: [
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
          "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
        ],
      },
    ],
  };
  