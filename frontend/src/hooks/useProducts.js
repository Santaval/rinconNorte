import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
        try {
            const { data } = await apiv1.get("/products");
            setProducts(data.products);
        } catch (error) {
           toast.error("Error al obtener los productos")
        }
      setLoading(false);
    };
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await apiv1.delete(`/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      toast.success("Producto eliminado");
    } catch (error) {
      toast.error("Error al eliminar el producto");
    }
  };

  return { products, loading, deleteProduct };
};

export default useProducts;
