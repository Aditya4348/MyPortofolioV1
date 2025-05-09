import VariantButtonGroup from '../Temp/button.jsx';
import Box from '@mui/material/Box';
import Particles from '../reactBits/Particles/particleMain.jsx';
import '../../style/index.css';

const portofolio = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-start gap-6 h-screen py-10">
            <Particles Top="200"/>
            <VariantButtonGroup />
            <Box component="section" sx={{}} className="BoxPortofolio">
                This Box renders as an HTML section element.
            </Box>
        </div>
    )
}

export default portofolio;
