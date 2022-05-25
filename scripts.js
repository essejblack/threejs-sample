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

      // kaf
      const planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0
      plane.receiveShadow = true
      scene.add(plane)

      // lamp spot
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(90, 100, 10)
      spotLight.castShadow = true
      scene.add(spotLight)

      document.getElementById("WebGL-output").appendChild(renderer.domElement)

      render = function () {
            renderer.render(scene, camera)
      }
      render()
}
window.onload = init
