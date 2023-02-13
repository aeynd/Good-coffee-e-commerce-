export default function Contact() {
  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex flex-col justify-center items-center font-Roboto font-light text-7xl">
          <p>CONTACT</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700" />

        <div className="">
          <div className="flex justify-evenly mt-10">
            <img
              src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1675761029/personal%20project/e12500130244247.617bc73304aae_cil1zl.jpg"
              className="w-1/3"
            />
            <div className="text-base ">
              <p>Good coffee</p>
              <p>Address</p>
              <p>Tel</p>
              <p>xxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
