'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BiCommand } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";



const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const menuRef = useRef(null);
  const inputRef = useRef(null);

  // Define menu items
  const actions = [
    { id: 'print', label: 'Print', category: 'Actions' },
  ];

  const links = [
    { id: 'personal-website', label: 'Personal Website', category: 'Links', href: '#' },
    { id: 'github', label: 'GitHub', category: 'Links', href: '#' },
    { id: 'linkedin', label: 'LinkedIn', category: 'Links', href: '#' },
  ];

  const allItems = [...actions, ...links];

  // Filter items based on search term
  const filteredItems = searchTerm 
    ? allItems.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : allItems;

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleItemClick = (item) => {
    setIsOpen(false)
    setTimeout(() => {
       // For actions
    if (item.category === 'Actions') {
        if (item.id === 'print') {
          window.print();
        }
      }
    }, 100);
  
  
  };

  return (
    <>
      {/* Command menu button */}
      <button 
        className="fixed bottom-5 cursor-pointer md:right-40 right-2 p-2 bg-white rounded-full border-[1px] border-black/20 shadow-lg hover:shadow-xl transition-shadow z-40"
        onClick={toggleMenu}
        aria-label="Open command menu"
      >
      <BiCommand className="w-6 h-6 text-gray-700" />
      </button>

      {/* Command menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-25 z-40 flex items-center justify-center">
          <div 
            ref={menuRef}
            className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-4"
            style={{ maxHeight: '80vh' }}
          >
            {/* Search input */}
            <div className="p-4 border-b border-gray-200 flex items-center">
              <svg 
                className="w-5 h-5 text-gray-500 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                className="w-full outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                className="ml-2 p-1 bg-black/10 cursor-pointer rounded-full hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <IoIosClose className="w-5 h-5 text-gray-700 " />
              </button>
            </div>

            {/* Menu items */}
            <div className="overflow-y-auto px-3 pb-3" style={{ maxHeight: 'calc(80vh - 70px)' }}>
              {Object.keys(groupedItems).map((category) => (
                <div key={category}>
                  <div className="px-4 py-2 text-xs text-gray-400 ">{category}</div>
                  <ul>
                    {groupedItems[category].map((item) => (
                      <li key={item.id}>
                        {item.href ? (
                          <Link 
                            href={item.href}
                            className="block px-4  text-sm py-3  hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button 
                            className="block text-sm w-full text-left  px-4 py-3  hover:bg-gray-100"
                            onClick={() => handleItemClick(item)}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandMenu;