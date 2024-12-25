// import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useEffect,useState, Suspense } from "react"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

// import CanvasLoader from '...'


const Computers = () => {

    const computer = useGLTF('./FlightHelmet/glTF/FlightHelmet.gltf')
    return (
        
        <mesh>
            <hemisphereLight 
            intensity={0.15}
            groundColor={"black"}
            
            />
            <pointLight intensity={1}/>
            <ambientLight/>
            <spotLight position={[-20, 50,10 ]}
            angle={0.12}
            penumbra={1}
            />
            <primitive 
            object={computer.scene} 
            scale={10}
            position={[0,-3.25, -1.5]}
            // rotation={[-0.01, -0.2, -0.1]}
            />
            
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
        <Suspense >
        <OrbitControls
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minAzimuthAngle={Math.PI / 2}
         />
         <Computers/>
        </Suspense>
        <Preload all/>
        </Canvas>
    )
}

// export default Computers
export default ComputerCanvas