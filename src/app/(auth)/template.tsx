'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import "./styles.css";

const navigateLink  = [
  {name:"Login", href:"/login"},
  {name:"Forgot Password", href:"/forgot-password"},
  {name:"Register", href:"/register"},
]


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, Setinput] = useState("");
  const pathName = usePathname();
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => Setinput(e.target.value)}/>
      </div>
      {navigateLink.map((link) => {
        const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/")
        return (
          <Link
          className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          href={link.href} 
          key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  )
}
