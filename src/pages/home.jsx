import { useEffect, useState } from "react"
import { Circles, CirclesWithBar } from 'react-loader-spinner'
import ProductTile from "../components/products-tile"
import '../components/header/header.css'

export default function Home() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)


    async function fetchlistofproducts(){
        setloading(true)
        const res = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await res.json()
     console.log(data);

        if (data) {
            setloading(false)
            setproducts(data)
        }

    }
    // https://fakestoreapi.com/products

    useEffect(() => {
        fetchlistofproducts()
    }, [])

    return <div>
        {
            loading ? (
                <div className="min-h-screen w-full flex justify-center items-center">

                    <Circles
                        height={'120'}
                        width={'120'}
                        color='green'
                        visible={true}
                    />
                </div>
            ) :
                <div  className="main-content     min-h-[50vh] grid bg-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">

                    {
                 products && products.length  ?
                 products.map((productitems)=> (

                    <ProductTile product={productitems}/>
                 ) ) : null }


                </div>




        }
    </div>

}