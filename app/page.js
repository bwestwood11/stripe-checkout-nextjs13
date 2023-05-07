import Link from "next/link";

export default function Home() {
  return (
   <div className="text-center h-full w-full">
    <h1 className="text-5xl">Home Page</h1>
    <p className="pt-40">Click Here</p>
    <h1 className="text-2xl underline items-center justify-middle"><Link href="/pricing"> Pricing Page </Link></h1>
    
   </div>
  )
}
