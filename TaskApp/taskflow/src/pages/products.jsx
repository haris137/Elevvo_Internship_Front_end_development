export default function Products(params) {
    const items = [
        {   "icon":"📅",
            "name": "Drag-and-Drop Tasks",
            "desc": "Easily organize your workflow with intuitive drag-and-drop functionality.",
        },
        {   "icon":"🔄",
            "name": "Real-Time Sync",
            "desc": "Changes update instantly across all your devices for seamless collaboration.",
        },
        {   "icon":"📊",
            "name": "Progress Tracking",
            "desc": " Visual analytics help you stay on top of your productivity goals.",
        },
    ]
    return <>
    <section>
        <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col justify-center text-left p-4 relative">
            <p className="text-black text-6xl font-bold z-10 relative mb-6 flex justify-center ">
                Our Products
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 m-auto">
                {items.map((item, index) => (
                    <div key={index} className="h-[60vmin] w-[50vmin] md:h-[50vmin] md:w-[40vmin] bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                        <div className="text-xl md:text-4xl mb-2">{item.icon}</div>
                        <h3 className="md:text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>    
            </div>
    </section>
    </>
};
