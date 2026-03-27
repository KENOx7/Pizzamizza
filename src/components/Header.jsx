import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Info, MapPin, Mail, ShoppingCart } from 'lucide-react'

function Header({ cartItemCount, cartTotal, onOpenCart }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div className="hidden md:block bg-white border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-10 text-[14px] text-gray-500">
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#e63926] transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.09 13.36 4 12.69 4 12C4 11.31 4.09 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.65 5.08 16ZM8.03 8H5.08C6.04 6.35 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.66 9.66 10H14.34C14.44 10.66 14.5 11.32 14.5 12C14.5 12.68 14.44 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.91 10.64 20 11.31 20 12C20 12.69 19.91 13.36 19.74 14H16.36Z" fill="#e63926" />
                        </svg>
                        <span className="font-medium">Dil</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/about" className="flex items-center gap-1.5 hover:text-[#e63926] transition-colors font-medium">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#e63926" />
                            </svg>
                            Haqqımızda
                        </Link>
                        <Link to="/restaurants" className="flex items-center gap-1.5 hover:text-[#e63926] transition-colors font-medium">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#e63926" />
                            </svg>
                            Restoranlar
                        </Link>
                        <a href="#contact" className="flex items-center gap-1.5 hover:text-[#e63926] transition-colors font-medium">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#e63926" />
                            </svg>
                            Əlaqə
                        </a>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex items-center justify-between h-[60px] md:h-[64px]">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/assets/logo.png"
                            alt="Pizza Mizza"
                            className="h-7 md:h-9"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-[13px] font-semibold text-gray-900">Pizza çatdırılması Bakı</span>
                            <span className="text-[12px] text-gray-400">30 dəq · 4.8 ⭐</span>
                        </div>
                        <div className="flex flex-col">
                            <a href="tel:*1415" className="text-[13px] font-semibold text-gray-900">*1415</a>
                            <span className="text-[12px] text-gray-400">Telefon vasitəsilə zəng et</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="hidden lg:flex items-center mr-2">
                            <img style={{ height: '18px', position: 'relative', top: '-4px', right: '13px' }} src="https://pizzamizza.az/bitrix/templates/bd_deliverypizza/images/1415.png" alt="1415" />
                            <img style={{ height: '27px', position: 'relative', top: '1px', right: '0px' }} src="https://pizzamizza.az/bitrix/templates/bd_deliverypizza/images/24-7-az.png" alt="24/7" />
                        </div>
                        <button className="hidden md:flex items-center gap-1.5 text-[13px] text-gray-600 hover:text-[#e63926] transition-colors cursor-pointer">
                            <span className="text-lg">👤</span>
                            <span className="font-medium">Daxil ol</span>
                        </button>

                        {/* Mobile hamburger menu  */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#e63926] transition-colors cursor-pointer"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-[slideDown_0.2s_ease-out]">
                        <div className="px-4 py-3 flex flex-col gap-1">
                            <Link
                                to="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-red-50 hover:text-[#e63926] transition-colors"
                            >
                                <Info size={18} className="text-[#e63926]" />
                                Haqqımızda
                            </Link>
                            <Link
                                to="/restaurants"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-red-50 hover:text-[#e63926] transition-colors"
                            >
                                <MapPin size={18} className="text-[#e63926]" />
                                Restoranlar
                            </Link>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-red-50 hover:text-[#e63926] transition-colors"
                            >
                                <Mail size={18} className="text-[#e63926]" />
                                Əlaqə
                            </a>
                            <a
                                href="tel:*1415"
                                className="flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-red-50 hover:text-[#e63926] transition-colors"
                            >
                                <span className="text-[16px]">📞</span>
                                *1415 — Zəng et
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {onOpenCart && (
                <button
                    id="mobile-cart-btn"
                    onClick={onOpenCart}
                    className="md:hidden fixed bottom-6 right-5 z-50 w-14 h-14 bg-[#e63926] text-white rounded-full flex items-center justify-center shadow-xl shadow-red-500/30 cursor-pointer active:scale-95 transition-transform"
                >
                    <ShoppingCart size={22} />
                    {cartItemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-white text-[#e63926] text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md font-bold border border-red-100">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            )}
        </>
    )
}

export default Header

