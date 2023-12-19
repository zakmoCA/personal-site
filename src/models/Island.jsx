import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import islandScene from '../assets/3d/island.glb'

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props}) => {
  const islandRef = useRef()
  
  const { gl, viewport } = useThree() // access to threejs renderer/viewport
  const { nodes, materials } = useGLTF(islandScene)

  const lastX = useRef(0) // last mouse position
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95 // speed/f'(speed) of rotation

  
  const handlePointerDown = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)
    
    // is it a touch event on phone or mouse event?
    const clientX = e.touches ? 
      e.touches[0].clientX 
      : e.clientX
  
    lastX.current = clientX
  }

  const handlePointerUp = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)
  }

  const handlePointerMove = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (isRotating) {
      const clientX = e.touches ? 
      e.touches[0].clientX 
      : e.clientX
  
      // change in horizontal position
      const delta = (clientX - lastX.current) / viewport.width
      // update island rotation based on mouse
      islandRef.current.rotation.y += delta * 0.01 * Math.PI // y=top and bottom
      // update ref for last clientX position
      lastX.current = clientX
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  // move with keyboard
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true)
      islandRef.current.rotation.y += 0.01 * Math.PI
      rotationSpeed.current = 0.0125
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true)
      islandRef.current.rotation.y -= 0.01 * Math.PI
      rotationSpeed.current = -0.0125
    }
  }
  
  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false)
    } 
  }

  // applies on every single frame
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor // makes plane roll smoother/slow down
    }
    // cease rotation when very low speed
    if (Math.abs(rotationSpeed.current) < 0.001) {
      rotationSpeed.current = 0

      islandRef.current.rotation.y += rotationSpeed.current
    } else {
      // determine current stage based on island's orientation (while rotating)
      const rotation = islandRef.current.rotation.y

      

      /** CODE BELOW -- FOR FUTURE ZAK
       * we are making sure our rotation value stays between 0 and 360 degrees (or 0 and 2 * Math.PI in radians)
       * if the rotation goes over a full circle or goes negative, this code fixes it. works like this:
       * 1. first we use 'rotation % (2 * Math.PI)' to keep the rotation within a full circle
       *    if it's more than 360 deg, this brings it back into that range
       * 2. then we add 2 * Math.PI to the result. this step is just to make sure we don't end up with a negative number
       * 3. last, we do another '% (2 * Math.PI)' to make sure our rotation is still within 0 to 360 degrees range
       *    this step is like a final check to keep everything in bounds
       * 4. hell yeah brother
       */

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

      // set the current stage based on the islands orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4)
          break
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3)
          break
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2)
          break
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1)
          break
        default:
          setCurrentStage(null)
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement // need to attach ptr listeners to the canvas not the regular dom
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])


  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}

export default Island