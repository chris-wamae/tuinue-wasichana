import { useDispatch } from "react-redux";
import { deleteCharity } from "../features/admin/adminSlice";
import { approvedCharities } from "../features/admin/adminSlice";

function DeleteCharity({id}){
  const dispatch = useDispatch()
  const handleDelete = () => {dispatch(deleteCharity(id))}
    return(
      <div className="button-div">
          <button id="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    )
  }
  
  export default DeleteCharity;