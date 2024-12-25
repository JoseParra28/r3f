import { Canvas } from "@react-three/fiber"
import { AmbientLight } from "three"

const Cube = ({position, size, color}) => {
    return (
    <mesh position={position}>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color}/>
</mesh>
)
}

const Component = () => {

    
    return (
        <Canvas>

        <directionalLight position={[0, 0, 2]} />
        <ambientLight intensity={[0.4]}/>
        <group position={[0,-1,0]}>
            <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
            <Cube position={[-1,0,0]} color={"red"} size={[1,1,1]}/>
            <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
            <Cube position={[-1,2,-2]} color={"green"} size={[1,1,1]}/>
        </group>
           
        </Canvas>
    )
}

export default Component