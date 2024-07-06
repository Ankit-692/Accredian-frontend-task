import React, { useState } from 'react';

function Form({ onClose }) {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [referredName, setReferredName] = useState("");
  const [referredEmail, setReferredEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const referralData = {
      referrerName,
      referrerEmail,
      referredName,
      referredEmail,
    };
    console.log(referralData)
    
    try {
      const response = await fetch("https://accredian-backend-task-f59a.onrender.com/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(referralData),
      });

      if (response.ok) {
        alert("Referral submitted successfully!");
      } else {
        alert("Failed to submit referral.");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("Error submitting referral.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-xl ml-96 mt-20 rounded-lg p-10 bg-main gap-y-10 relative rw:ml-5 rw:mr-5"
      >
        <a
          href="javascript:void(0)"
          onClick={onClose}
          className="absolute right-10 top-5 font-semibold"
        >
          X
        </a>
        <p className="font-bold text-3xl text-second-2">Referral Form</p>
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border-2 border-solid border-second-2 rounded-lg"
          onChange={(e) => setReferrerName(e.target.value)}
          required
        />
        <input
          type="Email"
          placeholder="Your Email"
          className="p-3 border-2 border-solid border-second-2 rounded-lg"
          onChange={(e) => setReferrerEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Referral Name"
          className="p-3 border-2 border-solid border-second-2 rounded-lg"
          onChange={(e) => setReferredName(e.target.value)}
          required
        />
        <input
          type="Email"
          placeholder="Referral Email"
          className="p-3 border-2 border-solid border-second-2 rounded-lg"
          onChange={(e) => setReferredEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-second-2 rounded-lg text-white shadow-[0_4px_25px_5px_rgba(0,0,0,0.25)] text-2xl p-3 mt-5 w-40 ml-40 rw:text-xl rw:w-[8rem] rw:ml-20"
        >
          Refer
        </button>
      </form>
    </div>
  );
}

export default Form;
