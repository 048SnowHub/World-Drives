// Configurar a cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Criar uma estrada simples
const roadGeometry = new THREE.BoxGeometry(10, 0.1, 2);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x4db6ac });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.position.y = -0.05; // Posicionar a estrada ligeiramente abaixo do centro
scene.add(road);

// Criar um jogador (cubo)
const playerGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x2196F3 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
scene.add(player);

// Definir a posição da câmera
camera.position.z = 5;

// Loop de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Manipular entrada do teclado para movimento do jogador
document.addEventListener('keydown', (event) => {
    const speed = 0.1;
    switch (event.key) {
        case 'ArrowUp':
            player.position.z -= speed;
            break;
        case 'ArrowDown':
            player.position.z += speed;
            break;
        case 'ArrowLeft':
            player.position.x -= speed;
            break;
        case 'ArrowRight':
            player.position.x += speed;
            break;
    }
});