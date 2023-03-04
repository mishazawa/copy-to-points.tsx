import { Canvas } from '@react-three/fiber';
import './App.css';

import { Wrap } from './components/Canvas';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [3, 2, 0] }}>
        <Wrap />
      </Canvas>
    </div>
  );
}

export default App;
