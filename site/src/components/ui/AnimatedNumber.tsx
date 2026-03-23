import { useInView } from "motion/react";
import { animate } from "motion";
import React, { useRef, useEffect } from "react";

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    const match = value.match(/^(\D*)(\d+)(\D*)$/);
    if (isInView && match && ref.current) {
      const [, prefix, numStr, suffix] = match;
      const finalNumber = parseInt(numStr, 10);
      
      const controls = animate(0, finalNumber, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.floor(val)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return <span>{value}</span>;
  const [, prefix, , suffix] = match;

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
