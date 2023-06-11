


import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";


import { ContactShadows, MeshReflectorMaterial, PresentationControls, ScrollControls, Stage } from "@react-three/drei";
import LoadSpinner from "./LoadSpinner";

import Desk from "../Models/Desk";
import Typing from "../Models/Typing";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};




const Home: React.FC<Props> = () => {



  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        fov: 55
      }}
    >
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 15, 30]} />

     
      <Suspense fallback={<LoadSpinner />}>
        <PresentationControls
          speed={1.5}
          global
          zoom={0.7}
          polar={[-0.1, Math.PI / 4]}
        >
           <ContactShadows resolution={1024} frames={1} position={[0, 0.3, 0]} scale={25} blur={0.5} opacity={1} far={20} />
           
          <Stage
            environment={"apartment"}

            intensity={1}
            castShadow={false}
            shadows={true}
          >
            
            <ScrollControls pages={1}>      
             
              <mesh scale={4} position={[4, 0, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color="white" roughness={0.75} />
              </mesh>
              
              <mesh scale={4} position={[-3, 0, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                <ringGeometry args={[0.9, 1, 5, 2]} />
                <meshStandardMaterial color="white" roughness={0.75} />
              </mesh>

              <mesh scale={4} position={[-1.5, 0, 7]} rotation={[-Math.PI / 2, 0, Math.PI /2.5]}>
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color="white" roughness={0.75} />
              </mesh>
             
              <mesh scale={4} position={[6, 0, 5.5]} rotation={[-Math.PI / 2, 0, Math.PI / 5]}>
                <ringGeometry args={[0.9, 1, 6, 1]} />
                <meshStandardMaterial color="white" roughness={0.75} />
              </mesh>

              <Desk />
              <Typing />
              
            </ScrollControls>
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.38, 0]}>

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
