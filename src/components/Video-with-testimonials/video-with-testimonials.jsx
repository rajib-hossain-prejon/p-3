/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'react-modal-video/css/modal-video.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ReviewData from '../../data/review.json';

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='block-sec mt-50'>
      <div
        className='background bg-img pt-100 pb-0 parallaxie'
        style={{
          backgroundImage: `url(https://res.cloudinary.com/drrlu7qrl/image/upload/f_auto,q_auto/v1677575363/futureflowit.com/about/3._About-bg-1900X1050_yuenoq.jpg)`,
        }}
        data-overlay-dark='5'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              {/* <div className="vid-area">
                <span className="text">Watch Video</span>
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="vimeo"
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
            <div className='col-lg-5 offset-lg-1'>
              <div className='testim-box'>
                <div className='head-box'>
                  <h6 className='wow fadeIn' data-wow-delay='.5s'>
                    My Clients
                  </h6>
                  <h4 className='wow fadeInLeft' data-wow-delay='.5s'>
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className='slic-item wow fadeInUp'
                  data-wow-delay='.5s'
                >
                  {/* <div className='item'>
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh volutpat velit class aptent taciti sociosqu ad
                      litora.
                    </p>
                    <div className='info'>
                      <div className='img'>
                        <div className='img-box'>
                          <img src='/img/clients/1.jpg' alt='' />
                        </div>
                      </div>
                      <div className='cont'>
                        <div className='author'>
                          <h6 className='author-name '>Alex Regelman</h6>
                          <span className='author-details'>
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className='item'>
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh volutpat velit class aptent taciti sociosqu ad
                      litora.
                    </p>
                    <div className='info'>
                      <div className='img'>
                        <div className='img-box'>
                          <img src='/img/clients/2.jpg' alt='' />
                        </div>
                      </div>
                      <div className='cont'>
                        <div className='author'>
                          <h6 className='author-name '>Alex Regelman</h6>
                          <span className='author-details'>
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {ReviewData &&
                    ReviewData.map((review) => {
                      return (
                        <div className='item' key={review.id}>
                          <p>{review.review}</p>
                          <div className='info'>
                            {/* <div className='img'>
                              <div className='img-box'>
                                <img src='/img/clients/3.jpg' alt='' />
                              </div>
                            </div> */}
                            <div className='cont'>
                              <div className='author'>
                                <h6 className='author-name color-font'>
                                  {review.name}
                                </h6>
                                <span className='author-details'>
                                  {review.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
