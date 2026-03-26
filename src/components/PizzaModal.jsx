import { useState, useEffect } from 'react'
import AnimatedPrice from './AnimatedPrice'

function PizzaModal({ pizza, onClose, onAdd }) {
    if (!pizza) return null

    const basePriceStr = pizza.price ? pizza.price.replace('m AZN', '').trim() : '0'
    const basePrice = parseFloat(basePriceStr) || 0

    const hasSizes = pizza.sizes && pizza.sizes.length > 0
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

    const isTelebeKombo = pizza.name === 'Tələbə kombo'
    const [telebePizzaIndex, setTelebePizzaIndex] = useState(0)
    const [telebeDrinkIndex, setTelebeDrinkIndex] = useState(0)

    const telebePizzas = ["Pendirli", "Toyuqlu", "Salyami"]
    const telebeDrinks = ["Coca-Cola", "Fanta", "Sprite", "Sirab"]

    const isPizzaSize = hasSizes && pizza.sizes.some(s => s.size.toLowerCase().includes('sm'))

    let currentPrice = basePrice;
    if (isPizzaSize) {
        currentPrice = basePrice + (selectedSizeIndex * 4);
    } else if (hasSizes) {
        const selSizeStr = pizza.sizes[selectedSizeIndex] ? pizza.sizes[selectedSizeIndex].size : '';

        if (pizza.name === 'Panini (Sadə)' && selSizeStr.includes('9 ədəd')) {
            currentPrice = 1.50;
        } else if (pizza.name === 'Çiken Strips') {
            if (selSizeStr.includes('6 ədəd')) currentPrice = 8.90;
            else if (selSizeStr.includes('9 ədəd')) currentPrice = 11.90;
        } else if (pizza.name === 'Naggets') {
            if (selSizeStr.includes('9 ədəd')) currentPrice = 7.90;
        } else if (pizza.name === 'Panini') {
            if (selSizeStr.includes('Salyami (9 ədəd)')) currentPrice = 9.90;
            else if (selSizeStr.includes('Vetçina (9 ədəd)')) currentPrice = 9.90;
            else if (selSizeStr.includes('Ton (6 ədəd)')) currentPrice = 9.90;
            else if (selSizeStr.includes('Ton (9 ədəd)')) currentPrice = 12.90;
            else if (selSizeStr.includes('Qarışıq (6 ədəd)')) currentPrice = 8.90;
            else if (selSizeStr.includes('Qarışıq (9 ədəd)')) currentPrice = 11.90;
            else if (selSizeStr.includes('Pendir (6 ədəd)')) currentPrice = 5.90;
            else if (selSizeStr.includes('Pendir (9 ədəd)')) currentPrice = 7.90;
        }
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose()
    }

    const handleAddToCart = (e) => {
        let finalSize = null;
        if (isTelebeKombo) {
            finalSize = `${telebePizzas[telebePizzaIndex]}, ${telebeDrinks[telebeDrinkIndex]}`
        } else if (hasSizes) {
            finalSize = pizza.sizes[selectedSizeIndex].size
        }

        const itemToAdd = {
            ...pizza,
            cartId: crypto.randomUUID(),
            selectedSize: finalSize,
            finalPrice: currentPrice
        }
        onAdd(itemToAdd, e)
        onClose()
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-3xl w-full max-w-[850px] max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative animate-[scale_0.2s_ease-out]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full flex items-center justify-center transition-colors z-10"
                >
                    ✕
                </button>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-[#fcfcfc] rounded-l-3xl">
                    <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-[200px] md:w-[350px] object-contain transition-transform mix-blend-multiply"
                    />
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{pizza.name}</h2>

                    {hasSizes && !isTelebeKombo && (
                        <p className="text-[13px] text-gray-500 mb-4">
                            {pizza.sizes[selectedSizeIndex].size}{isPizzaSize ? ', ənənəvi xəmir' : ''}
                        </p>
                    )}

                    {isTelebeKombo && (
                        <p className="text-[13px] text-gray-500 mb-4">
                            Pizza 20 sm, içki 0.3L
                        </p>
                    )}

                    {pizza.description && (
                        <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                            {pizza.description}
                        </p>
                    )}

                    {isTelebeKombo ? (
                        <div className="mb-8 flex flex-col gap-4">
                            <div>
                                <h3 className="text-[14px] font-bold text-gray-900 mb-2">Pizza seçimi</h3>
                                <div className="bg-gray-100 p-1 rounded-[20px] flex flex-wrap gap-1">
                                    {telebePizzas.map((p, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setTelebePizzaIndex(idx)}
                                            className={`flex-1 py-1.5 px-3 text-[13px] font-semibold rounded-[16px] transition-all ${telebePizzaIndex === idx
                                                ? 'bg-white shadow text-gray-900'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[14px] font-bold text-gray-900 mb-2">İçki seçimi</h3>
                                <div className="bg-gray-100 p-1 rounded-[20px] flex flex-wrap gap-1">
                                    {telebeDrinks.map((d, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setTelebeDrinkIndex(idx)}
                                            className={`flex-1 py-1.5 px-3 whitespace-nowrap text-[13px] font-semibold rounded-[16px] transition-all ${telebeDrinkIndex === idx
                                                ? 'bg-white shadow text-gray-900'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : hasSizes && (
                        <div>
                            {(() => {
                                let label = "Seçim";
                                if (pizza.name === 'Uşaq menyusu') label = "Seçin";
                                else if (isPizzaSize) label = "Ölçü";
                                else if (pizza.sizes.some(s => s.size.includes('Cola') || s.size.includes('Sprite') || s.size.includes('Fanta'))) label = "İçki seçimi";
                                else if (pizza.name.toLowerCase().includes('kombo') && pizza.sizes.length > 4) label = "Pizza seçimi";
                                else if (pizza.name === 'Panini') label = "Düzüm və miqdar";
                                else label = "Seçim";

                                return <h3 className="text-[14px] font-bold text-gray-900 mb-2">{label}</h3>;
                            })()}

                            <div className={`bg-gray-100 p-1 rounded-[20px] mb-8 ${pizza.name === 'Uşaq menyusu' ? 'flex flex-col gap-1' :
                                (isPizzaSize || pizza.sizes.length <= 3 ? 'flex flex-wrap' : 'grid grid-cols-2 md:grid-cols-3 gap-1')
                                }`}>
                                {pizza.sizes.map((sizeObj, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedSizeIndex(idx)}
                                        className={`py-2 px-2 text-[13px] font-semibold rounded-[16px] transition-all 
                                            ${pizza.name === 'Uşaq menyusu' ? 'text-left' : 'text-center'} 
                                            ${(isPizzaSize || pizza.sizes.length <= 3) && pizza.name !== 'Uşaq menyusu' ? 'flex-1 whitespace-nowrap' : 'h-full flex items-center justify-center'} 
                                            ${selectedSizeIndex === idx ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}
                                        `}
                                    >
                                        {(pizza.name === 'Uşaq menyusu' || !isPizzaSize) ? sizeObj.size : sizeObj.size.split(' ')[0]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-6">
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-4 bg-[#e63926] hover:bg-[#c9311f] text-white rounded-2xl text-[16px] font-bold transition-colors shadow-lg shadow-red-500/30 flex justify-center gap-1.5"
                        >
                            Səbətə əlavə et: <AnimatedPrice value={currentPrice} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaModal
