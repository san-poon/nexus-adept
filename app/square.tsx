'use client';

import { useState } from 'react';

export default function Square({ value, onSquareClick }) {
    return (
        <button className="bg-white border border-gray-300 text-2xl font-bold leading-9 h-9 w-9 -mr-1 -mt-1 p-0 text-center text-slate-950"
            onClick={onSquareClick}>
            {value}
        </button>
    );
} 