import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import HomeLayout from "./components/HomeLayout";
import HostLayout from "./components/HostLayout";
import HostDashboard from "./pages/Host/HostDashboard";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import HostVans from "./pages/Host/HostVans";
import VanDetails from "./pages/Vans/VanDetails";
import HostVanLayout from "./components/HostVanLayout";
import HostVanDetails from "./pages/Host/HostVan/HostVanDetails";
import HostVanPricing from "./pages/Host/HostVan/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVan/HostVanPhotos";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} loader={vansLoader} />
      <Route path="/vans/:id" element={<VanDetails />} />
      <Route path="/host" element={<HostLayout />}>
        <Route index element={<HostDashboard />} />
        <Route path="/host/income" element={<HostIncome />} />
        <Route path="/host/reviews" element={<HostReviews />} />
        <Route path="/host/vans" element={<HostVans />} />
        <Route path="/host/vans/:id" element={<HostVanLayout />}>
          <Route index element={<HostVanDetails />} />
          <Route path="/host/vans/:id/pricing" element={<HostVanPricing />} />
          <Route path="/host/vans/:id/photos" element={<HostVanPhotos />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
