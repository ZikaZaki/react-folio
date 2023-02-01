// import content
import { createElement, useState } from "react";
import content from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "calc(50% - 2.5rem)",
    right: "50%",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    bottom: "auto",
    // marginRight: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "22rem",
    width: "100%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="skills" className="min-h-fit bg-bg_light_primary">
      <div className="md:container flex-row px-5 py-14">
        {/* Modal */}
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="flex items-center gap-2">
            <img className="h-10" src={selectSkill?.logo} alt="..." />
            <h6>{selectSkill?.name}</h6>
          </div>
          <br />
          <ul className="list-decimal font-Poppins md:px-4 sm:text-sm text-xs !leading-7">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, velit? Quod, reprehenderit modi.</li>
          </ul>
          <br />
          <div className="flex justify-end">
            <button 
              onClick={closeModal} 
              className="btn">Close
            </button>
          </div>
        </Modal>

        {/* content */}
        <h2 className="title" data-aos="fade-down">{skills.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{skills.subtitle}</h4>
        <br />
        <div className="flex flex-row gap-5 w-full">
          <div className="sm:flex hidden min-w-[30%] max-w-[50%]">
            <img src={skills.person} alt="..." data-aos="fade-up" className="w-full" />
          </div>
          <div className="flex flex-wrap gap-4 min-w-[70%] justify-center">
            {skills.skills_content.map((skill, i) => (
              <div 
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                onClick={()=>{
                  setSelectSkill(skill);
                  openModal();
                }} 
                className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
              >
                <div>
                  <img src={skill.logo} alt="..." className="w-10 group-hover:scale-125 duration-200" />
                </div>
                <div>
                  <h6 className="text-dark_primary">{skill.name}</h6>
                  <p className="italic">{skill.para}</p>
                  <div className="text-xl absolute top-3 right-3">
                    {createElement(skills.icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
