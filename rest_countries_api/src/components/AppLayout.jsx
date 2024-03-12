import Navbar from './layouts/Navbar'

const AppLayout = ({ children }) => {
  return (
    <div className='bg-neutral-veryLightGray dark:bg-neutral-veryDarkBlue'>
        <Navbar />
        <div>{ children }</div>
    </div>
  )
}

export default AppLayout