import React from "react";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
    const cubeRef = useRef(null);

    useFrame((state, delta) => {
        // This will be called each frame BEFORE rendering the scene
        // To animate objects, everything has to be done inside this hook, otherwise if you used useState or something like that
        // you would trigger re renders for each frame and this would be horrible for performances

        cubeRef.current.rotation.y += delta; // using delta the animation will be the same for everyone even for the most powerful gaming pcs
    });

    return (
        <>
            <mesh
                ref={cubeRef}
                position-x={3}
                rotation-y={Math.PI * 0.23}
                scale={1.5}
            >
                {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
                <boxGeometry />
                <meshBasicMaterial color="mediumPurple" />
            </mesh>
            <mesh position-x={-3}>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>
            <mesh scale={10} position-y={-1} rotation-x={Math.PI * 0.5}>
                <planeGeometry />
                <meshBasicMaterial side={DoubleSide} color="greenyellow" />
            </mesh>
        </>
    );
};

export default Experience;
