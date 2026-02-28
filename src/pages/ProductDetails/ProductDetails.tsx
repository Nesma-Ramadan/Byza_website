import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { getProductById } from "../../redux/ProductDetailsSlice";
import { addToCart } from "../../redux/Cart";
import Loading from "../../components/Loading/Loading";
import Button from "../../components/Buttons/Button";


export default function ProductDetails() {
  const { id } = useParams();
  const loggedInUser = useAppSelector((state) => state.user.loggedInUser);

  const { productDetails, isLoading, error } = useAppSelector(
    (state) => state.productDetails
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductById(Number(id)));
    }
  }, [dispatch, id]);

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <section className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-xl text-red-500">{error}</h2>
      </section>
    );
  }

  if (!productDetails) {
    return null;
  }

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-10">
        <div className="max-w-5xl w-full mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10 overflow-hidden">
            <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
              <img
                src={productDetails.image}
                alt={productDetails.title}
                className="max-h-96 w-full object-contain"
              />
            </div>

            <div className="md:w-1/2 flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <span className="inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {productDetails.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                  {productDetails.title}
                </h2>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {productDetails.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <span className="text-sm font-medium text-gray-800">
                    {productDetails.rating?.rate}
                  </span>
                  {productDetails.rating?.count !== undefined && (
                    <span className="text-xs text-gray-500">
                      ({productDetails.rating.count} تقييم)
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-2xl font-semibold text-emerald-600">
                  ${productDetails.price}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button size="sm" type="primary" text={"Add to Cart"} onClick={() => dispatch(addToCart(productDetails))} />
                  <Button size="sm" type="secondary" text={"Buy Now"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
