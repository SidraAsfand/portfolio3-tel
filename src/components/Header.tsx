import Link from "next/link";

export default function Header() {
  return (
    <div >
        <header className=" flex justify-between  items-center p-4  ">
        <h1 className="text-5xl  font-bold text-amber-600 mb-4 md:text-6xl  lg:text-7xl">Portfolio</h1>
          
          <nav className='space-x-4  text-amber-600 text-bold'>
            <Link  href="/" className="bg-pink-300 p-3  
                rounded-md hover:bg-purple-400">Home</Link>
            <Link  href="/about" className="bg-pink-300 p-3  
                rounded-md hover:bg-purple-400 ">About</Link>
            <Link  href="/contact" className="bg-pink-300 p-3 
                rounded-md hover:bg-purple-400">contact</Link>
        
        </nav>
        </header>

        </div>
  );
}