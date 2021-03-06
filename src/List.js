import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  const cardsHtml = props.cards.map((item, key) => {
    return <Card title={item.title} key={item.id} content={item.content} />;
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">{cardsHtml}</div>
    </section>
  );
}

export default List;
