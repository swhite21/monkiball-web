import { Typography } from '@material-ui/core';
import {
  FlyControls,
  Html,
  OrbitControls,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import styled from 'styled-components';
import BoxMesh from './threeComponents/boxMesh';
import PlayerBallMesh from './threeComponents/playerballMesh';
import { Physics, Debug } from '@react-three/cannon';

const ThreeCanvas = () => {
  const controlsRef = useRef();

  return (
    <StyledCanvas camera={{ fov: 50 }}>
      <Physics>
        <Debug color='green' scale={1.01}>
          <Suspense fallback={<Loader />}>
            <OrbitControls ref={controlsRef} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <PlayerBallMesh position={[0, 3, 0]} />
            <BoxMesh position={[0, 0, 0]} />
          </Suspense>
        </Debug>
      </Physics>
    </StyledCanvas>
  );
};

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <Typography variant='body1'>{Math.floor(progress)}% loaded</Typography>
    </Html>
  );
};

export default ThreeCanvas;

const StyledCanvas = styled(Canvas)`
  background-color: black;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
