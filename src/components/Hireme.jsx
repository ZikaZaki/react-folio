// import content
import content from '../Content';

const Hireme = () => {
  const { hireme } = content;
  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14 pb-5">
        <h2 className="title" data-aos="fade-down">{hireme.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{hireme.subtitle}</h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse gap-10">
          <img src={hireme.image1} alt="..." data-aos="fade-right" className="max-w-[45vw] min-w-[22rem] md:block hidden" />
          <img src={hireme.image1} alt="..." data-aos="fade-up" className="max-w-[45vw] min-w-[22rem] md:hidden" />
          <div 
            className="border-2 border-dark_primary max-w-sm p-6 shadow-sm 
            rounded-xl rounded-br-[8rem] md:self-start sm:min-w-[22rem]"
            data-aos="fade-left"
          >
            <p className="leading-7">{hireme.para}</p>
            <button className="btn bg-dark_primary text-white">{hireme.btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
