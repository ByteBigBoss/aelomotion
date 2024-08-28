import { AuroraBackground } from "@/components/ui/aurora-background";
import { rajdhani } from "@/lib/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground>
    <section className='min-h-screen w-full flex flex-col justify-center items-center z-10'>
        <div className={`${rajdhani.className} tt font-bold`}>Aelomotion</div>
        <p className="cc">Try out animations with framer-motion</p>
    </section>
    </AuroraBackground>
  );
}
