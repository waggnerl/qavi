import Image from 'next/image'
import quaviLogo from '../assets/quavi.png'
export default function Navbar(){
  return(
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        
        <Image
        src={quaviLogo}
        alt="Picture of the author"
        width={70}
        height={30}
      />
      </div>
    </nav>
  )
}