import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from "react"
import { useResource } from "@react-three/fiber"

const CameraController = (props) => {
    const myCamera = useResource()

  return (
    <>
    <PerspectiveCamera ref={myCamera} position={[0, 5, 5]} />
    <OrbitControls camera={myCamera.current} />
  </>
  );
};

export default CameraController;
