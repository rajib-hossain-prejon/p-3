import React from 'react';
import SwiperCore, {
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import ShowcassesFullScreenData from '../../data/showcases-full-screen-slider.json';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import removeSlashFromPagination from '../../common/removeSlashpagination';
import ImageModal from '../Image-modal/image-modal';

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const ShowcasesFullScreen = ({ showcaseData }) => {
  const { ShowcassesFullScreenData } = showcaseData || {};

  const [load, setLoad] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');
  React.useEffect(() => {
    removeSlashFromPagination();
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const handleButtonClick = (imageUrl) => {
    // Set the image URL and open the modal
    setImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <header className='slider showcase-full'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head  text-center  mt-50 ml-20 mr-20'>
              {' '}
              <h2 className='wow fadeIn d-none d-sm-block' data-wow-delay='.3s'>
                Certifications
              </h2>
              <h3 className='wow fadeIn d-sm-none' data-wow-delay='.3s'>
                Certifications
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='swiper-container parallax-slider'>
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    'data-swiper-parallax',
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className='swiper-wrapper'
            slidesPerView={1}
          >
            {ShowcassesFullScreenData?.map((slide, index) => (
              <SwiperSlide key={index} className='swiper-slide'>
                <div
                  className='bg-img valign'
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                  data-overlay-dark='4'
                >
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='caption row'>
                          <div className='col-lg-9'>
                            <h1
                              onClick={() => handleButtonClick(slide.image)}
                              style={{ cursor: 'pointer' }}
                            >
                              <div
                                className='stroke'
                                data-swiper-parallax='-2000'
                              >
                                {slide.title.first}
                              </div>
                              <span data-swiper-parallax='-5000'>
                                {slide.title.second}
                              </span>

                              <div className='bord'></div>
                            </h1>
                          </div>
                          <div className='col-lg-2  m-2 p-2 d-none d-lg-block'>
                            <div
                              className='discover '
                              onClick={() => handleButtonClick(slide.image)}
                              style={{
                                cursor: 'pointer',
                              }}
                            >
                              <span>
                                Full <br /> View
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='gradient-overlay'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg,#8c52ff, #5ce1e6)',
                      opacity: 0.7,
                    }}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>

      <div className='txt-botm'>
        <div
          ref={navigationNextRef}
          className='swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer'
        >
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className='fas fa-chevron-right'></i>
          </div>
        </div>
        <div
          ref={navigationPrevRef}
          className='swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer'
        >
          <div>
            <i className='fas fa-chevron-left'></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>

        <div className='swiper-pagination dots' ref={paginationRef}></div>
        {/* ------------------Modal------------------------
         */}
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          imageUrl={imageUrl}
        />
      </div>
      <div className='line top right'></div>
      <div className='line top left'></div>
    </header>
  );
};

export default ShowcasesFullScreen;
