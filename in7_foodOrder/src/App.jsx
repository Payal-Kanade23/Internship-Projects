import Header from './Header'
import './App.css'
import foods from './data'
import CardDesign from './CardDesign'
import CartModel from './CartModel';
import { useRef } from 'react';
import Modal from './Modal';
function App() {
 const modal = useRef();
const product = foods
 function modalStart(){
      modal.current.open();
 }

 function modalEnd(){
      modal.current.close();
 }
  return (
    <>
       <Modal ref={modal} >
        <CartModel modalEnd={modalEnd} />
       </Modal>
       
       <Header modalStart={modalStart} />
       <CardDesign product={product} modalEnd={modalEnd}  />  
      
    </>
  )
}

export default App
