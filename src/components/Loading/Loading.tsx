
import FadeLoader from 'react-spinners/FadeLoader';

export default function Loading() {
  return (
    <>
      <div className="loading w-screen h-screen">
        <div className="container">

          <FadeLoader
            color="primary"
            height={20}
            margin={6}
          />

        </div>

      </div>


    </>
  )
}
