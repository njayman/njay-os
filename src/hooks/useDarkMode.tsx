import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkMode";

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
