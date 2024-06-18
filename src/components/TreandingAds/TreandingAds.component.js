import React, { useEffect,useState } from 'react';
import { StyledTreandingAds } from './TreandingAds.styled';
import {TreandingAd} from '..';
import {Filter} from '..';
import axios from 'axios';



const baseUrl = process.env.REACT_APP_API_URL;

export default function TreandingAds() {
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: '',
    region: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    // Define fetchProducts inside useEffect
    const fetchProducts = () => {
      let url = `${baseUrl}/products/`;
      if (filters.category) url += `category=${filters.category}&`;
      if (filters.region) url += `region=${filters.region}&`;
      if (filters.minPrice) url += `minPrice=${filters.minPrice}&`;
      if (filters.maxPrice) url += `maxPrice=${filters.maxPrice}&`;
  
      console.log(`Fetching products from: ${url}`); // Debug log
  
      axios.get(url)
        .then(response => {
          setProducts(response.data);
          console.log('Products fetched:', response.data); // Debug log
        })
        .catch(error => console.error('Error fetching products:', error));
    };
  
    // Call fetchProducts after defining it
    fetchProducts();
    fetchCategories();
    fetchRegions();
  }, [filters]);


  const fetchCategories = () => {
    axios.get(`${baseUrl}/categories/`)
      .then(response => {
        setCategories(response.data);
        console.log('Categories fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching categories:', error));
  };

  const fetchRegions = () => {
    axios.get(`${baseUrl}/regions/`)
      .then(response => {
        setRegions(response.data);
        console.log('Regions fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching regions:', error));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <StyledTreandingAds>
      <h1>Treanding Ads</h1>
      <Filter categories={categories} regions={regions} onFilterChange={handleFilterChange} />
      <div className="treanding-ads-cont">
        {products.map((product) => (
          <TreandingAd
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image_url}
          />
        ))}
      </div>
    </StyledTreandingAds>
  );
}
