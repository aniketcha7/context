import { createContext } from "react";




const HealthDataContext = createContext({
    users: [
        {
            id: 0,
            name: '',
            BP: 0,
            SBP: 0,
            DBP: 0
        }
    ]
})

// const HealthDataContextWrapper: React.FC<any> = (props) => {
//     const {children } = props
//     return (
//         // <HealthDataContext.Provider>
//         //     {children}
//         // </HealthDataContext>
//     )
// }

export default HealthDataContext;