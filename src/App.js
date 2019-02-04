import React from 'react';
import List from './List';


function App(props) {
  const arrayLists = props.store.lists.map((element,index) => {
  const cards = element.cardIds.map((item) => {
   const toReturn = props.store.allCards[item]; 
   toReturn.id = item; 
   return toReturn;
  })
   return <List header={element.header} key={element.id} cards={cards} />
  });

  //store.lists.cardIds[item] => store.allCards.[store.lists.cardIds[item]]
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {arrayLists}
    </main>
  );
}

export default App;
