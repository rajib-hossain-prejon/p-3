
import { useContext } from "react";

import Storage from "../Storage";
import { InfoData } from "../context";

export default useInfo = () => {
  
  const { info, setInfo } = useContext(InfoData);

  const infos = (info1) => {
    setInfo(info1);
    Storage.storeInfo(info1);
  };

  

  return { infos };
};
