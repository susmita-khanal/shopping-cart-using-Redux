import React from 'react'
import Modal from "react-modal";

const ModalDialog = ({isModalOpen,setIsModalOpen,confirmObj}) => {
    console.log(confirmObj)
  return (
    <>
      <Modal className="modal"  isOpen={isModalOpen}>
               <button className="closebutton" onClick={()=>setIsModalOpen(false)}><i class="fas fa-times"></i></button>
                <p className="para1">{confirmObj.message}</p>
                <p className="para2"><button onClick={confirmObj.onSuccess} className="button1">yes</button><button onClick={()=>setIsModalOpen(false)} className="button2">No</button></p>
            </Modal> 
    </>
  )
}

export default ModalDialog
