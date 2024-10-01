import React, { ReactNode } from 'react';
interface AppProp {
    children:ReactNode
}
const App:React.FC<AppProp> = ({children}) => {
    return children
};

export default App;