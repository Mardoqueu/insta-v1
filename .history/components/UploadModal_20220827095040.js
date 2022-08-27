import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  return (
    <div>        
        {open && (
            <Modal
            className="max-w-lg w[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2"
            isOpen={open}
            onRequestClose={()=>setOpen(false)}>
                <h1>Modal</h1>
            </Modal>
        )}
    </div>
  );
}
