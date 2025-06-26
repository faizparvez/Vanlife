import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
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
import Login from "./pages/login";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import { makeServer } from "./mirage/server";



if (import.meta.env.MODE === "development") {
  makeServer({ environment: "development", logging: true });
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="/vans/:id" element={<VanDetails />} />

      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<HostDashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="/host/income"
          element={<HostIncome />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="/host/reviews"
          element={<HostReviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="/host/vans"
          element={<HostVans />}
          loader={async () => {
            return null;
          }}
        />

        <Route
          path="/host/vans/:id"
          element={<HostVanLayout />}
          loader={async () => {
            return null;
          }}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="/host/vans/:id/pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="/host/vans/:id/photos"
            element={<HostVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
