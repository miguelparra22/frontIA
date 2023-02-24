

import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormularioGPT3 } from './routes/FormularioGPT3';
import { FormDALLE} from './routes/FormDALLE';
import { Home } from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h1>Ups error</h1>
  },
  {
    path: 'ChatGpt3',
    element: <FormularioGPT3 />
  },
  {
    path: 'DALLE',
    element: <FormDALLE />
  }
]);

function App() {
  return (

    <React.Fragment>

      <RouterProvider router={router}></RouterProvider>

    </React.Fragment>


  );
}

export default App;
