import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    
 <>
    <div className="bg-black min-h-screen p-2">
    <Header/>
      
        <main className="flex flex-colitems-center mt-10 text-center">
          <img className="w-full max-w-80  rounded-full shadow-2xl shadow-amber-600" src="/portfolioImg.jpeg "  alt="portfolio-img"></img>
      
        <p className="text-[80px] font-bold mt-4  ml-8  text-amber-600   cursor-pointer transition ease-in-out delay-150 bg-indigo-300 hover:-translate-y-1 hover:scale-100 hover:bg-pink-300 duration-300 ..." >Hello<br/>I&apos;m Sidra Asfand</p>
        
        </main>    
</div>
<Footer/>
</>
  );
}