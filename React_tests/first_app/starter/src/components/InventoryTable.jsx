import React, { useState } from 'react';
import inventoryData from '../inventory.json'; // Import JSON file

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const filterItems = (items) => {
        return items.filter(item => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const isInStock = !inStockOnly || item.quantity > 0;
            return matchesSearchTerm && isInStock;
        });
    };

    const sportingGoods = inventoryData.sporting_goods;
    const electronics = inventoryData.electronic;

    const filteredSportingGoods = filterItems(sportingGoods);
    const filteredElectronics = filterItems(electronics);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setInStockOnly(event.target.checked);
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <input type="text" placeholder="Search..." value={searchTerm} style={{ marginRight: '10px' }}
                    onChange={handleSearchChange} />
                <label>
                    <input type="checkbox" checked={inStockOnly} style={{ marginRight: '5px' }}
                        onChange={handleCheckboxChange} />
                    In Stock
                </label>
            </div>

            <h2>Sporting Goods</h2>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSportingGoods.length > 0 ? (
                        filteredSportingGoods.map(item => (
                            <tr key={item._id}>
                                <td style={{ colour: item.quantity > 0 ? 'black' : 'red' }}>{item.name}</td>
                                <td>£{item.price.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No items found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h2>Electronics</h2>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredElectronics.length > 0 ? (
                        filteredElectronics.map(item => (
                            <tr key={item._id}>
                                <td style={{ colour: item.quantity > 0 ? 'black' : 'red' }}>{item.name}</td>
                                <td>£{item.price.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No items found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
