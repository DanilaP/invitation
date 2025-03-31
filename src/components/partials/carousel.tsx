import { useState, useEffect, useRef } from 'react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import './carousel.scss'; 

const Carousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<any>(null);

    // Функция для перехода к следующему слайду
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(nextSlide, 3000);
        }
    };

    // Функция для перехода к предыдущему слайду
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(nextSlide, 3000);
        }
    };

    // Запуск автоматической смены слайдов
    useEffect(() => {
        if (images.length > 1) {
            timerRef.current = setInterval(nextSlide, 3000);
        }
      
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [images.length]);

    if (!images || images.length === 0) {
        return <div>No images to display</div>;
    }

    return (
        <div 
            className="carousel-container"
        >
            <GrFormPrevious onClick={() => prevSlide()} className='carousel-icon prev-btn' />
            <GrFormNext onClick={() => nextSlide()} className='carousel-icon next-btn' />
            <div className="carousel-track" style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
            }}>
                {images.map((image: string, index: number) => (
                    <div key={index} className="carousel-slide">
                        <img 
                            src={image} 
                            alt={`Slide ${index}`} 
                            className="carousel-image"
                        />
                    </div>
                ))}
            </div>
            
            {images.length > 1 && (
                <>
                    <div className="carousel-dots">
                        {images.map((_: any, index: number) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;