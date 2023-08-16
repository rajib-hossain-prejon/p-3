/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const TestimonialsArch = ({ reviews }) => {
  const sliderRef = useRef(null);
  const updatedReviews = reviews.filter((review) => review.visible === true);

  const renderArrows = () => {
    return (
      <div className='arrows'>
        <div className='container'>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className='next cursor-pointer'
          >
            <span className='pe-7s-angle-right'></span>
          </div>
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className='prev cursor-pointer'
          >
            <span className='pe-7s-angle-left'></span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id='testimonials-arch'
      className='testimonials section-padding position-re'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head  text-center'>
              <h2 className='wow fadeIn' data-wow-delay='.3s'>
                Testimonials
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid position-re'>
        <div className='row wow fadeInUp' data-wow-delay='.5s'>
          <div className='col-lg-12'>
            <Slider
              className='slic-item'
              {...{
                ref: sliderRef,
                dots: false,
                infinite: true,
                arrows: true,
                centerMode: true,
                autoplay: true,
                rows: 1,
                slidesToScroll: 1,
                slidesToShow: 3,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    },
                  },
                ],
              }}
            >
              {updatedReviews &&
                updatedReviews.map((review, index) => (
                  <React.Fragment key={index}>
                    <div className='item'>
                      <div className='info inf-lrg valign'>
                        <div className='cont'>
                          <div className='author'>
                            <div className='img'>
                              {!review.image && (
                                <img src='/img/no-photo-500x500.png' alt='' />
                              )}
                              {review.image && (
                                <img src={review.image} alt='' />
                              )}
                            </div>
                            <h6 className='author-name color-font'>
                              {review.name}
                            </h6>
                            <span className='author-details'>
                              {review.country}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='valign'>
                        <p className='fz-20 fw-200'>{review.review}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              {/* <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Alex Regelman
                        </h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                      I would highly recommend Vie Digital. I worked with the
                      team on an animation for our &apos;Click &amp;
                      Collect&apos; service.
                    </p>
                  </div>
                </div>
               */}
            </Slider>
          </div>
        </div>
        {renderArrows()}
      </div>
      <div className='line-v top'></div>
      <div className='line-v bottom'></div>
    </section>
  );
};

export default TestimonialsArch;
