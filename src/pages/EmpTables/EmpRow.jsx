import { Link } from "react-router-dom";

const ToyRow = ({ toy, index }) => {
  // console.log(toy);
  const { subCategory, name, price, availableQuantity, sellerName, _id } = toy;

  return (
    <tr className="text-xl font-medium bg-black  hover">
      <td className="">{index + 1}</td>
      <td className="">{sellerName}</td>
      <td className="">{name}</td>
      <td className="">{subCategory}</td>
      <td className="">{price}</td>
      <td className="">{availableQuantity}</td>
      <td>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
