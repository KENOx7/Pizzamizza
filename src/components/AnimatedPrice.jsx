import { useState, useEffect } from 'react';

function AnimatedPrice({ value }) {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        let startTime = null;
        const duration = 400;
        const startValue = displayValue;
        const endValue = value;

        if (startValue === endValue) return;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easeOutProgress = 1 - Math.pow(1 - progress, 4);

            setDisplayValue(startValue + (endValue - startValue) * easeOutProgress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(endValue);
            }
        };

        const reqId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(reqId);
    }, [value]);

    return <span>{displayValue.toFixed(2)} AZN</span>;
}

export default AnimatedPrice;
