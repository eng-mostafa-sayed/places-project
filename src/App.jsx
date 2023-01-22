import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/:userId/places" element={<UserPlaces />} exact />
          <Route path="/places/new" element={<NewPlace />} exact />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
