'use client'
import React, { useState } from 'react';

interface LoginResponse {
    success: boolean;
    message: string;
}

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        setLoading(true);

        try {
            // Make API call to login endpoint
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data: LoginResponse = await response.json();

            if (data.success) {
                // Login successful, redirect to dashboard or home page
                // Replace the following line with your desired redirection logic
                window.location.href = '/';
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-72 p-4 border border-gray-300 rounded">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
                />
                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </div>
        </div>
    );
};

export default LoginPage;