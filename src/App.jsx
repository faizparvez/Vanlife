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
import VanDetails, { loader as vanDetailsLoader } from "./pages/Vans/VanDetails";
import HomeLayout from "./components/HomeLayout";
import HostLayout from "./components/HostLayout";
import HostDashboard from "./pages/Host/HostDashboard";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanLayout, { loader as hostVanLayoutLoader } from "./components/HostVanLayout";
import HostVanDetails from "./pages/Host/HostVan/HostVanDetails";
import HostVanPricing from "./pages/Host/HostVan/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVan/HostVanPhotos";
import Login , { loader as loginLoader } from "./pages/login";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import { requireAuth } from "./mirage/utils";
import { makeServer } from "./mirage/server";



if (import.meta.env.MODE === "development") {
  makeServer({ environment: "development", logging: true });
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} loader={loginLoader} />
      <Route path="/about" element={<About />} />
      <Route
        path="/vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="/vans/:id"
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />

      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<HostDashboard />}
          loader={async () => {
            return await requireAuth();
          }}
        />
        <Route
          path="/host/income"
          element={<HostIncome />}
          loader={async () => {
            return await requireAuth();
          }}
        />
        <Route
          path="/host/reviews"
          element={<HostReviews />}
          loader={async () => {
            return await requireAuth();
          }}
        />
        <Route
          path="/host/vans"
          element={<HostVans />}
          loader={hostVansLoader}
        />

        <Route
          path="/host/vans/:id"
          element={<HostVanLayout />}
          loader={hostVanLayoutLoader}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="/host/vans/:id/pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="/host/vans/:id/photos"
            element={<HostVanPhotos />}
            loader={async () => {
              return await requireAuth();
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
