import Foto1 from "../../assets/Wariors.png";

const ProjectContent = [
    {
        id: 1,
        title: "Project 1",
        description: "Description 1",
        image: Foto1
    },

]

export default function project() {
    return (
        <div className="flex w-full flex-wrap items-center justify-start text-white py-10">
            {ProjectContent.map((item) => (
                <div key={item.id} className="w-auto bg-gray-900/60 backdrop-blur-sm rounded-md p-6 space-y-4">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg mx-auto" />
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <p className="text-sm text-gray-300">{item.description}</p>
                </div>
            ))}
        </div>
    )
}
