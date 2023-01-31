import content from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { useState } from "react";

const Testimonials = () => {
  const { testimonials } = content;
  const [activeSlideIdx, setActiveSlideIdx] = useState(0)

  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">{testimonials.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{testimonials.subtitle}</h4>
        <br />
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          data-aos="fade-up"
          // spaceBetween={40}
          slidesPerView={3}
          onSlideChange={(e)=>{
            console.log(e.realIndex);
            setActiveSlideIdx(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-[45rem] h-[60rem] max-w-3xl"
        >
          {testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div className={`relative duration-500 bg-bg_light_primary mx-8 border-2 p-6 h-full 
                rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col 
                ${activeSlideIdx !== i && 'scale-75 blur-sm'}`}>
                <img src={content.img} alt="..." className="h-24" />
                <div>
                  {/* Add styling for the paragraph text-overflow */}
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6 className="text-dark_primary">{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
