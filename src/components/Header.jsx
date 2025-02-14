
import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";


export default function Header(){

const [toggle,setToggle] = useState(false);
 
const showSideMenu = () =>{
    setToggle(true);
}
const hideSideMenu =() =>{

    setToggle(false);
}

const links = [
{
   icon: <IoIosSearch  />,
   name:"Search"
   

},
{
    icon:<CiDiscount1 />,
    name:"Offers",
    sup:"New"
},
{
    icon:"",
    name:"Help"
},
{
    icon:"",
    name:"SignIn"
},
{
    icon:"",
    name:"Cart"
},


]

return (
  
    <>
    <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{ opacity: toggle ? 1:0,
    visibility:toggle ?"visible":"hidden"}}>
    <div onClick={(e)=>{e.stopPropagation();}}  className='w-[500px] bg-white h-full absolute'>


    </div>


    </div>

    <header className='p-[30px] shadow-xl text-[#686b78]'>
    <div className='max-w-[1200px] mx-auto  flex items-center gap-2'>
  
  
    <img src="/images/a.png" className="w-8" alt="Image" />
    
   <div className='inline-flex'>
      <span className='font-bold border-b-[3px] border-[black]'>Mangalore</span>  ,Karnataka,India<RxCaretDown font-size ={25}className='inline  text-[#fc8019] cursor-pointer' onClick={showSideMenu}/>



   </div>
   <div>
   <nav className='flex list-none gap-5 border ml-[570px]  text-[18px] font-semibold'>

   {

          links.map(

            (link,index) => {
                return <li key={index}className='flex items-center gap-2 hover:text-[#fc8019]'>

                {link.icon}
                { link.name}

                <sup className='text-orange-500'>{link.sup}</sup>
                </li>
            }
          )

   }
   </nav>


   </div>
    </div>
    


    </header>
    </>
  )
}

