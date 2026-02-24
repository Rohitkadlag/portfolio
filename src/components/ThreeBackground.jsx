import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

function ThreeBackground() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const isDark = theme === 'dark';
    
    const params = {
      colorLine: isDark ? '#667eea' : '#8b5cf6',
      colorSignal: isDark ? '#8fc9ff' : '#667eea',
      useColor2: false,
      colorSignal2: isDark ? '#ff0055' : '#764ba2',
      useColor3: false,
      colorSignal3: isDark ? '#ffcc00' : '#f59e0b',
      lineCount: 80,
      globalRotation: 0,
      positionX: 0,
      positionY: 0,
      spreadHeight: 30.33,
      spreadDepth: 0,
      curveLength: 50,
      straightLength: 100,
      curvePower: 0.8265,
      waveSpeed: 2.48,
      waveHeight: 0.145,
      lineOpacity: isDark ? 0.6 : 0.5,
      signalCount: 94,
      speedGlobal: 0.345,
      trailLength: 3,
      bloomStrength: isDark ? 3.0 : 2.0,
      bloomRadius: 0.5
    };

    params.positionX = (params.curveLength - params.straightLength) / 2;

    const CONSTANTS = {
      segmentCount: 150
    };

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 90);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const contentGroup = new THREE.Group();
    contentGroup.position.set(params.positionX, params.positionY, 0);
    scene.add(contentGroup);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(containerRef.current.clientWidth, containerRef.current.clientHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    function getPathPoint(t, lineIndex, time) {
      const totalLen = params.curveLength + params.straightLength;
      const currentX = -params.curveLength + t * totalLen;

      let y = 0;
      let z = 0;
      const spreadFactor = (lineIndex / params.lineCount - 0.5) * 2;

      if (currentX < 0) {
        const ratio = (currentX + params.curveLength) / params.curveLength;
        let shapeFactor = (Math.cos(ratio * Math.PI) + 1) / 2;
        shapeFactor = Math.pow(shapeFactor, params.curvePower);

        y = spreadFactor * params.spreadHeight * shapeFactor;
        z = spreadFactor * params.spreadDepth * shapeFactor;

        const waveFactor = shapeFactor;
        const wave =
          Math.sin(time * params.waveSpeed + currentX * 0.1 + lineIndex) *
          params.waveHeight *
          waveFactor;
        y += wave;
      }

      return new THREE.Vector3(currentX, y, z);
    }

    const backgroundLines = [];
    const signals = [];
    const bgMaterial = new THREE.LineBasicMaterial({
      color: params.colorLine,
      transparent: true,
      opacity: params.lineOpacity,
      depthWrite: false
    });

    const signalMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      transparent: true
    });
    const signalColorObj1 = new THREE.Color(params.colorSignal);
    const signalColorObj2 = new THREE.Color(params.colorSignal2);
    const signalColorObj3 = new THREE.Color(params.colorSignal3);

    function pickSignalColor() {
      const choices = [signalColorObj1];
      if (params.useColor2) choices.push(signalColorObj2);
      if (params.useColor3) choices.push(signalColorObj3);
      return choices[Math.floor(Math.random() * choices.length)];
    }

    function createSignal() {
      const maxTrail = 150;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(maxTrail * 3);
      const colors = new Float32Array(maxTrail * 3);

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mesh = new THREE.Line(geometry, signalMaterial);
      mesh.frustumCulled = false;
      mesh.renderOrder = 1;
      contentGroup.add(mesh);

      signals.push({
        mesh: mesh,
        laneIndex: Math.floor(Math.random() * params.lineCount),
        speed: 0.2 + Math.random() * 0.5,
        progress: Math.random(),
        history: [],
        assignedColor: pickSignalColor()
      });
    }

    for (let i = 0; i < params.lineCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(CONSTANTS.segmentCount * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const line = new THREE.Line(geometry, bgMaterial);
      line.userData = { id: i };
      line.renderOrder = 0;
      contentGroup.add(line);
      backgroundLines.push(line);
    }

    for (let i = 0; i < params.signalCount; i++) {
      createSignal();
    }

    const clock = new THREE.Clock();
    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      backgroundLines.forEach((line) => {
        const positions = line.geometry.attributes.position.array;
        const lineId = line.userData.id;
        for (let j = 0; j < CONSTANTS.segmentCount; j++) {
          const t = j / (CONSTANTS.segmentCount - 1);
          const vec = getPathPoint(t, lineId, time);
          positions[j * 3] = vec.x;
          positions[j * 3 + 1] = vec.y;
          positions[j * 3 + 2] = vec.z;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      signals.forEach((sig) => {
        sig.progress += sig.speed * 0.005 * params.speedGlobal;

        if (sig.progress > 1.0) {
          sig.progress = 0;
          sig.laneIndex = Math.floor(Math.random() * params.lineCount);
          sig.history = [];
          sig.assignedColor = pickSignalColor();
        }

        const pos = getPathPoint(sig.progress, sig.laneIndex, time);
        sig.history.push(pos);

        if (sig.history.length > params.trailLength + 1) {
          sig.history.shift();
        }

        const positions = sig.mesh.geometry.attributes.position.array;
        const colors = sig.mesh.geometry.attributes.color.array;

        const drawCount = Math.max(1, params.trailLength);
        const currentLen = sig.history.length;

        for (let i = 0; i < drawCount; i++) {
          let index = currentLen - 1 - i;
          if (index < 0) index = 0;

          const p = sig.history[index] || new THREE.Vector3();

          positions[i * 3] = p.x;
          positions[i * 3 + 1] = p.y;
          positions[i * 3 + 2] = p.z;

          let alpha = 1;
          if (params.trailLength > 0) {
            alpha = Math.max(0, 1 - i / params.trailLength);
          }

          colors[i * 3] = sig.assignedColor.r * alpha;
          colors[i * 3 + 1] = sig.assignedColor.g * alpha;
          colors[i * 3 + 2] = sig.assignedColor.b * alpha;
        }

        sig.mesh.geometry.setDrawRange(0, drawCount);
        sig.mesh.geometry.attributes.position.needsUpdate = true;
        sig.mesh.geometry.attributes.color.needsUpdate = true;
      });

      composer.render();
    }

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      composer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      backgroundLines.forEach((l) => {
        contentGroup.remove(l);
        l.geometry.dispose();
      });
      
      signals.forEach((s) => {
        contentGroup.remove(s.mesh);
        s.mesh.geometry.dispose();
      });
      
      bgMaterial.dispose();
      signalMaterial.dispose();
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    />
  );
}

export default ThreeBackground;
