import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
{/*Import from hero icons */}
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  
    {/*Creation of a state to select the file to record the URL of the image to be upload   */}
    const [selectedFile, setSelectedFile] = useState(null);
    {/*Comments  */}
    const [loading, setLoading] = useState(false);
    {/*Comments  */}
    async function uploadPost() {
        if (loading) return;
    
        setLoading(true);
    
        const docRef = await addDoc(collection(db, "posts"), {
          caption: captionRef.current.value,
          username: session.user.username,
          profileImg: session.user.image,
          timestamp: serverTimestamp(),
        });
    
        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imageRef, selectedFile, "data_url").then(
          async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
              image: downloadURL,
            });
          }
        );
        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
      }
    {/*Function to read the file first, then get the URL and pass it to selected file */}
    function addImageToPost(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }
  const filePickerRef = useRef(null);
  const captionRef  = useRef(null);
    return (
        
    <div>        
        {open && (
            <Modal
            className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
            isOpen={open}
            onRequestClose={() => {
              setOpen(false);
              setSelectedFile(null);
            }}
            >
                <div className='flex flex-col justify-center items-center h-[100%]'>     
            {/* Added the image at the beginning of the model here. If there is no image, we see an icon which has camera icon, where we can select an input which is hidden and the type é file*/}

                {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt=""
                className="w-full max-h-[250px] object-cover cursor-pointer"
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
              />
            )}
                {/*Once upload, it triggers a function called AddImageToPost where it reviews the image */}
                <input 
                type="file" 
                hidden ref={filePickerRef} 
                onChange={addImageToPost}></input>

                {/*Input that has which has the caption  */}
                <input 
                type="text" 
                maxLength="150" 
                placeholder="Enter your caption..." 
                className="m-4 border-none text-center w-full focus:ring-0"
                ref={captionRef}
                ></input>
               
                {/*The button at the bottom of the model part, which is now in disabled mode, but changes when it has the image in review  */}
                <button                 
                disabled={!selectedFile || loading}
                onClick={uploadPost}
                className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
                >Upload Post</button>
                
                </div>
                
            </Modal>
        )}
    </div>
  );
}
