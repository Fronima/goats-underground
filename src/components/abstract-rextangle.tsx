import React from 'react';

interface AbstractRectangleProps {
    fillColor: string;
    className?: string;
}

export default function AbstractRectangle({fillColor, className}: AbstractRectangleProps) {
    const svgStyle: React.CSSProperties = {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
    };

    return (
        <svg width="100%" height="100%" viewBox="52 0 1158 1418" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={svgStyle} className={className}>
            <g transform="matrix(1,0,0,1,-589,-97)">
                <g transform="matrix(0.936269,0,0,1.05203,0,0)">
                    <g transform="matrix(1.06807,0,0,0.950542,-2073.25,-1888.08)">
                        <path d="M3566.3,2084.31L3686.59,3500.48L2531.56,3500.48L2531.56,2134.79L3566.3,2084.31Z" style={{stroke: 'rgb(179,88,186)', strokeWidth: '1.5px'}}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
