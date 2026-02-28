import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { getAllProducts } from "../../redux/AllProductSlice";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { key: "all", label: "All Products", apiValue: null },
  { key: "men", label: "Men's Clothing", apiValue: "men's clothing" },
  { key: "women", label: "Women's Clothing", apiValue: "women's clothing" },
  { key: "jewelery", label: "Jewelery", apiValue: "jewelery" },
  { key: "electronics", label: "Electronics", apiValue: "electronics" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

export default function Products() {
  const dispatch = useAppDispatch();
  const { allproduct, isLoading, error } = useAppSelector(
    (state) => state.allProducts
  );
  const loggedInUser = useAppSelector((state) => state.user.loggedInUser);

  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (!allproduct || allproduct.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, allproduct]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryKey, number> = {
      all: 0,
      men: 0,
      women: 0,
      jewelery: 0,
      electronics: 0,
    };

    allproduct.forEach((product) => {
      counts.all += 1;

      CATEGORIES.forEach((category) => {
        if (category.apiValue && product.category === category.apiValue) {
          counts[category.key] += 1;
        }
      });
    });

    return counts;
  }, [allproduct]);

  const filteredProducts = useMemo(() => {
    const current = CATEGORIES.find((c) => c.key === selectedCategory);

    let baseList =
      !current || current.apiValue === null
        ? allproduct
        : allproduct.filter((product) => product.category === current.apiValue);

    const term = searchTerm.trim().toLowerCase();
    if (!term) return baseList;

    return baseList.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
  }, [allproduct, selectedCategory, searchTerm]);

  if (isLoading) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center">
        <Loading />
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gray-50 pt-28 pb-10 ">
      <div className="container mx-auto px-4">
        {/* Search bar */}
        <div className="mb-6">
          <div className="w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search for a product..."
              className="w-full px-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-text-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:border-secondary shadow-sm"
            />
          </div>
        </div>

        {/* Category bar */}
        <div className="mb-16 flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.key;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border shadow-sm ${
                  isActive
                    ? "bg-secondary text-white border-secondary shadow-secondary/40"
                    : "bg-background text-text-3 border-gray-200 hover:bg-white hover:text-primary"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`ml-2 inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    isActive
                      ? "bg-white/90 text-secondary"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {categoryCounts[category.key] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            لا توجد منتجات في هذا القسم حاليًا.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              // <Card key={product.id} product={product} />
              <Link key={product.id} to={loggedInUser ? `/productsDetails/${product.id}` : "/login"}><Card product={product} /></Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
