import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { transportationIcon } from "@/app/types/transportation";

export const icon: transportationIcon[] = [
  {
    title: "Xe khách",
    icon: <DirectionsBusIcon />,
    value: "coach",
  },
  {
    title: "Máy bay",
    icon: <AirplanemodeActiveIcon />,
    value: "flight",
  },
];
