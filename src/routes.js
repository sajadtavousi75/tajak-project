import Home from "./Pages/Home/Home"
import Book from "./Pages/Book/Book"
import BookShop from "./Pages/BookShop/BookShop"
import Author from "./Pages/Author/Author"
import About from "./Pages/About/About"

const routes=[
    {path:'/' , element:<Home />},
    {path:'/book' , element:<Book />},
    {path:'/shop' , element:<BookShop />},
    {path:'/author' , element:<Author />},
    {path:'/about' , element:<About />},
]

export default routes