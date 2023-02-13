import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="p-4 sm:p-6 ">
        <hr className="my-6 sm:mx-auto dark:border-gray-700 " />
        <div className="md:flex flex-col md:justify-between mx-14">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1675255971/personal%20project/logo_hezhxg.svg"
                className="h-8 mr-3"
              />
              <span className="self-center text-lg font-Roboto font-medium whitespace-nowrap ">
                Good coffee for good people.
              </span>
            </a>
          </div>
          <div className="flex justify-between font-Roboto font-medium ">
            <div className="pl-12 mt-8 w-1/3 ml-20 ">
              <ul className=" text-xs ">
                <li className="pb-5">
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-5 ">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="pb-5">
                  <Link to="/roaster">Roaster</Link>
                </li>
                <li>
                  <Link to="/profile">Account</Link>
                </li>
              </ul>
            </div>
            <div className="pl-12 mt-8 w-1/3 text-xs ">
              <p className="pb-5 ">Contact</p>
              <ul>
                <li className="pb-5 ">
                  <a href="#">Facebook</a>
                </li>
                <li className="pb-5 ">
                  <a href="#">Instagram</a>
                </li>
                <li className="pb-5 ">
                  <a href="#">Line</a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 flex flex-col  ">
              <div className="flex justify-center ">
                <img
                  src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1675260518/personal%20project/footer.png"
                  className="w-36"
                />
              </div>
              <div className="flex justify-center gap-2">
                <img src="https://img.icons8.com/ios-glyphs/30/null/facebook-new.png" />
                <img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" />
                <img src="https://img.icons8.com/ios-glyphs/30/null/line-me.png" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
