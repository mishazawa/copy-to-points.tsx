import { OrbitControls } from '@react-three/drei';
import { MutableRefObject, useRef } from 'react';
import { Mesh, Object3D } from 'three';

import { Animation } from './Animation';
import { Box } from './Box';
import { useRandomInitialTransforms } from './hooks/useRandomInitialTransforms';
import { useSolution } from './hooks/useSolution';

const SPEED = 1;

export function Wrap() {
  const animationRef = useRef<Mesh>(null!);
  const objectRef = useRef(null!);

  useRandomInitialTransforms(objectRef);
  useCopyToPoints(objectRef, animationRef);
  useSolution(objectRef, animationRef);

  return (
    <>
      <Animation ref={animationRef} speed={SPEED} />
      <Box ref={objectRef} />
      <OrbitControls makeDefault />
      <directionalLight />
      <gridHelper />
    </>
  );
}

function useCopyToPoints(obj: MutableRefObject<Object3D>, target: MutableRefObject<Object3D>) {}
