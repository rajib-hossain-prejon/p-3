import React from 'react';
import dbs from '../../api/dbs';
import getData from '../../api/getData';
import Loader from '../../components/Loader/loader';
import { HomepageData } from '../context';
import Storage from '../storage';

export default function HomepageContext({ children }) {
  const [homepageData, setHomepageData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const restoreHomepageData = async () => {
    setIsLoading(true);
    const homepageServerData = await Storage.getData(dbs.HOMEPAGE);

    if (homepageServerData) {
      setHomepageData(homepageServerData);

      setIsLoading(false);
    } else {
      try {
        const homeServerData = await getData.getListingsFromFirebase(
          dbs.HOMEPAGE
        );
console.log('H S D: ',homeServerData)
        setHomepageData(homeServerData);
        Storage.storeData(dbs.HOMEPAGE, homeServerData);
        // storeInfos(infoServerData[0])
        setIsLoading(false);
      } catch (error) {
        console.log('err', error);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    restoreHomepageData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <HomepageData.Provider value={{ homepageData, setHomepageData }}>
        {children}
      </HomepageData.Provider>
    </>
  );
}
