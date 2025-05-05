import { Product } from '../types/product';

export const products: Product[] = [
  // Breads
  {
    id: 1,
    name: 'Artisan Sourdough',
    description: 'Traditional sourdough bread with a crispy crust and soft, airy interior.',
    price: 60,
    imageUrl: 'https://www.farmhouseonboone.com/wp-content/uploads/2023/04/artisan-sourdough-boule-7-1024x573.jpg',
    category: 'breads',
    featured: true,
    ingredients: ['Organic flour', 'Water', 'Salt', 'Sourdough starter'],
    allergens: ['Gluten', 'Wheat'],
    nutritionalInfo: {
      calories: 120,
      fat: 0.5,
      carbs: 24,
      protein: 4
    }
  },
  {
    id: 2,
    name: 'Multigrain Loaf',
    description: 'Healthy multigrain bread packed with seeds and whole grains.',
    price: 50,
    imageUrl: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    category: 'breads',
    ingredients: ['Whole wheat flour', 'Oats', 'Flax seeds', 'Sunflower seeds', 'Honey'],
    allergens: ['Gluten', 'Wheat'],
    nutritionalInfo: {
      calories: 140,
      fat: 2.5,
      carbs: 22,
      protein: 5
    }
  },
  {
    id: 3,
    name: 'French Baguette',
    description: 'Classic French baguette with a crisp crust and light, airy interior.',
    price: 35,
    imageUrl: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg',
    category: 'breads',
    popular: true,
    ingredients: ['Flour', 'Water', 'Salt', 'Yeast'],
    allergens: ['Gluten', 'Wheat'],
    nutritionalInfo: {
      calories: 130,
      fat: 0.5,
      carbs: 26,
      protein: 4
    }
  },
  {
    id: 4,
    name: 'Ciabatta Loaf',
    description: 'Italian bread with a light, porous texture and crisp crust.',
    price: 44,
    imageUrl: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
    category: 'breads',
    ingredients: ['Flour', 'Water', 'Salt', 'Yeast', 'Olive oil'],
    allergens: ['Gluten', 'Wheat'],
    nutritionalInfo: {
      calories: 135,
      fat: 1.5,
      carbs: 25,
      protein: 4.5
    }
  },
  
  // Cakes
  {
    id: 5,
    name: 'Chocolate Cake',
    description: 'Rich, moist chocolate cake with decadent chocolate frosting.',
    price: 24,
    imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'cakes',
    featured: true,
    popular: true,
    ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Eggs', 'Butter', 'Vanilla'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalInfo: {
      calories: 320,
      fat: 16,
      carbs: 42,
      protein: 4
    }
  },
  {
    id: 6,
    name: 'Vanilla Bean Cake',
    description: 'Light and fluffy vanilla cake with real vanilla bean frosting.',
    price: 28,
    imageUrl: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg',
    category: 'cakes',
    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla beans'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalInfo: {
      calories: 290,
      fat: 14,
      carbs: 38,
      protein: 3.5
    }
  },
  {
    id: 7,
    name: 'Carrot Cake',
    description: 'Moist carrot cake with walnuts and cream cheese frosting.',
    price: 15,
    imageUrl: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    category: 'cakes',
    ingredients: ['Flour', 'Sugar', 'Carrots', 'Walnuts', 'Cream cheese', 'Cinnamon'],
    allergens: ['Gluten', 'Dairy', 'Eggs', 'Nuts'],
    nutritionalInfo: {
      calories: 340,
      fat: 18,
      carbs: 40,
      protein: 5
    }
  },
  {
    id: 8,
    name: 'Red Velvet Cake',
    description: 'Classic red velvet cake with cream cheese frosting.',
    price: 28,
    imageUrl: 'https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg',
    category: 'cakes',
    popular: true,
    ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Red food coloring', 'Buttermilk', 'Cream cheese'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalInfo: {
      calories: 330,
      fat: 17,
      carbs: 41,
      protein: 4.5
    }
  },
  
  // Pastries
  {
    id: 9,
    name: 'Butter Croissant',
    description: 'Flaky, buttery French croissant, baked fresh daily.',
    price: 29,
    imageUrl: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'pastries',
    featured: true,
    popular: true,
    ingredients: ['Flour', 'Butter', 'Sugar', 'Yeast', 'Salt'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalInfo: {
      calories: 240,
      fat: 12,
      carbs: 26,
      protein: 5
    }
  },
  {
    id: 10,
    name: 'Cinnamon Roll',
    description: 'Soft, gooey cinnamon roll with cream cheese frosting.',
    price: 30,
    imageUrl: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg',
    category: 'pastries',
    popular: true,
    ingredients: ['Flour', 'Butter', 'Sugar', 'Cinnamon', 'Cream cheese'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalInfo: {
      calories: 320,
      fat: 14,
      carbs: 45,
      protein: 5
    }
  },
  {
    id: 11,
    name: 'Chocolate Eclair',
    description: 'Delicate choux pastry filled with cream and topped with chocolate.',
    price: 14,
    imageUrl: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg',
    category: 'pastries',
    ingredients: ['Flour', 'Butter', 'Eggs', 'Cream', 'Chocolate'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalInfo: {
      calories: 290,
      fat: 16,
      carbs: 30,
      protein: 6
    }
  },
  {
    id: 12,
    name: 'Apple Turnover',
    description: 'Flaky pastry filled with cinnamon-spiced apples.',
    price: 34,
    imageUrl: 'https://images.pexels.com/photos/6605203/pexels-photo-6605203.jpeg',
    category: 'pastries',
    ingredients: ['Flour', 'Butter', 'Apples', 'Cinnamon', 'Sugar'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalInfo: {
      calories: 260,
      fat: 13,
      carbs: 32,
      protein: 3
    }
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getPopularProducts = () => {
  return products.filter(product => product.popular);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};