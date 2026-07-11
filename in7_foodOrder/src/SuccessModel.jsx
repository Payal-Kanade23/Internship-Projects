import React, { forwardRef , useRef , useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const SuccessModel = forwardRef(function SuccessModel({children}, ref) {
    const dialogS = useRef(); 
          useImperativeHandle(ref, () => ({
        open() {
          dialogS.current.showModal();
        },
    
        close() {
          dialogS.current.close();
        },
      }),[]);

      

  return createPortal (
    <dialog ref={dialogS} className="rounded-xl p-6 shadow-2xl backdrop:bg-black/50 m-auto">
     {children}
    </dialog>,
    document.getElementById("success")
  );
}) 

export default SuccessModel;
