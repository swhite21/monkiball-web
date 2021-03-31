import { useControls } from "leva";
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

const BoxMesh = (props) => {
  const { boxScaleX, boxScaleY, boxScaleZ } = useControls({
    boxScaleX: { value: 1, min: 0.1, max: 5, step: 0.01, name: "BoxX" },
    boxScaleY: { value: 1, min: 0.1, max: 5, step: 0.01 },
    boxScaleZ: { value: 1, min: 0.1, max: 5, step: 0.01 },
  });
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [boxScaleX, boxScaleY, boxScaleZ]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default BoxMesh;
