import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  return (
    <div>        
        {open && (
            <Modal
            className="max-w-lg w[90%] h-[300px]"
            isOpen={open}
            onRequestClose={()=>setOpen(false)}>
                <h1>Modal</h1>
            </Modal>
        )}
    </div>
  );
}
