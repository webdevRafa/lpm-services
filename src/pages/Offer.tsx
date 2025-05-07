import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import home from "../assets/pics/home.jpg";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  beds: number;
  baths: number;
  squareFeet: number;
  additionalDetails: string;
}

export const Offer: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "",
        email: "",
        propertyAddress: "",
        beds: 0,
        baths: 0,
        squareFeet: 0,
        additionalDetails: "",
      });

      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
      
        // Handle phone formatting
        if (name === "phone") {
          const rawValue = value.replace(/\D/g, ''); // Remove non-digits
          let formatted = rawValue;
          if (rawValue.length > 3 && rawValue.length <= 6) {
            formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
          } else if (rawValue.length > 6) {
            formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 6)}-${rawValue.slice(6, 10)}`;
          }
          setFormData((prev) => ({ ...prev, phone: formatted }));
          return;
        }
      
        // Handle number fields
        if (["beds", "baths", "squareFeet"].includes(name)) {
          setFormData((prev) => ({ ...prev, [name]: Number(value) }));
          return;
        }
      
        // Default
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "offerRequests"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      alert("Offer request submitted!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        propertyAddress: "",
        beds: 0,
        baths: 0,
        squareFeet: 0,
        additionalDetails: "",
      });
    } catch (error) {
      console.error("Error submitting offer:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      
    <div className="w-full h-full relative">
    <div className="max-w-[1400px] mx-auto w-full  md:py-[140px]">
      
      <div className="w-full">
        <h2 className="text-spurs-charcoal text-2xl md:text-5xl text-center mb-2 mt-10">
          WE ARE HERE TO ASSIST YOU IN GETTING AN OFFER FAST
        </h2>
        <p className="text-spurs-charcoal text-center text-lg mb-5">Please take a quick moment to fill out some information and we will get back to you with an offer very soon!</p>
        <form
          onSubmit={handleSubmit}
          className="bg-spurs-charcoal  text-xl font-bold mb-4 w-[95%] shadow-md px-4 md:px-10 py-20 max-w-[600px] mx-auto"
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="my-3 text-spurs-charcoal bg-spurs-silver-light w-full p-2 mb-2 rounded"
          />
        <input
type="tel"
name="phone"
value={formData.phone}
onChange={handleChange}
placeholder="Phone Number"
pattern="^\d{3}-\d{3}-\d{4}$"
title="Format: 555-123-4567"
className="my-3 bg-spurs-silver-light text-spurs-charcoal w-full p-2 mb-2 rounded"
/>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="my-3 bg-spurs-silver-light text-spurs-charcoal w-full p-2 mb-2 rounded"
          />
          <input
            type="text"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            placeholder="Property Address"
            className="my-3 bg-spurs-silver-light text-spurs-charcoal w-full p-2 mb-2 rounded"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
  <div className="flex flex-col">
    <label htmlFor="beds" className="text-white mb-1">Beds</label>
    <input
      type="number"
      id="beds"
      name="beds"
      value={formData.beds}
      onChange={handleChange}
      placeholder="e.g. 3"
      className="bg-spurs-silver-light text-spurs-charcoal w-full p-2 rounded"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="baths" className="text-white mb-1">Baths</label>
    <input
      type="number"
      id="baths"
      name="baths"
      value={formData.baths}
      onChange={handleChange}
      placeholder="e.g. 2"
      className="bg-spurs-silver-light text-spurs-charcoal w-full p-2 rounded"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="squareFeet" className="text-white mb-1">Square Feet</label>
    <input
      type="number"
      id="squareFeet"
      name="squareFeet"
      value={formData.squareFeet}
      onChange={handleChange}
      placeholder="e.g. 1500"
      className="bg-spurs-silver-light text-spurs-charcoal w-full p-2 rounded"
    />
  </div>
</div>

          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Any additional details (e.g., Needs a new roof)"
            className="my-3 bg-spurs-silver-light text-spurs-charcoal w-full p-2 mb-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="mx-auto block bg-spurs-teal text-spurs-charcoal cursor-pointer px-4 py-2 rounded hover:bg-red-900 mt-10 hover:scale-105 transition duration-300 ease-out"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
    {/* image */}
    <div className="hidden md:block absolute z-[-1] top-0 left-0 w-full h-full overflow-hidden">
        <img className="object-cover w-full opacity-30" src={home} alt="" />
    </div>
    </div>
    </>
  );
};
