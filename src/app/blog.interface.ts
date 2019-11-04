import {Category} from './category.interface';

export interface Blog {
  id: number;
  createDate: string;
  title: string;
  category: Category;
  content: string;
  image: string;
}
