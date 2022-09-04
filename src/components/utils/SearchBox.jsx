import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchKey) {
          navigate(`/search/${searchKey}`);
          setSearchKey("");
        }
      }}
      sx={{
        pl: 2,
        mr: { sm: 5 },
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        transition: "0.4s",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
