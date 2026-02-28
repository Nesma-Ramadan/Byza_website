

export default function Header({titel , className}:{titel:string, className?:string}) {




  return (
    <>

    <header className="w-full text-center py-8 ">

<h2 className={`  font-bold ${className}`} >{titel}</h2>

    </header>
    
    
    
    
    
    </>
  )
}
