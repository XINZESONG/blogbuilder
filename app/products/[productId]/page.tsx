import Link from "next/link";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
      <Link href={`/products/${params.productId}/reviews/1`}>
        Back to the review page
      </Link>
      <br />
      <Link href="/products">Back to the products page</Link>
    </>
  );
};

export default ProductDetail;
