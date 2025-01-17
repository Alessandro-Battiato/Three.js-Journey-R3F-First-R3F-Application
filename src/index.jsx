import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Canvas
        dpr={[1, 2]} // force pixel ratio to the provided numbers for everyone, even though this is the default applied by R3F
        // flat No tone mapping
        gl={{
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
            toneMapping: THREE.ACESFilmicToneMapping,
            // toneMapping: THREE.CineonToneMapping, // different saturations of colors
        }}
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 6],
        }}
    >
        <Experience />
    </Canvas>
);
