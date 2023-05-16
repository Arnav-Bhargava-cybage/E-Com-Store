// import React from "react";
// import { MemoryRouter } from "react-router-dom";
// import { render, screen } from "@testing-library/react";
// import App from "./App";

// describe("App", () => {
//   test("renders home link", () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     const homeLink = screen.getByAltText("Home");
//     expect(homeLink).toBeInTheDocument();
//   });

//   test("renders categories links", () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     const categories = [
//       "TV",
//       "Mobile Phones",
//       "Laptops",
//       "Men's Clothing",
//       "Bagpacks",
//       "Men's Grooming",
//     ];
//     categories.forEach((category) => {
//       const categoryLink = screen.getByText(category);
//       expect(categoryLink).toBeInTheDocument();
//     });
//   });

//   test("renders filter component", () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     const filter = screen.getByLabelText("Filter");
//     expect(filter).toBeInTheDocument();
//   });
// });
