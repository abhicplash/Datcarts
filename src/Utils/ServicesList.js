import { RiComputerLine } from "react-icons/ri";
import { IoMdMicrophone } from "react-icons/io";
import { MdSportsKabaddi } from "react-icons/md";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { HiPaintBrush } from "react-icons/hi2";
import { BiSolidSchool } from "react-icons/bi";
import vocal from '../assets/services/vocal.jpg'

export const allServices = [
  {
    servicename: "vocal music",
    id: 1,
    icon:vocal,
  },
  {
    servicename: "Dance",
    id: 2,
    icon: <IoMdMicrophone />,
  },
  {
    servicename: "Musical Instruments",
    id: 3,
    icon: <IoIosMusicalNotes />,
  },
  {
    servicename: "Sports",
    id: 4,
    icon: < MdSportsKabaddi/>,
  },
  {
    servicename: "Parallel School Education",
    id: 5,
    icon: <BiSolidSchool />,
  },
  {
    servicename: "Martial Arts",
    id: 6,
    icon: <MdOutlineSportsMartialArts/>,
  },
  {
    servicename: "Painting and Pencil Drawing",
    id: 7,
    icon: <HiPaintBrush />,
  },
];