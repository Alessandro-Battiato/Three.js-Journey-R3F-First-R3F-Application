import React from "react";
import { DoubleSide } from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";

extend({ OrbitControls }); // extend is used to convert a non-native R3F class into a native one

const Experience = () => {
    const cubeRef = useRef(null);
    const groupRef = useRef(null);
    const { camera, gl } = useThree(); // this hook provides the state (from which you are destructuring camera and gl) that you can see as a PARAMETER of the useFrame, but it will be provided only ONCE instead of giving it to us on each frame

    useFrame((state, delta) => {
        // This will be called each frame BEFORE rendering the scene
        // To animate objects, everything has to be done inside this hook, otherwise if you used useState or something like that
        // you would trigger re renders for each frame and this would be horrible for performances

        cubeRef.current.rotation.y += delta; // using delta the animation will be the same for everyone even for the most powerful gaming pcs
        groupRef.current.rotation.y += delta;
    });

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            {/* this is official THREE.JS documentation, you need to provide these elements to the orbit controls */}
            <group ref={groupRef}>
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
            </group>
            <mesh scale={10} position-y={-1} rotation-x={Math.PI * 0.5}>
                <planeGeometry />
                <meshBasicMaterial side={DoubleSide} color="greenyellow" />
            </mesh>
        </>
    );
};

export default Experience;
