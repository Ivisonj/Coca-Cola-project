export default function Product({ params }: { params: { productId: string } }) {
    return <div>My post: {params.productId}</div>
}