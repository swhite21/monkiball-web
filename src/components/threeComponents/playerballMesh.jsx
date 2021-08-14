import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { button, useControls } from 'leva';
import React, { useRef } from 'react';

const PlayerBallMesh = (props) => {
  //Physics Setup, use api to reference the mesh
  const [ref, api] = useSphere(() => ({ mass: 1, ...props }));

  const moveBallToStart = () => {
    api.position.set(0, 2, 0);
  };

  //Debug controls
  const values = useControls({
    restartBall: button(moveBallToStart),
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereBufferGeometry args={[1, 32, 16]} />
      <meshStandardMaterial color={'gray'} />
    </mesh>
  );
};

export default PlayerBallMesh;
