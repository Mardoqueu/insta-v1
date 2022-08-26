import { async } from "@firebase/util";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header"

export default function signin({providers}) {
  return (
    <div>
        <h1>signIn</h1>
    </div>
  )
}


export async function getServerSideProps(context) {
    const providers = await getProviders();
    return{
        props:{providers},
    };
    
}
