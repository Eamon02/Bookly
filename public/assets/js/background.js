let scene, camera, renderer, stars, pages, starGeo, pageGeo;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = Math.PI / 2;
  camera.rotation.x = 10;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  pageGeo = new THREE.Geometry();
  for (let i = 0; i < 1000; i++) {
    page = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    page.velocity = 0.25;
    page.acceleration = 0.0;
    pageGeo.vertices.push(page);
  }

  let pageSprite = new THREE.TextureLoader().load("/assets/images/book.png");

  let pageMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 5,
    map: pageSprite,
  });

  pages = new THREE.Points(pageGeo, pageMaterial);

  scene.add(stars);
  scene.add(pages);

  window.addEventListener("resize", onWindowResize, false);

  animate();
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate() {
  pageGeo.vertices.forEach((p) => {
    p.velocity += p.acceleration;
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0.1;
    }
  });
  pageGeo.verticesNeedUpdate = true;
  pages.rotation.x += 0.0;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
