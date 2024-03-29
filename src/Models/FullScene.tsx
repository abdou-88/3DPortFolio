

import * as THREE from "three";
import gsap from "gsap";
import {  ContactShadows, useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import {  useLayoutEffect, useRef } from "react";
import Floor from "./Floor";
import Typing from "./Typing";



type GLTFResult = GLTF & {
  nodes: {
    Chair: THREE.Mesh;
    Desk: THREE.Mesh;
    CVpaper: THREE.Mesh;
    Frame_ComputerFrame_0: THREE.Mesh;
    Frame_ComputerFrame_0_1: THREE.Mesh;
    Model_0: THREE.Mesh;
    Model_0_1: THREE.Mesh;
    shadeBeige002: THREE.Mesh;
    Lockers21168_Monitor_Screen001_0: THREE.Mesh;
    Lockers21168_Monitor_Screen001_0_1: THREE.Mesh;
    Keyboard: THREE.Mesh;
    shadeBeige005: THREE.Mesh;
    PostBox: THREE.Mesh;
    CVHeader: THREE.Mesh;
    shadeBeige007: THREE.Mesh;
    Door4: THREE.Mesh;
    Object_1002: THREE.Mesh;
    Object_1002_1: THREE.Mesh;
    shadeBeige010: THREE.Mesh;
    ProfilePic: THREE.Mesh;
    shadeBeige013: THREE.Mesh;
    shadeBeige001: THREE.Mesh;
    Door2: THREE.Mesh;
    shadeBeige015: THREE.Mesh;
    shadeBeige003: THREE.Mesh;
    shadeBeige017: THREE.Mesh;
    shadeBeige004: THREE.Mesh;
    shadeBeige_004: THREE.Mesh;
    shadeBeige006: THREE.Mesh;
    shadeBeige_004001: THREE.Mesh;
    shadeBeige008: THREE.Mesh;
    shadeBeige_004003: THREE.Mesh;
    shadeBeige009: THREE.Mesh;
    shadeBeige_004005: THREE.Mesh;
    shadeBeige011: THREE.Mesh;
    shadeBeige012: THREE.Mesh;
    shadeBeige014: THREE.Mesh;
    shadeBeige016: THREE.Mesh;
    shadeBeige018: THREE.Mesh;
    shadeBeige_004002: THREE.Mesh;
    Door3: THREE.Mesh;
    shadeBeige_004004: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_3_1: THREE.Mesh;
    Object_3_2: THREE.Mesh;
    Object_3_3: THREE.Mesh;
    Object_3_4: THREE.Mesh;
    Object_3_5: THREE.Mesh;
    Object_3_6: THREE.Mesh;
    Object_3_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_8_1: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_10_1: THREE.Mesh;
    Door1: THREE.Mesh;
    Hobbies: THREE.Mesh;
    Education: THREE.Mesh;
    Experience: THREE.Mesh;
    Skills: THREE.Mesh;
  };
  materials: {
    lambert2: THREE.MeshStandardMaterial;
    ["SVGMat.001"]: THREE.MeshStandardMaterial;
    ["Material__1280.001"]: THREE.MeshStandardMaterial;
    ComputerFrame: THREE.MeshStandardMaterial;
    ComputerScreen: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Inner_Stuff: THREE.MeshStandardMaterial;
    ["Monitor_Screen.001"]: THREE.MeshStandardMaterial;
    ["Monitor.003"]: THREE.MeshStandardMaterial;
    Keyboard: THREE.MeshStandardMaterial;
    GRADS: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    Door: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
  };
};

 export default function FullScene( props: JSX.IntrinsicElements["group"]) {
  const {  nodes, materials } = useGLTF("/Desk.glb") as GLTFResult;

  
  const tl:any = useRef();

  const ref:any = useRef();
  const PictureRef:any = useRef();
  const teslaRef:any = useRef();

  const scroll = useScroll();
 
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {

    tl.current = gsap.timeline();

    //  ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: 15.2,
        x:14.5,
        z:28.7
      },
      0
    );

    tl.current.to(
      ref.current.rotation,
      {
        duration: 2,
        x: 0, y: Math.PI*1.2 , z: 0
      },
      0
    );

    tl.current.from(
      teslaRef.current.position,
      {
        duration: 0.5,
        x: 1,
        z: 1,
      },
      1.5
    );
  }, []);

  
  return (
   <>
   
    <group {...props} dispose={null} ref={ref}>
     
     <Floor />
     <Typing />
     <ContactShadows
         resolution={1024}
         frames={1}
         position={[1.4, 0, 2.5]}
         scale={25}
         blur={0.5}
         opacity={1}
         rotation={[0,0,0.03]}
       
       />

     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Chair.geometry}
       material={materials.lambert2}
       position={[0, 0.9, 0.2]}
       rotation={[0, 0.7, 0]}
       scale={0.15}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Desk.geometry}
       material={materials["SVGMat.001"]}
       position={[4.81, 2.9, -1.49]}
       rotation={[Math.PI, -0.01, Math.PI]}
       scale={[85.13, 65.02, 65.02]}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.CVpaper.geometry}
       material={materials["Material__1280.001"]}
       position={[-3.49, 2.92, 2.11]}
       rotation={[1.57, -0.01, 0.16]}
       scale={[1.15, 1.53, 1.53]}
     />
     <group
       position={[0.43, 2.95, 2.37]}
       rotation={[1.57, 0, 3.13]}
       scale={-4.26}
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Frame_ComputerFrame_0.geometry}
         material={materials.ComputerFrame}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Frame_ComputerFrame_0_1.geometry}
         material={materials.ComputerScreen}
       />
     </group>
     <group
       position={[4.02, 2.9, 0.48]}
       rotation={[-1.57, 0.02, -1.63]}
       scale={0.45}
       
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Model_0.geometry}
         material={materials.Frame}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Model_0_1.geometry}
         material={materials.Inner_Stuff}
       />
     </group>
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige002.geometry}
       material={materials.ComputerFrame}
       position={[-3.44, 2.92, 1.75]}
       rotation={[-1.57, 0, 1.41]}
       scale={0.06}
     />
     <group
       position={[2.9, 3.67, 2.07]}
       rotation={[Math.PI, -0.75, Math.PI]}
       scale={0.02}
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Lockers21168_Monitor_Screen001_0.geometry}
         material={materials["Monitor_Screen.001"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Lockers21168_Monitor_Screen001_0_1.geometry}
         material={materials["Monitor.003"]}
       />
     </group>
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Keyboard.geometry}
       material={materials.Keyboard}
       position={[1.5, 2.92, 1]}
       rotation={[Math.PI, -0.79, Math.PI]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige005.geometry}
       material={materials.ComputerFrame}
       position={[-3.45, 2.92, 1.82]}
       rotation={[-1.57, 0, 1.41]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.PostBox.geometry}
       material={materials.GRADS}
       position={[-4.04, 2.97, 2.39]}
       rotation={[-Math.PI, 0.6, -Math.PI]}
       scale={[0.05, 0.05, 0.04]}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.CVHeader.geometry}
       material={materials["Material.004"]}
       position={[-3.66, 2.91, 3.21]}
       rotation={[-Math.PI, 0.15, -Math.PI]}
       scale={0.57}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige007.geometry}
       material={materials.ComputerFrame}
       position={[-3.75, 2.92, 1.61]}
       rotation={[-1.57, 0, -0.17]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Door4.geometry}
       material={materials.Door}
       position={[-4.09, 3.01, 1.55]}
       rotation={[-Math.PI, 0.18, -Math.PI]}
       scale={0.1}
     />
     <group position={[-3.48, 2.92, 2.02]} rotation={[0, 1.4, 0]} scale={0.04}>
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_1002.geometry}
         material={materials["Material.009"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_1002_1.geometry}
         material={nodes.Object_1002_1.material}
       />
     </group>
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige010.geometry}
       material={materials.ComputerFrame}
       position={[-3.75, 2.92, 2.07]}
       rotation={[-1.57, 0, 2.97]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       ref={PictureRef}
       geometry={nodes.ProfilePic.geometry}
       material={materials.Material}
       position={[-3.29, 3.09, 2.66]}
       rotation={[-0.18, -0.2, -0.04]}
       scale={0.15}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige013.geometry}
       material={materials.ComputerFrame}
       position={[-3.22, 2.92, 2.46]}
       rotation={[-1.57, 0, 2.93]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige001.geometry}
       material={materials.ComputerFrame}
       position={[-3.22, 2.92, 1.99]}
       rotation={[-1.57, 0, -0.19]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Door2.geometry}
       material={materials.Door}
       position={[-2.86, 3.01, 2.52]}
       rotation={[0, -0.16, 0]}
       scale={0.1}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige015.geometry}
       material={materials.ComputerFrame}
       position={[-3.15, 2.92, 2.47]}
       rotation={[-1.57, 0, 2.93]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige003.geometry}
       material={materials.ComputerFrame}
       position={[-3.43, 2.92, 1.68]}
       rotation={[-1.57, 0, 1.41]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige017.geometry}
       material={materials.ComputerFrame}
       position={[-3.53, 2.92, 2.4]}
       rotation={[-1.57, 0, -1.74]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige004.geometry}
       material={materials.ComputerFrame}
       position={[-3.15, 2.92, 2]}
       rotation={[-1.57, 0, -0.19]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige_004.geometry}
       material={materials.ComputerFrame}
       position={[-3.42, 2.92, 1.61]}
       rotation={[-1.57, 0, 1.41]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige006.geometry}
       material={materials.ComputerFrame}
       position={[-3.29, 2.92, 1.98]}
       rotation={[-1.57, 0, -0.19]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige_004001.geometry}
       material={materials.ComputerFrame}
       position={[-3.08, 2.92, 2.01]}
       rotation={[-1.57, 0, -0.19]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige008.geometry}
       material={materials.ComputerFrame}
       position={[-3.68, 2.92, 1.61]}
       rotation={[-1.57, 0, -0.17]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige_004003.geometry}
       material={materials.ComputerFrame}
       position={[-3.89, 2.92, 2.05]}
       rotation={[-1.57, 0, 2.97]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige009.geometry}
       material={materials.ComputerFrame}
       position={[-3.82, 2.92, 1.6]}
       rotation={[-1.57, 0, -0.17]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige_004005.geometry}
       material={materials.ComputerFrame}
       position={[-3.54, 2.92, 2.47]}
       rotation={[-1.57, 0, -1.74]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige011.geometry}
       material={materials.ComputerFrame}
       position={[-3.82, 2.92, 2.06]}
       rotation={[-1.57, 0, 2.97]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige012.geometry}
       material={materials.ComputerFrame}
       position={[-3.68, 2.92, 2.08]}
       rotation={[-1.57, 0, 2.97]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige014.geometry}
       material={materials.ComputerFrame}
       position={[-3.29, 2.92, 2.45]}
       rotation={[-1.57, 0, 2.93]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige016.geometry}
       material={materials.ComputerFrame}
       position={[-3.52, 2.92, 2.33]}
       rotation={[-1.57, 0, -1.74]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige018.geometry}
       material={materials.ComputerFrame}
       position={[-3.51, 2.92, 2.26]}
       rotation={[-1.57, 0, -1.74]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige_004002.geometry}
       material={materials.ComputerFrame}
       position={[-3.61, 2.92, 1.62]}
       rotation={[-1.57, 0, -0.17]}
       scale={0.06}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Door3.geometry}
       material={materials.Door}
       position={[-4.17, 3.01, 2.02]}
       rotation={[-Math.PI, 0.18, -Math.PI]}
       scale={0.1}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.shadeBeige_004004.geometry}
       material={materials.ComputerFrame}
       position={[-3.36, 2.92, 2.44]}
       rotation={[-1.57, 0, 2.93]}
       scale={0.06}
     />
     <group
       position={[-2.63, 2.96, 1.62]}
       rotation={[0.01, 1.42, -0.01]}
       scale={0.04}
       ref={teslaRef}
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3.geometry}
         material={materials["Material.004"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_1.geometry}
         material={materials["Material.001"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_2.geometry}
         material={materials["Material.002"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_3.geometry}
         material={materials["Material.003"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_4.geometry}
         material={materials["Material.005"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_5.geometry}
         material={materials["Material.006"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_6.geometry}
         material={materials["Material.008"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_3_7.geometry}
         material={materials["Material.007"]}
       />
     </group>
     <group
       position={[-2.53, 2.93, 1.59]}
       rotation={[-1.55, 0, -0.15]}
       scale={0.02}
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_8.geometry}
         material={materials["Material.007"]}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_8_1.geometry}
         material={materials["Material.008"]}
       />
     </group>
     <group
       position={[-2.54, 2.93, 1.68]}
       rotation={[-1.59, 0, 2.98]}
       scale={0.02}
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_10.geometry}
         material={materials["Material.007"]}
         
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Object_10_1.geometry}
         material={materials["Material.008"]}
       />
     </group>
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Door1.geometry}
       material={materials.Door}
       position={[-2.79, 3.01, 2.05]}
       rotation={[0, -0.16, 0]}
       scale={0.1}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Hobbies.geometry}
       material={materials["Material.014"]}
       position={[-3.01, 3, 2.5]}
       rotation={[0, 1.41, 0]}
       scale={0.08}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Education.geometry}
       material={materials["Material.011"]}
       position={[-2.94, 3, 2.03]}
       rotation={[0, 1.41, 0]}
       scale={0.08}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Experience.geometry}
       material={materials["Material.012"]}
       position={[-3.88, 3, 1.59]}
       rotation={[0, 1.41, 0]}
       scale={0.08}
     />
     <mesh
       castShadow
       receiveShadow
       geometry={nodes.Skills.geometry}
       material={materials["Material.010"]}
       position={[-3.96, 3, 2.05]}
       rotation={[0, 1.41, 0]}
       scale={0.08}
     />
   </group>
   </>
  );
}

useGLTF.preload("/Desk.glb");
