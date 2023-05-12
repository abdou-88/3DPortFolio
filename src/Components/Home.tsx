


import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {  Environment, MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import LoaderBox from "./LoaderBox";

import Desk from "../Models/Desk";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};




const Home: React.FC<Props> = () => {
   
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 50 }}>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 15, 30]} />
      <Suspense fallback={<LoaderBox />}>
        <Environment preset="city" />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.7}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage
            environment={"night"}
            intensity={1}
            castShadow={false}
            shadows={true}
          >
            <Desk />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              color="#101011"
              metalness={1}
              mirror={0}
            />
          </mesh>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};




export default Home
