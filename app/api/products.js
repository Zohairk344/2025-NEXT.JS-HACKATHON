// pages/api/products.js

/* eslint-disable @typescript-eslint/no-unused-vars */

export default async function handler(res) {
    try {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }