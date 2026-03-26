import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import PizzaCard from './PizzaCard'
import PizzaModal from './PizzaModal'
import AnimatedPrice from './AnimatedPrice'
import {
    Pizza, Package, Salad, Soup, UtensilsCrossed,
    Droplets, IceCreamCone, GlassWater, Leaf, Flame,
    Drumstick, Beef, ArrowUpDown
} from 'lucide-react'

const categories = [
    { label: 'Pizzalar', range: [0, 20], icon: Pizza },
    { label: 'Kombolar', range: [20, 32], icon: Package },
    { label: 'Salatlar', range: [32, 36], icon: Salad },
    { label: 'Pasta', range: [36, 38], icon: UtensilsCrossed },
    { label: 'Şorbalar', range: [38, 41], icon: Soup },
    { label: 'Qəlyanaltılar', range: [41, 52], icon: UtensilsCrossed },
    { label: 'Souslar', range: [52, 56], icon: Droplets },
    { label: 'Desertlər', range: [56, 61], icon: IceCreamCone },
    { label: 'İçkilər', range: [61, 69], icon: GlassWater },
]

const meatKeywords = ['toyuq', 'dana', 'mal əti', 'vetçina', 'salyami', 'pepperoni kol', 'kolbasa', 'basdırma', 'naggets', 'ton balığı', 'sosiska']

const pizzaFilters = [
    { label: 'Vegetarian', icon: Leaf, excludeKeywords: meatKeywords, color: '#16a34a' },
    { label: 'Acılı', icon: Flame, keywords: ['halapenyo', 'pepperoni bibəri', 'acı bibər'], color: '#dc2626' },
    { label: 'Göbələkli', icon: '🍄', keywords: ['göbələk'], color: '#92400e' },
    { label: 'Toyuqlu', icon: Drumstick, keywords: ['toyuq'], color: '#ea580c' },
    { label: 'Ətli', icon: Beef, keywords: ['dana', 'mal əti', 'vetçina', 'salyami', 'pepperoni kol', 'kolbasa', 'basdırma'], color: '#b91c1c' },
]

function Menu({ cartItemCount, cartTotal, addToCart, onOpenCart, cart, updateQuantity }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const sectionRefs = useRef({})
    const categoryNavRef = useRef(null)
    const categoryBtnRefs = useRef({})
    const [activeNav, setActiveNav] = useState('Pizzalar')
    const [selectedPizza, setSelectedPizza] = useState(null)
    const [activeFilters, setActiveFilters] = useState([])
    const [sortAsc, setSortAsc] = useState(null)

    const popularRef = useRef(null)
    const popularDrag = useRef({ isDragging: false, startX: 0, scrollLeft: 0, hasMoved: false })

    const handlePopularMouseDown = (e) => {
        const el = popularRef.current
        if (!el) return
        popularDrag.current = { isDragging: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, hasMoved: false }
        el.style.cursor = 'grabbing'
        el.style.userSelect = 'none'
    }
    const handlePopularMouseMove = (e) => {
        if (!popularDrag.current.isDragging) return
        e.preventDefault()
        const el = popularRef.current
        const x = e.pageX - el.offsetLeft
        const walk = (x - popularDrag.current.startX) * 1.5
        if (Math.abs(walk) > 5) popularDrag.current.hasMoved = true
        el.scrollLeft = popularDrag.current.scrollLeft - walk
    }
    const handlePopularMouseUp = () => {
        if (!popularRef.current) return
        popularDrag.current.isDragging = false
        popularRef.current.style.cursor = 'grab'
        popularRef.current.style.userSelect = ''
    }
    const handlePopularTouchStart = (e) => {
        const el = popularRef.current
        if (!el) return
        popularDrag.current = { isDragging: true, startX: e.touches[0].pageX - el.offsetLeft, scrollLeft: el.scrollLeft, hasMoved: false }
    }
    const handlePopularTouchMove = (e) => {
        if (!popularDrag.current.isDragging) return
        const el = popularRef.current
        const x = e.touches[0].pageX - el.offsetLeft
        const walk = (x - popularDrag.current.startX) * 1.5
        if (Math.abs(walk) > 5) popularDrag.current.hasMoved = true
        el.scrollLeft = popularDrag.current.scrollLeft - walk
    }

    const handleCardClick = (item) => {
        setSelectedPizza(item)
    }

    const handleAddClick = (item, event) => {
        if (!item.sizes || item.sizes.length === 0) {
            const basePriceStr = item.price ? item.price.replace('m AZN', '').trim() : '0'
            const basePrice = parseFloat(basePriceStr) || 0
            addToCart({
                ...item,
                cartId: crypto.randomUUID(),
                selectedSize: null,
                finalPrice: basePrice
            }, event)
        } else {
            setSelectedPizza(item)
        }
    }

    useEffect(() => {
        axios.get('/pizzamizza.json')
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.error('JSON yuklenme xetasi:', err)
                setLoading(false)
            })
    }, [])

    const scrollToCategory = (label) => {
        setActiveNav(label)
        const el = sectionRefs.current[label]
        if (el) {
            const headerOffset = 120
            const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                for (const cat of categories) {
                    const el = sectionRefs.current[cat.label]
                    if (el) {
                        const rect = el.getBoundingClientRect()
                        if (rect.top <= 130 && rect.bottom > 130) {
                            setActiveNav(prev => {
                                if (prev !== cat.label) {
                                    const btn = categoryBtnRefs.current[cat.label]
                                    if (btn && categoryNavRef.current) {
                                        const nav = categoryNavRef.current
                                        const btnRect = btn.getBoundingClientRect()
                                        const navRect = nav.getBoundingClientRect()
                                        if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
                                            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                                        }
                                    }
                                }
                                return cat.label
                            })
                            break
                        }
                    }
                }
                ticking = false
            })
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (loading) {
        return (
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 text-center">
                <p className="text-gray-400 text-lg">Yüklənir...</p>
            </div>
        )
    }

    const popularItems = items.slice(0, 8)

    return (
        <>
            <nav className="sticky top-[60px] md:top-[64px] z-40 bg-white border-b border-gray-100" style={{ willChange: 'transform', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="flex items-center justify-between">
                        <div className="category-nav flex-1 py-2" ref={categoryNavRef}>
                            {categories.map(cat => {
                                const IconComp = cat.icon
                                return (
                                    <button
                                        key={cat.label}
                                        ref={(el) => { categoryBtnRefs.current[cat.label] = el }}
                                        onClick={() => scrollToCategory(cat.label)}
                                        className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] md:text-[14px] font-semibold whitespace-nowrap rounded-xl transition-colors cursor-pointer
                        ${activeNav === cat.label
                                                ? 'bg-red-50 text-[#e63926]'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <IconComp size={16} />
                                        {cat.label}
                                    </button>
                                )
                            })}
                        </div>

                        <button
                            id="desktop-cart-btn"
                            onClick={onOpenCart}
                            className="hidden md:flex ml-4 px-6 py-2.5 bg-[#e63926] text-white text-[14px] font-bold rounded-2xl hover:bg-[#c9311f] transition-colors cursor-pointer whitespace-nowrap"
                        >
                            {cartItemCount > 0 ? (
                                <span className="flex gap-1.5 items-center">
                                    🛒 <AnimatedPrice value={cartTotal} />
                                </span>
                            ) : '🛒 Səbət'}
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                {/* En populyar */}
                {activeNav === 'Pizzalar' && (
                    <section className="pt-5 pb-2">
                        <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {pizzaFilters.map(f => {
                                const isActive = activeFilters.includes(f.label)
                                const isEmoji = typeof f.icon === 'string'
                                const FilterIcon = isEmoji ? null : f.icon
                                return (
                                    <button
                                        key={f.label}
                                        onClick={() => {
                                            setActiveFilters(prev =>
                                                prev.includes(f.label)
                                                    ? prev.filter(x => x !== f.label)
                                                    : [...prev, f.label]
                                            )
                                        }}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer border
                                            ${isActive
                                                ? 'bg-[#e63926] text-white border-[#e63926] shadow-md'
                                                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm'
                                            }`}
                                    >
                                        {isEmoji
                                            ? <span className="text-[15px]">{f.icon}</span>
                                            : <FilterIcon size={15} style={{ color: isActive ? '#fff' : f.color }} />
                                        }
                                        {f.label}
                                    </button>
                                )
                            })}

                            {/* Sıralama button */}
                            <button
                                onClick={() => setSortAsc(prev => prev === null ? true : prev === true ? false : null)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer border ml-auto
                                    ${sortAsc !== null
                                        ? 'bg-[#e63926] text-white border-[#e63926] shadow-md'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm'
                                    }`}
                            >
                                <ArrowUpDown size={15} />
                                {sortAsc === null ? 'Sıralanma' : sortAsc ? 'Ucuzdan bahaya' : 'Bahadan ucuza'}
                            </button>
                        </div>
                    </section>
                )}

                <section className="py-6">
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">Ən populyarlar</h2>
                    <div
                        className="popular-track"
                        ref={popularRef}
                        style={{ display: 'flex', overflowX: 'auto', gap: '12px', cursor: 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseDown={handlePopularMouseDown}
                        onMouseMove={handlePopularMouseMove}
                        onMouseUp={handlePopularMouseUp}
                        onMouseLeave={handlePopularMouseUp}
                        onTouchStart={handlePopularTouchStart}
                        onTouchMove={handlePopularTouchMove}
                        onTouchEnd={handlePopularMouseUp}
                    >
                        {popularItems.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    if (!popularDrag.current.hasMoved) handleCardClick(item)
                                }}
                                className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 min-w-[200px] cursor-pointer hover:shadow-md transition-shadow select-none"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-13 h-13 object-contain rounded-lg pointer-events-none mix-blend-multiply"
                                    loading="lazy"
                                    draggable={false}
                                />
                                <div>
                                    <p className="text-[13px] font-semibold text-gray-900 leading-tight">{item.name}</p>
                                    <p className="text-[12px] text-gray-400 mt-0.5">₼ {item.price.replace('m AZN', '')}-dan</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Kateqoriyalar */}
                {categories.map(cat => {
                    const [start, end] = cat.range
                    let catItems = items.slice(start, end)
                    if (catItems.length === 0) return null

                    if (cat.label === 'Pizzalar' && activeFilters.length > 0) {
                        catItems = catItems.filter(pizza => {
                            const desc = (pizza.description || '').toLowerCase()
                            return activeFilters.every(filterLabel => {
                                const filterDef = pizzaFilters.find(f => f.label === filterLabel)
                                if (!filterDef) return true
                                if (filterDef.excludeKeywords) {
                                    return !filterDef.excludeKeywords.some(kw => desc.includes(kw.toLowerCase()))
                                }
                                return filterDef.keywords.some(kw => desc.includes(kw.toLowerCase()))
                            })
                        })
                    }

                    if (cat.label === 'Pizzalar' && sortAsc !== null) {
                        catItems = [...catItems].sort((a, b) => {
                            const pa = parseFloat((a.price || '0').replace('m AZN', '').trim()) || 0
                            const pb = parseFloat((b.price || '0').replace('m AZN', '').trim()) || 0
                            return sortAsc ? pa - pb : pb - pa
                        })
                    }

                    const CatIcon = cat.icon

                    return (
                        <section
                            key={cat.label}
                            ref={(el) => { sectionRefs.current[cat.label] = el }}
                            className="pb-8"
                        >
                            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5 pt-4 flex items-center gap-2">
                                <CatIcon size={24} className="text-[#e63926]" />
                                {cat.label}
                            </h2>
                            {catItems.length === 0 ? (
                                <div className="text-center py-12 text-gray-400">
                                    <p className="text-lg">Bu filterə uyğun pizza tapılmadı</p>
                                    <button
                                        onClick={() => setActiveFilters([])}
                                        className="mt-3 text-[#e63926] font-semibold hover:underline cursor-pointer"
                                    >
                                        Filterləri sıfırla
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-4 md:gap-6 bg-white sm:bg-transparent rounded-2xl sm:rounded-none px-0 sm:px-0 divide-y sm:divide-y-0 divide-gray-100 overflow-hidden">
                                    {catItems.map((pizza, idx) => {
                                        const cartItem = cart.find(c => c.name === pizza.name)
                                        const qty = cartItem ? (cartItem.quantity || 1) : 0
                                        return (
                                            <PizzaCard
                                                key={idx}
                                                pizza={pizza}
                                                quantity={qty}
                                                onCardClick={() => handleCardClick(pizza)}
                                                onAddClick={(e) => handleAddClick(pizza, e)}
                                                onIncrement={(e) => handleAddClick(pizza, e)}
                                                onDecrement={() => {
                                                    if (cartItem) updateQuantity(cartItem.name, cartItem.selectedSize, -1)
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            )}
                        </section>
                    )
                })}
            </div>

            {selectedPizza && (
                <PizzaModal
                    pizza={selectedPizza}
                    onClose={() => setSelectedPizza(null)}
                    onAdd={addToCart}
                />
            )}
        </>
    )
}

export default Menu
