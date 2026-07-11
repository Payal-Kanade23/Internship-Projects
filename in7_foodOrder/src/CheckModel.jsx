import React, { forwardRef  , useRef } from 'react';
import { createPortal } from 'react-dom';
import { useImperativeHandle } from 'react';

const CheckModel = forwardRef(function CheckModel({children}, ref) {
 const dialogCheck = useRef();
  
       useImperativeHandle(ref, () => ({
     open() {
       dialogCheck.current.showModal();
     },
 
     close() {
       dialogCheck.current.close();
     },
   }) , []);

  return createPortal(
    <dialog ref={dialogCheck} className="rounded-xl p-6 shadow-2xl backdrop:bg-black/50 m-auto">
      {children}
    </dialog>,
    document.getElementById("checkout")
  );
}
) 

export default CheckModel;
