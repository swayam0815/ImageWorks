import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');
  return (
    <div className="">
     
    </div>
  );
}
