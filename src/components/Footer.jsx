import content from "../Content";

const Footer = () => {
  const { footer } = content;

  return (
    <footer className="text-center text-white bg-dark_primary">
      <div className="px-5 py-10 md:container">
        <h6 className="mb-3 !text-white">ZIKAZAKI</h6>
        <p className="!text-white">{footer.text}</p>
      </div>
    </footer>
  );
};

export default Footer;
