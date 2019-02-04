import React from 'react';

function App(props) {
  return (
    <main className="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        <section class="List">
          <header class="List-header">
            <h2>First list</h2>
          </header>
          <List />
        </section>
      </div>
    </main>
  );
}

export default App;
