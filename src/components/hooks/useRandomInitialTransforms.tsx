import { MutableRefObject, useEffect } from 'react';
import { Object3D, Vector3, Quaternion } from 'three';

export function useRandomInitialTransforms(obj: MutableRefObject<Object3D>) {
  useEffect(() => {
    // init some random pos & orient
    const tempp = new Vector3(0, 0, 0).randomDirection();
    const tempq = new Quaternion().random();
    const temps = new Vector3(1, 1, 1);

    obj.current.matrixWorld.compose(tempp, tempq, temps);
  }, []);
}
