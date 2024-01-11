import Image from 'next/image'
import "./globals.css"
import { MiniBeerCard } from './components/miniBeerCard/miniBeerCard';
import { IBeerEntity } from './types/beerType';


const getData = async (): Promise<IBeerEntity[]> => {
  const response = await fetch("https://api.punkapi.com/v2/beers?page=7&per_page=25");
  return response.json()
} 

const Home = async () => {
  const data = await getData();

  // console.log(data)
  return (
    <div className="main">
      {data.map(el => (
        <MiniBeerCard key={el.id} {...el} />
      ))}
    </div>
  )
}

export default Home
