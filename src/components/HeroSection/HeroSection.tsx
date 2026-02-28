
import heroImg from '../../assets/images/2148101678.jpg'








export default function HeroSection() {
    return (
        <>

            <main className='h-screen flex items-center justify-center'>
                <div className="container">
                    <div className="hero-section flex flex-wrap-reverse lg:flex-nowrap pt-32 lg:pt-0 items-center justify-center gap-10 ">


                        <div className="hero-content lg:w-1/2  flex flex-col items-center justify-between gap-10">
                            <h2 className='text-text-1 text-3xl lg:text-4xl font-bold leading-snug'>
                                <i className='inline-block text-primary animate-pulse text-6xl lg:text-7xl '>Byza</i> Where Style Meets Smart Shopping
                            </h2>
                            <p className='text-text-2 text-lg lg:text-2xl '>
                                Discover a seamless shopping experience with Byza. Explore high-quality products, trending styles, and unbeatable prices — all in one place. Shop smarter, faster, and with confidence.
                            </p>
                        </div>



                        <div className="hero-img lg:w-1/2 relative flex items-center justify-center">

                            {/* Background Circles */}
                            <ul className="absolute inset-0">
                                <li className="w-20 h-20 bg-blue-400 absolute top-10 left-10 rounded-full opacity-70"></li>
                                <li className="w-32 h-32 bg-blue-600 absolute top-20 right-16 rounded-full opacity-60"></li>
                                <li className="w-52 h-52 bg-blue-900 absolute bottom-10 left-20 rounded-full opacity-40"></li>
                                <li className="w-12 h-12 bg-blue-700 absolute bottom-24 right-10 rounded-full opacity-80"></li>
                            </ul>

                            {/* Main Image */}
                            <div className="w-full h-72 md:w-96 md:h-96 rounded-t-full rounded-b-4xl  md:rounded-full overflow-hidden relative z-10 border-4 border-white shadow-2xl">
                                <img
                                 className=' object-cover '
                                    src={heroImg}
                                    alt="Hero Image"
                                />
                            </div>

                        </div>


                    </div>
                </div>
            </main>

        </>
    )
}
