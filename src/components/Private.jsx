import React from "react";
import { postRoomData } from "../redux/actions/roomActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const mapDispachToProps = (dispatch) => {
  return {
    postRoomData: (data) => dispatch(postRoomData(data)),
  };
};

const Private = (props) => {
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

  const data = {
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
          "https://wepik.com/api/image/ai/9b25409f-26c5-423b-a5a2-85eede7e9750?thumb=1",
          "https://wepik.com/api/image/ai/9b25409f-89b9-4a77-8a5c-53250e17c222?thumb=1",
          "https://wepik.com/api/image/ai/9b254264-dd6c-4f07-80d4-37de9a7bf081?thumb=1",
          "https://wepik.com/api/image/ai/9b254443-c361-4323-9394-1bed8294eb78?thumb=1",
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
          "https://wepik.com/api/image/ai/9b25416c-d423-4523-9c36-fe06d5610906?thumb=1",
          "https://wepik.com/api/image/ai/9b25409f-afd5-459b-9549-ad8c6be3820b?thumb=1",
          "https://wepik.com/api/image/ai/9b254264-5e35-4a2c-86b7-c6a7fee87e92?thumb=1",
          "https://wepik.com/api/image/ai/9b254444-48f7-40c2-9278-8838f75d0367?thumb=1",
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
          "https://wepik.com/api/image/ai/9b25416a-f744-4ded-af7e-f39bce7cdf47?thumb=1",
          "https://wepik.com/api/image/ai/9b25409f-26c5-423b-a5a2-85eede7e9750?thumb=1",
          "https://wepik.com/api/image/ai/9b254264-b943-4241-877c-6b96f511f122?thumb=1",
          "https://wepik.com/api/image/ai/9b254444-78ad-4687-b0f7-ce70b5fd23d4?thumb=1",
        ],
      },
    ],
  };
  let firbaseLink =
    "https://console.firebase.google.com/u/0/project/abs-hotel/database/abs-hotel-default-rtdb/data/~2Froomdata";
  return (
    <div className="d-flex flex-column w-100 mb-4">
      <button className="m-auto" onClick={() => props.postRoomData(data)}>
        Post Data
      </button>
      <Link className="m-auto mt-4" target="_blank" to={firbaseLink}>
        Firebase Prev data delete
      </Link>
    </div>
  );
};

export default connect(null, mapDispachToProps)(Private);
