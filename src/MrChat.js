import './App.css';
import {useEffect, useState} from 'react';
import CatItem from './CatItem';


function MrChat() {

  const [items,setItems] = useState([]);

useEffect(() => {

fetchItems();

},[]);


const fetchItems = async () => {
  const data = await fetch(
    'https://cat-fact.herokuapp.com/facts'
  );

const items = await data.json();
console.log(items.all[0]);
setItems(items.all);

}

  return (
    <CatItem items={items} />
  );
}

export default MrChat;
