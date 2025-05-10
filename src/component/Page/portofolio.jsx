import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import '../../style/index.css';
import { portoMenu } from "../content/content";
import Particle from '../reactBits/Particles/particleMain.jsx';

const portofolio = () => {
    return (
        <div className=" container mx-auto flex w-full flex-col items-center justify-start h-screen text-white py-10">
            <Particle Top="200"/>
            <div className="w-full">
                <Tabs aria-label="Options" color="secondary" variant="underlined" className="w-full bg-transparent border-none flex justify-center items-center font-semibold font-montserrat">
                    {portoMenu.map((item) => (
                        <Tab key={item.id} title={item.title}>
                            <Card className="bg-transparent text-white max-w-full p-5">
                            <CardBody>
                                {item.content}
                            </CardBody>
                            </Card>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>

    )
}

export default portofolio;
