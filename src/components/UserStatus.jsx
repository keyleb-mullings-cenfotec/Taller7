import { useState } from "react";

function UserStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName] = useState('kmullings')


    // return (
    //     <>
    //         <div>
    //             Welcome dear user
    //         </div>
    //         <div>
    //             Login
    //         </div>
    //     </>
    // );

    // ======================== if / else ========================

    // if (isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome {userName}
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             Login
    //         </div>
    //     );
    // }

    // ======================== if ternario ========================

    // return (
    //     isLoggedIn ?
    //         <div>
    //             Welcome {userName}
    //         </div>
    //         :
    //         <div>
    //             Login
    //         </div>
    // )

    // ======================== variable ========================

    // let status;

    // if (isLoggedIn) {
    //     status = <div>Welcome {userName}</div>
    // } else {
    //     status = <div>Login</div>
    // }

    // return status;


    // ===================== Logic operator ========================

    // return (isLoggedIn && (
    //     <div>
    //         welcome {userName}
    //     </div>
    // )) || (
    //     <div>
    //         Login
    //     </div>
    // );

    // ======================== in Line ========================

    return (
        <div>
            {
                isLoggedIn ? (
                    <span>Welcome {userName}</span>
                ) : (
                    <span>Login</span>

                )}
        </div>

    );    
}

export default UserStatus;
