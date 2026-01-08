
import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <button onClick={onBack} className="text-earthy-green hover:underline mb-6">
        &larr; Back to all posts
      </button>
      <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
      <div className="flex items-center space-x-4 mb-6 text-slate">
        <span>{post.date}</span>
        <span>&bull;</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.tag === 'Exclusive' ? 'bg-green-900 text-earthy-green' : 'bg-blue-900 text-blue-300'}`}>
            {post.tag}
        </span>
      </div>
      <div 
        className="prose prose-invert prose-lg max-w-none text-light-slate"
        dangerouslySetInnerHTML={{ __html: post.content }}
      >
      </div>
    </div>
  );
};
