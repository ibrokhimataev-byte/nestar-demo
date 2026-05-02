import React from "react";
import { Stack } from "@mui/material";

const Advertisement = () => {
  return (
    <Stack className={"advertisement"}>
      <video
        className={"video"}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={"/video/ads.mov"} type="video/quicktime" />
        <source src={"/video/ads.mov"} type="video/mp4" />
      </video>
    </Stack>
  );
};

export default Advertisement;