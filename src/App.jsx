import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductPage from "./pages/admin/product";
import DashboardPage from "./pages/admin/dashboard";
import { Route, Routes } from "react-router-dom";
import {
  addProduct,
  getProducts,
  removeProductsByid,
  updateProduct,
} from "./api/product";
import { ToastContainer, toast } from "react-toastify";
import ProductAddPage from "./pages/admin/productadd";
import ProductEditPage from "./pages/admin/productupdate";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      // console.log(data);
      setProducts(data);
    })();
  }, []);

  const onHandleRemove = async (id) => {
    const confirm = window.confirm(
      "Are you fuking sure want to remove product ?"
    );
    if (confirm) {
      try {
        // const data =
        await removeProductsByid(id);
        toast.success("xoa san pham thanh cong");
        //rerender
        setProducts(products.filter((product) => product.id !== id));
        // 1-2-3-4-5-
      } catch (error) {
        toast.error("xoa khong thanh cong");
      }
    }
  };
  const onHandleAdd = async (product) => {
    try {
      const data = await addProduct(product);
      toast.success("them san pham thanh cong");
      //rerender
      setProducts([...products, data]);
    } catch (error) {
      toast.error("them san pham khong thanh cong");
    }
  };
  const onHandleUpdate = async (product) => {
    try {
      // const data =
      await updateProduct(product);
      toast.success("cap nhat san pham thanh cong");
      //rerender
      const newProduct = products.map((item) =>
        item.id === product.id ? product : item
      );
      setProducts(newProduct);
    } catch (error) {
      toast.error("cap nhat san pham khong thanh cong");
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="admin" element={<DashboardPage />} />
                <Route
                  path="admin/products"
                  element={
                    <ProductPage
                      products={products}
                      onRemove={onHandleRemove}
                    />
                  }
                />
                <Route
                  path="admin/products/add"
                  element={<ProductAddPage onAdd={onHandleAdd} />}
                />
                <Route
                  path="admin/products/:id/edit"
                  element={<ProductEditPage onUpdate={onHandleUpdate} />}
                />
              </Routes>
            </main>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
