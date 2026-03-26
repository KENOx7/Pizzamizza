import { useEffect } from 'react'
import AnimatedPrice from './AnimatedPrice'

function CartModal({ cart, onClose, removeFromCart, cartTotal, updateQuantity }) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose()
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-end"
            onClick={handleOverlayClick}
        >
            <div className="bg-white w-full max-w-[400px] h-full shadow-2xl flex flex-col animate-[slideIn_0.3s_ease-out]">

                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <h2 className="text-xl font-extrabold text-gray-900">Sənin Səbətin 🛒</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        ✕ Bağla
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center">
                            <span className="text-5xl mb-4">🍕</span>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Səbətiniz boşdur</h3>
                            <p className="text-[14px]">Çox dadlı pizzalarımız var, onlardan birini seçin!</p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-6 py-3 bg-[#e63926] text-white font-bold rounded-2xl hover:bg-[#c9311f] transition-colors"
                            >
                                Menyuba qayıt
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {cart.map((item, index) => {
                                const price = item.finalPrice !== undefined
                                    ? item.finalPrice
                                    : parseFloat(item.price ? item.price.replace('m AZN', '') : 0)
                                const qty = item.quantity || 1

                                return (
                                    <div key={item.cartId || index} className="flex gap-4 p-4 bg-gray-50 rounded-2xl relative group">
                                        <img src={item.image} alt={item.name} className="w-[60px] h-[60px] object-contain" />
                                        <div className="flex-1">
                                            <h4 className="text-[14px] font-bold text-gray-900 leading-tight pr-6">
                                                {item.name}
                                            </h4>
                                            {item.selectedSize && (
                                                <p className="text-[12px] text-gray-500 mt-1">{item.selectedSize}</p>
                                            )}
                                            <p className="text-[14px] font-bold text-gray-900 mt-1">
                                                {(price * qty).toFixed(2)} AZN
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.name, item.selectedSize, -1)}
                                                    className="w-7 h-7 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center text-sm font-bold hover:border-[#e63926] hover:text-[#e63926] transition-all cursor-pointer"
                                                >
                                                    −
                                                </button>
                                                <span className="text-[13px] font-bold text-gray-900 min-w-[16px] text-center">{qty}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.name, item.selectedSize, 1)}
                                                    className="w-7 h-7 rounded-full bg-[#e63926] text-white flex items-center justify-center text-sm font-bold hover:bg-[#c9311f] transition-all cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.cartId || index)}
                                            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                                            title="Sil"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-5 border-t border-gray-100 bg-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[15px] font-medium text-gray-500">Ümumi məbləğ:</span>
                            <span className="text-xl font-extrabold text-gray-900"><AnimatedPrice value={cartTotal} /></span>
                        </div>
                        <button className="w-full py-4 bg-[#e63926] text-white font-bold text-[16px] rounded-2xl hover:bg-[#c9311f] transition-colors shadow-lg shadow-red-500/30">
                            Sifarişi rəsmiləşdir
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartModal
