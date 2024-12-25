import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { SphereGeometry } from "three"


const Cube = ({position, size, color}) => {
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta 
        ref.current.position.z = Math.sin(state.clock.elapsedTime * 2)
        console.log(state.clock)
        console.log(state.elapsedTime)
        
    })
    return (
    <mesh position={position} ref={ref}>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color}/>
</mesh>
)
}
const Sphere = ({position, size, color}) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={size}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}

const Torus = ({position, size, color}) => {
    return (
        <mesh position={position}>
            <torusGeometry args={size}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}
const Component = () => {
    return (
        <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight intensity={[0.4]}/>
{
        <group position={[-2,-1,0]}>
            {/* <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
            <Cube position={[-1,0,0]} color={"red"} size={[1,1,1]}/>
            <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
            <Cube position={[-1,2,-2]} color={"green"} size={[1,1,1]}/>
            <Sphere position={[0,0,0]} args={[0,30,30]} color={"green"}/> */}
        </group> } 
            <Torus position={[0,0,0]} args={[0,30,30]} color={"gray"}/>
        
        </Canvas>
    )
}

export default Component