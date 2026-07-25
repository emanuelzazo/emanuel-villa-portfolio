import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  let globalIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIdx) => {
        const chars = word.split('');
        const wordElement = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {chars.map((char, charIdx) => (
              <AnimatedChar 
                key={charIdx} 
                char={char} 
                progress={scrollYProgress} 
                index={globalIndex++} 
                total={text.length} 
              />
            ))}
          </span>
        );
        globalIndex++; // for the space
        return (
          <React.Fragment key={wordIdx}>
            {wordElement}
            {wordIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
}

function AnimatedChar({ char, progress, index, total }: { key?: React.Key; char: string; progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = start + (1 / total) * 10;
  const opacity = useTransform(progress, [start, Math.min(end, 1)], [0.2, 1]);
  
  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
