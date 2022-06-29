import bannerbg from "../../assets/images/bg.png";
import bannerImg from "../../assets/images/chair.png";

function Banner() {
  return (
    <div style={{ background: `url(${bannerbg})` }} className="hero px-0 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-lg rounded-lg shadow-2xl" alt="banner" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid vitae nam reprehenderit cupiditate, harum blanditiis quaerat quibusdam officiis nihil.</p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
