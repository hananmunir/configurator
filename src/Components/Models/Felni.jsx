import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../../Utils/store";
import { useControls } from "leva";
import * as THREE from "three";
import { TextureLoader } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Models/rim-transformed.glb");
  const color = useStore((state) => state.colors["rim"]);
  const surface = useStore((state) => state.surface["rim"]);

  console.log(surface.replaceAll(" ", "_"));
  //add multiple textures
  const [albedo, ao, metalness, roughness, normal, height] = [
    new TextureLoader().load(`/Surfaces/${surface}/Albedo.png`),
    new TextureLoader().load(`/Surfaces/${surface}/AO.png`),
    new TextureLoader().load(`/Surfaces/${surface}/Metalness.png`),
    new TextureLoader().load(`/Surfaces/${surface}/Roughness.png`),
    new TextureLoader().load(`/Surfaces/${surface}/Normal.png`),
    new TextureLoader().load(`/Surfaces/${surface}/Height.png`),
  ];

  console.log(albedo, ao, metalness, roughness, normal, height);

  useEffect(() => {
    nodes.Body1.geometry.center();
  }, []);

  return (
    <group scale={0.008} {...props} dispose={null} rotation={[0, -0.8, 0]}>
      <mesh castShadow geometry={nodes.Body1.geometry} material-roughness={0.4}>
        <meshPhysicalMaterial
          attach='material'
        
          color={color}
          map={albedo}
          aoMap={ao}
          aoMapIntensity={1}
          metalnessMap={metalness}
          metalness={0.5}
          roughnessMap={roughness}
          roughness={0.4}
          normalMap={normal}
          normalScale={new THREE.Vector2(1, 1)}
          displacementMap={height}
          displacementScale={0.1}
          displacementBias={-0.05}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/rim-transformed.glb");
