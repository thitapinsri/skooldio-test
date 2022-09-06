import './App.css';
import { useEffect, useState } from 'react'
import CardList from './components/CardList';

const url = 'https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json'

function App() {
  const [cards, setCards] = useState()

  const getCards = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCards(data)
    // console.log(data)
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="App">
      {
        cards &&
        <CardList cards={cards} />
      }
    </div>
  );
}

export default App;
