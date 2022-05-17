import Item from "./Item";

function Inventory({ invList, onDelete }) {
  return (
    <>
      <div className="inventoryDisplay">
        {invList.map((item) => {
          return (
            <div>
              <Item key={item._id} item={item} onDelete={onDelete} />
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Inventory;
