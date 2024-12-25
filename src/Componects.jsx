import { Canvas } from "@react-three/fiber"


const Component = () => {
    return (
        <Canvas>
            <mesh>
                <boxGeometry args={[2, 2, 4]}>
                    <meshStandardMaterial/>
                </boxGeometry>
            </mesh>
        </Canvas>
    )
}

export default Component