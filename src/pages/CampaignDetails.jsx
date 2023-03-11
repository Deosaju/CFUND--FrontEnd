import React from "react"
import { Sidebar ,Navbar } from "/components/"

import { useRouter } from 'next/router';
import Home from "/src/pages/Home";

export default function index() {
  const router = useRouter();

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Home />
      </div>

    </div>
  )
}