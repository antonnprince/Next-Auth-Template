import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  const session = useSession()
  return(
    <>
      <div>
          {session?.data?.user?.name}
      </div>  

      <button onClick={()=>signOut()}>
        Logout
      </button>
    </>
  );
}
