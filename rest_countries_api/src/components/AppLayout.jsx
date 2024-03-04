import Navbar from './layouts/Navbar'

const AppLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div>{ children }</div>
    </div>
  )
}

export default AppLayout