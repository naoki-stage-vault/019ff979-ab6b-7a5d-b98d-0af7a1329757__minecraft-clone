"use client";

import { useEffect } from "react";

// La raíz redirige al juego voxel autocontenido (public/index.html)
export default function Home() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);
  return null;
}
