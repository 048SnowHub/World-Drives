// Configurar a cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Criar o chão
const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // Rotacionar para ficar plano
scene.add(ground);

// Criar o céu
const skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x87CEEB, side: THREE.BackSide });
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

// Criar o carro (um cubo simples para representar o carro)
const carGeometry = new THREE.BoxGeometry(1, 0.5, 0.5);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const car = new THREE.Mesh(carGeometry, carMaterial);
car.position.y = 0.25; // Levantar o carro um pouco acima do chão
scene.add(car);

// Definir a posição da câmera
camera.position.set(0, 2, 5);
camera.lookAt(car.position);

// Variáveis de movimento
let speed = 0.1;

// Loop de animação
function animate() {
    requestAnimationFrame(animate);
    
    // Mover o carro para frente
    car.position.z -= speed;

    // Repetir o chão para criar um efeito de infinito
    if (car.position.z < -50) {
        car.position.z = 0;
    }

    renderer.render(scene, camera);
}
animate();

// Manipular entrada do teclado para movimento do carro
document.addEventListener('keydown', (event) => {
    const turnSpeed = 0.05;
    switch (event.key) {
        case 'ArrowLeft':
            car.rotation.y += turnSpeed; // Virar para a esquerda
            break;
        case 'ArrowRight':
            car.rotation.y -= turnSpeed; // Virar para a direita
            break;
    }
});