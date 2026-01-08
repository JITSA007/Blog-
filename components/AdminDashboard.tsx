
import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { RichTextEditor } from './RichTextEditor';

interface AdminDashboardProps {
  onPublish: (post: Omit<BlogPost, 'id' | 'date'>) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onPublish }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<'Free' | 'Exclusive'>('Free');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content.replace(/<[^>]*>?/gm, '').trim()) {
      alert('Title and content are required.');
      return;
    }
    onPublish({ title, content, tag });
    setTitle('');
    setContent('');
    setTag('Free');
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Professor's Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-light-slate">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-light-slate mb-2">
            Content
          </label>
          <RichTextEditor value={content} onChange={setContent} />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate mb-2">Tag</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tag"
                value="Free"
                checked={tag === 'Free'}
                onChange={() => setTag('Free')}
                className="form-radio h-4 w-4 text-earthy-green bg-slate-700 border-slate-600 focus:ring-earthy-green"
              />
              <span className="text-light-slate">Free</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tag"
                value="Exclusive"
                checked={tag === 'Exclusive'}
                onChange={() => setTag('Exclusive')}
                className="form-radio h-4 w-4 text-earthy-green bg-slate-700 border-slate-600 focus:ring-earthy-green"
              />
              <span className="text-light-slate">Exclusive</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-earthy-green text-deep-blue font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105 duration-300 shadow-lg"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};
