import React from 'react';
import { forwardRef , useImperativeHandle , useRef} from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef (function Modal({children} , ref) {
    const dialog = useRef();
      useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },

    close() {
      dialog.current.close();
    },
  }), []);
      return createPortal(
    <dialog ref={dialog} className="rounded-xl p-6 shadow-2xl backdrop:bg-black/50 m-auto"
>
      {children}
    </dialog>,
    document.getElementById("modal")
      )
    
  
})

export default Modal;
