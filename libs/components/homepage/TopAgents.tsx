import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./TopAgentCard";
import Link from "next/link";


const TopAgents = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(initialInput);

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
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
        <Stack className={"card-box"}>
          {topAgents.length === 0 ? (
            <Box className={"empty-list"}>Agents Empty</Box>
          ) : (
            <Swiper
              className={"top-agent-swiper"}
              slidesPerView={"auto"}
              spaceBetween={30}
              navigation={{
                nextEl: ".swiper-agent-next",
                prevEl: ".swiper-agent-prev",
              }}
            >
              <div className={"swiper-agent-prev"}>
                <img src={"/img/icons/prev.svg"} alt={""} />
              </div>
              {topAgents.map((agent, index) => (
                <SwiperSlide key={index} className={"top-agent-slide"}>
                  <TopAgentCard />
                </SwiperSlide>
              ))}
              <div className={"swiper-agent-next"}>
                <img src={"/img/icons/next.svg"} alt={""} />
              </div>
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;