import React from 'react';

const Product = () => {
    const products = [
        {
            id: 1,
            image: 'https://theapplewiki.com/images/applewiki/thumb/9/91/Apple_Watch_Series_4.png/1200px-Apple_Watch_Series_4.png',
            name: 'Apple Watch Series 4',
            category: 'Digital Product',
            price: 690.0,
            piece: 63,
            colors: ['#000000', '#B3B3B3', '#FF6B6B'],
        },
        {
            id: 2,
            image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
            name: "Iphone 16 pro max",
            category: 'Iphone',
            price: 4900.0,
            piece: 13,
            colors: ['#000000', '#FF6B6B', '#3399FF', '#FFD700'],
        },
        {
            id: 3,
            image: 'https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326949yy7yw.png',
            name: "Women's Dress",
            category: 'Fashion',
            price: 640.0,
            piece: 635,
            colors: ['#A33B6A', '#66A3FF', '#3333CC', '#3366FF'],
        },
        {
            id: 4,
            image: 'data:image/jpeg;base64,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',
            name: 'Samsung A50',
            category: 'Mobile',
            price: 400.0,
            piece: 67,
            colors: ['#000000', '#00008B', '#A52A2A'],
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/50x50',
            name: 'Camera',
            category: 'Electronic',
            price: 420.0,
            piece: 52,
            colors: ['#000000', '#00008B', '#A52A2A'],
        },
    ];

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Piece</th>
                    <th>Available Color</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>
                            <img src={product.image} alt={product.name} className="product-image" />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>{product.piece}</td>
                        <td>
                            <div className="color-dots">
                                {product.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="color-dot"
                                        style={{ backgroundColor: color }}
                                    ></span>
                                ))}
                            </div>
                        </td>
                        <td>
                            <button className="action-button edit-button">✏️</button>
                            <button className="action-button delete-button">🗑️</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Product;
