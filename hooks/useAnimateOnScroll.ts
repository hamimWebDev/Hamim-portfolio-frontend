import { useEffect, RefObject } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

interface AnimateOnScrollProps {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useAnimateOnScroll = ({
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps = {}): [RefObject<any>, AnimationControls, boolean] => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return [ref, controls, inView];
};

export default useAnimateOnScroll;