import { useState } from "react";

const Community = () => {
    const [title, setTitle] = useState<string>("HELLO")
    return(
      <div>
        COMMUNITY{" "}
        <button onClick={() => alert("Hello MIT")} style={{margin:"15px"}}>
            PressMe
        </button>
        </div>
    )
     
}

export default Community;