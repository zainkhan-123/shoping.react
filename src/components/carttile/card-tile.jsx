import { useDispatch } from "react-redux"
import { removefromthecart } from "../../store/slices/cardslice"


export default function Cardtile({cartitem}){
 
    const dispatch = useDispatch()

    function  handleremovefromcard(){
dispatch(removefromthecart(cartitem.id))
    }


 return(
<>
<div className="mx-10 sm:mx-5 sm:grid">
<div className=" flex max-w-96   flex-wrap container sm:flex-shrink   justify-center items-center align-middle">
<div className=" items-center  p-2   bg-red-500 mt-2 mb-2  rounded-xl">
<div  className="p-4  ">
<img 
src={cartitem?.images} alt={cartitem?.title} />
<div className=" self-start ml-9 sm:ml-0  ">
<h1 className="text-sm  text-white mt-3 w-36 truncate ">{cartitem?.title}</h1>
<p className="text-white font-extrabold">{cartitem?.price}</p>
</div>
</div>
<div>


<button onClick={ handleremovefromcard} 
      className='bg-red-500 text-black border-black border-2 rounded-lg font-bold p-4 hover:bg-red-400 hover:text-white' >
                   remove from card
                </button>





</div>









</div>

</div>

</div>












</>

 )
}