import React, { useEffect, useRef, ReactNode } from 'react';

type AnimationType = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'zoomIn'
  | 'zoomOut';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  onInView?: () => void;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  className = '',
  style = {},
  once = true,
  onInView
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (once && hasAnimated.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
              if (onInView) onInView();
              hasAnimated.current = true;
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('animate-visible');
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, rootMargin, once, onInView]);

  const animationStyle: React.CSSProperties = {
    opacity: 0,
    animationFillMode: 'forwards',
    animationDuration: `${duration}s`,
    animationTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    ...style
  };

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${animation} ${className}`}
      style={animationStyle}
      data-animation-type={animation}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
