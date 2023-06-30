import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Model as Felni } from "./Components/Models/Felni.jsx";
import {
  Environment,
  Loader,
  OrbitControls,
  PresentationControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import Container from "./Components/UI/Container";
import { useControls } from "leva";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='canvasContainer'>
        <Canvas style={{ zIndex: 1 }}>
          <ambientLight />
          <pointLight castShadow position={[10, 10, 10]} />
          <directionalLight position={[0, 10, 0]} intensity={1} />
          <Suspense fallback={null}>
            <Felni />
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
