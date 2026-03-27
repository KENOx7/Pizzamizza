import { useRef, useState } from 'react'

const bannerImages = []
for (let i = 1; i <= 15; i++) {
    const ext = [1, 2, 4, 9].includes(i) ? 'png' : 'jpg'
    bannerImages.push(`/assets/banner/${i}.${ext}`)
}

function Slider() {
    const trackRef = useRef(null)

    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const scrollBy = (dir) => {
        if (!trackRef.current) return
        const amount = dir === 'left' ? -400 : 400
        trackRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }

    const handleDragStart = (e) => {
        setIsDragging(true)
        setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].pageX)
        setScrollLeft(trackRef.current.scrollLeft)
    }

    const handleDragMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
        const walk = (x - startX) * 2
        trackRef.current.scrollLeft = scrollLeft - walk
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

    return (
        <section className="relative px-4 md:px-10 py-5 max-w-[1280px] mx-auto overflow-hidden">
            <button
                className="carousel-arrow absolute left-1 md:left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                onClick={() => scrollBy('left')}
                aria-label="Sola sürüşdür"
            >
                ‹
            </button>

            <div
                className="promo-track select-none"
                ref={trackRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {bannerImages.map((img, i) => (
                    <div key={i} className="promo-card">
                        <img
                            src={img}
                            alt={`Aksiya ${i + 1}`}
                            loading={i < 4 ? 'eager' : 'lazy'}
                            draggable="false"
                            className="pointer-events-none"
                        />
                    </div>
                ))}
            </div>

            <button
                className="carousel-arrow absolute right-1 md:right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                onClick={() => scrollBy('right')}
                aria-label="Sağa sürüşdür"
            >
                ›
            </button>
        </section>
    )
}

export default Slider
