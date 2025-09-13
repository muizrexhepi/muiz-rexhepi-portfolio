"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Matter from "matter-js";

const skills = [
  "MOBILE APPS",
  "WEB APPS",
  "ECOMMERCE PLATFORMS",
  "CUSTOM SOFTWARE",
  "ADMIN DASHBOARDS",
  "FOOD DELIVERY APPS",
  "BOOKING SYSTEMS",
  "POS SYSTEMS",
  "USER-FRIENDLY INTERFACES",
  "RESPONSIVE DESIGN",
  "MAINTAINABLE CODE",
  "SCALABLE SOLUTIONS",
  "APP PROTOTYPING",
  "INTERACTIVE FEATURES",
];

// Animation variants for the staggered balls
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 10,
    },
  },
};

export function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const [isInteracting, setIsInteracting] = useState(false);

  // Use useInView to detect when the container is in the viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // State to manage hover effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // We only want to run this effect when the component is in view
    if (!containerRef.current || !isInView) return;

    // --- Matter.js Engine & World Setup ---
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 1 },
    });
    engineRef.current = engine;

    const render = Render.create({
      element: containerRef.current,
      canvas: canvasRef.current!,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const { clientWidth, clientHeight } = containerRef.current!;
    const wallThickness = 50;

    const walls = [
      Bodies.rectangle(
        clientWidth / 2,
        -wallThickness / 2,
        clientWidth,
        wallThickness,
        { isStatic: true, label: "wall" }
      ),
      Bodies.rectangle(
        clientWidth / 2,
        clientHeight + wallThickness / 2,
        clientWidth,
        wallThickness,
        { isStatic: true, label: "wall" }
      ),
      Bodies.rectangle(
        -wallThickness / 2,
        clientHeight / 2,
        wallThickness,
        clientHeight,
        { isStatic: true, label: "wall" }
      ),
      Bodies.rectangle(
        clientWidth + wallThickness / 2,
        clientHeight / 2,
        wallThickness,
        clientHeight,
        { isStatic: true, label: "wall" }
      ),
    ];
    Composite.add(engine.world, walls);

    const ballElements = Array.from(
      containerRef.current.querySelectorAll(".skill-ball")
    ) as HTMLDivElement[];

    const ballBodies = ballElements.map((el) => {
      const radius = el.offsetWidth / 2;
      return Bodies.circle(
        el.offsetLeft + radius,
        el.offsetTop + radius,
        radius,
        {
          restitution: 0.8,
          friction: 0.05,
          density: 0.001,
          render: { visible: false },
        }
      );
    });

    bodiesRef.current = ballBodies;
    Composite.add(engine.world, ballBodies);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);

    // Listen for mouse events to detect interaction
    Events.on(mouseConstraint, "startdrag", () => {
      setIsInteracting(true);
    });

    Events.on(mouseConstraint, "enddrag", () => {
      setIsInteracting(false);
    });

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);

    const updatePositions = () => {
      ballElements.forEach((el, i) => {
        const body = ballBodies[i];
        if (body) {
          el.style.transform = `translate(${
            body.position.x - el.offsetWidth / 2
          }px, ${body.position.y - el.offsetHeight / 2}px) rotate(${
            body.angle
          }rad)`;
        }
      });
      requestAnimationFrame(updatePositions);
    };
    updatePositions();

    const handleResize = () => {
      const { clientWidth, clientHeight } = containerRef.current!;
      Render.setPixelRatio(render, window.devicePixelRatio);
      render.options.width = clientWidth;
      render.options.height = clientHeight;
      render.bounds.max.x = clientWidth;
      render.bounds.max.y = clientHeight;

      Composite.clear(engine.world, false);
      const walls = [
        Bodies.rectangle(
          clientWidth / 2,
          -wallThickness / 2,
          clientWidth,
          wallThickness,
          { isStatic: true, label: "wall" }
        ),
        Bodies.rectangle(
          clientWidth / 2,
          clientHeight + wallThickness / 2,
          clientWidth,
          wallThickness,
          { isStatic: true, label: "wall" }
        ),
        Bodies.rectangle(
          -wallThickness / 2,
          clientHeight / 2,
          wallThickness,
          clientHeight,
          { isStatic: true, label: "wall" }
        ),
        Bodies.rectangle(
          clientWidth + wallThickness / 2,
          clientHeight / 2,
          wallThickness,
          clientHeight,
          { isStatic: true, label: "wall" }
        ),
      ];
      Composite.add(engine.world, walls);
      Composite.add(engine.world, ballBodies);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (runnerRef.current) Runner.stop(runnerRef.current);
      if (engineRef.current) Engine.clear(engineRef.current);
      if (render) Render.stop(render);
    };
  }, [isInView]);

  return (
    <div className="px-5 sm:px-12 lg:px-18">
      <div className="pb-12">
        <div className="flex items-center gap-2 text-white text-sm font-light tracking-wide border-t lg:border-none pt-3">
          <span>04/04</span>
          <span>—</span>
          <span>CAPABILITIES</span>
        </div>
      </div>
      <section className="min-h-[70vh] text-white w-full flex flex-col pt-8 pb-12 relative">
        <div className="flex-1 flex flex-col items-center justify-start pt-12 md:pt-24 text-center">
          <motion.p
            className="text-white/50 text-xs md:text-sm uppercase tracking-widest font-light mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CLICK & DRAG
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PROJECT TYPES I
            <br />
            SPECIALIZE IN
          </motion.h2>
        </div>

        <motion.div
          ref={containerRef}
          className={`absolute inset-0 w-full h-[70vh] overflow-hidden border border-white/30 rounded-[3rem] ${
            isInteracting ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            pointerEvents: isInteracting ? "none" : "auto",
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          data-lenis-prevent={isInteracting}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-[70vh] z-10"
            style={{
              pointerEvents: "auto",
            }}
          />
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-ball absolute z-20 size-24 md:size-48 rounded-full border border-white/30 flex items-center justify-center text-center p-4 transition-colors duration-300 ${
                hoveredIndex === index
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }`}
              style={{
                // Balls are interactive but don't block scrolling
                pointerEvents: "none", // Let canvas handle physics
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                borderColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                scale: 1.05,
              }}
              variants={itemVariants}
            >
              <span className="text-xs md:text-sm font-medium leading-tight uppercase tracking-wider select-none">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
