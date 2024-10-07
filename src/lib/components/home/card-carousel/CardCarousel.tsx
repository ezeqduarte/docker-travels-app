'use client'

export const CardCarousel = ({ item }: any) => {
    return (
        <div
            style={{ backgroundImage: `url(${item?.foto})` }}
            className='bg-[image:var(--image-url)] bg-[#969696ab] bg-center bg-cover bg-blend-multiply w-full relative h-full rounded-xl'>
            
        </div>
    );
};