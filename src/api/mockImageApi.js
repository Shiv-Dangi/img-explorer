import delay from './delay';
import axios from 'axios';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const images = [
  {
    id: "one",
    title: "image title",
    Href: "http://furniture.retailcatalog.us/products/2870211/small/sofa-1186-1.jpg"
  },
  {
    id: "two",
    title: "image title",
    Href: "https://pimg.tradeindia.com/01060850/s/2/Wooden-Handicraft-Furniture.jpg"
  },
  {
    id: "three",
    title: "image title",
    Href: "https://pimg.tradeindia.com/01571374/s/2/Cane-Furniture.jpg"
  },
  {
    id: "four",
    title: "image title",
    Href: "https://4.imimg.com/data4/XL/EB/MY-6812931/wooden-furniture-250x250.jpg"
  },
  {
    id: "five",
    title: "image title",
    Href: "https://pimg.tradeindia.com/02090479/s/2/Office-Modular-Furniture.jpg"
  },
  {
    id: "six",
    title: "image title",
    Href: "https://img2.exportersindia.com/product_images/bc-small/dir_139/4164856/furniture-sofa-2940986.jpg"
  },
  {
    id: "seven",
    title: "image title",
    Href: "http://www.kumbakonamguide.com/box%20ads/Furnitures/Kumbakonam-Furniture-Shops-05%20(2).gif"
  },
  {
    id: "eight",
    title: "image title",
    Href: "http://rent2cash.com/assets/images/uploads/2016/12/08/291089/lease-furniture-in-bandra-east-mumbai_1.jpg"
  },
  {
    id: "nine",
    title: "image title",
    Href: "http://furniture.retailcatalog.us/products/1328954/small/smith-brothers-furniture-angular-ottoman-3691-0-.jpg"
  },
  {
    id: "ten",
    title: "image title",
    Href: "https://4.imimg.com/data4/XL/EB/MY-6812931/wooden-furniture-250x250.jpg"
  },
  {
    id: "eleven",
    title: "image title",
    Href: "https://pimg.tradeindia.com/02090479/s/2/Office-Modular-Furniture.jpg"
  },
  {
    id: "twaele",
    title: "image title",
    Href: "https://img2.exportersindia.com/product_images/bc-small/dir_139/4164856/furniture-sofa-2940986.jpg"
  }
];


class ImageApi {
  static getAllImages(search_term) {
    let apiUrl = `https://pixabay.com/api/?key=6543367-ec7c3010a9628a86e2bd471bd&q=${search_term}&image_type=photo`;
    return axios.get(apiUrl);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Object.assign([], images));
    //   }, delay);
    // });
  }
}

export default ImageApi;
