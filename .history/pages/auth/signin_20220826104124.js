import { async } from "@firebase/util";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header"

export default function signin({providers}) {
  return (
    <>
          <Header/>
        <div>
            <img className="hidden object-cover rotate-6 md:inline-flex md:w-48"  src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png" alt="instagram-image" />
            <div className="">
                {Object.values(providers).map((providers)=> (
                    <div  className="flex flex-col items-center">
                        <img className="w-32 object-cover"  src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png" alt="" />
                        <p>Created by Mardoqueu Sousa</p>
                    </div>
                ))}
            </div>
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
