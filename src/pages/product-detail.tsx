import { useParams } from "react-router-dom";
import ComponentTitle from "../components/landing/component-title-with-button";

const ProductDetailpage = () => {
  const {id} = useParams()
  // console.log("product id", id)
  return (
    <main>
      <ComponentTitle
        title="ThinkPad X1 Carbon Gen 11"
        subTitle="Home / Products / ThinkPad X1 Carbon Gen 11"
      />
    </main>
  );
};
export default ProductDetailpage;
