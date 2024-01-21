import React from "react";
import { FaWifi } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import {
  MdFreeBreakfast,
  MdOutlineCoffeeMaker,
  MdOutlineDesk,
  MdOutlineShower,
} from "react-icons/md";
import { PiLockersFill } from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import { BiGlobeAlt } from "react-icons/bi";
import {
  GiFieldGun,
  GiNewspaper,
  GiRedCarpet,
  GiSlippers,
} from "react-icons/gi";
import { AiOutlineControl } from "react-icons/ai";

const icons = [
  {
    icon: <FaWifi />,
    title: "wifi",
    text: "Free Wifi",
  },
  {
    icon: <IoTvSharp />,
    title: "tv",
    text: "32 Inch TV",
  },
  {
    icon: <MdOutlineDesk />,
    title: "desk",
    text: "Working Desk",
  },
  {
    icon: <MdOutlineCoffeeMaker />,
    title: "coffee_tee",
    text: "Tee Coffee Mechine",
  },
  {
    icon: <PiLockersFill />,
    title: "locker",
    text: "Saftey Locker",
  },
  {
    icon: <TbIroning3 />,
    title: "iron",
    text: "Iron With Iron Board",
  },
  {
    icon: <GiFieldGun />,
    title: "hair_dryer",
    text: "Hair Dryer",
  },
  {
    icon: <BiGlobeAlt />,
    title: "magnifiying_mirror",
    text: "Magnifying Mirror",
  },
  {
    icon: <MdOutlineShower />,
    title: "rain_shower",
    text: "Rain Shower",
  },
  {
    icon: <AiOutlineControl />,
    title: "climate_control",
    text: "Room Climate Controller",
  },
  {
    icon: <GiNewspaper />,
    title: "news_paper",
    text: "News Paper",
  },
  {
    icon: <GiSlippers />,
    title: "slippers",
    text: "Slipper",
  },
  {
    icon: <GiRedCarpet />,
    title: "carpet",
    text: "Floor Carpet",
  },
  {
    icon: <MdFreeBreakfast />,
    title: "breakfast",
    text: "Breakfast Included",
  },
];

const Features = ({ features }) => {
  return (
    <div className="features">
      {icons.map((icon) => {
        if (features[icon.title]) {
          return (
            <span key={icon.title} className="feature-icon">
              <span className="arrow"></span>
              {icon.icon}
              <p className="icon-tooltip">{icon.text}</p>
            </span>
          );
        }
      })}
    </div>
  );
};

export default Features;
