import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import classNames from "classnames";
import { blueGrey, purple } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = ({ title, options, handleSort, handleFilterChange }) => {
  const [active, setActive] = useState(false);

  const [text, setText] = useState("");

  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => setActive(!active)}
        className={classNames(
          styles.dropdownBtn,
          "flex justify-between items-center"
        )}
      >
        {text ? text : title}
        <span className={styles.arrowSpan}>
          {active ? (
            <ArrowDropUpIcon sx={{ color: blueGrey[900] }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: blueGrey[900] }} />
          )}
        </span>
      </div>

      {active && (
        <div className={classNames(styles.dropDownContent, "")}>
          <div
            onClick={(e) => {
              setText("");
              setActive(false);
              handleFilterChange("", "");
            }}
            className={classNames(styles.dropdownItem)}
          >
            Select One
          </div>

          {options?.map((option) => (
            <div
              key={option.id}
              onClick={(e) => {
                console.log(e);
                setText(option.value);
                handleFilterChange(e.target.textContent, option.value);
                setActive(false);
              }}
              className={classNames(styles.dropdownItem)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
