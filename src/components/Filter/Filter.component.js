import React, { useState } from 'react';
import { StyledFilter } from './Filter.styled';

export default function Filter({ categories, regions, onFilterChange }) {
    const [category, setCategory] = useState('');
    const [region, setRegion] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleApplyFilters = () => {
        // Convert minPrice and maxPrice to numbers
        const filters = {
            category,
            region,
            minPrice: minPrice ? parseFloat(minPrice) : '',
            maxPrice: maxPrice ? parseFloat(maxPrice) : ''
        };
        onFilterChange(filters);
    };

    return (
        <StyledFilter>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Select Region</option>
                {regions.map((reg) => (
                    <option key={reg.id} value={reg.name}>{reg.name}</option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button onClick={handleApplyFilters}>Apply Filters</button>
        </StyledFilter>
    );
}
