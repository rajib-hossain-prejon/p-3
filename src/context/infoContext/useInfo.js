import { useContext } from "react";
import dbs from "../../api/dbs";
import { InfoData } from "../context";
import Storage from "../storage";

const useInfo = () => {
  const { info, setInfo } = useContext(InfoData);
  

  const storeInfos = (data) => {
    
    setInfo(data);

    
    Storage.storeData(dbs.INFO,data)
    
  };

  return { info, storeInfos };
};

export default useInfo;
