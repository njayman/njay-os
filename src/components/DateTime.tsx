import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DateTime = () => {
  const [dateString, setDateString] = useState<string>("");
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
      const newDateString = new Date().toLocaleDateString();
      if (dateString !== newDateString) {
        setDateString(newDateString);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dateString]);

  return (
    <Box>
      <Typography variant="caption">{dateString}</Typography>
      <br />
      <Typography variant="caption">{timeString}</Typography>
    </Box>
  );
};

export default DateTime;
