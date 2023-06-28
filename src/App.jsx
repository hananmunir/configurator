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
} from "@react-three/drei";
import Container from "./Components/UI/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='canvasContainer'>
        <Canvas style={{ zIndex: 1 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <PresentationControls>
              <Felni />
            </PresentationControls>
          </Suspense>
          <Environment files={"/Environment/venice_sunset_1k.hdr"} />
        </Canvas>
        <Container />
      </div>
    </>
  );
}

export default App;
