import gene20BaseTheme from "@/utils/theme/themes/gene20BaseTheme";
import { Search } from "@mui/icons-material";
import { alpha, Box, InputBase } from "@mui/material";
import React, { useEffect, useRef } from "react";

const SearchForm = (props) => {
  const { open, setOpen } = props;
  const searchRef = useRef(null);
  const theme = gene20BaseTheme;
  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.15) },
        mr: 2,
        ml: 3,
      }}
    >
      <Box
        sx={{
          p: theme.spacing(0, 2),
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search />
      </Box>
      <Box>
        <InputBase
          placeholder="search..."
          sx={{
            color: "inherit",
            "& .MuiInputBase-input": {
              p: theme.spacing(1, 1, 1, 0),
              width: "25ch",
              pl: `calc(1em + ${theme.spacing(4)})`,
            },
          }}
          inputRef={searchRef}
        />
      </Box>
    </Box>
  );
};

export default SearchForm;
