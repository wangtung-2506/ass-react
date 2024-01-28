
import { Link } from "react-router-dom";

const ProductPage = ({ products, onRemove }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lí sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link
              to="/admin/products/add"
              className="btn btn-sm btn-outline-secondary"
              type="button"
            >
              them san pham
            </Link>
          </div>
        </div>
      </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td width="50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20"
                  />
                </td>
                <td>{product.name}</td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <div className="d-flex">
                    <button
                      className="btn btn-danger"
                      onClick={() => onRemove(product.id)}
                    >
                      delete
                    </button>
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className="btn btn-primary ml-3"
                    >
                      update
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductPage;
