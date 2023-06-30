


import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";



import { ContactShadows, MeshReflectorMaterial, OrbitControls, PresentationControls, ScrollControls, Stage } from "@react-three/drei";
import LoadSpinner from "./LoadSpinner";

import Desk from "../Models/Desk";
import Typing from "../Models/Typing";
import Floor from "../Models/Floor";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};




const Home: React.FC<Props> = () => {





  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        fov: 55,
      }}
      
    >
      <color attach="background" args={["hsl(0, 100% ,100%)"]} />
      <fog attach="fog" args={["#101010", 15, 30]} />

      <Suspense fallback={<LoadSpinner />}>

        <OrbitControls enableZoom={false} />

       
        <Stage
          environment={"apartment"}
          intensity={1}
          castShadow={false}
          shadows={true}
        >

          <ScrollControls pages={1} damping={0.5}>
            
            <Desk />
            
          </ScrollControls>

        </Stage>

      

      </Suspense>
    </Canvas>
  );
};




export default Home
