import {Category} from './category.interface';
import {CreateDate} from './create-date.interface';

export interface Blog {
  id: number;
  createDate: CreateDate;
  title: string;
  category: Category;
  content: string;
  image: string;
}
