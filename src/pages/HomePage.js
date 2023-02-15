import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex justify-center font-Roboto font-light text-7xl">
          <p>GOOD COFFEE</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
        <div className="p-6">
          <p className="font-bold">Best seller</p>
        </div>
        <div className="h-56 sm:h-96 xl:h-80 2xl:h-96 p-6">
          <Carousel>
            <Link to="/shop/4">
              <img
                src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1676360391/personal%20project/Group_18_patjg4.png"
                className="w-full"
              />
            </Link>
            <Link to="/shop/6">
              <img
                src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1676360301/personal%20project/Group_19_moffqj.jpg"
                className="w-full"
              />
            </Link>
            <Link to="/shop/5">
              <img
                src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1676360301/personal%20project/Group_20_pnwppt.png"
                className="w-full"
              />
            </Link>
          </Carousel>
        </div>

        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
      </div>
    </>
  );
}
