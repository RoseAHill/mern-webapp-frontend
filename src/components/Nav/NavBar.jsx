import * as text from '../formatting/Text'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 w-screen col-span-full">
      <div className='nav-left w-1/3 text-left'>
        <text.Subtitle>Template</text.Subtitle>
      </div>
      <div className="nav-center w-1/3 text-center">
        <text.Title>Hello.</text.Title>
      </div>
      <div className="nav-right w-1/3 text-right">
        <text.Label>Buttons go here</text.Label>
      </div>
    </nav>
  )
}

export default NavBar