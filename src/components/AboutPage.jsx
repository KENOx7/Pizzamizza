import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function AboutPage() {
    return (
        <div className="min-h-screen bg-[#f9f9f9]">
            <Header />

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-[#e63926] to-[#ff6b5b] text-white py-16 md:py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Haqqımızda</h1>
                    <p className="text-[16px] md:text-[18px] opacity-90 max-w-[600px] mx-auto">
                        2005-ci ildən bəri Azərbaycanın ən sevimli pizza brendidir
                    </p>
                </div>
            </div>

            {/* Content */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-5 text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                            <p>
                                Pizza Mizza'nın yaranma hekayəsi yalnız bir vizyonun təzahürü deyil, həm də orijinallıq və yüksək keyfiyyət standartlarına sadiq bir mədəniyyəti yaratmaq arzusudur. Bu markanın kökündə, Azərbaycanda pizzaya olan baxışları dəyişdirərək hər kəs üçün yenilikçi və keyfiyyətli məhsullara əlçatanlığı artırmaq istəyi yatır. Bu, sadəcə bir iş təşəbbüsü deyil, həm də məhsul və xidmətlərimizlə həqiqi bir fərq yaratmaq istəyidir.
                            </p>
                            <p>
                                Menyumuz, orijinallığı və zərifliyi ilə seçilir. Xüsusi reseptə əsaslanan nazik orqanik xəmirimiz, kraft tomat sousumuz və seçilmiş Gouda pendiri ilə hazırlanmış pizzalarımız, hər bir lokmada etik və məsuliyyətli iş anlayışımızı və halal standartlara olan sadiqliyimizi vurğulayır.
                            </p>
                            <p>
                                Restoranlarımızın məkanlarının seçimi, şəhərimizin və ölkəmizin müxtəlif bölgələrin xüsusi ehtiyaclarını dərindən öyrənərək həyata keçirilir. Bizim məqsədimiz, hər bir şəhər və ölkə sakinlərinə yüksək keyfiyyətli və halal məhsullarımızı təqdim etməklə, onların həyatına dəyər qatmaqdır.
                            </p>
                        </div>
                        <div className="space-y-5 text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                            <p>
                                2018-ci ildə həyata keçirdiyimiz rebrending, müasir trendlərə və müştərilərimizin tələblərinə uyğunlaşdığımızı nümayiş etdirir. Yenilənmiş loqotipimiz və interyer dizaynımız artıq markamızın müasir vizyonunu daha qabarıq şəkildə vurğulayır və yeniliklərə adaptasiya olmaq, həmçinin müştəri təcrübəsini yaxşılaşdırmaq arzumuzu ifadə edir.
                            </p>
                            <p>
                                Pizza Mizza olaraq, biz sadəcə məhsul təklif edən bir marka olmaq istəmirik; biz, davamlılıq və məsuliyyətin hər bir qərarımıza təsir etdiyi bir mühit yaratmaq niyyətindəyik. Keyfiyyətə olan sədaqətimiz və yalnız ən yaxşısını təklif etmək arzumuz, təqdim etdiyimiz hər bir məhsulda öz əksini tapır.
                            </p>
                            <p>
                                Biz hər bir qonağın bizdəki səfərini unudulmaz bir ləzzət səyahətinə çevirmək arzusundayıq — bu, hər bir ziyarətdə paylaşılan emosiyalar, keyfiyyət və sadiqliyin hekayəsidir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f9f9f9] py-12">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">Sifariş vermək istəyirsiniz?</h3>
                    <p className="text-[14px] text-gray-500 mb-6">Ən dadlı pizzalarımızı kəşf edin</p>
                    <Link to="/" className="inline-block px-8 py-3 bg-[#e63926] text-white font-bold rounded-2xl hover:bg-[#c9311f] transition-colors shadow-lg shadow-red-500/30">
                        Menyuya keç
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage
