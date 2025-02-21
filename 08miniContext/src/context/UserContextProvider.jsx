import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setuser] = React.useState(null)
    return (
        <UserContext value={{user, setuser}}>
            {children}
        </UserContext>
    )
}

export default UserContextProvider;