import Link from "next/link";

const ProductDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
      <Link href="/products">Back to the products page</Link>
    </>
  );
};

export default ProductDetail;
