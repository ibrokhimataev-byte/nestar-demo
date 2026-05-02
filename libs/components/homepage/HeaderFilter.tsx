import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderFilter = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedType, setSelectedType] = useState("Property type");
  const [selectedRooms, setSelectedRooms] = useState("7 Rooms");

  const locations = ["Seoul", "Busan", "Jejudo", "Incheon", "Gyeongido"];
  const types = ["Apartment", "House", "Villa", "Studio"];
  const rooms = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5 Rooms", "6 Rooms", "7 Rooms"];

  const closeAll = () => {
    setLocationOpen(false);
    setTypeOpen(false);
    setRoomsOpen(false);
  };

  return (
    <Box className={"search-box"}>
      {/* SELECT BOX */}
      <Box className={"select-box"}>

        {/* LOCATION */}
        <Box
          className={`box ${locationOpen ? "on" : ""}`}
          onClick={() => {
            setLocationOpen(!locationOpen);
            setTypeOpen(false);
            setRoomsOpen(false);
          }}
        >
          <span>{selectedLocation}</span>
          <img src={"/img/icons/down.svg"} alt={""} />

          {/* LOCATION DROPDOWN */}
          <Box className={`filter-location ${locationOpen ? "on" : ""}`}>
            {locations.map((loc) => (
              <div
                key={loc}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLocation(loc);
                  setLocationOpen(false);
                }}
              >
                <span>{loc}</span>
              </div>
            ))}
          </Box>
        </Box>

        {/* PROPERTY TYPE */}
        <Box
          className={`box ${typeOpen ? "on" : ""}`}
          onClick={() => {
            setTypeOpen(!typeOpen);
            setLocationOpen(false);
            setRoomsOpen(false);
          }}
        >
          <span>{selectedType}</span>
          <img src={"/img/icons/down.svg"} alt={""} />

          {/* TYPE DROPDOWN */}
          <Box className={`filter-type ${typeOpen ? "on" : ""}`}>
            {types.map((type) => (
              <div
                key={type}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedType(type);
                  setTypeOpen(false);
                }}
              >
                <span>{type}</span>
              </div>
            ))}
          </Box>
        </Box>

        {/* ROOMS */}
        <Box
          className={`box ${roomsOpen ? "on" : ""}`}
          onClick={() => {
            setRoomsOpen(!roomsOpen);
            setLocationOpen(false);
            setTypeOpen(false);
          }}
        >
          <span>{selectedRooms}</span>
          <img src={"/img/icons/down.svg"} alt={""} />

          {/* ROOMS DROPDOWN */}
          <Box className={`filter-rooms ${roomsOpen ? "on" : ""}`}>
            {rooms.map((room) => (
              <span
                key={room}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRooms(room);
                  setRoomsOpen(false);
                }}
              >
                {room}
              </span>
            ))}
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box className={"search-box-other"}>
        <Box className={"advanced-filter"}>
          <img src={"/img/icons/tune.svg"} alt={""} />
          <span>Advanced</span>
        </Box>
        <Box
          className={"search-btn"}
          onClick={closeAll}
        >
          <SearchIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderFilter;