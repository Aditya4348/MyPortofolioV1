import Orb from './reactBits/Orb/Orb.jsx';
import GradientText from './reactBits/GradientText/GradientText.jsx';
import Button from './heroCompo/button.jsx';
import Adit from '../assets/Adit2_1.png';
import Particles from './reactBits/Particles/Particles.jsx';

export default function Hero({text}) {

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center container mx-auto px-4 py-5 md:gap-5 md:p-8 min-h-[80vh] w-full">
            {/* Left side - Text content */}
            <div className="flex-1 p-4 md:p-0 mt-4 md:mt-10 max-w-2xl text-center md:text-left">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-3xl md:text-4xl font-semibold mb-4 font-montserrat"
                >
                    {text.introduction}
                </GradientText>
                <p className="text-base md:text-lg leading-relaxed text-white mb-6 md:mb-8 font-lato">
                    {text.description}
                </p>
                <Button link={text.link}>
                    My LinkedIn
                </Button>
                <Button link={text.linkGit}>
                    My GitHub
                </Button>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full md:w-auto">
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">

                    {/* Orb component - background */}
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />

                    {/* Image di atas Orb */}
                    <img
                        src={Adit}
                        alt="Foto"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] object-contain rounded-full pointer-events-none"
                    />

                </div>
            </div>
        </div>
    )
}
