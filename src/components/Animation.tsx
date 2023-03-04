import { useFrame } from '@react-three/fiber';
import { forwardRef, MutableRefObject, useEffect, useRef } from 'react';
import { Group, Mesh } from 'three';

export const Animation = forwardRef((props: any, ref) => {
  const parent = useRef<Group>(null!);
  const asd = ref as MutableRefObject<Mesh>;

  useEffect(() => {
    asd.current.translateY(1);
  }, []);

  useFrame((_, delta) => {
    parent.current.rotateX(props.speed * delta);
  });
  return (
    <group ref={parent}>
      <mesh ref={asd}>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshPhongMaterial />
      </mesh>
    </group>
  );
});
