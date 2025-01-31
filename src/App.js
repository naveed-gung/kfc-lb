import React, { useState , useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; 
import Map from './components/Map';
import { motion } from "framer-motion";
import './App.css';

 const products = [
  {
    id: 1,
    name: "Zinger Burger",
    category: "Burgers",
    price: 5.99,
    calories: 450,
    ingredients: ["Crispy Chicken", "Lettuce", "Mayonnaise", "Bun"],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Original Recipe Chicken",
    category: "Chicken",
    price: 9.99,
    calories: 320,
    ingredients: ["Chicken", "Secret 11 Herbs and Spices"],
    image: "https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Popcorn Nuggets",
    category: "Snacks",
    price: 3.99,
    calories: 280,
    ingredients: ["Chicken", "Breading"],
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBu_I4RHre6X3FfOF6gpaWjui4QahdvvycK2O-K-BD0tw2gMYXrz3qxEFQNQCjXWbryrQUp5YxYcXiQaMjaWl7X7WLVRPA1n0yS6LiAJs",
  },
    {
      id: 4,
      name: "Fries",
      category: "Sides",
      price: 2.99,
      calories: 250,
      ingredients: ["Potatoes", "Salt", "Oil"],
      image: "https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Pepsi",
      category: "Drinks",
      price: 1.99,
      calories: 150,
      ingredients: ["Carbonated Water", "Sugar", "Caramel Color"],
      image: "https://images.pexels.com/photos/988949/pexels-photo-988949.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "Chicken Bucket",
      category: "Meals",
      price: 19.99,
      calories: 1200,
      ingredients: ["Chicken", "Secret 11 Herbs and Spices"],
      image: "https://images.ctfassets.net/wtodlh47qxpt/2YPzMN8EFsAnx6VS2waX18/29e106d4f989f718ce0041dd54e02834/D-K009-prod?h=300&w=400&fm=webp&fit=fill",
    },
    {
      id: 7,
      name: "Twister Wrap",
      category: "Burgers",
      price: 4.99,
      calories: 380,
      ingredients: ["Chicken", "Tortilla", "Lettuce", "Mayonnaise"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOxmT1KtydOc0hPwE_GDZLO4vu04SaIWYvA&s",
    },
    {
      id: 8,
      name: "Coleslaw",
      category: "Sides",
      price: 1.99,
      calories: 150,
      ingredients: ["Cabbage", "Carrots", "Mayonnaise"],
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTA9_f0qY1JuIND4_7srgZh71f85nZnlbRFzt-GeTXj7D84hHGHpktFp4PT8Fe9HciZm5Aa-4w04SLo7qBp9P2iYpYBGoyZisAS2MHsRA",
    },
    {
      id: 9,
      name: "Mashed Potatoes",
      category: "Sides",
      price: 2.49,
      calories: 120,
      ingredients: ["Potatoes", "Butter", "Milk"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sous_vide_mashed_potatoes.jpg/800px-Sous_vide_mashed_potatoes.jpg",
    },
    {
      id: 10,
      name: "Chicken Pot Pie",
      category: "Meals",
      price: 6.99,
      calories: 540,
      ingredients: ["Chicken", "Vegetables", "Pie Crust"],
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS1G_ciAdClP2kbcYAayEaUb6_iUP0_5pdvr4kMrcY6vz1cMpR9XxbtshEiu5ujGZSmpTmC4sChRQUxAfGicoaR7oEWFUd35KgmZFagmvw",
    },
    {
      id: 11,
      name: "Chocolate Chip Cookie",
      category: "Desserts",
      price: 1.49,
      calories: 170,
      ingredients: ["Chocolate Chips", "Flour", "Sugar", "Butter"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf4iveBPy-xS0Nk6jhvccc3umiab4XC5EERv_AnnPDE_BxUxtIK-YwAaYDlEq0AKO5NE&usqp=CAU",
    },
    {
      id: 12,
      name: "Apple Pie",
      category: "Desserts",
      price: 1.99,
      calories: 250,
      ingredients: ["Apples", "Sugar", "Cinnamon", "Pie Crust"],
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSO0DjMobCGLpo1lTIKKTds0O2O_3io6sbxXMd2faMKctXtqudStF2k3_0jkHWBkc3bwvhCpCWUVII7lmi1lMHmKUEEPt2o7FnBynE7-Q",
    },
  ];

  const productsPerPage = 3;

  function Skeleton() {
    return (
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-button"></div>
      </div>
    );
  }

  function App() {
    // States
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [userPoints, setUserPoints] = useState(0);
    const [orderHistory, setOrderHistory] = useState([]);
    const [showReviews, setShowReviews] = useState(false);
    const [loading, setLoading] = useState(false);

    function Skeleton() {
      return (
        <div className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-button"></div>
        </div>
      );
    }
    // Function to toggle hover state
    const handleInteraction = (productId) => {
      if (hoveredProduct === productId) {
        setHoveredProduct(null); // Unhover if already hovered
      } else {
        setHoveredProduct(productId); // Hover the clicked product
      }
    };

    // Filter functions
    const filteredProducts = products
      .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
      .filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Cart functions
    const addToCart = (product) => {
      setCart([...cart, { ...product, quantity: 1 }]);
      setUserPoints(prev => prev + Math.floor(product.price));
      toast.success('Added to cart! Earned points!');
    };
  
    const calculateTotal = () => {
      return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    };

    // Simulate loading delay
    const handleCategoryChange = (category) => {
      setLoading(true); 
       setTimeout(() => {
          setSelectedCategory(category);
          setLoading(false); 
        }, 1000);
      };

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqjPqjigJwHu4VvBHRbIMuIO7TD9qgiE-kw&s" alt="KFC Logo" height="40" />
            </a>
            <div className="d-flex align-items-center">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search menu..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-danger position-relative" onClick={() => setShowCart(true)}>
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
        </nav>
  
        <div className="container" style={{ marginTop: '100px' }}>
          <h1 className="text-center">KFC Menu</h1>
  
          <div className="container mb-4 ">
            <div className="btn-group btn-group-sm">
              {['All', 'Chicken', 'Burgers', 'Snacks',  'Desserts'].map(category => (
                <button 
                  key={category}
                  className={`btn btn-outline-danger ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>


          <div className="row product-grid">
            {loading ? (
                 // Render skeletons while loading
                 [...Array(productsPerPage)].map((_, index) => (
                   <div key={index} className="col-md-4 mb-4">
                     <Skeleton />
                   </div>
                 ))
      ) : (
            // Render actual products when not loading
            currentProducts.map((product) => (
                      <div key={product.id} className="col-md-4 mb-4 product-card" 
                           onMouseEnter={() => setHoveredProduct(product.id)} 
                           onMouseLeave={() => setHoveredProduct(null)}S
                                    onClick={() => handleInteraction(product.id)}
                   >
                <motion.div className="card h-200 shadow position-relative" 
                            animate={{ rotateY: hoveredProduct === product.id ? 180 : 0 }} 
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: 'preserve-3d', borderRadius: '10px' }}>
                  <div className="card-front position-absolute w-100 h-250" 
                       style={{ backfaceVisibility: 'hidden', background: '#fff', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1),0 4px 6px rgba(0, 0, 0, 0.1),0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                    <img src={product.image} className="card-img-top" alt={product.name} 
                         style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Price: ${product.price}</p>
                    </div>
                  </div>
                  <div className="card-back position-absolute w-100 h-200 bg-light p-3" 
                       style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1),0 4px 6px rgba(0, 0, 0, 0.1),0 4px 6px rgba(0, 0, 0, 0.1)',  }}>
                    <h5 className="text-center">{product.name}</h5>
                    <p>Calories: {product.calories}</p>
                    <p>Ingredients:</p>
                    <ul className="list-unstyled mb-3">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <button className="btn btn-danger w-100" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              </div>
                  ))
                )}
          </div>
  
          <div className="pagination">
            {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
              <button 
                key={index}
                className={`btn mx-2 ${currentPage === index + 1 ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
  
          <div className="container mt-5">
            <h2 className="text-center mb-4">Our Locations</h2>
            <Map />
          </div>
          <footer className="footer mt-5 py-3 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0">&copy; 2024 KFC Lebanon. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                 <a href="#" className="text-decoration-none me-3">Privacy Policy</a>
                 <a href="#" className="text-decoration-none">Terms of Use</a>
               </div>
             </div>
           </div>
         </footer>
  
        {showCart && (
          <div className="modal fade show cart-modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Your Cart</h5>
                    <button className="btn-close" onClick={() => setShowCart(false)}></button>
                  </div>
                  <div className="modal-body">
                    {cart.map(item => (
                      <div key={item.id} className="d-flex justify-content-between mb-2">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>Total:</strong>
                      <strong>${calculateTotal()}</strong>
                    </div>
                    <div className="mt-3">
                      <p>Points earned: {userPoints}</p>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={() => setShowCart(false)}>Close</button>
                    <button className="btn btn-danger" onClick={() => {
                      toast.success('Order placed successfully!');
                      setOrderHistory([...orderHistory, { items: cart, total: calculateTotal(), date: new Date() }]);
                      setCart([]);
                      setShowCart(false);
                    }}>Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <ToastContainer position="bottom-right" />
      </>
    );
  } 
  export default App;