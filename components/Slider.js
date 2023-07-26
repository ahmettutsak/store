"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  const [genislik, setGenislik] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setGenislik(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //TODO?: Slider her geçişte fazladan ilerliyor

  return (
    <div className="w-full h-full flex overflow-hidden">
      <motion.div
        animate={{ x: [0, -genislik, -genislik * 2, 0] }}
        transition={{
          ease: "easeInOut",
          duration: 30,
          repeat: Infinity,
        }}
        className="flex"
      >
        <Image
          className="w-screen h-[800px] flex-shrink-0 rounded object-contain"
          src="https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Marcelo Chagas photo from pexels"
          width={1000}
          height={600}
        />
        <Image
          className="w-screen h-[800px] flex-shrink-0 rounded object-contain"
          src="https://images.pexels.com/photos/6923449/pexels-photo-6923449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="RDNE Stock project photo from pexels"
          width={1000}
          height={600}
        />
        <Image
          className="w-screen h-[800px] flex-shrink-0 rounded object-contain"
          src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg"
          alt="Spencer Selover photo from pexels"
          width={1000}
          height={600}
        />
      </motion.div>
    </div>
  );
}
