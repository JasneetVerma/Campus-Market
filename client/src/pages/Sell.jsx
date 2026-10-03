function Sell() {
  return (
    <div>
      <h1>Sell Something</h1>

      <form>
        <label>Product Name</label>
        <input type="text" placeholder="Enter product name" />

        <br /><br />

        <label>Price</label>
        <input type="number" placeholder="Enter price" />

        <br /><br />

        <label>Category</label>
        <select>
          <option>Books</option>
          <option>Electronics</option>
          <option>Hostel Essentials</option>
          <option>Other</option>
        </select>

        <br /><br />

        <label>Condition</label>
        <select>
          <option>New</option>
          <option>Like New</option>
          <option>Used - Good</option>
          <option>Used - Fair</option>
        </select>

        <br /><br />

        <label>Description</label>
        <textarea placeholder="Describe your product" />

        <br /><br />

        <label>Product Image</label>
        <input type="file" accept="image/*" />

        <br /><br />

        <button type="button">Preview Listing</button>
      </form>
    </div>
  )
}

export default Sell