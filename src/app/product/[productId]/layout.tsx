
function generateNumber(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({ 
    children,
}: {
    children: React.ReactNode;
}) {

    const randomNumber = generateNumber(2);
    if(randomNumber===1) {
        throw new Error('Error loading occured for product');
    }
    return <>
        {children}
        <h1>Featured Product</h1>
    </>
}