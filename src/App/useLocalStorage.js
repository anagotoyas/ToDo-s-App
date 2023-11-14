import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      try {
        const localStorageItems = localStorage.getItem(itemName);
        // console.log(localStorageItems)
  
        let parsedItem;
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify([]));
         
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
    
  }, [itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
