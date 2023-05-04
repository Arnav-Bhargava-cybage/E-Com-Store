// // import React from 'react';
// // import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// // import Products from './data/Products.json';
// // import './App.css';
// // import {Nav,Main} from './components/styledComponents/Index';
// // import Home from './components/Home';
// // import Category from './components/Category';
// // import Brand from './components/Brand';
// // import Product from './components/Product';
// // import Tab from './components/Tab';
// // import Filter from './components/Filter';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <header>
// //           <Nav>
// //             <ul>
// //               <li>
// //                 <Link to="/"><img src='https://img.freepik.com/free-photo/order-concept-with-wooden-block-paper-basket-icon-blue-table-flat-lay-man-hand-pointing_176474-10443.jpg?w=996&t=st=1679479112~exp=1679479712~hmac=5f0797dfffa2fdec5f1f23ff9817459064cd53d30a40aa75f6d1750689f36d8c' height={72} width={156} alt="Home"></img></Link>
// //               </li>
// //               <li>
// //                 <Link to="/categories/TV">TV</Link>
// //               </li>
// //               <li>
// //                 <Link to="/categories/Mobile%20Phones">Mobile Phones</Link>
// //               </li>
// //               <li>
// //                 <Link to="/categories/Laptops">Laptops</Link>
// //               </li>
// //               <li>
// //                 <Link to="/categories/Men%20Clothing">Men's Clothing</Link>
// //               </li>
// //               <li>
// //                 <Link to="/categories/Bagpacks">Bagpacks</Link>
// //               </li>
// //               <li>
// //                 <Link to="/categories/Men%20Grooming">Men's Grooming</Link>
// //               </li>
// //             </ul>
// //           </Nav>
// //           <Tab/>
// //         </header>
// //         <Main>
// //           <Filter/>
// //           <Routes>
// //               <Route path="/" element={<Home />} />
// //             {Object.entries(Products.categories).map(([category, data]) => (
// //               <Route
// //                 key={category}
// //                 path={`/categories/${category}`}
// //                 element={<Category data={data} category={category} />}
// //               />
// //             ))}
// //             {Object.entries(Products.categories).map(([category, data]) =>
// //               Object.entries(data.Brands).map(([brand]) => (
// //                 <Route
// //                   key={`${category}-${brand}`}
// //                   path={`/categories/${category}/${brand}`}
// //                   element={<Brand data={data} category={category} brand={brand} />}
// //                 />
// //               ))
// //             )}
// //             {Object.entries(Products.categories).map(([category, data]) =>
// //               Object.entries(data.Brands).map(([brand, products]) =>
// //                 Object.entries(products).map(([productName, productData]) => (
// //                   <Route
// //                     key={`${category}-${brand}-${productName}`}
// //                     path={`/categories/${category}/${brand}/${productName}`}
// //                     element={<Product data={productData} />}
// //                   />
// //                 ))
// //               )
// //             )}
// //           </Routes>
// //         </Main>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import Products from './data/Products.json';
// import './App.css';
// import { Nav, Main } from './components/styledComponents/Index';
// import Home from './components/Home';
// import Category from './components/Category';
// import Brand from './components/Brand';
// import Product from './components/Product';
// import Tab from './components/Tab';
// import Filter from './components/Filter';
// import TabList from './features/tabs/TabList';
// import AddTab from './features/tabs/AddTab';
// import EditTab from './features/tabs/EditTab';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//         <Nav>
//             <ul>
//               <li>
//                 <Link to="/"><img src='https://img.freepik.com/free-photo/order-concept-with-wooden-block-paper-basket-icon-blue-table-flat-lay-man-hand-pointing_176474-10443.jpg?w=996&t=st=1679479112~exp=1679479712~hmac=5f0797dfffa2fdec5f1f23ff9817459064cd53d30a40aa75f6d1750689f36d8c' height={72} width={156} alt="Home"></img></Link>
//               </li>
//               <li>
//                 <Link to="/categories/TV">TV</Link>
//               </li>
//               <li>
//                 <Link to="/categories/Mobile%20Phones">Mobile Phones</Link>
//               </li>
//               <li>
//                 <Link to="/categories/Laptops">Laptops</Link>
//               </li>
//               <li>
//                 <Link to="/categories/Men%20Clothing">Men's Clothing</Link>
//               </li>
//               <li>
//                 <Link to="/categories/Bagpacks">Bagpacks</Link>
//               </li>
//               <li>
//                 <Link to="/categories/Men%20Grooming">Men's Grooming</Link>
//               </li>
//             </ul>
//           </Nav>
//           {/* <Tab /> */}
//         </header>
//         <Main>
//           <Filter />
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path='/' element={<TabList />} />
//             <Route path='/add-tab' element={<AddTab />} />
//             <Route path='/edit-tab/:id' element={<EditTab />} />

//             {Object.entries(Products.categories).map(([category, data]) => (
//               <Route
//                 key={category}
//                 path={`/categories/${category}`}
//                 element={<Category data={data} category={category} />}
//               />
//             ))}
//             {Object.entries(Products.categories).map(([category, data]) =>
//               Object.entries(data.Brands).map(([brand]) => (
//                 <Route
//                   key={`${category}-${brand}`}
//                   path={`/categories/${category}/${brand}`}
//                   element={<Brand data={data} category={category} brand={brand} />}
//                 />
//               ))
//             )}
//             {Object.entries(Products.categories).map(([category, data]) =>
//               Object.entries(data.Brands).map(([brand, products]) =>
//                 Object.entries(products).map(([productName, productData]) => (
//                   <Route
//                     key={`${category}-${brand}-${productName}`}
//                     path={`/categories/${category}/${brand}/${productName}`}
//                     element={<Product data={productData} />}
//                   />
//                 ))
//               )
//             )}
//           </Routes>
//         </Main>
//       </div>
//     </Router>


//     //Redux Part
//     // <Routes>
//     //   <Route path='/' element={<TabList />} />
//     //   <Route path='/add-user' element={<AddTab />}/>
//     //   <Route path='/edit-user/:id' element={<EditTab />} />
//     // </Routes>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Products from "./data/Products.json";
import "./App.css";
import { Nav, Main } from "./components/styledComponents/Index";
import Home from "./components/Home";
import Category from "./components/Category";
import Brand from "./components/Brand";
import Product from "./components/Product";
import Tab from "./components/Tab";
import Filter from "./components/Filter";
import TabList from "./features/tabs/TabList";
import AddTab from "./features/tabs/AddTab";
import EditTab from "./features/tabs/EditTab";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav>
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="https://img.freepik.com/free-photo/order-concept-with-wooden-block-paper-basket-icon-blue-table-flat-lay-man-hand-pointing_176474-10443.jpg?w=996&t=st=1679479112~exp=1679479712~hmac=5f0797dfffa2fdec5f1f23ff9817459064cd53d30a40aa75f6d1750689f36d8c"
                    height={72}
                    width={156}
                    alt="Home"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to="/categories/TV">TV</Link>
              </li>
              <li>
                <Link to="/categories/Mobile%20Phones">Mobile Phones</Link>
              </li>
              <li>
                <Link to="/categories/Laptops">Laptops</Link>
              </li>
              <li>
                <Link to="/categories/Men%20Clothing">Men's Clothing</Link>
              </li>
              <li>
                <Link to="/categories/Bagpacks">Bagpacks</Link>
              </li>
              <li>
                <Link to="/categories/Men%20Grooming">Men's Grooming</Link>
              </li>
            </ul>
          </Nav>
          {/* <Tab /> */}
        </header>
        <Main>
          <Routes>
            <Route path="/" element={<TabList />} />
            <Route path="/add-tab" element={<AddTab />} />
            <Route path="/edit-tab/:id" element={<EditTab />} />
          </Routes>
          <Filter />
          <Routes>
            {Object.entries(Products.categories).map(([category, data]) => (
              <Route
                key={category}
                path={`/categories/${category}`}
                element={<Category data={data} category={category} />}
              />
            ))}
            {Object.entries(Products.categories).map(([category, data]) =>
              Object.entries(data.Brands).map(([brand]) => (
                <Route
                  key={`${category}-${brand}`}
                  path={`/categories/${category}/${brand}`}
                  element={
                    <Brand data={data} category={category} brand={brand} />
                  }
                />
              ))
            )}
            {Object.entries(Products.categories).map(([category, data]) =>
              Object.entries(data.Brands).map(([brand, products]) =>
                Object.entries(products).map(([productName, productData]) => (
                  <Route
                    key={`${category}-${brand}-${productName}`}
                    path={`/categories/${category}/${brand}/${productName}`}
                    element={<Product data={productData} />}
                  />
                ))
              )
            )}
          </Routes>
        </Main>
      </div>
    </Router>

    //Redux Part
    // <Routes>
    //   <Route path='/' element={<TabList />} />
    //   <Route path='/add-user' element={<AddTab />}/>
    //   <Route path='/edit-user/:id' element={<EditTab />} />
    // </Routes>
  );
}

export default App;




