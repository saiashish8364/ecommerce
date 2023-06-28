import { useParams } from "react-router-dom";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const ProductDetails = () => {
  const params = useParams();

  let index = productsArr.findIndex(
    (item) => item.title === params.productTitle
  );
  let element = productsArr[index];

  return (
    <>
      <section>
        <div>
          <img src={element.imageUrl} alt={element.title}></img>
        </div>
        <div>
          <h1>{element.title}</h1>
        </div>
        <div>
          <h1>{element.price}</h1>
        </div>
      </section>
      <div>
        <section>
          <h1>Reviews</h1>
        </section>
        <section>
          <h3>Very good product in online</h3>
        </section>
      </div>
    </>
  );
};
export default ProductDetails;
