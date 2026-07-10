import React, { useRef , useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { forwardRef } from 'react';
const Model = forwardRef(function Model({children},ref) {
    const dialog = useRef();
console.log("model")
    useImperativeHandle(
      ref, ()=> {
      return {
        open:() => {
        dialog.current.showModal();
      },
      close : () =>{
        dialog.current.close()
      },
      };
      
},[]);

  return createPortal(
    <dialog ref={dialog}   className="backdrop:bg-black/50 rounded-lg m-auto">
        {children}
        </dialog>,
        document.getElementById("model")

  )
});

export default Model;
