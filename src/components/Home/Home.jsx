import React, { useEffect, useState } from "react";
import "./Home.scss";
import { BsThreeDots } from "react-icons/bs";
import { useProductContext } from "../../context/store.jsx";
import fetchProducts from "../../Api/getProducts.js";
import Spinner from "../Spinner/Spinner.jsx";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { products, setProducts, colorPalette } = useProductContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        //console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {loading ? <Spinner /> : <Spinner className="fade-out" />}

      {!loading && (
        <main className="dashboard">
          <div className="container">
            <div className="layout-container">
              <div className="left-wrapper">
                <div className="left-col">
                  <div className="info">
                    <div className="profile-img">
                      <img
                        src="/assets/images/profile.png"
                        alt="profile photo"
                      />
                    </div>
                    <div className="report">
                      <small>Report to</small>
                      <h2 className="report-title">Best Sales</h2>
                    </div>
                  </div>
                  <div className="date">
                    <ul>
                      <li>Daily</li>
                      <li>Weekly</li>
                      <li>Monthly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-col">
                {products &&
                  products.map((product, index) => (
                    <div className="flex-col" key={product.id}>
                      <div className="wrapper">
                        <div
                          className="color-wrap"
                          style={{
                            backgroundColor:
                              colorPalette[index % colorPalette.length],
                          }}
                        >
                          <div className="data">
                            <div className="row">
                              <h3 className="category-name">
                                {product.category}
                              </h3>
                              <div className="dots">
                                <BsThreeDots />
                              </div>
                            </div>
                            <div className="mobile-row">
                              <h4 className="price">{product.price}$</h4>
                              <div className="row">
                                <small className="title">{product.title}</small>
                                <div className="in-store">
                                  <p className="in-store-label">In Store</p>
                                  <p className="in-store-count">
                                    {product.rating.count}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
