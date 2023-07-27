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
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import albedo from "./assets/Albedo.png";

const ColorShiftMaterial = shaderMaterial(
  {
    glowColor: new THREE.Color(0xe6620f),
    globTexture: null,
  },
  // vertex shader
  /*glsl*/ `
     varying vec3 vNormal;
      varying vec2 vertexUV;
      void main()
      {
        vertexUV = uv;
          vNormal = normalize( normalMatrix * normal );
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,

  // fragment shader
  /*glsl*/ `
      varying vec3 vNormal;
      uniform sampler2D globTexture;
      varying vec2 vertexUV;
      uniform vec3 glowColor;
      void main()
      {
      	float intensity = pow( 1.9 - dot( vNormal, vec3( 0, 0.0, 1.0) ), 1.0);
        vec3 atmosphereColor = glowColor * intensity;
          gl_FragColor = vec4(atmosphereColor + texture2D(globTexture, vertexUV).xyz,1.0)  ;
      }
  `
);

// declaratively
extend({ ColorShiftMaterial });

// to make cube with a material on it
const Cube = () => {
  const { color } = useControls({
    color: "#ff0000",
  });
  const { gl } = useThree();
  const { nodes, materials, scene } = useGLTF("/Models/old_cart_wheel.glb");
  const texture = useLoader(
    TextureLoader,
    // "https://threejs.org/examples/textures/uv_grid_opengl.jpg"
    "/Surfaces/Rusty/Albedo.png"
  );
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;

  //texture.anisotropy = gl.capabilities.getMaxAnisotropy();
  // texture.minFilter = THREE.LinearMipMapLinearFilter;
  // texture.generateMipmaps = true;
  //texture.transformUv = (uv) => new THREE.Vector2(uv.x, uv.y);
  // texture.flipY = false;
  // texture.mapping = THREE.UVMapping;

  scene.traverse(function (child) {
    //get the meshes
    if (child.isMesh) {
      console.log("Here");
      // only replace texture if a texture map exist
      console.log(texture);

      //replace the map with another THREE texture
      child.material.color.set("#414def");
      child.material.map = texture;
      //  child.material.map.repeat.set(1, 1);
      //update
      child.material.map.needsUpdate = true;
      child.geometry.uvsNeedUpdate = true;
    }
  });

  return (
    <group>
      {/* // geometry={nodes.Body1.geometry}
      // scale={[0.005, 0.005, 0.005]}
      // position={[-3, 0, 0]}
      // material={material}
      // material-color={"#ff0000"}
      // material-roughness={1} */}
      {/* <boxBufferGeometry args={[2, 2, 2]}/> */}
      <primitive object={scene} position={[-2, 0, 0]} />

      {/* <colorShiftMaterial color='#ff00ff' time={1} /> */}
      <mesh position={[3, 0, 0]}>
        <boxBufferGeometry args={[2, 2, 2]} />
        {/* <primitive object={model.scene} scale={[.09,.09,.09]} /> */}
        <meshPhysicalMaterial color={color} map={texture} />
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
