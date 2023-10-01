import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../components/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";

import Media from "../components/Media/Media";
import MediaImgDetail from "../components/Media/MediaImgDetail";

import MyAccount from "../components/Profile/MyAccount";

import UserOverview from "../components/User/UserOverview";
import BannedUser from "../components/User/BannedUser";
import UserAccount from "../components/User/UserAccount";

// import Shop from "../pages/Shop";
import Cashier from "../pages/Cashier";
import SaleVoucher from "../pages/SaleVoucher";
import Recent from "../components/Recent";

import Daily from "../components/Finance/Daily";
import Monthly from "../components/Finance/Monthly";
import Yearly from "../components/Finance/Yearly";
import Custom from "../components/Finance/Custom";

import SaleReport from "../components/Report/SaleReport";

// import Products from "../components/Products";
// import StockControl from "../components/StockControl";
// import ManageBrands from "../components/ManageBrands";
// import Cashier from "../components/Cashier";

const Path = () => {
  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Dashboard view={<Home />} />
            </React.Suspense>
          }
        /> */}
        <Route path="/" element={<Dashboard view={<Home />} />} />
        <Route path="/*" element={<Error />} />

        {/* media routes start*/}
        <Route path="/media/media-grid" element={<MediaImgDetail />} />
        <Route path="/media" element={<Dashboard view={<Media />} />} />
        {/* media routes start*/}

        {/* profile routes start*/}
        <Route
          path="/my-profile"
          element={<Dashboard view={<MyAccount />} />}
        />

        {/* profile routes start*/}

        {/* sale routes start*/}
        <Route path="/voucher" element={<SaleVoucher />} />
        <Route path="/cashier" element={<Cashier />} />
        {/* sale routes end*/}

        {/* user routes start*/}

        <Route
          path="/user-overview"
          element={<Dashboard view={<UserOverview />} />}
        />
        <Route
          path="/user-profile/:id"
          element={<Dashboard view={<UserAccount />} />}
        />

        <Route
          path="/banned-user"
          element={<Dashboard view={<BannedUser />} />}
        />
        {/* user routes start*/}

        {/* sale routes start*/}

        <Route path="/recent" element={<Dashboard view={<Recent />} />} />
        {/* sale routes start*/}

        <Route
          path="/report-sale"
          element={<Dashboard view={<SaleReport />} />}
        />

        {/* finance routes start*/}
        <Route path="/finance-daily" element={<Dashboard view={<Daily />} />} />
        <Route path="/finance-daily" element={<Dashboard view={<Daily />} />} />
        <Route
          path="/finance-monthly"
          element={<Dashboard view={<Monthly />} />}
        />
        <Route
          path="/finance-yearly"
          element={<Dashboard view={<Yearly />} />}
        />
        <Route
          path="/finance-custom"
          element={<Dashboard view={<Custom />} />}
        />
        {/* finance routes end*/}

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Path;
