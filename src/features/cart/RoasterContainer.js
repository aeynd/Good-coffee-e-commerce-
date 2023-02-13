import { useEffect, useState } from "react";
import * as roasterApi from "../../apis/roaster-api";

export default function RoasterContainer() {
  const [roasters, setRoasters] = useState([]);

  useEffect(() => {
    const fetchRoaster = async () => {
      const res = await roasterApi.getAllRoaster();
      setRoasters(res.data.roasters);
    };
    fetchRoaster();
  }, []);

  // console.log(roasters);
  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex flex-col justify-center items-center font-Roboto font-light text-7xl">
          <p>ROASTER</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700" />
      </div>

      {roasters.map(el => (
        <div className="flex flex-col justify-center ">
          <div className="" key={el.id}>
            <div className="flex flex-col items-center">
              <img className="flex" src={el.image} />
              <p className="flex">{el.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
