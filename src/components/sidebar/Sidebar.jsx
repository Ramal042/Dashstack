import React from "react";
import { FaTachometerAlt, FaBox, FaHeart, FaEnvelope, FaClipboardList, FaBoxes, FaDollarSign, FaCalendarAlt, FaTasks, FaAddressBook, FaFileInvoice, FaThLarge, FaUsers, FaTable, FaCog, FaPowerOff } from "react-icons/fa";


export default function Sidebar({ page, setPage }) {
  const handlePageChange = (event) => {
    const selectedPage = event.target.closest("a").getAttribute("id")
    setPage(selectedPage)
  }



  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="brand">
          <span className="brand-highlight">Dash</span>Stack
        </h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a onClick={handlePageChange} id="dashboard" className={page === "dashboard" ? "active" : ""}>
              <FaTachometerAlt />
              Dashboard
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="products" className={page === "products" ? "active" : ""}>
              <FaBox />
              Products
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="favoruites" className={page === "favoruites" ? "active" : ""}>
              <FaHeart />
              Favorites
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="inbox" className={page === "inbox" ? "active" : ""}>
              <FaEnvelope />
              Inbox
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="order" className={page === "order" ? "active" : ""}>
              <FaClipboardList />
              Order Lists
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="product" className={page === "product" ? "active" : ""}>
              <FaBoxes />
              Product Stock
            </a>
          </li>
        </ul>
        <hr />
        <h3 className="sidebar-section">Pages</h3>
        <ul>
          <li>
            <a onClick={handlePageChange} id="pricing" className={page === "pricing" ? "active" : ""}>
              <FaDollarSign />
              Pricing
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="calendar" className={page === "calendar" ? "active" : ""}>
              <FaCalendarAlt />
              Calendar
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="to-do" className={page === "to-do" ? "active" : ""}>
              <FaTasks />
              To-Do
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="contact" className={page === "contact" ? "active" : ""}>
              <FaAddressBook />
              Contact
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="invoice" className={page === "invoice" ? "active" : ""}>
              <FaFileInvoice />
              Invoice
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="ui-elements" className={page === "ui-elements" ? "active" : ""}>
              <FaThLarge />
              UI Elements
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="team" className={page === "team" ? "active" : ""}>
              <FaUsers />
              Team
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} id="table" className={page === "table" ? "active" : ""}>
              <FaTable />
              Table
            </a>
          </li>
        </ul>
        <hr />
        <ul className="sidebar-settings"> 
          <li>
            <a onClick={handlePageChange} className={page === "settings" ? "active" : ""} id="settings">
              <FaCog />
              Settings
            </a>
          </li>
          <li>
            <a onClick={handlePageChange} className={ page === "log-out" ? "active" : ""} id="log-out">
              <FaPowerOff />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};