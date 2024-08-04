import React, { useMemo } from "react";
import { DoubleSide } from "three";

const CustomObject = () => {
    const verticesCount = 10 * 3; // 10 triangles composed of 3 vertices

    const positions = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3); // each single vertex is composed of x y z

        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3;
        }

        return positions;
    }, []);

    return (
        <mesh>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={verticesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <meshBasicMaterial color="red" side={DoubleSide} />
        </mesh>
    );
};

export default CustomObject;
