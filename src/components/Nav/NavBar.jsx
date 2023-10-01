import * as text from '../formatting/Text'

const NavBar = () => {
  return (
    <nav className="flex justify-between p-4 w-screen">
      <div className='nav-left'>
        <text.Subtitle>Template Home</text.Subtitle>
      </div>
      <div className="nav-center">
        <text.Title>Hello.</text.Title>
      </div>
      <div className="nav-right">
        <text.Label>Buttons go here</text.Label>
      </div>
    </nav>
  )
}

export default NavBar