import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Model as Felni } from "./Components/Models/Felni.jsx";
import { Environment, Loader, OrbitControls } from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='canvasContainer'>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Felni />
          </Suspense>
          <Environment preset='city' />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
