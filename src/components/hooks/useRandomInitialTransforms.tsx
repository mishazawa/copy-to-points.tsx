import { MutableRefObject, useEffect } from 'react';
import { Object3D, Vector3, Quaternion } from 'three';

export function useRandomInitialTransforms(obj: MutableRefObject<Object3D>) {
  useEffect(() => {
    // init some random pos & orient
    const tempp = new Vector3(0, 0, 0).randomDirection();
    const tempq = new Quaternion().random();

    obj.current.position.add(tempp);
    obj.current.applyQuaternion(tempq);
  }, []);
}
