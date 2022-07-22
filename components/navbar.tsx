import Image from 'next/image'
import qaviLogo from '../assets/qavi.png'
export default function Navbar(){
  return(
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Image
        src={qaviLogo}
        alt="Picture of the author"
        width={70}
        height={30}
      />
      </div>
    </nav>
  )
}