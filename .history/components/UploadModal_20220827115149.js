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
            <div className="flex flex-col justify-center items-center h-[100%]">            onRequestClose={()=>setOpen(false)}
            >
                <div className='flex flex-col justify-center items-center h-[100%]'>
                <CameraIcon className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"/>
                </div>
                
            </Modal>
        )}
    </div>
  );
}
