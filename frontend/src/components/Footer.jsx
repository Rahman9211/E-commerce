import { assets } from "../assets/assets";

const Footer = () =>{
    return (
      <div>
          <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className=" w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam amet neque laboriosam, voluptate eveniet culpa ipsam perferendis alias saepe enim dolorum delectus odio, laborum pariatur doloremque quae magni ullam.
                </p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">Company</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-214-6633</li>
                    <li> <a href="https://quick1-p6q7.vercel.app/">my another website -click-</a></li>
                    <li>forever@gmail.com</li>
                </ul>

            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025@ <a href="https://www.linkedin.com/in/abdullah-rahman-a33b62308"> hi its me abdullah</a> forever.com - All Right Reserved.</p>
        </div>
      </div>
    )
} ;

export default Footer ;