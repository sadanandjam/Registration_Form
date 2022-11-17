import { useContext } from "react";
import { AmazonContext } from "./Amazon";
function Ama2(){
    const AmaContext=useContext(AmazonContext)
    return(
        <div>AmaContext={AmaContext.name}</div>
    )
}
export default Ama2;