const categoriesColors: any = {
    cultura: 'bg-[#ff8161]',
    patrimonio: 'bg-[#828e23]',
    modernidad: 'bg-[#e5b9d7]',
    tecnologia: 'bg-[#328acd]',
    naturaleza: 'bg-[#228b22]',
    paisajes: 'bg-[#e9cf44]',
    masividad: 'bg-[#ff4d00]',
};

export const CardCarousel = ({ item }: any) => {
    return (
        <article
            style={{ backgroundImage: `url(${item?.foto})` }}
            className='bg-[image:var(--image-url)] bg-[#969696ab] py-2 px-3 bg-center bg-cover bg-blend-multiply w-full relative h-full rounded-xl cursor-pointer'>
            <div className="flex w-full justify-between items-center">
                <h4 className="text-white font-bold text-[24px] ">{item.nombre}</h4>
                <div className="text-white rounded-xl flex gap-2">

                    <span className='text-[24px]'>{'<3'}</span>
                </div>
            </div>
            <div className="absolute bottom-7 right-4 text-white rounded-xl flex gap-2">

                <span className='text-[24px]'>{item.valoracion}</span>
            </div>
            <div className='absolute bottom-2 right-2 flex gap-2 text-xs'>
                {item.categorias.map((category: string) => (
                    <span className={`${categoriesColors[category]} px-3 rounded-lg`}>{category}</span>
                ))}
            </div>
        </article>
    );
};