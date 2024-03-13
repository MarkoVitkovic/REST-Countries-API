import { useStateContext } from "../../context/stateContext"

const Navbar = () => {

  const { currentMode, setMode } = useStateContext()

  return (
    <nav className="bg-[white] dark:bg-neutral-darkBlue p-5 px-10 flex justify-between items-center shadow">
      <p className="text-neutral-veryDarkBlueLight dark:text-neutral-veryLightGray text-2xl font-bold">Where in the world?</p>
      <button
        onClick={() => setMode(currentMode === 'Dark' ? 'Light' : 'Dark')}
        className="text-neutral-veryDarkBlueLight dark:text-neutral-veryLightGray text-lg font-semibold flex gap-2 items-center"
      >
        {
          currentMode === 'Dark' ?
            <i className="fa-solid fa-moon"></i>
            :
            <i className="fa-regular fa-moon"></i>
        }
        {currentMode === 'Dark' ? 'Light mode' : 'Dark Mode'}
      </button>
    </nav>
  )
}

export default Navbar