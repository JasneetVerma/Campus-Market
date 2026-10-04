
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sell() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    negotiable: false,
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (images.length + selectedFiles.length > 5) {
      alert('You can upload a maximum of 5 photos.');
      return;
    }

    setImages([...images, ...selectedFiles]);
  };

  const handlePreview = (e) => {
    e.preventDefault();

    if (
      !formData.productName ||
      !formData.description ||
      !formData.category ||
      !formData.condition ||
      !formData.price
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (Number(formData.price) <= 0) {
      alert('Please enter a valid price.');
      return;
    }

    navigate('/preview', {
      state: {
        product: {
          ...formData,
          images: images.map((image) => URL.createObjectURL(image)),
          productId: `PROD-${Date.now()}`,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] px-4 py-8">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs text-gray-500 mb-4">
          Home <span className="text-purple-700">› Sell</span> › Create Listing
        </p>

        <div className="bg-white border border-gray-300 rounded-sm p-6 sm:p-8">

          <h1 className="text-2xl font-bold text-gray-900">
            Sell Something
          </h1>

          <h2 className="text-sm font-semibold text-purple-800">
            Create a Listing
          </h2>

          <p className="text-xs text-gray-500 mb-6">
            Tell other students about your item.
          </p>

          <form onSubmit={handlePreview}>

            {/* Upload Photos */}
            <label className="block text-sm font-semibold mb-2">
              Upload Photos
            </label>

            <label className="border border-dashed border-gray-300 rounded-lg min-h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-purple-50 transition mb-8">
              <span className="w-10 h-10 rounded-full bg-[#f5e8f1] text-purple-800 flex items-center justify-center text-2xl mb-2">
                +
              </span>

              <span className="text-xs font-medium">
                Add up to 5 photos
              </span>

              <span className="text-xs text-gray-400 mt-1">
                Click to upload photos
              </span>

              <span className="text-[10px] text-gray-400">
                PNG, JPG up to 5MB each
              </span>

              <input
                type="file"
                accept="image/png,image/jpeg"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {images.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Product ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setImages(images.filter((_, i) => i !== index))
                      }
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Listing Details
            </h3>

            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Product Name *
              </label>
              <input
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="e.g. MacBook Air M1"
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your item, its condition, features, etc."
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Category and Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Books">Books</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Sports">Sports</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Condition *
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select condition</option>
                  <option value="Like New">Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Used">Used</option>
                </select>
              </div>
            </div>

            {/* Price and Negotiable */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Price (₹) *
                </label>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-400">
                  <span className="bg-gray-100 px-4 py-3 text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="price"
                    min="1"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. 45,500"
                    className="w-full px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Negotiable
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                  <input
                    type="checkbox"
                    name="negotiable"
                    checked={formData.negotiable}
                    onChange={handleChange}
                    className="accent-purple-700"
                  />
                  I'm open to offers
                </label>
              </div>
            </div>

            {/* Preview Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-[#70416d] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#5b3458] transition"
              >
                Preview Listing
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Sell;