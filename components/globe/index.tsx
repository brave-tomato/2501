'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import R3fGlobe from 'r3f-globe';

/**
 * Resources
 */
import cities from './cities';
import font from './font';

/**
 * Types
 */
import type { OrbitControlsProps } from '@react-three/drei';
import type { CanvasProps } from '@react-three/fiber';
import type { GlobeProps } from 'r3f-globe';

const ComponentGlobe = () => {
    /**
     * ChildrenProps
     */
    const canvasProps: CanvasProps = {
        camera: {
            fov: 50,
            position: [0, 50, 280],
        },
    };

    const globeProps: GlobeProps = {
        // arcsData: cities.map((city) => ({
        //     startLat: cities[0].lat,
        //     startLng: cities[0].lng,
        //     endLat: city.lat,
        //     endLng: city.lng,
        // })),
        // arcStroke: 0.5,
        globeImageUrl: '/textures/earth.jpg',
        labelsData: cities.map((city) => ({
            ...city,
            label: city.label_zhCN,
        })),
        labelColor: () => 'red',
        labelDotOrientation: (d) => d.orientation || 'bottom',
        labelDotRadius: 0.3,
        labelTypeFace: font,
        labelSize: 1,
        labelText: 'label',
    };

    const orbitControlsProps: OrbitControlsProps = {
        autoRotate: true,
        autoRotateSpeed: 0.5,
        enablePan: false,
        enableZoom: true,
        // 0 为北极，Math.PI 为南极，Math.PI / 2 为赤道
        maxPolarAngle: Math.PI * 0.7,
        minPolarAngle: Math.PI * 0.3,
        maxDistance: 284,
        minDistance: 190,
    };

    return (
        <Canvas {...canvasProps}>
            {/* 环境光 */}
            <ambientLight color={0xcccccc} intensity={Math.PI} />

            <color args={[0, 0, 0]} attach="background" />

            <directionalLight intensity={0.6 * Math.PI} />

            {/* 地球 */}
            <R3fGlobe {...globeProps} />

            {/* 控制器 */}
            <OrbitControls {...orbitControlsProps} />
        </Canvas>
    );
};

export default ComponentGlobe;
