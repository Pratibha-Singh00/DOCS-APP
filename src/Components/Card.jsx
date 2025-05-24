import React from 'react'  //rfce
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

// 🔽 Add this helper function here
function getBgColorClass(color) {
  const colors = {
    green: 'bg-green-600',
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-600',
    sky: 'bg-sky-500', // sky blue
    skyDark: 'bg-sky-800',
    skyLight: 'bg-sky-300',
    // Add more if needed
  };
  return colors[color] || 'bg-zinc-900'; // fallback
}


function Card({data, reference}) {         // {Data}-destructuring perform

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>{/*cards*/}

    {/*icon,text,footer(text, icon) ,tag*/}  
    <FaRegFileAlt/>    {/*tag is written as components*/} 
    
    {/*text*/}
    <p className='text-xs mt-5  font-semibold leading-tight'>{data.desc}</p>
    
    {/*footer*/}
    <div className='footer absolute bottom-0 w-full left-0'>
    
    {/*footer section 0.4 and download icon */}
     <div className='flex items-center justify-between px-5 mb-3'> 
       <h5>{data.filesize}</h5>      {/*before we use .4 mb but now we use Data filesize using Foreground.jsx file */}
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>  {/*for stylig purpose */}
            {data.close ? <IoMdClose/> : <MdOutlineFileDownload size='.7em' color='#fff'/> } 
              {/*Download icon*/}
            </span>
       </div>
       {data.tag.isOpen && (
  <div className={`tag w-full py-4 ${getBgColorClass(data.tag.tagColor)} flex items-center justify-center`}>

          {/* tag w-full py-4 bg-green-800 flex items-center justify-centerif true print */}
           <h3 className="text-md flex">{data.tag.tagTitle}</h3>
  </div>
)} {/*if data.tag.isOpen true print div value othervise print null by using foreground.jsx file*/}
    </div>
    </motion.div>
  )
}

export default Card


