



const keyOfInfo = "info";


const storeInfo = (infoData) => {
 
  localStorage.setItem(keyOfInfo, JSON.stringify(infoData));
  
};

const getInfo = async () => {
  try {
    const data = await localStorage.getItem(keyOfInfo)
    const filteredData = JSON.parse(data);
    return filteredData;
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};



export default { getInfo, storeInfo};
