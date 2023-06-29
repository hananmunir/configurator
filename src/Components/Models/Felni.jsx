import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../../Utils/store";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Models/rim-transformed.glb");
  const color = useStore((state) => state.color);
  return (
    <group scale={0.008} {...props} dispose={null}>
      <mesh
        geometry={nodes.Body1.geometry}
        material={nodes.Body1.material}
        material-color={color}
        material-roughness={0.4}
      />
    </group>
  );
}

useGLTF.preload("/felni-transformed.glb");
