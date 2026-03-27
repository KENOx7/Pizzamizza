import { useState } from 'react'
import Slider from './Slider'
import Menu from './Menu'
import CartModal from './CartModal'
import AnimatedPrice from './AnimatedPrice'
import Footer from './Footer'
import Header from './Header'

function App() {
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [flyingItems, setFlyingItems] = useState([])

    const addToCart = (item, event) => {
        setCart((prevCart) => {
            // Eyni adli ve eyni olculu mehsul varmi yoxlayiriq
            const existingIndex = prevCart.findIndex(
                c => c.name === item.name && c.selectedSize === (item.selectedSize || null)
            )
            if (existingIndex !== -1) {
                const updated = [...prevCart]
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: (updated[existingIndex].quantity || 1) + 1
                }
                return updated
            }
            const newItem = item.cartId ? item : { ...item, cartId: crypto.randomUUID() }
            return [...prevCart, { ...newItem, quantity: 1 }]
        })

        if (event && item.image) {
            // Animasiya 
            const startX = event.clientX || window.innerWidth / 2;
            const startY = event.clientY || window.innerHeight / 2;

            let targetX = startX;
            let targetY = 0;

            const desktopBtn = document.getElementById('desktop-cart-btn');
            const mobileBtn = document.getElementById('mobile-cart-btn');

            let targetBtn = desktopBtn;
            if (window.innerWidth < 768 || !targetBtn || (targetBtn && getComputedStyle(targetBtn).display === 'none')) {
                targetBtn = mobileBtn;
            }

            if (targetBtn) {
                const rect = targetBtn.getBoundingClientRect();
                targetX = rect.left + rect.width / 2;
                targetY = rect.top + rect.height / 2;
            } else {
                targetX = window.innerWidth > 768 ? window.innerWidth - 100 : window.innerWidth - 30;
                targetY = window.innerWidth > 768 ? 40 : 20;
            }

            const id = Date.now() + Math.random();
            setFlyingItems(prev => [...prev, { id, image: item.image, startX, startY, targetX, targetY, active: false }]);

            setTimeout(() => {
                setFlyingItems(prev => prev.map(f => f.id === id ? { ...f, active: true } : f));
            }, 50);

            setTimeout(() => {
                setFlyingItems(prev => prev.filter(f => f.id !== id));
            }, 1200);
        }
    }

    const removeFromCart = (idOrIndex) => {
        setCart(prevCart => {
            if (typeof idOrIndex === 'string') {
                return prevCart.filter(item => item.cartId !== idOrIndex)
            }
            return prevCart.filter((_, idx) => idx !== idOrIndex)
        })
    }

    const updateQuantity = (name, selectedSize, delta) => {
        setCart(prevCart => {
            const idx = prevCart.findIndex(
                c => c.name === name && c.selectedSize === (selectedSize || null)
            )
            if (idx === -1) return prevCart
            const updated = [...prevCart]
            const newQty = (updated[idx].quantity || 1) + delta
            if (newQty <= 0) {
                updated.splice(idx, 1)
            } else {
                updated[idx] = { ...updated[idx], quantity: newQty }
            }
            return updated
        })
    }

    const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0)
    const cartTotal = cart.reduce((total, item) => {
        const qty = item.quantity || 1
        if (item.finalPrice !== undefined) {
            return total + item.finalPrice * qty
        }
        const priceStr = item.price ? item.price.replace('m AZN', '').trim() : '0'
        return total + parseFloat(priceStr || 0) * qty
    }, 0)

    return (
        <div className="min-h-screen bg-[#f9f9f9]">
            <Header cartItemCount={cartItemCount} cartTotal={cartTotal} onOpenCart={() => setIsCartOpen(true)} />

            <Slider />

            <Menu
                cartItemCount={cartItemCount}
                cartTotal={cartTotal}
                addToCart={addToCart}
                onOpenCart={() => setIsCartOpen(true)}
                cart={cart}
                updateQuantity={updateQuantity}
            />

            <Footer />

            {isCartOpen && (
                <CartModal
                    cart={cart}
                    onClose={() => setIsCartOpen(false)}
                    removeFromCart={removeFromCart}
                    cartTotal={cartTotal}
                    updateQuantity={updateQuantity}
                />
            )}

            {flyingItems.map(item => (
                <img
                    key={item.id}
                    src={item.image}
                    className="fixed z-[9999] w-14 h-14 object-contain rounded-full shadow-2xl pointer-events-none"
                    style={{
                        left: item.startX - 28,
                        top: item.startY - 28,
                        transition: 'transform 1.2s cubic-bezier(0.5, 0.05, 0.2, 1), opacity 1.2s ease-in',
                        transform: item.active
                            ? `translate(${item.targetX - item.startX}px, ${item.targetY - item.startY}px) scale(0.15)`
                            : 'translate(0, 0) scale(1)',
                        opacity: item.active ? 0 : 1
                    }}
                    alt=""
                />
            ))}
        </div>
    )
}

export default App
