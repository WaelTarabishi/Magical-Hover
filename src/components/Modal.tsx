"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
interface ModalProps {
  projects: {
    title: string;
    color: string;
    src: string;
  }[];
  modal: {
    active: boolean;
    index: number;
  };
}
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" }, // corrected from 'initail' to 'initial'
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    // corrected from 'colosed' to 'closed'
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ projects, modal }: ModalProps) => {
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const { active, index } = modal;
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5, // Adjust the duration to make the cursor move faster
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5, // Adjust the duration to make the cursor move faster
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.5, // Adjust the duration to make the cursor move faster
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.5, // Adjust the duration to make the cursor move faster
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelY(clientY);
      moveCursorLabelX(clientX);
    });
  }, []);
  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initail"}
        animate={active ? "open" : "closed"}
        className=" flex absolute pointer-events-none overflow-hidden bg-white  justify-center items-center w-[300px] h-[250px]  ">
        <div
          className="w-full h-full absolute transition-all ease-in duration-500"
          style={{ top: index * -100 + "%" }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative h-full w-full flex items-center justify-center  `}
              style={{ backgroundColor: project.color }}>
              <Image
                src={`/${project.src}`}
                alt="project_image"
                width={250}
                height={0}
                className="h-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initail"}
        animate={active ? "open" : "closed"}
        className="w-[80px] h-[80px] bg-indigo-500 absolute pointer-events-none rounded-[50%] flex justify-center items-center"></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initail"}
        animate={active ? "open" : "closed"}
        className="w-[80px] h-[80px] bg-transparent absolute pointer-events-none rounded-[50%] flex justify-center items-center">
        View
      </motion.div>
    </>
  );
};

export default Modal;
