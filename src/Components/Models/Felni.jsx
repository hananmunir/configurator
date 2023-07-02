import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../../Utils/store";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Models/rim-transformed.glb");
  const color = useStore((state) => state.colors["rim"]);

  return (
    <group scale={0.008} {...props} dispose={null} rotation={[0, -0.8, 0]}>
      <mesh
        castShadow
        geometry={nodes.Body1.geometry}
        material={nodes.Body1.material}
        material-color={color}
        material-roughness={0.4}
      />
    </group>
  );
}

useGLTF.preload("/Models/rim-transformed.glb");
