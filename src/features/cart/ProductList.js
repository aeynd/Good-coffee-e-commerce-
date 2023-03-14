// import { CartContext } from "../../contexts/CartContext";
// import useCart from "../../hooks/useCart";

// export default function ProductList() {
//   const { cart, setCart } = useCart(CartContext);

//   return (
//     <>
//       {cart.map(el => (
//         <div className="flex justify-between mx-5" key={el.id}>
//           <div className="flex">
//             <div>
//               <img className="w-52" src={el.image} />
//             </div>
//             <div className="flex flex-col gap-5 justify-center">
//               <p>{el.title}</p>
//               <p>{el.price}</p>
//               <div className=" ">
//                 <button className="w-5">-</button>
//                 <input className="w-1/2">{el.lenght}</input>
//                 <button className="w-5">+</button>
//               </div>
//             </div>
//             <div className="flex cart-center ml-36 ">
//               <p>{}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
