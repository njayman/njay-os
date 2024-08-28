import { IconButton } from "@mui/material";
import { useDarkMode } from "../hooks/useDarkMode";
import { DarkMode, LightMode } from "@mui/icons-material";

const ModeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <IconButton onClick={toggleDarkMode}>
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ModeSwitcher;
