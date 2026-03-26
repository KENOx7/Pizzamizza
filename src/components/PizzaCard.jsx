function PizzaCard({ pizza, quantity, onCardClick, onAddClick, onIncrement, onDecrement }) {
    const { name, description, price, image, sizes } = pizza
    const inCart = quantity > 0
    const basePriceStr = price ? price.replace('m AZN', '').trim() : '0'
    const hasSizes = sizes && sizes.length > 0
    const priceDisplay = basePriceStr.replace('.', ',')

    return (
        <div
            onClick={onCardClick}
            className="group bg-transparent py-5 pl-0 pr-4 sm:p-2 md:p-3 flex flex-row sm:flex-col items-center sm:items-stretch text-left cursor-pointer transition-all gap-3 sm:gap-0"
        >
            {/* Sekil */}
            <div className="flex-shrink-0 flex items-center justify-center sm:mb-3 sm:py-2 w-[150px] h-[150px] sm:w-full sm:h-auto pl-1 sm:pl-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center sm:justify-start h-full w-full">
                <h3 className="text-[16px] md:text-[17px] font-bold text-gray-900 mb-1 sm:mb-1.5 leading-snug flex items-center flex-wrap gap-1">
                    {name}
                    {name.includes('Marqarita') && <span className="text-green-500 text-sm">🍃</span>}
                </h3>

                {description && (
                    <p className="text-[12px] md:text-[13px] text-gray-500 leading-relaxed mb-2 sm:mb-4 w-full" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {description}
                    </p>
                )}

                {!description && <div className="mb-2" />}

                {/* Qiymet */}
                <div className="flex flex-wrap items-center justify-between sm:mt-auto sm:pt-2 w-full">
                    <span className="hidden sm:block text-[14px] md:text-[15px] font-bold text-gray-900">
                        ₼ {basePriceStr}{hasSizes ? '-dan' : ''}
                    </span>

                    {inCart ? (
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onDecrement) onDecrement();
                                }}
                                className="w-8 h-8 rounded-full bg-[#fbeaea] text-[#e63926] flex items-center justify-center text-lg font-bold hover:bg-[#ffe0e0] transition-colors cursor-pointer"
                            >
                                −
                            </button>
                            <span className="text-[14px] font-bold text-gray-900 min-w-[20px] text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onIncrement) onIncrement(e);
                                }}
                                className="w-8 h-8 rounded-full bg-[#fbeaea] text-[#e63926] flex items-center justify-center text-lg font-bold hover:bg-[#ffe0e0] transition-colors cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onAddClick) onAddClick(e);
                            }}
                            className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-bold bg-[#fbeaea] text-[#e63926] hover:bg-[#ffe0e0] transition-colors cursor-pointer"
                        >
                            <span className="block sm:hidden">₼ {priceDisplay}{hasSizes ? '-dan' : ''}</span>
                            <span className="hidden sm:block">Seçin</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PizzaCard

