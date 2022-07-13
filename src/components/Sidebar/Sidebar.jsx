import { Slider } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Sidebar.module.css";

const Sidebar = ({ handleFilterChange, filterName, sortUser, handleSort }) => {
  const gender = [
    {
      id: 1,
      value: "Male",
    },
    {
      id: 2,
      value: "Female",
    },
  ];

  const sortBy = [
    {
      id: 1,
      value: "Ascending",
    },
    {
      id: 2,
      value: "Descending",
    },
  ];

  return (
    <div className={classNames(styles.sidebarContainer, "w-5/12 md:w-3/12 ")}>
      <p className={styles.heading}>Filter Team</p>
      <div className={classNames(styles.inputFields, "flex flex-col mx-8")}>
        <input
          type="text"
          className="mt-4 px-3 py-1"
          placeholder="Search by name"
          name="Name"
          onChange={(e) => {
            handleFilterChange(e.target.name, e.target.value);
          }}
        />
        <input
          type="text"
          className="mt-4 mb-4 px-3 py-1"
          placeholder="Search by Country"
          name="Country"
          onChange={(e) => {
            handleFilterChange(e.target.name, e.target.value);
          }}
        />
        <div className="w-full mt-6">
          <Dropdown
            title={"Select Gender"}
            options={gender}
            handleFilterChange={handleFilterChange}
          />
        </div>
        <div className="w-full mt-8">
          <Dropdown
            title={"Sort By Age"}
            options={sortBy}
            handleFilterChange={handleFilterChange}
            // handleSort={handleSort}
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
