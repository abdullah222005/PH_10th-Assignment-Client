import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slider1 from '../../assets/slider-3.jpg'
import slider2 from '../../assets/slider-2.jpg'
import slider3 from '../../assets/slider-1.jpg'
import { Link } from "react-router-dom";


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
                Message for the Tribe of <br /> Many Colors
              </h1>
              <p className="mt-4 w-169">
                Little Grandmother (Kiesha Crowther) shares profound spiritual
                wisdom for humanity's awakening. Edited by Jennifer Ferraro,
                this transformative guide offers Indigenous teachings about
                unity, Earth stewardship, and our interconnectedness. Through
                ancient knowledge and modern insight, readers discover their
                role in creating a harmonious future for all beings and the
                planet..
              </p>
              <Link to="/all-books">
                <button className="btn mt-6 mr-5 bg-pink-500 text-white">
                  View All Books
                </button>
              </Link>
              <Link to="/add-book">
                <button className="btn mt-6 bg-pink-500 text-white">
                  Create Book
                </button>
              </Link>
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
                Redemption: An Ash Park Novel
              </h1>
              <p className="mt-4 w-169">
                In this gripping psychological thriller from bestselling author
                Meghan O'Flynn, the small town of Ash Park harbors dark secrets
                that refuse to stay buried. When a series of disturbing events
                begins to unravel the community's carefully maintained facade,
                one person must confront their haunted past to prevent history
                from repeating itself.
              </p>
              <Link to="/all-books">
                <button className="btn mt-6 mr-5 bg-pink-500 text-white">
                  View All Books
                </button>
              </Link>
              <Link to="/add-book">
                <button className="btn mt-6 bg-pink-500 text-white">
                  Create Book
                </button>
              </Link>
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
                Copy Paste: How Advertising <br /> Recycles Ideas
              </h1>
              <p className="mt-4 w-169">
                Joe La Pompe exposes the advertising industry's dirty secret:
                creative theft. This bold visual compendium reveals how major
                campaigns blatantly copy each other, recycling concepts instead
                of innovating. With side-by-side comparisons of original and
                derivative work, this eye-opening book challenges what we
                consider creative and questions the authenticity of modern
                advertising.
              </p>
              <Link to="/all-books">
                <button className="btn mt-6 mr-5 bg-pink-500 text-white">
                  View All Books
                </button>
              </Link>
              <Link to="/add-book">
                <button className="btn mt-6 bg-pink-500 text-white">
                  Create Book
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
