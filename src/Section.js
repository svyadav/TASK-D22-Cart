import data from "./Data";

export default function Section(props) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((value, index) => {
            return (
              <div key={index} className="col mb-5">
                <div className="card h-100">
                  {/* Sale badge */}
                  {value.saleBadge ? (
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Product image */}
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  {/* Product details */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name */}
                      <h5 className="fw-bolder">{value.type}</h5>
                      {/* Product reviews */}
                      {value.rating && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                        </div>
                      )}
                      {/* Product price */}
                      {value.oldPrice && (
                        <span className="text-muted text-decoration-line-through">
                          {value.oldPrice}
                        </span>
                      )}

                      {value.price}
                    </div>
                  </div>

                  {/* Product actions */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {value.saleBadge || value.rating ? (
                        <>
                          {props.cartDetails.find(
                            (cartItem) => cartItem.id === value.id
                          ) ? (
                            <button
                              className="btn btn-outline-dark mt-auto"
                              onClick={() => props.handleRemoveFromCart(value)}
                            >
                              Remove from Cart
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-dark mt-auto"
                              onClick={() => props.handleAddtoCart(value)}
                            >
                              Add to Cart
                            </button>
                          )}
                        </>
                      ) : (
                        <button className="btn btn-outline-dark mt-auto">
                          View Options
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
