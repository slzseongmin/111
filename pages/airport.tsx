import { useEffect, useRef } from 'react'
import * as BABYLON from 'babylonjs'

const Airport = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const engine = new BABYLON.Engine(canvas, true)
    const scene = new BABYLON.Scene(engine)

    const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene)
    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)

    // const url = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF/BoxAnimated.gltf';
    // const url = 'https://github.com/KhronosGroup/glTF-Sample-Models/blob/master/2.0/Avocado/glTF/';


    BABYLON.SceneLoader.ImportMesh(
      '', 
      '../public/glTF-Sample-Models-master/2.0/BoomBox/glTF/', 
      'BoomBox.gltf',
      scene,
      (meshes) => {
          meshes.forEach((mesh) => {
            console.log('meshes', meshes)
            mesh.receiveShadows = true
            mesh.material = new BABYLON.StandardMaterial('material', scene)
            mesh.material.backFaceCulling = false
          })
        });


    // BABYLON.SceneLoader.LoadAsync(url, undefined, engine).then(loadScene => {
    //   // setScene(loadScene);
    //   // loadScene.createDefaultCameraOrLight(true, undefined, true);
    //   // (loadScene.activeCamera as ArcRotateCamera).alpha += Math.PI;
    //   // (loadScene.activeCamera as ArcRotateCamera).radius = 10;
    //   // setCamera(loadScene.activeCamera!);
    // });

  
    // BABYLON.SceneLoader.ImportMesh('', '../public/glTF-Sample-Models-master/2.0/BoomBox/glTF/', 'BoomBox.gltf', scene, (meshes) => {
    //   meshes.forEach((mesh) => {
    //     console.log('meshes', meshes)
    //     mesh.receiveShadows = true
    //     mesh.material = new BABYLON.StandardMaterial('material', scene)
    //     mesh.material.backFaceCulling = false
    //   })
    // })

    engine.runRenderLoop(() => {
      scene.render()
    })

    window.addEventListener('resize', () => {
      engine.resize()
    })

    return () => {
      scene.dispose()
      engine.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}
    />
  )
}

export default Airport


// import { useEffect, useRef } from 'react'
// import * as BABYLON from 'babylonjs'

// const Airport = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current!
//     const engine = new BABYLON.Engine(canvas, true)
//     const scene = new BABYLON.Scene(engine)

//     const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene)
//     camera.attachControl(canvas, true)

//     const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)

//     const box = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene);

//     engine.runRenderLoop(() => {
//       scene.render()
//     })

//     window.addEventListener('resize', () => {
//       engine.resize()
//     })

//     return () => {
//       scene.dispose()
//       engine.dispose()
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'black',
//       }}
//     />
//   )
// }

// export default Airport