import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  return (
    <div>        
        {open && (
            <Modal
            isOpen={open}>
                <h1>Modal</h1>
            </Modal>
        )}
    </div>
  );
}
