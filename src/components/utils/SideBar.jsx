import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{ overflowY: "auto" }}
      height={{ xs: "auto", md: "95%" }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.id}
          style={{
            background: category.name === selectedCategory && "#F31503",
            color: "white",
          }}
          onClick={() => {
            setSelectedCategory(category.name);
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#F31503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : "0.8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
