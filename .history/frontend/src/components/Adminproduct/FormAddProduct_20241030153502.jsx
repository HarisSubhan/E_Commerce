import { Button } from "@mui/material";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

export const FormAddProduct = ({
  handleAddProduct,
  formFields,
  setFormFields,
}) => {
  const { productLoading, category } = useSelector((state) => state.product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="p-3">
        <div>
          <Form.Control
            onChange={handleChange}
            value={formFields.title}
            name="title"
            placeholder="Title"
          />
        </div>
        <div>
          <label>Paragraph</label>
          <Form.Control
            onChange={handleChange}
            value={formFields.pra}
            name="pra"
            placeholder="Paragraph"
          />
        </div>
        <div className="mt-3">
          <label>All Category</label>
          <Form.Select
            onChange={handleChange}
            value={formFields.category}
            name="category"
          >
            <option value="">All Category</option>
            {category?.map((categoryItem) => (
              <option key={categoryItem._id} value={categoryItem._id}>
                {categoryItem.categoryname}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="mt-3">
          <label>Description</label>
          <Form.Control
            onChange={handleChange}
            value={formFields.description}
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="d-flex mt-3">
          <div className="w-100">
            <label>Product Date</label>
            <Form.Control
              onChange={handleChange}
              value={formFields.date}
              name="date"
              placeholder="Product Date"
            />
          </div>
          <div className="w-100">
            <label>Price</label>
            <Form.Control
              onChange={handleChange}
              value={formFields.price}
              name="price"
              placeholder="Price"
            />
          </div>
        </div>
        <div className="mt-3">
          <label>Gender</label>
          <Form.Select
            onChange={handleChange}
            value={formFields.gender}
            name="gender"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Children</option>
            <option>Other</option>
          </Form.Select>
        </div>
        <div className="mt-3">
          <label>Size</label>
          <Form.Select
            onChange={handleChange}
            value={formFields.size}
            name="size"
          >
            <option>Size</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
            <option>XXL</option>
          </Form.Select>
        </div>
        <div className="d-flex gap-3 mt-3">
          <Button onClick={handleAddProduct} variant="contained">
            {productLoading ? (
              <ColorRing
                visible={true}
                height="30"
                width="30"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : (
              "Add Product"
            )}
          </Button>
          <Button className="border">Save Product</Button>
        </div>
      </div>
    </>
  );
};
