import logo from '../../assets/OBJECTS_1_.svg'
import type { LogoProps } from './type'

export default function Logo (size:LogoProps) :React.ReactNode{

const logoSize={
    sm:"w-16 h-16",
    md:"w-24 h24",
    lg:"w-32 h-32"
}




  return (
    <>

    <div className={`logo ${logoSize[size.size]}`}>
        <img className='object-contain ' src={logo} alt="Byza logo" />
    </div>
    
    
    
    </>
  )
}
