import { useControls } from 'leva';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
const BoxMesh = (props) => {
  const { boxRotationZ } = useControls({
    boxRotationZ: {
      value: 0,
      min: -180,
      max: 180,
      step: 0.001,
      name: 'Platform-Rot-z',
    },
  });
  //Physics setup
  const [ref, api] = useBox(() => ({ type: 'dynamic', args: [10, 0.5, 15] }));

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Make changes to mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    // The box is kinematic (not subject to gravitation), we move it with the api returned by useBox
    let yPos = Math.sin(state.clock.elapsedTime);
    api.position.set(0, yPos, 0.1);
    api.rotation.set(0, 0, (boxRotationZ * Math.PI) / 180);
  });

  return (
    <mesh
      {...props}
      ref={ref}
      rotate={[0, 0, boxRotationZ]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[10, 0.5, 15]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default BoxMesh;
