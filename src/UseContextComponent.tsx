import {useState, useContext} from "react";

import UserContext, {UserState} from "./store";

//Sub component
function ConsumerComponent(){
    const user = useContext<UserState>(UserContext);

    return(
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
            
        </div>
    )

}

function UseContextComponent(){
    const [user, userSet] = useState<UserState>({
        first:"Jane",
        last:"Smith"
    })
    return(
        <UserContext.Provider value={user}>
            <ConsumerComponent/>
            <button
            onClick={() =>
            userSet({
                first:"Sita",
                last:"Wales"
            })
            }
            >
                Change Context!
            </button>
        </UserContext.Provider>
    )
}

export default UseContextComponent;