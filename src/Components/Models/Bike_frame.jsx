/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Bike_frame.glb --transform
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useStore from "../../Utils/store";
import { useControls } from "leva";
import * as THREE from "three";

import { TextureLoader } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Models/Bike_frame-transformed.glb");
  const color = useStore((state) => state.colors["frame"]);
  const surface = useStore((state) => state.surface["frame"]);
  const [textures, setTextures] = useState([]);
  // const {
  //   intensity,
  //   metalness,
  //   roughness,
  //   normalScale,
  //   displacementScale,
  //   displacementBias,
  // } = useControls({
  //   intensity: { value: 1, step: 0.1 },
  //   metalness: { value: 1, step: 0.1 },
  //   roughness: { value: 0.5, step: 0.1 },
  //   normalScale: { value: [1, 1], step: 0.1 },
  //   displacementScale: { value: 0.1, step: 0.1 },
  //   displacementBias: { value: -0.05, step: 0.01 },
  // });
  useEffect(() => {
    const loadTextures = async () => {
      const texturePaths = [
        `/Surfaces/${surface}/Albedo.png`,
        `/Surfaces/${surface}/AO.png`,
        `/Surfaces/${surface}/Metalness.png`,
        `/Surfaces/${surface}/Roughness.png`,
        `/Surfaces/${surface}/Normal.png`,
        `/Surfaces/${surface}/Height.png`,
      ];

      const textureLoader = new TextureLoader();

      const loadedTextures = await Promise.all(
        texturePaths.map((path) =>
          textureLoader.loadAsync(path).catch(() => {})
        )
      );

      setTextures(loadedTextures);
    };

    if (surface) loadTextures();
  }, [surface]);

  useEffect(() => {
    nodes.Split_Line6.geometry.center();
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Split_Line6.geometry}
        scale={0.115}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          attach='material'
          color={color}
          map={textures.length > 0 ? textures[0] : null}
          aoMap={textures.length > 0 ? textures[1] : null}
          metalnessMap={textures.length > 0 ? textures[2] : null}
          metalness={1}
          roughnessMap={textures.length > 0 ? textures[3] : null}
          roughness={0.5}
          normalMap={textures.length > 0 ? textures[4] : null}
          normalScale={new THREE.Vector2(1, 1)}
          displacementMap={textures.length > 0 ? textures[5] : null}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/Bike_frame-transformed.glb");
