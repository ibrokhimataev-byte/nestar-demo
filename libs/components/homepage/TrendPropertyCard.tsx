import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TrendPropertyCard = () => {
  return (
    <Stack className={"trend-card-box"}>
      {/* RASM */}
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/types/villa.webp")`,
        }}
      >
        <div className={"price"}>$320,000</div>
        <div className={"badge"}>🔥 Trend</div>
      </Box>

      {/* MA'LUMOT */}
      <Box className={"info"}>
        <strong className={"title"}>Blue Sky Residence</strong>
        <p className={"desc"}>
          <LocationOnIcon sx={{ fontSize: 14 }} />
          Busan Haeundae Villa
        </p>

        <div className={"options"}>
          <div>
            <img src={"/img/icons/bed.svg"} alt={""} />
            <span>4 bed</span>
          </div>
          <div>
            <img src={"/img/icons/room.svg"} alt={""} />
            <span>5 rooms</span>
          </div>
          <div>
            <img src={"/img/icons/expand.svg"} alt={""} />
            <span>180 m2</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <div className={"bott"}>
          <p>Sale</p>
          <div className={"view-like-box"}>
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className={"view-cnt"}>340</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon />
            </IconButton>
            <Typography className={"view-cnt"}>89</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;