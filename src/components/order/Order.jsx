import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useState } from 'react';
import { FaFilter, FaRedo } from 'react-icons/fa';

export default function Order() {
    const [date, setDate] = useState('');
    const [orderType, setOrderType] = useState('');
    const [orderStatus, setOrderStatus] = useState('');

    const handleReset = () => {
        setDate('');
        setOrderType('');
        setOrderStatus('');
    };

    const orders = [
        { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Book', status: 'Processing' },
        { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Medicine', status: 'Rejected' },
        { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Mobile', status: 'Completed' },
        { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Watch', status: 'Processing' },
        { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '15 Aug 2019', type: 'Medicine', status: 'Completed' },
    ];

    const statusStyles = {
        Completed: { backgroundColor: '#C3EFD4', color: '#1A7F38' },
        Processing: { backgroundColor: '#E9D9FD', color: '#6A0DD0' },
        Rejected: { backgroundColor: '#FFE1DF', color: '#D9534F' },
        'On Hold': { backgroundColor: '#FFE7D2', color: '#E48A07' },
        'In Transit': { backgroundColor: '#E1F4FD', color: '#0F7CBB' },
    };


    return (
        <>
            <div style={styles.filterBar}>
                <div style={styles.filterIcon}>
                    <FaFilter size={20} />
                    <span style={styles.filterText}>Filter By</span>
                </div>

                <select style={styles.select} value={date} onChange={(e) => setDate(e.target.value)}>
                    <option value="">Date</option>
                    <option value="today">Today</option>
                    <option value="this_week">This Week</option>
                    <option value="this_month">This Month</option>
                </select>

                <select style={styles.select} value={orderType} onChange={(e) => setOrderType(e.target.value)}>
                    <option value="">Order Type</option>
                    <option value="online">Online</option>
                    <option value="in_store">In Store</option>
                </select>

                <select style={styles.select} value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
                    <option value="">Order Status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>

                <button style={styles.resetButton} onClick={handleReset}>
                    <FaRedo style={{ marginRight: 4 }} />
                    Reset Filter
                </button>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody style={styles.tbody}>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{order.date}</td>
                            <td>{order.type}</td>
                            <td>
                                <span style={{ ...styles.statusBadge, ...statusStyles[order.status] }}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

const styles = {
    filterBar: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'rgb(290, 290, 292)',
        borderRadius: '8px',
        height: '50px',
        marginTop: "80px",
        marginLeft: '-1250px',
    },
    filterIcon: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
    },
    filterText: {
        marginLeft: '5px',
        fontWeight: 'bold',
    },
    select: {
        marginRight: '15px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: 'white',
    },
    resetButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'red',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    table: {
        width: '1100px',
        borderCollapse: 'collapse',
        margin: '20px 0',
        fontSize: '1rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'rgb(290, 290, 292)',
        marginTop: '170px',
        marginLeft: '-590px',
        borderRadius: '10px',
    },
    header: {
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
    },
    th: {
        padding: '10px 15px',
        borderBottom: '1px solid #ddd',
    },
    td: {
        padding: '10px 15px',
        borderBottom: '1px solid #ddd',
        textAlign: 'left',
    },

    tbody: {
       textAlign:"center"
    },

    statusBadge: {
        padding: '5px 10px',
        borderRadius: '5px',
        fontWeight: 'bold',
        display: 'inline-block',
    },
};
