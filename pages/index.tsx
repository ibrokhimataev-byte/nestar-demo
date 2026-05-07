import { GET_PROPERTIES } from "@/apollo/user/query";
import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Home: NextPage = () => {
  
const device = useDeviceDetect();

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch, // Bu funksiya ma'lumotlarni serverdan qayta, majburiy yuklash uchun ishlatiladi (masalan, "yangilash" tugmasi bosilganda).
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only", // Bu sozlama keshga qaramasdan, so'rovni har doim to'g'ridan-to'g'ri serverga yuborishni ta'minlaydi.
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: "createdAt",
        direction: "DESC",
        search: {},
      },
    },
  });

  console.log("getPropertiesData =>", getPropertiesData);
  
if(device === "mobile"){
return <Stack>HomepageMobile</Stack>
}else{
return (
    
    <Stack className={"home-page"} direction={"column"}>
<TrendProperties />
<PopularProperties />
<Advertisement />
<TopProperties />
<TopAgents />
</Stack>
);
}
};



export default withLayoutMain(Home);