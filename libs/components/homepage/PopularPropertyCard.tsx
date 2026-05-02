import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PopularPropertyCard = () => {
  return (
    <Stack className={"popular-card-box"}>

      {/* RASM */}
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/banner/types/apartment.webp")`,
        }}
      >
        {/* STATUS BADGE — yuqori chap, qizil, "TOP" yozuvi */}
        <div className={"status"}>
          <img src={"/img/icons/status.svg"} alt={""} />
          <span>top</span>
        </div>

        {/* NARX — pastki chap */}
        <div className={"price"}>$200000</div>
      </Box>

      {/* MA'LUMOT */}
      <Box className={"info"}>
        <strong className={"title"}>Dream Land</strong>
        <p className={"desc"}>Gwangju hasdes 51</p>

        <div className={"options"}>
          <div>
            <img src={"/img/icons/bed.svg"} alt={""} />
            <span>3 bed</span>
          </div>
          <div>
            <img src={"/img/icons/room.svg"} alt={""} />
            <span>4 rooms</span>
          </div>
          <div>
            <img src={"/img/icons/expand.svg"} alt={""} />
            <span>200 m2</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <div className={"bott"}>
          <p>Sale</p>
          <div className={"view-like-box"}>
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className={"view-cnt"}>54</Typography>
          </div>
        </div>
      </Box>

    </Stack>
  );
};

export default PopularPropertyCard;