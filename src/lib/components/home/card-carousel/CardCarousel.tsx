const categoriesColors: any = {
    cultura: 'bg-[#ff8161]',
    patrimonio: 'bg-[#828e23]',
    modernidad: 'bg-[#e5b9d7]',
    tecnologia: 'bg-[#328acd]',
    naturaleza: 'bg-[#228b22]',
    paisajes: 'bg-[#e9cf44]',
    masividad: 'bg-[#ff4d00]',
};

const LabelsContainer = ({ categories }: any) => {
    return (
        <div className='absolute bottom-2 right-2 flex gap-2 text-xs'>
            {categories.map((category: string) => (
                <span className={`${categoriesColors[category]} px-3 rounded-lg`}>{category}</span>
            ))}
        </div>
    );
}

export const CardCarousel = ({ item }: any) => {
    return (
        <div
            style={{ backgroundImage: `url(${item?.foto})` }}
            className='bg-[image:var(--image-url)] bg-[#969696ab] bg-center bg-cover bg-blend-multiply w-full relative h-full rounded-xl'>

            <LabelsContainer categories={item.categorias} />
        </div>
    );
};