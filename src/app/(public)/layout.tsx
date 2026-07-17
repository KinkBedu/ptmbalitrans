import type { ReactNode } from "react";

// import Navbar from "@/components/layout/public/navbar";
// import Footer from "@/components/layout/public/footer";
import "@/styles/layout/publiclayout.css";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}

      <div className="public-layout">
        <main>{children}</main>
      </div>

      {/* <Footer /> */}
    </>
  );
}
