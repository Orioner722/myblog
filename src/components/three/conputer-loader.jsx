"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { DogSpinner, DogContainer } from "./computer-com-loader";
// threejs导入
function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export default function conputerLoader() {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const urlDogGLB = "/computer.glb";

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      //renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(0, 0.2, 0);
      const initialCameraPosition = new THREE.Vector3(0, 0.01, 1.6);

      // 640 -> 240
      // 8   -> 6
      //       const fov = 35; // 视角角度，视角越大观看范围越广
      const aspect = scW / scH; //相机观看比例，类似手机的屏幕比例
      // const near = 0.1; // 渲染的最近距离
      // const far = 100; // 渲染的最远距离
      // const camera = new PerspectiveCamera(fov, aspect, near, far);
      //       const scale = scH * 0.005 + 4.8;
      const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
      camera.position.set(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 1;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }
        const { current: container } = refContainer;
        if (container) {
          const scW = container.clientWidth;
          const scH = container.clientHeight;
          camera.aspect = scW / scH;
          camera.updateProjectionMatrix();
          console.log("w=", scW, "h", scH);
          renderer.setSize(scW, scH);
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.render(scene, camera);
        }
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  );
}
