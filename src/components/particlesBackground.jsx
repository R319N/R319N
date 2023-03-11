import dynamic from "next/dynamic";
import React from "react";


const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });
const ParticlesBackground = () => {
  return (
    <div>
      <ParticlesBg
        num={50}
        density={50}
        type="cobweb"
        color="#00ffff"
        bg={{
          position: "absolute",
          zIndex: 99,
          height: "100%",
          width: "100%",
          opacity: "0.5",
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

// export default class ParticlesBackground extends Component {
//   render() {
//     return (

//     );
//   }
// }
