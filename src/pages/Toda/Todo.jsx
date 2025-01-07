import React, { useState } from "react";
function Todo() {
    const [todo, setTodo] = useState([]);
    const [input, setchange] = useState("");

    const getvalue = (e) => {
        setchange(e.target.value);
    };

    const addvalue = () => {
        let obj = {
            id: Math.floor(Math.random() * 10000),
            taskname: input
        };

        if (input.trim() !== "") {
            setTodo([...todo, obj]); 
        }

        setchange("");
    };

    const makedone = (event) => {
        const task = event.target.closest('.todo-item');
        if (task.style.color === "green") {
            task.style.color = "red";
            task.querySelector("p").textContent = "❌";
        } else {
            task.style.color = "green";
            task.querySelector("p").textContent = "✅";
        }
    };

    const removetask = (id) => {
        setTodo(todo.filter(item => item.id !== id)); 
    };
   
    return (
        <>
            <div className="todo-container">
                <input
                    className="todo-input"
                    placeholder="Enter task"
                    value={input}
                    onChange={getvalue}
                />
                <button className="todo-button" onClick={addvalue}>Add</button>
            </div>
            <div>
                <ul className="todo-list">
                    {todo.map((value) => {
                        return (
                            <li
                                className="todo-item"
                                key={value.id}
                                onMouseLeave={makedone}
                                onClick={() => removetask(value.id)}
                            >
                                 {value.taskname}<p>❌</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Todo;
