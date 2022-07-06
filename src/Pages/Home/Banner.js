import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse  max-w-7xl mx-auto px-12">
        <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Banner;
