import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"


const Cube = ({position, size, color}) => {
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        
    })
    return (
    <mesh position={position} ref={ref}>
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

        <group position={[-2,-1,0]}>
            
            <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
            <Cube position={[-1,0,0]} color={"red"} size={[1,1,1]}/>
            <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
            <Cube position={[-1,2,-2]} color={"green"} size={[1,1,1]}/>
        </group>
        </Canvas>
    )
}

export default Component