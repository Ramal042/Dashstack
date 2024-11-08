// Sidebar.js
import React from 'react';
import "./Sidebar2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar, faPaperPlane, faPen, faExclamationTriangle, faSkull, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Inbox() {

    return ( 
        <div className='H'>
            <div className="sidebar2">
                <button className="compose-button">+ Compose</button>
                <div className="menu-section">
                    <h3>My Email</h3>
                    <ul className="menu-list">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} /> Inbox <span className="count">1253</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar} /> Starred <span className="count">245</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPaperPlane} /> Sent <span className="count">24,532</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPen} /> Draft <span className="count">09</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faExclamationTriangle} /> Spam <span className="count">14</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSkull} /> Important <span className="count">18</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTrash} /> Bin <span className="count">9</span>
                        </li>
                    </ul>
                </div>
                <div className="label-section">
                    <h3>Label</h3>
                    <ul className="label-list">
                        <li><span className="label primary"></span> Primary</li>
                        <li><span className="label social"></span> Social</li>
                        <li><span className="label work"></span> Work</li>
                        <li><span className="label friends"></span> Friends</li>
                        <li><button className="create-label-button">+ Create New Label</button></li>
                    </ul>
                </div>
            </div>
            <h3 style={{ marginTop: '20px', marginLeft: '300px' }}>Please Wait...</h3>
            <div>
                <svg className='svg' viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
        </div>
    );
};