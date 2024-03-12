import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'

const $_img_pop = document.getElementById('image-pop')
const $_img_item = document.getElementById('image-pop-item')

$_img_pop.addEventListener('click', function() {
	$_img_pop.style.display = 'none'
})

const scene = new THREE.Scene()

// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set( 0, -500, 200 )
// camera.position.set( 0, 0, 200 )
camera.up.set(0, 0, 1) 

// RENDERER
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)

// LIGHTS
const light = new THREE.AmbientLight( 0x222222 ) 
light.intensity = 80
scene.add( light )

// ORBIT CONTROLS
const controls = new OrbitControls( camera, renderer.domElement )
controls.target.set( 0, 0, 0 )
controls.enableZoom = false
controls.maxPolarAngle = 1
controls.minPolarAngle = 1
controls.update()





// 2D PLACEHOLDER
const labelRenderer = new CSS2DRenderer()
labelRenderer.setSize( window.innerWidth, window.innerHeight )
labelRenderer.domElement.style.position = 'absolute'
labelRenderer.domElement.style.top = '0px'
labelRenderer.domElement.className = 'pe-n'
document.body.appendChild( labelRenderer.domElement )


// CAMPO
const div = document.createElement('div')
div.textContent = `Campo`
div.style.color = 'white'
div.className = 'pe-a btn'
div.addEventListener('click', function() {
	$_img_item.src = 'assets/images/15105-Imagem-45.jpg'
	$_img_pop.style.display = 'flex'
})

const obj2d = new CSS2DObject(div)
obj2d.position.set(220,30,40)
scene.add(obj2d)


// PÁTIO
const div2 = document.createElement('div')
div2.textContent = `Pátio`
div2.style.color = 'white'
div2.className = 'pe-a btn'
div2.addEventListener('click', function() {
	$_img_item.src = 'assets/images/patio.jpg'
	$_img_pop.style.display = 'flex'
})

const obj2d2 = new CSS2DObject(div2)
obj2d2.position.set(20,100,40)
scene.add(obj2d2)

// Ginasio
const div3 = document.createElement('div')
div3.textContent = `Gínasio`
div3.style.color = 'white'
div3.className = 'pe-a btn'
div3.addEventListener('click', function() {
	$_img_item.src = 'assets/images/128-2008.jpg'
	$_img_pop.style.display = 'flex'
})


const obj3d3 = new CSS2DObject(div3)
obj3d3.position.set(-90,210,40)
scene.add(obj3d3)

// Refeitorio
const div4 = document.createElement('div')
div4.textContent = `Refeitório`
div4.style.color = 'white'
div4.className = 'pe-a btn'
div4.addEventListener('click', function() {
	$_img_item.src = 'assets/images/escola-augusto.jpg'
	$_img_pop.style.display = 'flex'
})


const obj4d4 = new CSS2DObject(div4)
obj4d4.position.set(-100,50,40)
scene.add(obj4d4)

// Portao
const div5 = document.createElement('div')
div5.textContent = `Portão de entrada`
div5.style.color = 'white'
div5.className = 'pe-a btn'
div5.addEventListener('click', function() {
	$_img_item.src = 'assets/images/foto_escola_secundaria.jpg'
	$_img_pop.style.display = 'flex'
})

const obj5d5 = new CSS2DObject(div5)
obj5d5.position.set(-100,-40,40)
scene.add(obj5d5)

// Loja do aluno
const div6 = document.createElement('div')
div6.textContent = `Loja do aluno`
div6.style.color = 'white'
div6.className = 'pe-a btn'
div6.addEventListener('click', function() {
	$_img_item.src = 'assets/images/loja.jpg'
	$_img_pop.style.display = 'flex'
})

const obj6d6 = new CSS2DObject(div6)
obj6d6.position.set(20,-50,40)
scene.add(obj6d6)

// BIBLIOTECA
const div7 = document.createElement('div')
div7.textContent = `Biblioteca`
div7.style.color = 'white'
div7.className = 'pe-a btn'
div7.addEventListener('click', function() {
	$_img_item.src = 'assets/images/Biblioteca.jpg'
	$_img_pop.style.display = 'flex'
})

const obj7d7 = new CSS2DObject(div7)
obj7d7.position.set(10,10,40)
scene.add(obj7d7)



// GLTF
new GLTFLoader().load('assets/eag-3d.gltf', (gltf) => {
	let model = gltf.scene
	model.scale.set(100,100,100)
	scene.add(model)
}, undefined, (error)=> {
	console.log(error)
})


// EXECUTE
document.getElementById('scene').appendChild(renderer.domElement)

function animate() {
	controls.update()
	scene.rotation.z += 0.001;
	labelRenderer.render(scene, camera)
	renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

window.addEventListener('resize', function () {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	controls.update()
	labelRenderer.setSize( window.innerWidth, window.innerHeight )
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// nota javascript https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
// nota HTML https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click