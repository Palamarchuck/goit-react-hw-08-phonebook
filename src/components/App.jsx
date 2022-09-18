import React from 'react';
// import Phonebook from './Phonebook/Phonebook';
import Navbar from './Navbar/Navbar';
import UserRoutes from 'UserRoutes';




export const App = () => {
  return (
    <div>
    <Navbar />
    <UserRoutes />
    {/* <Phonebook/> */}
    </div>
  );
};
