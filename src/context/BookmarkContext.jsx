import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create the context
const BookmarkContext = createContext();
const notifyAdded = () => toast.success('Added to Bookmark!', { autoClose: 3000 });
const notifyAlreadyAdded = () => toast.error('Already Added to Bookmark!', { autoClose: 3000 });
const notifyRemoved = () => toast.success('Removed from Bookmark!', { autoClose: 3000 });


// Create the provider component
export const BookmarkProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('bookmarkedItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkedItems', JSON.stringify(items));
  }, [items]);

  const handleAdd = (newItem, newID, mediaType, id) => {
    if (items.some(item => item.newID === newID)) {
      notifyAlreadyAdded()
    }

    if (!items.some(item => item.newID === newID)) {
      newItem.newID = newID;
      newItem.mediaType = mediaType;
      newItem.newURL = `/${mediaType}/${id}`
      setItems((prevItems) => [...prevItems, newItem]);
      notifyAdded()
    }
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter(item => item.newID !== itemId));
    notifyRemoved()
  };

  return (
    <BookmarkContext.Provider value={{ items, handleAdd, removeItem }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// Custom hook to use the Bookmark context
export const useBookmark = () => {
  return useContext(BookmarkContext);
};
