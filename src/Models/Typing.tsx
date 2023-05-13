import * as THREE from "three";
import  { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Teeth002: THREE.SkinnedMesh;
    Wolf3D_Teeth002_1: THREE.SkinnedMesh;
    Wolf3D_Teeth002_2: THREE.SkinnedMesh;
    Wolf3D_Teeth002_3: THREE.SkinnedMesh;
    Wolf3D_Teeth002_4: THREE.SkinnedMesh;
    Wolf3D_Teeth002_5: THREE.SkinnedMesh;
    Wolf3D_Teeth002_6: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    ["Wolf3D_Teeth.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Bottom.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Top.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Skin.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Body.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Footwear.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Eye.002"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Armature|mixamo.com|Layer0" | "Walk_Abi.001";

interface GLTFAction extends THREE.AnimationClip {
name: ActionName;
 }

export default function Typing(props: JSX.IntrinsicElements["group"]) {
  const group:any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/Typing.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  
  
  useEffect(() => {
    
    actions["Armature|mixamo.com|Layer0"]?.play();
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="AbiTyping"
          position={[-0.09, -0.1, -0.57]}
          rotation={[1.62, 0.02, -0.94]}
          scale={0.039}
        >
          <primitive object={nodes.mixamorigHips} />
          <group name="Abi">
            <skinnedMesh
              name="Wolf3D_Teeth002"
              geometry={nodes.Wolf3D_Teeth002.geometry}
              material={materials["Wolf3D_Teeth.002"]}
              skeleton={nodes.Wolf3D_Teeth002.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth002_1"
              geometry={nodes.Wolf3D_Teeth002_1.geometry}
              material={materials["Wolf3D_Outfit_Bottom.002"]}
              skeleton={nodes.Wolf3D_Teeth002_1.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth002_2"
              geometry={nodes.Wolf3D_Teeth002_2.geometry}
              material={materials["Wolf3D_Outfit_Top.002"]}
              skeleton={nodes.Wolf3D_Teeth002_2.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth002_3"
              geometry={nodes.Wolf3D_Teeth002_3.geometry}
              material={materials["Wolf3D_Skin.002"]}
              skeleton={nodes.Wolf3D_Teeth002_3.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth002_4"
              geometry={nodes.Wolf3D_Teeth002_4.geometry}
              material={materials["Wolf3D_Body.002"]}
              skeleton={nodes.Wolf3D_Teeth002_4.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth002_5"
              geometry={nodes.Wolf3D_Teeth002_5.geometry}
              material={materials["Wolf3D_Outfit_Footwear.002"]}
              skeleton={nodes.Wolf3D_Teeth002_5.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Teeth002_6"
              geometry={nodes.Wolf3D_Teeth002_6.geometry}
              material={materials["Wolf3D_Eye.002"]}
              skeleton={nodes.Wolf3D_Teeth002_6.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Typing.glb");
