'use client';
import React, { useState } from 'react';


export default function PopupButton( {className, text, children} : {className: string, text:string, children: any}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className= {className}>
          { showPopup && children}
          <button className="text-right" onClick={
            () => {
              setShowPopup(!showPopup);
            }
          }>
            <span className="text-black font-bold text-right text-xl border border-black border-3 p-1 ">{text}</span>
          </button>
    </div>
  );
}