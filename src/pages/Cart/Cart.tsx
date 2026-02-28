import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { removeFromCart, updateQuantity } from "../../redux/Cart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  function handleQuantityChange(id: number, delta: number) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    const newQty = Math.max(0, item.quantity + delta);
    dispatch(updateQuantity({ id, quantity: newQty }));
  }

  if (cart.length === 0) {
    return (
      <section className="min-h-screen pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-12 md:p-16">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-6">
                <i className="fa-solid fa-cart-shopping text-4xl text-gray-400" />
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Your cart is empty
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-8">
                You haven&apos;t added any products yet. Browse the store and add what you like to your cart.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition-colors shadow-sm"
              >
                <i className="fa-solid fa-arrow-right" />
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-medium text-secondary">Shopping Cart</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            You have {totalItems} item{totalItems > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6 flex gap-4 md:gap-6"
              >
                <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-emerald-600 font-bold text-lg mb-3">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-l-full transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <i className="fa-solid fa-minus text-xs" />
                      </button>
                      <span className="h-8 min-w-[2rem] flex items-center justify-center text-sm font-medium text-gray-900 px-2">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-r-full transition-colors"
                        aria-label="Increase quantity"
                      >
                        <i className="fa-solid fa-plus text-xs" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      <i className="fa-solid fa-trash text-xs" />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="shrink-0 text-left">
                  <p className="text-lg font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({totalItems} item{totalItems > 1 ? "s" : ""})</span>
                  <span className="font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-emerald-600">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/products"
                className="block w-full text-center py-2.5 rounded-full border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors mb-3"
              >
                Continue Shopping
              </Link>
              <button
                type="button"
                className="block w-full py-2.5 rounded-full bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition-colors shadow-sm"
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
