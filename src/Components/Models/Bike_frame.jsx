/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Bike_frame.glb --transform
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../../Utils/store";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Models/Bike_frame-transformed.glb");
  const [frameColor, setFrameColor] = useState("#ff0000");
  const  color  = useStore((state) => state.colors["frame"]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Split_Line6.geometry}
        material={nodes.Split_Line6.material}
        scale={0.115}
        position={[0, -1.5, 0]}
        material-color={color}
      />
    </group>
  );
}

useGLTF.preload("/Models/Bike_frame-transformed.glb");
