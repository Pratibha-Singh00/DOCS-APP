import React, { useRef } from 'react';

import Card from './Card';


function Foreground() {

    //your card element will not go outside of the page
    const ref = useRef(null);

    //create dummy data(icon, desc, 0.4mb heading download icon  )
    const data= [
      { 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing.", 
        filesize: ".9mb", 
        close: false, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
      },

      {
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing.", 
        filesize: ".9mb", 
        close: false, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
      },

      {
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing.4", 
        filesize: ".9mb", 
        close: false, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: ""}
      },
    ];
    //note state data
    // useState()
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full border-4 flex gap-10 flex-wrap p-5'>   {/*Here flex and gap 'llbe used for the card by using these 2 card will be side of eachother if we did't use card will be under of each other */}
      {/* Optional: Add bg-sky-800/50 for background tint */}
      {/* <Card /> Render the Card component ()REMOVE CARD DATA*/}

      {/*USE JSX */}

      {data.map((item, index)=>(
       <Card key={index} data={item} reference={ref} />
      ))}    {/*data map-use for go to the data element or data object and print the value of inside itself and then render */}
    </div>
  );
}

export default Foreground;

