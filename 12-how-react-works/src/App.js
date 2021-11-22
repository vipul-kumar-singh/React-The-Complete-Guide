import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App Running');

  const toggleParagraphHandler = () => {
    // setShowParagraph(!showParagraph); // not dependent on previous state
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); // dependent on previous state
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph! </Button>
    </div>
  );
}

export default App;
