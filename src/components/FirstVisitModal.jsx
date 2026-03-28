import { useState, useEffect } from 'react';

const FirstVisitModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedBefore');
        if (!hasVisited) {
            // setTimeout adds a tiny delay for better UX
            const timer = setTimeout(() => setIsOpen(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem('hasVisitedBefore', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-300">
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div className="flex flex-col items-center text-center mt-2">
                    <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Məlumat</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Bu veb-sayt yalnız <span className="font-semibold text-gray-800">test və öyrənmə məqsədilə</span> yaradılmışdır və orijinal Pizza Mizza saytının kopyasıdır (fake).
                    </p>
                    <div className="flex flex-col items-center gap-3 w-full mt-2">
                        <button 
                            onClick={handleClose}
                            className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors"
                        >
                            Anladım, davam et
                        </button>
                        <a 
                            href="https://pizzamizza.az" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={handleClose}
                            className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors mt-1 underline"
                        >
                            Əsl Sayta Keç
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstVisitModal;
