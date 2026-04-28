
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import AppRoutes from './Routes/Routes';
import AnimatedCursor from "react-animated-cursor"
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        <Toaster />
      </BrowserRouter>
      <AnimatedCursor 
      innerSize={10}
      outerSize={36}
      innerScale={0.7}
      outerScale={2}
      color="255, 0, 127"
      outerAlpha={0.5}
      innerStyle={{
          backgroundColor: "#FF007F",
          border: "none",
      }}
      outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid #FF007F", 
      }}
      style={{
        mixBlendMode: "difference",
      }}
      showSystemCursor={true}
      />
  </StrictMode>,
)
