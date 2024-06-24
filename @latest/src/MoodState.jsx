import './App.css'
import { useMoodContext } from './MoodContext';


// save in MoodChanger.jsx
function MoodChanger() {
    const {currentMood, handleUpdateMood} = useMoodContext();
    return (
        <div className="MoodChanger componentBox">
            Current Mood: {currentMood}
            <button className='btn1' onClick={() => handleUpdateMood(<p>&#128530;</p>)}>Sad</button>
            <button className='btn1' onClick={() => handleUpdateMood(<p>&#128512;</p>)}>Happy</button>
            <button className='btn1' onClick={() => handleUpdateMood(<p>&#129303;</p>)}>Unsure</button>
        </div>
        
) }
export default MoodChanger;