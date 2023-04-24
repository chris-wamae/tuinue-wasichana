import { useDispatch } from "react-redux";
import { updateCharity } from "../features/charity/charitiesSlice";

function ReviewCharity(){

    return(
      <div className="button-div">
          <button id="accept-button">Accept</button>
          <button id="reject-button">Reject</button>
      </div>
    )
  }
  
  export default ReviewCharity;