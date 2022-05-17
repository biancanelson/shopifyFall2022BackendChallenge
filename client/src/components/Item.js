import { GoTrashcan, GoPencil } from "react-icons/go";

function Item({ item, onDelete }) {
  return (
    <div className="item">
      <h3>
        Name: {item.name}{" "}
        <GoPencil style={{ color: "grey", cursor: "pointer" }} />{" "}
      </h3>
      <h3>
        Description: {item.description}
        <GoTrashcan
          style={{ color: "grey", cursor: "pointer" }}
          onClick={() => onDelete(item._id)}
        />
      </h3>
      <h3>UPC: {item.upc}</h3>
      <h3>SKU: {item.sku}</h3>
      <h3>Warehouse: {item.warehouse}</h3>
    </div>
  );
}

export default Item;
