import Particles from "./Particles.jsx";

export default function particleMain({Top}) {
    return (
        <div className="absolute left-0 w-full h-full pointer-events-none" style={{top: Top}}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={500}
                particleSpread={20}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={true}
                disableRotation={false}
            />
        </div>
    )
}

