import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./TopAgentCard";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TopAgents = ({ initialInput = [1, 2, 3, 4, 5], ...props }: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(initialInput);

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>

        {/* INFO BOX */}
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href={"/agent"}>
                <span>See All Agents</span>
              </Link>
              <img src={"/img/icons/rightup.svg"} alt={""} />
            </div>
          </Box>
        </Stack>

        {/* CARD BOX */}
        <Stack className={"card-box"}>
          {/* PREV BUTTON */}
          <Box className={"swiper-agent-prev"}>
            <ArrowBackIosNewIcon />
          </Box>

          {topAgents.length === 0 ? (
            <Box className={"empty-list"}>Agents Empty</Box>
          ) : (
            <Swiper
              className={"top-agent-swiper"}
              slidesPerView={"auto"}
              spaceBetween={90}
              navigation={{
                nextEl: ".swiper-agent-next",
                prevEl: ".swiper-agent-prev",
              }}
            >
              {topAgents.map((agent, index) => (
                <SwiperSlide key={index} className={"top-agent-slide"}>
                  <TopAgentCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* NEXT BUTTON */}
          <Box className={"swiper-agent-next"}>
            <ArrowForwardIosIcon />
          </Box>
        </Stack>

      </Stack>
    </Stack>
  );
};

export default TopAgents;