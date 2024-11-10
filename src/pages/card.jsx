import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Cardtile from "../components/carttile/card-tile";




export default function Card() {
    const [totalcard, settotalcard] = useState(0)

    const { cart } = useSelector((state) => state)
    console.log(cart);

    useEffect(() => {
        settotalcard(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    console.log(cart, totalcard);


    return (
        <div className="bg-slate-800">
            {
                cart && cart.length > 0 ? (<>
                    <div className="min-h-[80vh] sm:flex container  md:grid items-center mx-auto">
                        <div className="  grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center  items-center  ">
                            {
                                cart.map((carditems) => <Cardtile cartitem={carditems} />)

                            }
                        </div>
                    </div>

                    <div>
                        <div className="grid items-center justify-center p-5  space-y-5  mt-10">
                            <h1 className="font-bold text-lg text-orange-600"> your card summary  </h1>
                            <p>
                                <span className="text-green-500  font-bold "> totol items </span>
                                <span>: {cart.length}</span>
                            </p>
                            <p>
                                <span className="text-green-500 font-bold "> totol amount </span>
                                <span>: {totalcard}</span>
                            </p>
                        </div>

                    </div>

                </>) : (

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-green-500 font-bold text-2xl mt-4 mb-2"> Dear your card is empty  </h1>
                        <Link to={'/'}>
                            <button className=" hover:bg-red-500 text-white border-2 rounded-sm mb-10 mt-10 bg-amber-800 p-2">Shop now</button>
                        </Link>
                    </div>
                )}








        </div>





    )




}