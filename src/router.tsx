// src/router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import TicketDetails from "./pages/projects/tickets/TicketDetails"
import Package from "./pages/estimator/Package"
import UserManagement from "./pages/user/UserManagement"
import CustomerList from "./pages/customer/CustomerList"
import JSONFormRenderer from "./pages/render-forms/JSONFormRenderer"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<TicketDetails />}/>
            <Route path="/estimator" element={<Package />}/>
            <Route path="/user" element={<UserManagement />}/>
            <Route path="/customer" element={<CustomerList />}/>
            <Route path="/jsonformrenderer" element={<JSONFormRenderer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
