export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'breads' | 'cakes' | 'pastries' | 'other';
  featured?: boolean;
  popular?: boolean;
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
}