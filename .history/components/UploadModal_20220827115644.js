import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    return (
        
    <div>        
        {open && (
            <Modal
            className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"            isOpen={open}
            onRequestClose={()=>setOpen(false)}
            >
                <div className='flex flex-col justify-center items-center h-[100%]'>
                <CameraIcon onClick={() => filePickerRef.current.click()} className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"/>
                <input type="file" hidden ref={filePickerRef}></input>
                <input type="text" maxLength="150" placeholder="Enter your caption..." className="m-4"></input>
                </div>
                
            </Modal>
        )}
    </div>
  );
}
