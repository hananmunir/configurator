import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, extend } from "@react-three/fiber";
import { Model as Rim } from "./Components/Models/Felni.jsx";
import { Model as Frame } from "./Components/Models/Bike_frame";
import {
  Environment,
  Loader,
  OrbitControls,
  PresentationControls,
  MeshReflectorMaterial,
  useGLTF,
  shaderMaterial,
} from "@react-three/drei";
import Container from "./Components/UI/Container";
import { useControls } from "leva";
import useStore from "./Utils/store";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const CustomShaderMaterial = new THREE.ShaderMaterial({
  // Uniforms: Variables that can be passed to the shader
  uniforms : {
    uTexture: { value: null }, // The texture to be applied
  },

  // Vertex shader
  vertexShader: `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,

  // Fragment shader
  fragmentShader: `
  uniform sampler2D uTexture;
    varying vec2 vUv;
    void main() {
      vec4 texColor = texture2D(uTexture, vUv);
      // Add some red color to the texture
      gl_FragColor = vec4(texColor.r, 0.0, 0.0, 1.0);
    }
  `,
  side: THREE.FrontSide,
});


// to make cube with a material on it 
const Cube = () => {
 
  const { color } = useControls({
    color: "#ff0000",
  });
  const { nodes, material } = useGLTF("/Models/rim-transformed.glb");
  const texture = useLoader(TextureLoader, '/Surfaces/Rusty/Metalness.png');
  const physicalMaterial = new THREE.MeshStandardMaterial({
    color: color,
    map: texture,
  });
 
  return (
    <group>
    
    <mesh geometry={nodes.Body1.geometry} material={CustomShaderMaterial} scale={0.008} position={[-3,0,0]}>
      {/* <CustomShaderMaterial uTexture={texture} /> */}
      {/* <boxBufferGeometry args={[2, 2, 2]}/> */}
      {/* <primitive object={model.scene} scale={[.09,.09,.09]} /> */}
      {/* <meshPhysicalMaterial color={color} map={customMaterial} attach='material'/> */}
    </mesh>
    <mesh position={[3,0,0]}>
      <boxBufferGeometry args={[2, 2, 2]}/>
      {/* <primitive object={model.scene} scale={[.09,.09,.09]} /> */}
      <meshPhysicalMaterial color={color} map={texture}/>
    </mesh>
    </group>
  );
};

function App() {
  const selectedPart = useStore((state) => state.selectedPart);

  const renderComponent = () => {
    switch (selectedPart) {
      case "rim":
        return <Cube />;

      case "frame":
        console.log("Now Here");
        return <Frame />;

      default:
        return <Rim />;
    }
  };

  return (
    <>
      <div className='canvasContainer'>
        <Canvas style={{ zIndex: 1 }}>
          <ambientLight />
          <pointLight castShadow position={[10, 10, 10]} />
          <directionalLight position={[0, 10, 0]} intensity={1} />
          <Suspense fallback={null}>
            <OrbitControls />
            {renderComponent()}
            <mesh
              receiveShadow
              position={[0, -2, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[100, 100]} />
              <MeshReflectorMaterial
                blur={[100, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={10}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color='#0a113d'
                metalness={0.9}
              />
            </mesh>
          </Suspense>

          <Environment files={"/Environment/venice_sunset_1k.hdr"} />
        </Canvas>
        <Container />
      </div>
    </>
  );
}

export default App;
