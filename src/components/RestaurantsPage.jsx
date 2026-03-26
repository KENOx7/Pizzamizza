import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const branches = [
    { name: 'Nərimanov filialı', address: 'Heydər Əliyev pr. 5A-5B', lat: 40.4093, lng: 49.8671 },
    { name: 'Yasamal filialı (Bəsti Bağırova)', address: 'Bəsti Bağırova 2A, Statistika komitəsi ilə üzbəüz', lat: 40.3953, lng: 49.8528 },
    { name: 'Həzi Aslanov filialı', address: 'M. Hadi küç. 2945, Həzi Aslanov m. yaxınlığında', lat: 40.3715, lng: 49.9482 },
    { name: 'Elmlər Akademiyası filialı', address: 'Zahid Xəlilov küç 53, "Renessans palace" ilə üzbəüz', lat: 40.3855, lng: 49.8167 },
    { name: 'Zabrat filialı', address: 'Rahat supermarket, Zabrat yolu', lat: 40.4758, lng: 49.9550 },
    { name: 'Zefir Mall filialı', address: 'Yasamal rayonu, Zefir Mall', lat: 40.3887, lng: 49.8263 },
    { name: 'Murtuza Muxtarov filialı', address: 'Yasamal rayonu, Murtuza Muxtarov 190', lat: 40.3960, lng: 49.8450 },
    { name: 'Dəniz Mall filialı', address: 'Sabail rayonu, Mikayil Useynov 63', lat: 40.3607, lng: 49.8378 },
    { name: 'Binəqədi filialı', address: 'Əcəmi Naxçivani 6', lat: 40.4524, lng: 49.8283 },
    { name: 'Sumqayıt filialı', address: 'Sülh küç 20', lat: 40.5855, lng: 49.6317 },
    { name: 'Park Bulvar filialı', address: 'Park Bulvar', lat: 40.3625, lng: 49.8503 },
    { name: 'Bayıl filialı', address: '4 Əhəd Yaqubov küçəsi', lat: 40.3527, lng: 49.8443 },
    { name: 'Göyərçin filialı', address: 'Nəsimi Parkı', lat: 40.4000, lng: 49.8700 },
    { name: 'Asan 7 filialı', address: 'Aşıq Molla Cümə 46', lat: 40.4095, lng: 49.8505 },
]

function RestaurantsPage() {
    const center = '40.4093,49.8671'
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97204.5!2d49.85!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1`

    return (
        <div className="min-h-screen bg-[#f9f9f9]">
            <Header />

            <div className="bg-gradient-to-r from-[#e63926] to-[#ff6b5b] text-white py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Restoranlar</h1>
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="px-4 py-1.5 bg-white/20 text-white text-[13px] font-bold rounded-full backdrop-blur-sm">
                            🕐 24 saat pulsuz çatdırılma
                        </span>
                    </div>
                    <p className="text-[16px] md:text-[18px] opacity-90 mt-3">
                        Çatdırılma ərazisi — 14 filial
                    </p>
                </div>
            </div>

            {/* Map */}
            <section className="py-8 md:py-12">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">📍 Xəritədə filiallar</h2>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97204.5!2d49.8!3d40.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e2cb56c6!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Pizza Mizza filialları"
                        />
                    </div>
                </div>
            </section>

            <section className="pb-12 md:pb-16">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6">Bütün filiallar</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {branches.map((branch, i) => (
                            <a
                                key={i}
                                href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#e63926]/20 transition-all group"
                            >
                                <span className="text-[#e63926] text-xl mt-0.5 group-hover:scale-110 transition-transform">📍</span>
                                <div>
                                    <p className="text-[14px] font-bold text-gray-900 leading-tight">{branch.name}</p>
                                    <p className="text-[12px] text-gray-500 mt-1">{branch.address}</p>
                                    <span className="text-[11px] text-[#e63926] font-medium mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                                        Google Maps-də aç →
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">Sifariş vermək istəyirsiniz?</h3>
                    <p className="text-[14px] text-gray-500 mb-6">Sizə ən yaxın filialdan çatdırılma</p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link to="/" className="inline-block px-8 py-3 bg-[#e63926] text-white font-bold rounded-2xl hover:bg-[#c9311f] transition-colors shadow-lg shadow-red-500/30">
                            Menyuya keç
                        </Link>
                        <a href="tel:*1415" className="inline-block px-8 py-3 border-2 border-[#e63926] text-[#e63926] font-bold rounded-2xl hover:bg-[#e63926] hover:text-white transition-colors">
                            📞 *1415 — Zəng et
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default RestaurantsPage
