import { Carousel } from "flowbite-react";
export default function HomePage() {
  return (
    <>
      <div className="flex justify-center font-Roboto font-light text-7xl">
        <p>GOOD COFFEE</p>
      </div>
      <div className="p-6">
        <p>Best seller</p>
      </div>
      <div className="h-56 sm:h-96 xl:h-80 2xl:h-96 p-6">
        <Carousel>
          <img
            src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1675331854/personal%20project/Group_15_1_zzht5d.png"
            className=""
          />
        </Carousel>
      </div>
      <div className="p-4 sm:p-6 ">
        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
      </div>
    </>
  );
}
