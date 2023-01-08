import React, { useState } from 'react'
type AuthProps = {
        name: string,
        mail?: string
}
export default function Auth(props: AuthProps) {
    const [user, setUser] = useState<AuthProps>({} as AuthProps);
    
    const hanlderLogIn =()=> {
        setUser({
            name: 'kamal'
        })
    }
  return (
    <div>
        {/* <button onClick={hanlderLogout}>Log Out</button> */}
        <button onClick={hanlderLogIn}>Log In</button>
        <p>{user.name}</p>
    </div>
  )
}
