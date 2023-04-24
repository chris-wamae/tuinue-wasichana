import { useDispatch } from "react-redux";
import { deleteCharity } from "../features/charity/charitiesSlice";

function DeleteCharity(){

    return(
      <div className="button-div">
          <button id="delete-button">Delete</button>
      </div>
    )
  }
  
  export default DeleteCharity;