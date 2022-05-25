const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
)
const renderer = new THREE.WebGLRenderer()

function init() {

      renderer.setClearColor(0xffffff, 1.0) // background safhe
      renderer.setSize(window.innerWidth, window.innerHeight) // size safhe
      renderer.shadowMap.enabled = true // sayeh 

      camera.position.x = -60
      camera.position.y = 60
      camera.position.z = 0
      camera.lookAt(scene.position)

      
      

      document.getElementById("WebGL-output").appendChild(renderer.domElement)

      render = function () {
            renderer.render(scene, camera)
      }
      render()
}
window.onload = init
