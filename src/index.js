import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className='person'>
      <img src={url} alt='image' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className='person-list'>
      <Person img='34' name='john' job='developer' />
      <Person img='44' name='josh' job='artist'>
        Enim ea aliqua occaecat enim esse adipisicing excepteur. Occaecat
        consequat nisi laborum cillum in irure aliqua laboris velit Lorem nulla
        officia qui in. Labore ex excepteur ex dolor ea officia reprehenderit.
        Eu elit irure exercitation amet ut labore exercitation occaecat aute
        veniam fugiat. Veniam cupidatat sint in fugiat cillum ullamco ipsum
        consequat velit. Velit pariatur ea occaecat veniam consequat sunt do
        consequat ea voluptate dolor deserunt. Aliqua tempor nostrud enim ipsum
        nostrud cupidatat deserunt labore quis mollit anim ea. Incididunt
        proident adipisicing aliqua mollit aliquip esse mollit culpa. Minim ad
        dolor laboris nulla exercitation dolor in quis non aliqua pariatur. Et
        officia sunt irure minim ad cillum nostrud enim pariatur id excepteur
        dolor. Velit proident aliquip culpa elit cillum ea minim. Est Lorem
        tempor dolor dolor labore duis proident commodo. Dolore voluptate
        reprehenderit labore sit excepteur adipisicing ad nulla occaecat aute et
        officia.
      </Person>
      <Person img='55' name='jane' job='musician' />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById('root'));
