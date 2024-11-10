import { Link } from "react-router-dom";


export default function Header(){
    return   (
<div>
<nav className="flex  items-center justify-between max-w-6xl h-20 mx-auto">
    <Link to={'/'}>
    <div className="ml-5">
        <h1 className="text-red-400 font-bold hover:text-black text-xl  sm:text-2xl md:text-3xl  cursor-pointer tracking-wide">
            React  Redux Shopping Cart  
        </h1>
    </div>
    </Link>
<ul className="flex  list-none items-center justify-between space-x-6 text-gray-500 font-semibold">
<Link to={'/'}>
<li className="cursor-pointer text-pink-500  hover:text-black">Home</li>
</Link>
<Link to={'/card'}>
<li className="cursor-pointer   text-pink-500   hover:text-black ">Cart</li>
</Link>

</ul>

</nav>
</div>
    )
}