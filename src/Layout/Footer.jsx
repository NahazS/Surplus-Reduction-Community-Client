import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="text-black text-opacity-75 mt-10 bg-[#f3f7fc] bg-opacity-50">
            <hr />
            <div className="flex flex-wrap justify-between items-start py-6 px-5 xl:px-0 max-w-[1140px] mx-auto pt-[145px] pb-[129px]">
                <div>
                    <Link className="drop-shadow-2xl font-bold"><h3 className="text-[#575d90] text-2xl">EcoUnity</h3></Link>
                    <ul className="leading-[42px]">
                        <li>eco-unity@support.com</li>
                        <li>+880 1234567890</li>
                        <li>Dhaka, Bangladesh</li>
                    </ul>
                    <div>
                        <ul className="flex gap-x-2 mt-[20px]">
                            <div className="bg-white rounded-full items-center"><li className="p-[10px]"><FaFacebook className="w-[15px]" /></li></div>
                            <div className="bg-white rounded-full items-center"><li className="p-[10px]"><FaGithub className="w-[15px]" /></li></div>
                            <div className="bg-white rounded-full items-center"><li className="p-[10px]"><FaGoogle className="w-[15px]" /></li></div> 
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="mb-10">Services</h4>
                        <ul className="leading-[42px]">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Add Food</a></li>
                            <li><a href="#">Available Food</a></li>
                            <li><a href="#">My Food</a></li>
                            <li><a href="#">Sign In</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="mb-10">Useful Links</h4>
                        <ul className="leading-[42px]">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#"> Contact</a></li>
                            <li><a href="#">Appointment</a></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-[350px] hidden sm:flex sm:flex-col">
                    <h4 className="mb-10">Subscribe</h4>
                    <form className="border-[1px] border-black border-opacity-30 w-fit rounded-3xl pl-[20px] pr-[2px] py-[1px] mb-[42px]">
                        <input className="bg-transparent border-none focus:outline-none" type="text" placeholder="Enter your mail" 
                        />
                        <button className='h-[40px] px-[20px] btn btn-primary rounded-3xl border-none'>Subscribe</button>
                    </form>
                    <p>EcoUnity: Bringing communities together to transform surplus into sustainable solutions for a greener tomorrow.</p>
                </div>
                
            </div>
            <hr />
            <p className="py-[30px] text-center">Copyright © 2024 All rights reserved</p>
        </div>
    );
};

export default Footer;