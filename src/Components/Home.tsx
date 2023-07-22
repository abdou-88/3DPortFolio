


import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";



import { OrbitControls, ScrollControls, Stage } from "@react-three/drei";
import LoadSpinner from "./LoadSpinner";

import FullScene from "../Models/FullScene";



// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};


type LightProps = {
  brightness: number,
  color: string
}

function Light({ brightness, color }: LightProps) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 10, 0]}
      castShadow
    />
  );
}
const Home: React.FC<Props> = () => {

  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        fov: 75, position: [3, 3, 5]
      }}



    >
      <Light brightness={4} color={"black"} />
      <color attach="background" args={["black"]} />

      <OrbitControls enableZoom={false} />
      <Suspense fallback={<LoadSpinner />}>




        <Stage
          environment={"apartment"}
          intensity={1}
          castShadow={false}
          shadows={true}
        >

          <ScrollControls pages={1} damping={0.5}>
            <ambientLight />
            <FullScene />

          </ScrollControls>

        </Stage>



      </Suspense>
    </Canvas>
  );
};




export default Home
