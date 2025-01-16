// src/pages/NotFound/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 px-4">
            <div className="text-center">
                <h1 className="text-cyan-500 text-9xl font-bold mb-4">404</h1>
                <p className="text-cyan-500 text-xl mb-8">Page not found</p>
                <Link
                    to="/"
                    className="bg-[#B6B600] text-black px-6 py-3 font-mono font-bold hover:bg-cyan-500 hover:text-black transition-colors inline-block rounded-[8px]"
                >
                    RETURN HOME
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;