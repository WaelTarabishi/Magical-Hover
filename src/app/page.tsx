"use client";
// src/app/page.tsx
import Modal from "@/components/Modal";
import Project from "@/components/Project";
import { useState } from "react";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8c8c8c",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8d3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706d63",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  // console.log(modal.index);
  return (
    <div className="bg-gray-300 h-screen flex justify-center flex-col   items-center text-white ">
      <div className=" max-w-[1500px] ">
        {projects.map((project, index) => (
          <Project
            key={project.title}
            project={project}
            setModal={setModal}
            index={index}
          />
        ))}
      </div>
      <Modal projects={projects} modal={modal} />
    </div>
  );
}
