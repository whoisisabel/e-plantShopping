import { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { addItem } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Aromatic & Fragrant Plants",
      plants: [
        {
          name: "Rose",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20241013/bOcE/670b9647f9b8ef490bb386c5/-1117Wx1400H-700575060-red-MODEL2.jpg",
          description:
            "Beautiful and fragrant, perfect for gardens and patios.",
          cost: "$20",
        },
        {
          name: "Gardenia",
          image:
            "https://planters.co.ke/wp-content/uploads/2025/09/Gardenia-e1757918376340.png",
          description:
            "Sweet-smelling flowers that thrive in indirect sunlight.",
          cost: "$25",
        },
        {
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, perfect for teas and cooking.",
          cost: "$12",
        },
      ],
    },
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Areca Palm",
          image:
            "https://leafy-life.com/nl/wp-content/uploads/sites/8/2020/12/4CHLUB020.png",
          description: "Removes toxins and adds humidity to indoor spaces.",
          cost: "$18",
        },
        {
          name: "Fiddle-Leaf Fig",
          image:
            "https://www.thetutuguru.com.au/wp-content/uploads/2024/07/Ficus-lyrata-Fiddle-Leaf-Fig-Tree-potted-indoors.jpg",
          description:
            "Large leaf plant that helps filter indoor air and brightens interiors.",
          cost: "$22",
        },
        {
          name: "Golden Pothos",
          image:
            "https://images.thdstatic.com/productImages/57070793-db85-4745-8aae-e0f0c03fb5e4/svn/house-plants-golpot6x1-64_600.jpg",
          description:
            "Hardy trailing plant, great for improving air quality indoors.",
          cost: "$14",
        },
      ],
    },

    {
      category: "Succulents & Cacti",
      plants: [
        {
          name: "Echeveria",
          image:
            "https://shopaltmanplants.com/cdn/shop/files/Echeveria_lime_n_chile_in_black_bowl_final_4.jpg",
          description: "Compact succulent, easy to care for.",
          cost: "$10",
        },
        {
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Soothing gel and low-maintenance indoor plant.",
          cost: "$14",
        },
        {
          name: "Golden Barrel Cactus",
          image:
            "https://cvwatercounts.com/wp-content/uploads/2024/03/2_Plant-of-the-Month_Barrel-Cactus.jpg",
          description: "Round, drought-tolerant cactus, great for decoration.",
          cost: "$16",
        },
      ],
    },
    {
      category: "Medicinal & Herbal Plants",
      plants: [
        {
          name: "Basil",
          image:
            "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
          description: "Repels insects and perfect for culinary use.",
          cost: "$10",
        },
        {
          name: "Chamomile",
          image:
            "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description: "Soothes anxiety and promotes sleep.",
          cost: "$15",
        },
        {
          name: "Echinacea",
          image:
            "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          description: "Boosts immunity and supports overall health.",
          cost: "$18",
        },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image:
            "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3",
          description: "Thrives in low light and minimal watering.",
          cost: "$25",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Easy to care for, resilient and air-purifying.",
          cost: "$12",
        },
        {
          name: "Cast Iron Plant",
          image:
            "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          description: "Hardy, low-maintenance plant ideal for indoors.",
          cost: "$20",
        },
      ],
    },
  ];

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false); // Hide the cart when navigating to About Us
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const cartContents = cart.map((item) => item.name);

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div>
                <h3 style={{ color: "white" }}>Plant Lovers Nursery</h3>
                <i style={{ color: "white" }}>
                  Where Plant Lovers Meets Serenity
                </i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                {cart.length > 0 && (
                  <div className="cart_quantity_count">{cart.length}</div>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <div key={category.category}>
              <h1 className="plantname_heading">
                <div className="plant_heading">{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <div className="product-title"> {plant.name}</div>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-price">{plant.cost}</div>
                    <div className="product-description">
                      {plant.description}
                    </div>
                    <button
                      className={
                        cartContents.includes(plant.name)
                          ? "product-button added-to-cart"
                          : "product-button"
                      }
                      disabled={cartContents.includes(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {cartContents.includes(plant.name)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
