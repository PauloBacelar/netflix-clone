// Imports
import React, { useEffect } from "react";
import data from "./api";

// Component
const App = () => {
  // Methods
  useEffect(() => {
    const loadData = async () => {
      let movieList = await data.getHomeList();
      console.log(movieList);
    };

    loadData();
  }, []);

  return <div>Hello, World</div>;
};

// Export
export default App;
