import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slider1 from '../../assets/slider-3.jpg'
import slider2 from '../../assets/slider-2.jpg'
import slider3 from '../../assets/slider-1.jpg'


const Banner = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3333 }} loop={true}>
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="text-white max-w-10/12 mx-auto pt-55">
              <h1 className="text-5xl font-bold">
                The Performing Street art Book
              </h1>
              <p className="mt-4">Lorem ipsum dolor sit amet...</p>
              <button className="btn mt-6 bg-pink-500 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="text-white max-w-10/12 mx-auto pt-55">
              <h1 className="text-5xl font-bold">
                The Performing Street art Book
              </h1>
              <p className="mt-4">Lorem ipsum dolor sit amet...</p>
              <button className="btn mt-6 bg-pink-500 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="text-white max-w-10/12 mx-auto pt-55">
              <h1 className="text-5xl font-bold">
                The Performing Street art Book
              </h1>
              <p className="mt-4">Lorem ipsum dolor sit amet...</p>
              <button className="btn mt-6 bg-pink-500 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
