
import React from 'react';
import type { BlogPost, User } from '../types';
import { LockIcon } from './Icons';

interface BlogListProps {
  blogPosts: BlogPost[];
  user: User | null;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ blogPosts, user, onSelectPost }) => {
  return (
    <div className="space-y-4">
      {blogPosts.map((post) => {
        const isLocked = post.tag === 'Exclusive' && !user?.isVerified;
        return (
          <div
            key={post.id}
            onClick={() => !isLocked && onSelectPost(post)}
            className={`
              bg-slate-800 p-6 rounded-lg shadow-md transition-all duration-300
              ${isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-700 hover:shadow-xl transform hover:-translate-y-1'}
            `}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                <p className="text-sm text-slate mt-1">{post.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                {post.tag === 'Exclusive' && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 ${isLocked ? 'bg-red-900 text-red-300' : 'bg-green-900 text-earthy-green'}`}>
                    {isLocked && <LockIcon className="w-3 h-3" />}
                    <span>Exclusive</span>
                  </span>
                )}
                {post.tag === 'Free' && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-900 text-blue-300">
                    Free
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
