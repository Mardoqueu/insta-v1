import { async } from "@firebase/util";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header"

export default function signin({providers}) {
  return (
    <>
          <Header/>
        <div>
            <img className="hidden object-cover rotate-6 md:inline-flex md:w-48"  src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png" alt="instagram-image" />
        </div>
    </>

  )
}


export async function getServerSideProps(context) {
    const providers = await getProviders();
    return{
        props:{providers},
    };
    
}
