
import './App.css';

import Header from './Header.js';
import Card from './Card.js';
import data from './data.js';

function App() {
  const cards = data.map(item => {
    return (
      <Card
          key={item.id}
          {...item} />
    )
  })
  return (
    <div className="App">
      <Header />
      <body>
      <section className="cards-list">
        {cards}
      </section>
      </body>
    </div>
  );
}

export default App;
