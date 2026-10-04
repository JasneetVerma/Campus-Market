
import { useLocation, useNavigate } from 'react-router-dom';

function PreviewListing() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfbf7] px-4">
        <h2 className="text-xl font-semibold text-gray-800">
          No listing to preview
        </h2>
        <button
          onClick={() => navigate('/sell')}
          className="mt-4 bg-[#70416d] text-white px-6 py-3 rounded-lg"
        >
          Create Listing
        </button>
      </div>
    );
  }

  const handleSaveDraft = () => {
    alert('Listing saved as draft! Backend integration will be added later.');
  };

  const handlePublish = () => {
    alert(`Listing ${product.productId} is ready to publish!`);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] px-4 py-8">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs text-gray-500 mb-5">
          Home <span className="text-purple-700">› Sell</span> › Preview
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Product Images */}
          <div className="lg:col-span-4">
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              {product.images?.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-400">No Image Available</span>
              )}
            </div>

            <div className="flex gap-2 mt-3 overflow-x-auto">
              {product.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-16 h-16 object-cover rounded border border-gray-200"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5">
            <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
              {product.condition}
            </span>

            <h1 className="text-2xl font-bold text-gray-900">
              {product.productName}
            </h1>

            <p className="text-2xl font-bold text-[#70416d] mt-2">
              ₹{Number(product.price).toLocaleString('en-IN')}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-gray-600 mt-6">
              <span>✦ {product.condition}</span>
              <span>▣ {product.category}</span>
              <span>◉ Product ID: {product.productId}</span>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {product.negotiable && (
              <p className="text-sm text-green-700 mt-4 font-medium">
                ✓ Price is negotiable
              </p>
            )}
          </div>

          {/* Seller Information */}
          <div className="lg:col-span-3 space-y-6">

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-5">
                Seller Information
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#70416d] text-white flex items-center justify-center text-lg">
                  S
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Campus Seller
                  </p>
                  <p className="text-xs text-gray-500">
                    Verified Student
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-[#70416d] text-white py-3 rounded-md text-sm mt-6 hover:bg-[#5b3458]"
              >
                Message Seller
              </button>

              <button
                type="button"
                className="w-full border border-[#70416d] text-[#70416d] py-3 rounded-md text-sm mt-3 hover:bg-purple-50"
              >
                Make an Offer
              </button>
            </div>

            <div className="bg-white border border-purple-100 rounded-xl p-5">
              <h3 className="font-semibold mb-4">Stay Safe</h3>

              <ul className="text-xs text-gray-700 space-y-3">
                <li>✓ Meet in a public place</li>
                <li>✓ Verify the item before buying</li>
                <li>✓ Pay only after checking the item</li>
              </ul>

              <p className="text-xs text-purple-800 mt-4">
                Learn more about safe buying
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-16">
          <button
            onClick={() => navigate('/sell', { state: { product } })}
            className="border border-[#70416d] text-[#70416d] px-8 py-4 rounded-md text-sm hover:bg-purple-50"
          >
            Back to Edit
          </button>

          <button
            onClick={handleSaveDraft}
            className="bg-[#f5a078] text-white px-8 py-4 rounded-md text-sm hover:bg-[#e99068]"
          >
            Save to Drafts
          </button>

          <button
            onClick={handlePublish}
            className="bg-[#70416d] text-white px-8 py-4 rounded-md text-sm hover:bg-[#5b3458]"
          >
            Publish Listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewListing;