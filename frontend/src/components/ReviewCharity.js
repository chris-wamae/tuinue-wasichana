import { useDispatch } from "react-redux";
import { approveCharity } from "../features/admin/adminSlice";
import { pendingCharities } from "../features/admin/adminSlice";
import { rejectCharity } from "../features/admin/adminSlice";



function ReviewCharity({id}){
  const dispatch = useDispatch()
     const handleReview = (type) =>{
      switch(type){
        case "accept" :  dispatch(approveCharity(id))
        break;
        case "reject" : dispatch(rejectCharity(id))
        break;
        default : console.log("invalid")}
      }
    return(
      <div className="button-div">
          <button id="accept-button" onClick={() => handleReview("accept")}>Accept</button>
          <button id="reject-button" onClick={() => handleReview("reject")}>Reject</button>
      </div>
    )
  }
  
  export default ReviewCharity;