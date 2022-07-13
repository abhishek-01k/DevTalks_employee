import React, { useEffect, useState } from "react";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TeamDetails from "../../components/TeamDetails.jsx/TeamDetails";
import styles from "./Team.module.css";

const Team = () => {
  const [filterDetails, setFilter] = useState({
    Name: "",
    Email: "",
    Country: "",
    sortType: "",
    Age: "",
  });

  const [users, setUsers] = useState([]);
  const [responseUsers, setResponseUsers] = useState([]);

  const getUser = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const response = await res.json();
    setResponseUsers(response.results);
    setUsers(response.results);
    console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleFilterChange = (name, value) => {
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name == "Name") {
      filterName(value);
    }
    if (name === "Country") {
      filterCountry(value);
    }
    if (name == "Ascending" || name === "Descending") {
      sortUser(name);
    }
    if (name === "Male" || name === "Female") {
      filterByGender(value);
    }
  };

  const filterName = (value) => {
    const filteredData = responseUsers?.filter((user) =>
      user?.name?.first.toLowerCase().includes(value)
    );
    setUsers(filteredData);
  };

  const filterCountry = (value) => {
    const filteredData = responseUsers?.filter((user) =>
      user?.location?.country.toLowerCase().includes(value)
    );
    setUsers(filteredData);
  };

  const filterByGender = (value) => {
    const filteredData = responseUsers?.filter((user) => {
      if (user?.gender.toLowerCase() === value.toLowerCase()) {
        return user;
      }
    });
    setUsers(filteredData);
  };

  const sortUser = (sort) => {
    const isReversed = sort === "Ascending" ? 1 : -1;
    const sortedData = responseUsers?.sort(
      (a, b) => isReversed * (a?.dob?.age - b?.dob?.age)
    );
    setUsers(sortedData);
  };

  return (
    <div className="bg-[#eae6f5]">
      <Navbar />

      <div className="flex">
        <Sidebar
          handleFilterChange={handleFilterChange}
          filterName={filterName}
          sortUser={sortUser}
        />
        <TeamDetails users={users} />
      </div>

      <div className="homeContainer">
        <MailList />
      </div>
    </div>
  );
};

export default Team;
