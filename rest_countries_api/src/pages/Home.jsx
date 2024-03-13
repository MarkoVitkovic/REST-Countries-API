import Card from "../components/Card"
import AppLayout from "../components/layouts/AppLayout"
import data from '../assets/data.json'

const Home = () => {
  return (
    <AppLayout>
      <div className="h-full flex justify-between items-center flex-wrap p-20">
        {
          data.map(country => <Card country={country} />)
        }
      </div>
    </AppLayout>
  )
}

export default Home