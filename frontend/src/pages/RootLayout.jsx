import React from "react"; 
import "@/app/globals.css"; 
import { ThemeProvider } from "@/components/theme-provider";  

export default function RootLayout({ children }) {   
  return (     
    <div className="min-h-screen w-full overflow-x-hidden">       
      <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem 
        disableTransitionOnChange
      >         
        {children}       
      </ThemeProvider>     
    </div>   
  ); 
}