import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 600,
    title: "This is My Product",
    description: "The First Product I ever load",
  },
  {
    id: "p2",
    price: 700,
    title: "This is My New Product",
    description: "The New Product",
  },
  {
    id: "p3",
    price: 500,
    title: "This is My First Book",
    description: "The First Product I ever load",
  },
  {
    id: "p4",
    price: 900,
    title: "This is Rule",
    description: "The First Rule I ever load",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((data) => (
          <ProductItem
            id={data.id}
            key={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
