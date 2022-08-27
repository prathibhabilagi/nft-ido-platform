
const products = [
    {
      id: 1,
      name: 'NFT Minting',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "",
      description: 'Minting NFT',
    },
    {
        id: 1,
        name: 'NFT Staking',
        href: '/',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "",
        description: "Stake your NFTs here and get Rewards",
      },
      {
        id: 1,
        name: 'NFTDO',
        href: '/',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "",
        description: 'Particiapte in NFT idos',
      },
      
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight py-4 text-gray-900">Our Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute  inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-md text-gray-500">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  