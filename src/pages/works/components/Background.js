import React from 'react';
import ParticleField from 'react-particles-webgl';

/**
 * The default configuation for the ParticleField component
 *
 * Any option passed in via props will overwrite the default config
 */

const config = {
  showCube: false,
  dimension: '3D',
  velocity: 0,
  boundaryType: 'bounce',
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1
  },
  lines: {
    colorMode: 'solid',
    color: '#351CCB',
    transparency: 0.9,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 10,
    visible: false
  },
  particles: {
    colorMode: 'rainbow',
    color: '#376553',
    transparency: 0.5,
    shape: 'square',
    boundingBox: 'canvas',
    count: 358,
    minSize: 20,
    maxSize: 100,
    visible: true
  },
  cameraControls: {
    enabled: false,
    enableDamping: false,
    dampingFactor: 0.3,
    enableZoom: false,
    autoRotate: true,
    autoRotateSpeed: 0.8,
    resetCameraFlag: false
  }
};


class Background extends React.Component{
  render(){
    return (
      <div style={{ top: '-10%', background: "rgb(20, 20, 35)", height: "150vh", width: "100%", position: "fixed", zIndex: "-1"}}>
        <ParticleField config={config} />
      </div>
    );
  }
}

export default Background;