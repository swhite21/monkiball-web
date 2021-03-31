import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import BoxMesh from "./threeComponents/boxMesh";

const ThreeCanvas = () => {
  return (
    <>
      {/* GUI Controls */}
      <StyledCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <BoxMesh position={[0, 0, 0]} />
      </StyledCanvas>
    </>
  );
};

export default ThreeCanvas;

const StyledCanvas = styled(Canvas)`
  background-color: black;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
