import type { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";


export const metadata : Metadata={
    title:{
        default:"App by Omair", //agar kisi page ka title defined na hua to ye aaye ga
        template:"%s | My App"  //agar kisi page ka title defined hua to ye aaye ga k pehle us ka title ayega phir ye ayega("My app")
    }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}