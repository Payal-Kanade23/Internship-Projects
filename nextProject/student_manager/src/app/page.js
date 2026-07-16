import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1>Student manager</h1> 
     <button ><Link href="/students/add">Add Student</Link></button>
     <button><Link href="/students/">View Students</Link></button>
     
    </div>
  );
}
