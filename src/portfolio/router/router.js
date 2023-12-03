import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "../pages/About";
import Experiance from "../pages/Experiance";



export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* <Route path="/about" element={<About />} />
            <Route path="/exp" element={<Experiance />} /> */}
        </Route>
    )
)