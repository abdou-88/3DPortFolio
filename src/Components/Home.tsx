


import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";


import { ContactShadows, MeshReflectorMaterial, PresentationControls, ScrollControls, Stage } from "@react-three/drei";
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
        <PresentationControls
          speed={1.5}
          global
          zoom={0.7}
          polar={[-0.1, Math.PI / 4]}
        >
          <ContactShadows
            resolution={1024}
            frames={1}
            position={[0, -2, 0]}
            scale={25}
            blur={0.5}
            opacity={1}
            far={20} key={undefined} copy={undefined} attach={undefined} args={undefined} children={undefined} onUpdate={undefined} clone={undefined} add={undefined} toJSON={undefined} quaternion={undefined} name={undefined} rotation={undefined} visible={undefined} up={undefined} matrix={undefined} layers={undefined} dispose={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerMissed={undefined} onPointerCancel={undefined} onWheel={undefined} />

          <Stage
            environment={"apartment"}
            intensity={1}
            castShadow={false}
            shadows={true}
          >
            
            <ScrollControls pages={1} damping={1}>
              <Floor />
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
