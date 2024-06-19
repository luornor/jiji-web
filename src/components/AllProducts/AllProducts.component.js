import React, { useEffect, useState } from 'react';
import { StyledAllProducts } from './AllProducts.styled';
import {ProductCard} from '..';
import { Filter } from '..';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;


export default function AllProducts() {
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    category: '',
    region: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      setError(null);
      let url = `${baseUrl}/products?`;
      if (filters.category) url += `category=${filters.category}&`;
      if (filters.region) url += `region=${filters.region}&`;
      if (filters.minPrice) url += `min_price=${filters.minPrice}&`; // Ensure consistent URL parameter names
      if (filters.maxPrice) url += `max_price=${filters.maxPrice}&`; // Ensure consistent URL parameter names

      console.log(`Fetching products from: ${url}`); // Debug log

      axios.get(url,{
        headers: {
          'Content-Type': 'application/json',
        },
    })
        .then(response => {
          setProducts(response.data);
          console.log('Products fetched:', response.data); // Debug log
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setError('Error fetching products');
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const fetchCategories = () => {
      axios.get(`${baseUrl}/categories/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          setCategories(response.data);
          console.log('Categories fetched:', response.data); // Debug log
        })
        .catch(error => console.error('Error fetching categories:', error));
    };

    const fetchRegions = () => {
      axios.get(`${baseUrl}/regions/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          setRegions(response.data);
          console.log('Regions fetched:', response.data); // Debug log
        })
        .catch(error => console.error('Error fetching regions:', error));
    };

    fetchProducts();
    fetchCategories();
    fetchRegions();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <StyledAllProducts>
      <h1>Trending Ads</h1>
      <Filter categories={categories} regions={regions} onFilterChange={handleFilterChange} />
      <div className="trending-ads-cont">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            price={product.price}
            name={product.name}
            image={product.image_url}
          />
        ))}
      </div>
    </StyledAllProducts>
  );
}
