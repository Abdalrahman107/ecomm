import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categorySlider'],
    queryFn: async () => await axios.get('https://ecommerce.routemisr.com/api/v1/categories'),
  });
};
