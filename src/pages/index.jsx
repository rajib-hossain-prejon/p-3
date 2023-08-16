import React from 'react';

import Head from 'next/head';

import dbs from '../api/dbs';
import getData from '../api/getData';
import TryAgain from '../components/Try-Again/try-again';
import Homepage from './homepage/home7-dark';

export async function getStaticProps() {
  let testimonials = [],
    projectsOfLower = [],
    projectsOfMiddleTwo = [],
    servicesData = {};
  try {
    const homepageData = await getData.getListingsFromFirebase(dbs.HOMEPAGE);
    const infoServerData = await getData.getListingsFromFirebase(dbs.INFO);
    const reviewsData = await getData.getListingsFromFirebase(dbs.REVIEWS);
    const servicesServerData = await getData.getListingsFromFirebase(
      dbs.SERVICES
    );
    servicesData = servicesServerData?.[0] || {};

    const info = infoServerData?.[0] || {};

    homepageData?.forEach((dataSet) => {
      if (dataSet.id === 'projectsOfLower') {
        projectsOfLower = dataSet.projectsOfLower || [];
      } else if (dataSet.id === 'projectsOfMiddleTwo') {
        projectsOfMiddleTwo = dataSet.projectsOfMiddleTwo || [];
      }
    });

    return {
      props: {
        homepageData,
        servicesData,
        info,
        testimonials: reviewsData,
        projectsOfLower,
        projectsOfMiddleTwo,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const Home = ({
  homepageData,
  servicesData,
  info,
  testimonials,
  projectsOfLower,
  projectsOfMiddleTwo,
  error,
}) => {
  if (error) {
    return <TryAgain />;
  }

  return (
    <>
      <Head>
        <title>
          Rajib Hossain Prejon - Expert Full-Stack Web & Mobile App Developer
        </title>
      </Head>

      <Homepage
        info={info}
        testimonials={testimonials}
        projectsOfLower={projectsOfLower}
        projectsOfMiddleTwo={projectsOfMiddleTwo}
        servicesData={servicesData}
      />
    </>
  );
};

export default Home;
