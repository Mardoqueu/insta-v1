import { async } from "@firebase/util";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header"

export default function signin({providers}) {
  return (
    <>
          <Header/>
        <div>
            <img className="w-32 object-cover"  src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png" alt="" />

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
