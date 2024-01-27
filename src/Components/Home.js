import React, { useState } from "react";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title, description }]);
    setDescription("")
    setTitle("")
  };

  const deleteTask = (index) => {
    const filterArr = tasks.filter((item, i) => {
      return i !== index;
    });

    setTasks(filterArr)
  };
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <button type="submit">ADD</button>
      </form>

      {tasks.map((item, i) => (
        <Task
          key={i}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={i}
        />
      ))}
    </div>
  );
};

export default Home;
