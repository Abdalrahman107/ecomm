import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useProducts = () => {
  return useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => await axios.get('https://ecommerce.routemisr.com/api/v1/products'),
  });
};