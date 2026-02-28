import type { productsType } from "../../redux/type"
import Button from "../Buttons/Button"
import { useAppDispatch, useAppSelector } from "../../redux/Hooks"
import { addToCart } from "../../redux/Cart"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function Card({ product }: { product: productsType }) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { cart } = useAppSelector((state) => state.cart)
  const loggedInUser = useAppSelector((state) => state.user.loggedInUser)
  const isInCart = cart.some((item) => item.id === product.id)

  return (
    <>
      <div className="inner-card bg-background col-span-1 rounded-lg shadow-sm">
        <figure className="h-64 w-full">
          <img
            className="rounded-t-lg "
            src={product.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-text-1 truncate">
            {product.title.split(" ").slice(0, 3).join(" ")}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-text-2 line-clamp-3 ">{product.description}</p>
          <div className="card-actions flex items-center justify-between flex-nowrap ">
            <span className="text-red-800 font-bold text-2xl">${product.price}</span>
            <div className=" flex justify-between items-center gap-3 ">
              <Button
                type="icon"
                size="xs"
                icon={<i className="fa-solid fa-cart-plus"></i>}
                className={isInCart ? "text-gray-400!" : "text-secondary!"}
                onClick={(e) => {
                  e?.preventDefault()
                  e?.stopPropagation()
                  if (!loggedInUser) {
                    toast("يجب تسجيل الدخول أولاً لإضافة المنتج للسلة", { icon: "🔒" })
                    navigate("/login")
                    return
                  }
                  if (isInCart) {
                    toast("The product is already in the cart", { icon: "🛒" })
                  } else {
                    dispatch(addToCart(product))
                    toast("product added to cart" ,{icon: "✅"})
                  }
                }}
              />
              
              
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
