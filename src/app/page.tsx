import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <p className=""><span className="text-[#608B44] font-bold">VC OS</span> is coming soon</p>
    </main>
  );
}
