import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slider1 from "../../assets/slider-3.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3333 }} loop={true}>
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slider1})` }}
          >
            {/* Left aligned text container */}
            <div className="text-white max-w-10/12 px-6 md:px-12 lg:px-33 text-left">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
                Message for the Tribe of <br /> Many Colors
              </h1>
              <p className="mt-4 text-sm lg:hidden">
                Little Grandmother shares wisdom for humanity’s awakening and
                unity.
              </p>
              <p className="mt-4 hidden lg:block max-w-2xl">
                Little Grandmother (Kiesha Crowther) shares profound spiritual
                wisdom for humanity's awakening. Edited by Jennifer Ferraro,
                this transformative guide offers Indigenous teachings about
                unity, Earth stewardship, and our interconnectedness. Through
                ancient knowledge and modern insight, readers discover their
                role in creating a harmonious future for all beings and the
                planet.
              </p>
              <div className="mt-6 flex gap-4">
                <Link to="/all-books">
                  <button className="btn btn-primary">View All Books</button>
                </Link>
                <Link to="/add-book">
                  <button className="btn btn-primary">Create Book</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slider2})` }}
          >
            <div className="text-white max-w-10/12 px-6 md:px-12 lg:px-33 text-left">
              <h1 className="text-lg md:text-2xl lg:text-4xlfont-bold">
                Redemption: An Ash Park Novel
              </h1>
              <p className="mt-4 text-sm lg:hidden">
                A thriller where dark secrets haunt Ash Park.
              </p>
              <p className="mt-4 hidden lg:block max-w-2xl">
                In this gripping psychological thriller from bestselling author
                Meghan O'Flynn, the small town of Ash Park harbors dark secrets
                that refuse to stay buried. When a series of disturbing events
                begins to unravel the community's carefully maintained facade,
                one person must confront their haunted past to prevent history
                from repeating itself.
              </p>
              <div className="mt-6 flex gap-4">
                <Link to="/all-books">
                  <button className="btn btn-primary">View All Books</button>
                </Link>
                <Link to="/add-book">
                  <button className="btn btn-primary">Create Book</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-[90vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slider3})` }}
          >
            <div className="text-white max-w-10/12 px-6 md:px-12 lg:px-33 text-left">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
                Copy Paste: How Advertising <br /> Recycles Ideas
              </h1>
              <p className="mt-4 text-sm lg:hidden">
                Joe La Pompe reveals advertising’s secret: recycled ideas.
              </p>
              <p className="mt-4 hidden lg:block max-w-2xl">
                Joe La Pompe exposes the advertising industry's dirty secret:
                creative theft. This bold visual compendium reveals how major
                campaigns blatantly copy each other, recycling concepts instead
                of innovating. With side-by-side comparisons of original and
                derivative work, this eye-opening book challenges what we
                consider creative and questions the authenticity of modern
                advertising.
              </p>
              <div className="mt-6 flex gap-4">
                <Link to="/all-books">
                  <button className="btn btn-primary">View All Books</button>
                </Link>
                <Link to="/add-book">
                  <button className="btn btn-primary">Create Book</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
