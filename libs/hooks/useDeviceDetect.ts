import { useEffect, useState } from "react";

const useDeviceDetect = (): string => { //deviceni aniqlovchi hook hosil qilamiz
  const [device, setDevice] = useState<string>("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent; //navigator browser global obyecti.shu sababli react yoki js ichida togridan togri ishlatamiz
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( //katta va kichik harfni inobatga olmaydi RegEx. test methodi agar mos kelasa true qaytaradi aks holda false
        userAgent
      );

    setDevice(isMobile ? "mobile" : "desktop");
  }, []);

  return device;
};

export default useDeviceDetect; 