import React from "react";
import { DoubleSide } from "three";

const Experience = () => {
    return (
        <>
            <mesh position-x={3} rotation-y={Math.PI * 0.23} scale={1.5}>
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
