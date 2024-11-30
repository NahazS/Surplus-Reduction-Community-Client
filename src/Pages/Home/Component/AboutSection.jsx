import React from "react";

const AboutSection = () => {
  return (
    <div className="min-h-[557px] mt-[130px]">
      <div className="hero-content flex-col lg:flex-row justify-between w-full">
        <div className="">
            <img src="https://i.ibb.co.com/d67QNDY/image.png"  className="md:h-[473px] md:w-[460px] rounded-lg shadow-2xl"
            />
        </div>
        <div className="max-w-[489px] mt-10 sm:mt-[150px] lg:mt-0">
          <h3 className="text-2xl text-primary mb-5">About Us</h3>
          <h1 className="text-5xl font-bold mb-5">At Surplus Reduction Community</h1>
          <p className="py-6 text-[#737373]">
          we are passionate about creating a sustainable future through innovative food-sharing solutions. Our mission is to reduce food waste and support communities by transforming surplus into opportunities for those in need.With years of experience and dedication, we aim to build connections, foster generosity, and empower people to take action against food waste. Whether you’re here to contribute or receive, we believe in making every meal count.
          </p>
          <p className="py-6 text-[#737373]">Join us in our journey to make sustainability a community effort and turn surplus into smiles. Together, we can create a greener tomorrow.</p>
          <button className="btn btn-primary text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;