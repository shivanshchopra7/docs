import React, { useRef, useState } from 'react'
import Card from './Card'


function foreground() {
const ref = useRef(null);

    const data = [
        {
            desc: "lorem ipsum dolor sit amet consectur adipsicning.", filesize: ".9mb", close: false, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" }, 
     },
     {
        desc: "lorem ipsum dolor sit amet consectur adipsicning.", filesize: ".9mb", close: false, tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green" }, 
 },
 {
    desc: "lorem ipsum dolor sit amet consectur adipsicning hola mhigo igo hno janata.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Upload Now", tagColor: "blue" }, 
},

    ];
    useState()
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-10 flex-wrap'>
        {data.map((item, index) => (
            <Card data={item} reference={ref} />
        ))}
       
      </div>
  )
}

export default foreground