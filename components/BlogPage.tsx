
import React, { useState } from 'react';
import type { BlogPost, User } from '../types';
import { BlogList } from './BlogList';
import { BlogPostDetail } from './BlogPostDetail';

interface BlogPageProps {
  blogPosts: BlogPost[];
  user: User | null;
  openLoginModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ blogPosts, user, openLoginModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">VIP Knowledge Hub</h2>
        <p className="mt-2 text-slate max-w-2xl mx-auto">
          Free articles for everyone, and exclusive insights for my inner circle.
        </p>
        {!user && (
          <button 
            onClick={openLoginModal}
            className="mt-6 bg-earthy-green text-deep-blue font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105 duration-300 shadow-lg">
            Join the Inner Circle & Unlock All Content
          </button>
        )}
      </div>
      <BlogList blogPosts={blogPosts} user={user} onSelectPost={setSelectedPost} />
    </div>
  );
};
