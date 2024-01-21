import { AVAILBLE_ROOM, SHOW_ROOMS } from "../Constance";

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

const initialState = {
  categories: [],
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ROOMS:
      return {
        ...action.paylaad,
      };
    case AVAILBLE_ROOM:
      return {
        categories: action.payload,
      };
    default:
      return state;
  }
};
