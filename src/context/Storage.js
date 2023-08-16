const keyOfInfo = "info";
const keyOfServices = "services";

const storeData = (key, data) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
};

const getData = (key) => {
  if (typeof window !== 'undefined') {
    const data = sessionStorage.getItem(key);
    const filteredData = JSON.parse(data);
    return filteredData;
  }
  return null;
};

const removeData = (key) => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(key);
  }
};

export default { storeData, getData, removeData };
