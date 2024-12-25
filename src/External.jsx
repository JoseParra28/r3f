import { Canvas, useFrame } from "@react-three/fiber"
const ExternalModel = () => {
    return (

        <Canvas>
            <mesh position-y={-1} rotation-x={ - Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshStandardMaterial color={"lightbBlack"}/>
            </mesh>
        </Canvas>
    )
}

export default ExternalModel