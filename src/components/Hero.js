import { useState } from "react";
import pic from "../images/girl.png";
import Form from "./Form";

function Hero() {
  let [model, setModel] = useState(false);

  return (
    <div>
      <div className="bg-main-2 mx-40 mt-10 rounded-lg shadow-2xl p-10 relative rw:mx-5 rw:mt-[6rem]">
        <p className="text-left text-8xl text-second-2 font-bold ml-10 rw:text-6xl rw:ml-0">
          Learn <br />& Earn
        </p>
        <p className="text-left ml-10 mt-10 pb-40 text-3xl rw:text-2xl rw:ml-0">
          Refer and Earn Real Money upto{" "}
          <p className="text-second-2 font-semibold">₹10,000</p>
        </p>
        <button
          onClick={() => setModel(true)}
          className="rw:left-10 rw:text-2xl bg-second-2 px-5 rounded-lg text-white shadow-[0_4px_25px_5px_rgba(0,0,0,0.25)] text-3xl p-3 mt-10 absolute left-20 bottom-20"
        >
          Refer Now
        </button>
        <img src={pic} className="absolute right-0 top-0 h-[36rem] rw:h-56 rw:top-[18rem]"></img>
      </div>
      {model && <Form onClose={() => setModel(false)} />}
    </div>
  );
}

export default Hero;
