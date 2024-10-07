'use client'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './carousel.css'

type PropType = {
    title: string,
    slides: number[]
    options?: EmblaOptionsType
}

const CarouselItem = ({ index }: any) => {
    return (
        <div className="embla__slide" key={index}>
            <div className='embla__slide__content'>
                <div style={{ 'width': '100%', 'background': 'red' }} className='embla__slide__content1'></div>
            </div>
        </div>
    )
}

const Carousel: React.FC<PropType> = (props) => {
    const { title, slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    return (
        <section className="embla">
            <p>{title}</p>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <CarouselItem index={index}></CarouselItem>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carousel
