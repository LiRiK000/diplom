import { ava } from "./ava";

type User = { 
  name: string;
  email: string;
  avatar?: string; 
  role: 'ADMIN' | 'USER';
  registrationDate: string; 
};


type tovar = { 

    id:number,
    title:string,
    price:number,
    img:string,
    rating:number,
};


export const users: User[] = [
  {
    name: 'admin',
    email: 'adminAlex.ru',
    avatar: ava,
    role: 'ADMIN',
    registrationDate: '07.06.2025',
  },
  {
    name: 'user1',
    email: 'user1@example.com',
    role: 'USER',
    registrationDate: '01.05.2024',
  },
];


export const tovarList:tovar[] = [

{
      id: 1,
      title: 'Футболки для малышей комплект 2 шт',
      price: 3250,
      img: 'https://basket-14.wbbasket.ru/vol2084/part208495/208495470/images/big/1.webp',
      rating: 2,
    },
    {
      id: 2,
      title: 'Детский вязаный костюм',
      price: 1015,
      img: 'https://basket-13.wbbasket.ru/vol1973/part197300/197300771/images/c246x328/1.webp',
      rating: 1,
    },
    {
      id: 3,
      title: 'Спортивный костюм для девочки',
      price: 1723,
      img: 'https://basket-12.wbbasket.ru/vol1884/part188449/188449379/images/c246x328/1.webp',
      rating: 1,
    },

]