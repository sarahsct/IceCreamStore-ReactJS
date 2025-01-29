import React, { useState } from "react";

function Feedback() {


    const [tasks, setTasks] = useState(["Very Flavorful"]);
    const [temp, setTemp] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    function handleText(event) {
        setTemp(event.target.value)
    }

    function handleTask() {
        setIsSubmitted(true);
        if (temp.trim() && !tasks.includes(temp.trim())) {
          setTasks((prevTasks) => [...prevTasks, temp.trim()]);
          setTemp("");
          setIsSubmitted(false); 
        }
      }

    function handleTaskDelete(index){
        setTasks(tasks.filter((e,i) => i !== index));
    }

    function resetInput() {
        setTemp(""); 
        setIsSubmitted(false); 
    }

    return (
        <div><p>Post your Review here</p>
            <input type="text"
            value={temp}            
            onChange={handleText} 
            placeholder="Add your Comment"/><br/>
            <button onClick={handleTask}>Add Comment </button>        
            <button onClick={resetInput}>Reset</button>

            {isSubmitted && !temp.trim() && <p className="error">Comment cannot be empty</p>}

           <ul>
            <li>Best in Town!!</li>
            <li>Service is Slow</li>
                {
                tasks.map((e, i) => <li key={i}>{e}
                <button onClick={() => handleTaskDelete(i)}>x</button>
                </li>
                )
                }
            </ul>
        </div>
    );

}
export default Feedback

