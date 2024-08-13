import React from 'react';
import Navbar from '../components/Navbar';
import HackerNewsList from '../components/HackerNewsList';

const Index = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <Navbar />
      <main className="pt-6">
        <HackerNewsList />
      </main>
    </div>
  );
};

export default Index;