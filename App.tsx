
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginModal } from './components/LoginModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { ContactModal } from './components/ContactModal';
import { AdditionalInfoModal } from './components/AdditionalInfoModal';
import type { User, BlogPost, Page } from './types';
import { PageType } from './types';
import { INITIAL_BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(PageType.Home);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isAdditionalInfoModalOpen, setAdditionalInfoModalOpen] = useState(false);
  const [pendingGoogleUser, setPendingGoogleUser] = useState<Omit<User, 'isVerified'> | null>(null);
  const [isAdminLoginModalOpen, setAdminLoginModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState<string | null>(null);

  // Step 1: Simulate Google Login
  const handleGoogleLogin = () => {
    // In a real app, this would come from the Google OAuth response
    const mockGoogleUser = {
      name: 'Valued Student',
      email: 'student.scholar@example.com',
      pictureUrl: 'https://picsum.photos/seed/student/100/100',
    };
    setPendingGoogleUser(mockGoogleUser);
    setLoginModalOpen(false);
    setAdditionalInfoModalOpen(true);
  };

  // Step 2: User provides additional details
  const handleCompleteSignup = (details: { university: string, fieldOfStudy: string }) => {
    if (pendingGoogleUser) {
      setUser({
        ...pendingGoogleUser,
        ...details,
        isVerified: true,
      });
    }
    setAdditionalInfoModalOpen(false);
    setPendingGoogleUser(null);
  };

  const handleAdminLogin = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setAdminLoginModalOpen(false);
      setCurrentPage(PageType.Admin);
      setAdminLoginError(null);
    } else {
      setAdminLoginError('Incorrect password. Please try again.');
    }
  };
  
  const handlePublishPost = (post: Omit<BlogPost, 'id' | 'date'>) => {
    const newPost: BlogPost = {
      ...post,
      id: blogPosts.length + 1,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
    setBlogPosts(prevPosts => [newPost, ...prevPosts]);
    setCurrentPage(PageType.Blog);
  };

  const openAdminModal = () => {
    setAdminLoginError(null);
    setAdminLoginModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageType.Blog:
        return <BlogPage blogPosts={blogPosts} user={user} openLoginModal={() => setLoginModalOpen(true)} />;
      case PageType.Admin:
        return isAdmin ? <AdminDashboard onPublish={handlePublishPost} /> : <HomePage openContactModal={() => setContactModalOpen(true)} />;
      case PageType.Home:
      default:
        return <HomePage openContactModal={() => setContactModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        user={user} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer openAdminLogin={openAdminModal} />
      {isLoginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} onGoogleLogin={handleGoogleLogin} />}
      {isAdditionalInfoModalOpen && (
        <AdditionalInfoModal 
          onClose={() => setAdditionalInfoModalOpen(false)} 
          onSignup={handleCompleteSignup}
        />
      )}
      {isAdminLoginModalOpen && (
        <AdminLoginModal 
            onClose={() => {
                setAdminLoginModalOpen(false);
                setAdminLoginError(null);
            }} 
            onLogin={handleAdminLogin}
            error={adminLoginError}
        />
      )}
      {isContactModalOpen && <ContactModal onClose={() => setContactModalOpen(false)} />}
    </div>
  );
};

export default App;
