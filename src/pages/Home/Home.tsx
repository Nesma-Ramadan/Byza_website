
import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import HeroSection from '../../components/HeroSection/HeroSection'
import { getAllProducts } from '../../redux/AllProductSlice'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router-dom'


export default function Home() {

  const { allproduct, isLoading, error } = useAppSelector(
    (state) => state.allProducts
  )
  const loggedInUser = useAppSelector((state) => state.user.loggedInUser)
  const dispatch = useAppDispatch();



  useEffect(()=>{

    dispatch(getAllProducts())
 
  },[dispatch])


  if(isLoading){
    return <Loading/>
  }
  if(error){
    return <h1 className='text-red-500 text-center'>{error}</h1>
  }




  return (
    <>

      <main>
        <div className="container">
          <HeroSection />
        </div>

      </main>

      <section>
        <div className="container">

          <div className="allproduct grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">

            {allproduct?.map((product)=> <Link key={product.id} to={loggedInUser ? `/productsDetails/${product.id}` : "/login"}><Card product={product} /></Link>)}

          </div>
        </div>
      </section>


    </>
  )
}

