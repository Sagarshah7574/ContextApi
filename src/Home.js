

import db from './db.json' 
import { useState } from 'react';
import SingleProduct from './SingleProduct';
// import faker from 'faker'
// faker.seed(20);
function Home() {

  const [products] = useState(db);
  // const productArray = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   qty: 1,
  // }));
                 
  return (
    <div>

    {products.map((MyData) => (
      // console.log(MyData.image)
      <SingleProduct prod={MyData} key={MyData.id} />
    ))}

  
  </div>

  );
}

export default Home;
