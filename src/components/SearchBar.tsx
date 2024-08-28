import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "300px",
      }}
    >
      <InputBase placeholder="Search here" autoComplete="off" />
      <IconButton>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
