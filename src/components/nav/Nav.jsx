import React from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";

export default function Header() {
    return (
        <div className="header">
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search" />
            </div>

            <div className="header-right">
                <div className="notification">
                    <FaBell className="notification-icon" />
                    <span className="notification-badge">6</span>
                </div>

                <div className="language-selector">
                    <img src="https://flagcdn.com/gb.svg" alt="English" className="flag-icon" />
                    <span>English</span>
                    <FaCaretDown className="dropdown-icon" />
                </div>

                <div className="profile">
                    <img src="https://via.placeholder.com/30" alt="User Profile" className="profile-pic" />
                    <div className="profile-info">
                        <span className="profile-name">Moni Roy</span>
                        <span className="profile-role">Admin</span>
                    </div>
                    <FaCaretDown className="dropdown-icon" />
                </div>
            </div>
        </div>
    );
};
