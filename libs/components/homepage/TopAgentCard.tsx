import React from "react";
import { Stack } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <img src="/img/profile/defaultUser.svg" alt="" />
      <strong>Shawn</strong>
      <span>AGENT</span>
    </Stack>
  );
};

export default TopAgentCard;