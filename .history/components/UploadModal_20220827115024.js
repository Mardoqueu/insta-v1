import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  
    const [selectedFile, setSelectedFile] = useState(null);
    return (
        
    <div>        
        {open && (
            <Modal
            className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"            isOpen={open}
            onRequestClose={()=>setOpen(false)}
            >
                <div className='flex flex-col justify-center items-center h-[100%]'>
                <CameraIcon className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2"/>
                </div>
                
            </Modal>
        )}
    </div>
  );
}
