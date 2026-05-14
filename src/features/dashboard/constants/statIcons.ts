import {
  FiFolder,
  FiUsers,
  FiCheckSquare,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";
import type { IconType } from "react-icons";

import type { StatIcon } from "../types/dashboard.types";

export const statIconMap: Record<StatIcon, IconType> = {
  projects: FiFolder,
  users: FiUsers,
  tasks: FiCheckSquare,
  hours: FiClock,
  earnings: FiDollarSign,
};
