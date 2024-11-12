<<<<<<< HEAD
import { Link } from "react-router-dom";


export default function Header(){
    return   (
<div>
<nav className="flex  items-center justify-between max-w-6xl h-20 mx-auto">
    <Link to={'/'}>
    <div className="ml-5">
        <h1 className="text-red-400 font-bold hover:text-black text-xl  sm:text-2xl md:text-3xl  cursor-pointer tracking-wide">
=======
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  './header.css'

export default function Header(){

const {cart} =  useSelector((state) => state)
console.log(cart);



    return   (

     
<div className="fixed-header">
<nav className="grid justify-items-center justify-center mb-10 space-y-3 sm:flex items-center  sm:justify-between max-w-6xl h-20 mx-auto">
    <Link to={'/'}>
    <div className="ml-5">
        <h1 className="text-red-400 font-bold hover:text-black text-sm sm:text-2xl md:text-3xl  cursor-pointer tracking-wide ml-0 mr-9  ">
>>>>>>> daca255 (Describe your changes here)
            React  Redux Shopping Cart  
        </h1>
    </div>
    </Link>
<ul className="flex  list-none items-center justify-between space-x-6 text-gray-500 font-semibold">
<Link to={'/'}>
<<<<<<< HEAD
<li className="cursor-pointer text-pink-500  hover:text-black">Home</li>
</Link>
<Link to={'/card'}>
<li className="cursor-pointer   text-pink-500   hover:text-black ">Cart</li>
</Link>

</ul>

=======
<li className="cursor-pointer text-pink-500  text-sm sm:text-lg hover:text-black">Home</li>
</Link>
<Link to={'/card'}>
<li className="cursor-pointer   text-pink-500 text-sm sm:text-lg hover:text-black ">Cart</li>
</Link>

</ul>
<div className="flex justify-center mb-4 items-center ml-5 max-w-4   
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
}">
    <div className='flex  ml-0 sm:ml-10 md:ml-28 flex-wrap justify-center  w-full'>
    <span className="text-orange-500"> Item: </span>
    <span className="text-black"> {cart.length}</span>
    </div>
</div>
>>>>>>> daca255 (Describe your changes here)
</nav>
</div>
    )
}