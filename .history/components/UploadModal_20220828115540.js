import React from 'react'
import {modalState} from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
{/*Import from hero icons */}
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
{/*Import built functions / utilities from firebase*/}
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
  } from "firebase/firestore";
  import { db, storage } from "../firebase";
  import { useSession } from "next-auth/react";
  import { getDownloadURL, ref, uploadString } from "firebase/storage";
export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);  
    {/*Creation of a state to select the file to record the URL of the image to be upload   */}
    const [selectedFile, setSelectedFile] = useState(null);
    {/*State called loading, it gets the information from the from session */}
    const [loading, setLoading] = useState(false);
    {/*This function is going to prevent the user to upload more than one post at the same time */}
    const { data: session } = useSession();
    async function uploadPost() {
        {/*function which return when the loading is true  */}
        if (loading) return;
        
        {/*if the loading is false, I set the loading to true */}
        setLoading(true);
        {/*addDoc is a building function for Firebase  */}
        {/*create the document with these informations and */}
        const docRef = await addDoc(collection(db, "posts"), {
          caption: captionRef.current.value,
          username: session.user.username,
          profileImg: session.user.image,
          timestamp: serverTimestamp(),
        });
    
        {/*and then  it upload the image to this andress with this documentary  */}
        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imageRef, selectedFile, "data_url").then(
          async (snapshot) => {
            {/*once uploaded it, we get te download the URL  and updated the document with the url donwload  */}
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
              image: downloadURL,
            });
          }
        );
        {/*and finally, we set everything to false */}

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
