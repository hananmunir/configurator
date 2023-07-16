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
    nodes.Body1.geometry.center();
  }, []);
  console.log(surface);
  return (
    <group scale={0.008} {...props} dispose={null} rotation={[0, -0.8, 0]}>
      <mesh castShadow geometry={nodes.Body1.geometry}>
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
