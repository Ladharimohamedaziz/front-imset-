import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import  './dashboard.css'
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="containerx">
      {/* LEFT */}
      <div className="responsive-container">
        <Link
          href="/"
          className="flex-container"
        >
          <Image src="/imsetlogo.png" alt="logo" width={200} height={200} />
          <span className="hidden lg:block font-bold"></span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="responsive-box">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
