'use client'

import './carousel.css'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { CardCarousel } from '@/lib/components'
import { useFetchCities } from '@/lib/hooks'

interface City {
    id: number;
    nombre: string;
    foto: string;
    continente: string;
    descripcion: string;
    categorias: string[];
}

interface CarouselProps {
    title: string,
    slides: number[]
    options?: EmblaOptionsType
}

const CarouselItem = ({ city }: any) => {
    return (
        <div className="embla__slide" key={city.id}>
            <div className='embla__slide__content'>
                <CardCarousel item={city}></CardCarousel>
            </div>
        </div>
    )
}

export const Carousel: React.FC<CarouselProps> = ({ title, options }) => {
    const [emblaRef] = useEmblaCarousel(options);
    const { data: cities, loading, error } = useFetchCities('/cities.json');

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="embla">
            <h2>{title}</h2>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {cities.map((city: City) => (
                        <CarouselItem key={city.id} city={city} />
                    ))}
                </div>
            </div>
        </section>
    );
};
