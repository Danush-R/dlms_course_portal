"use client"
import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { UserMemberContext } from "./_context/UserMemberContext";

const inter = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "DLMS",
//   description: "Danush LMS",
// };

export default function RootLayout({ children }) {

  const[isMember,setIsMember]=useState(false);
  return ( 
  <ClerkProvider>
    <UserMemberContext.Provider value={{isMember,setIsMember}}>
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster/>
      </body>
    </html>
    </UserMemberContext.Provider>
    </ClerkProvider>

  );
}
