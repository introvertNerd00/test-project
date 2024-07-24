'use client'
import { NextApiRequest, NextApiResponse } from 'next';

export function POST (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Handle login logic here
        const { username, password } = req.body;

        // Example login validation
        if (username === 'admin' && password === 'password') {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

