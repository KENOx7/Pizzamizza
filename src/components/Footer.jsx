import { Link } from 'react-router-dom'
import {
    Pizza, Package, IceCreamCone, GlassWater,
    Info, MapPin, Mail, Phone, ChevronRight
} from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-400" id="contact">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                    <div>
                        <Link to="/"><img src="/assets/logo.png" alt="Pizza Mizza" className="h-7 mb-4 brightness-0 invert" /></Link>
                        <p className="text-[13px] leading-relaxed text-gray-500">
                            2005-ci ildən bəri Azərbaycanın ən sevimli pizza brendidir.
                            Keyfiyyətli inqrediyentlər, sürətli çatdırılma.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <a href="https://www.facebook.com/pizzamizza.az/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e63926] transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/pizza_mizza/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e63926] transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[13px] font-bold text-white mb-3 uppercase tracking-wider">Menyu</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <Pizza size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                Pizzalar
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <Link to="/" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <Package size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                Kombolar
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <Link to="/" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <IceCreamCone size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                Desertlər
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <Link to="/" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <GlassWater size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                İçkilər
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[13px] font-bold text-white mb-3 uppercase tracking-wider">Şirkət</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/about" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <Info size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                Haqqımızda
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <Link to="/restaurants" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <MapPin size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                Restoranlar
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <a href="#contact" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <Mail size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                Əlaqə
                                <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[13px] font-bold text-white mb-3 uppercase tracking-wider">Əlaqə</h4>
                        <div className="flex flex-col gap-2.5">
                            <a href="tel:*1415" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <Phone size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                *1415
                            </a>
                            <span className="flex items-center gap-2 text-[13px] text-gray-500">
                                <MapPin size={14} className="text-gray-600" />
                                Bakı, Azərbaycan
                            </span>
                            <a href="mailto:feedback@pizzamizza.az" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#e63926] transition-colors group">
                                <Mail size={14} className="text-gray-600 group-hover:text-[#e63926] transition-colors" />
                                feedback@pizzamizza.az
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 mt-8 border-t border-white/10 text-[12px] text-gray-600">
                    © {new Date().getFullYear()} Pizza Mizza. Bütün hüquqlar qorunur.
                </div>
            </div>
        </footer>
    )
}

export default Footer

