// import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useEffect,useState, Suspense } from "react"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

// import CanvasLoader from '...'


const Computers = () => {

    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        
        <mesh>
            <hemisphereLight 
            intensity={0.15}
            groundColor={"black"}
            
            />
            <pointLight intensity={1}/>
            <primitive object={computer.scene} />
            
        </mesh>
    )
}

const ComputerCanvas = () => {
    return ( 
        <Canvas 
        frameloop="demand"
         shadows
         camera={{position: [20,3,5], fov:25  }}
         gl={{preserveDrawingBuffer:true}}
         >
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        </Suspense>
        </Canvas>
    )
}

export default Computers