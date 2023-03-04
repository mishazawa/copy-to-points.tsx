import { forwardRef } from 'react';

export const Box = forwardRef((args: any, ref: any) => {
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 0.5, 0.1]} />
      <meshNormalMaterial />
    </mesh>
  );
});
