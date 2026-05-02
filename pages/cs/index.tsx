import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS : NextPage = () => {
    const [title, setTitle] = useState<string>("HELLO")
    return(
       <>
            <div style={{margin:"20px 0px"}}>
               <Stack className="container">CS LIST</Stack>
            </div>
           
        </>
    )
     
}

export default withLayoutBasic(CS);