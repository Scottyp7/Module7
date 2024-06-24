import { useContext, createContext,useState } from 'react';


// 1. Create the context
const MoodContext = createContext();
// Custom provider component for this context.

// Use it in App.jsx like <UserProvider>...</UserProvider>
export const MoodProvider = (props) => {
    // store the current user in state at the top level
    const [currentMood, setCurrentMood] = useState(<p>&#129303;</p>);
    // sets user object in state, shared via context
    const handleUpdateMood = (mood) => {
        setCurrentMood(mood);
    }

    // 2. Provide the context.
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current user and an update function
    return (
        <MoodContext.Provider value={{ currentMood, handleUpdateMood }}>
            {props.children}
        </MoodContext.Provider>
    );
}

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useMoodContext = () => {
    return useContext(MoodContext);
}

// Save as UserContext.jsx in a separate 'context' folder