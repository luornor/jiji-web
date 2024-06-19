import { ThemeProvider } from "styled-components";
import { Theme } from "./style/Theme";
import { Header } from "./components";
import Global from "./style/Globals";
import  Home from "./pages/Home/Home.page.js";
import NotFound from './pages/NotFound/NotFound.page.js';
import ProductPage from './pages/ProductPage/ProductPage.page.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  return (
    <ThemeProvider theme={Theme.light}>
        <Global/>
        <BrowserRouter>
          <Header />
          <Routes> 
           <Route path="/" element={<Home />} />
           <Route path="*" element={<NotFound />} />
           <Route path="/product/:id" element={<ProductPage/>} />
          </Routes>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
