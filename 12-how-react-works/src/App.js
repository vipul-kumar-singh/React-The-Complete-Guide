import React, { useState, useCallback, useMemo } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';
import './App.css';

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [allowToggle, setAllowToggle] = useState(false);

//   console.log('App Running');

//   const toggleParagraphHandler = useCallback(() => {
//     // setShowParagraph(!showParagraph); // not dependent on previous state
//     if (allowToggle) {
//       setShowParagraph((prevShowParagraph) => !prevShowParagraph); // dependent on previous state
//     }
//   }, [allowToggle]);

//   const allowToggleHandler = () => {
//     setAllowToggle(true);
//   };

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       {/* {showParagraph && <p>This is new</p>} */}
//       <DemoOutput show={showParagraph} />
//       {/* <DemoOutput show={false} /> */}
//       <Button onClick={allowToggleHandler}>Allow Toggling </Button>
//       <Button onClick={toggleParagraphHandler}>Toggle Paragraph! </Button>
//     </div>
//   );
// }

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
