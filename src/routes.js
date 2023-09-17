import Home from "./Pages/Home/Home"
import Book from "./Pages/Book/Book"
import BookShop from "./Pages/BookShop/BookShop"

const routes=[
    {path:'/' , element:<Home />},
    {path:'/book' , element:<Book />},
    {path:'/shop' , element:<BookShop />},
]

export default routes