import { Paper } from "@mui/material";
import { apps } from "../utils/constant";
import Window from "./Window";

const Desktop = () => {
  return (
    <Paper
      sx={{
        p: 1,
        width: "100%",
        height: "100%",
      }}
    >
      {apps.map(({ name, Icon, Component }) => (
        <Window title={name} Icon={Icon} key={name}>
          <Component />
        </Window>
      ))}
    </Paper>
  );
};

export default Desktop;
