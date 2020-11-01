import React, { useEffect, useState } from "react";
import List from "./List";
import "./../styles/App.css";

function App() {
  const [task, setTask] = React.useState("");
  const [list, setList] = React.useState([]);

  const addTask = (event) => {
    if (event.target.value === "") {
      return;
    }
    setTask(event.target.value);
  };
  const onAdd = () => {
    if (task === "") {
      return;
    }
    const copyList = [...list];
    copyList.push(task);
    setList(copyList);
    setTask("");
  };
  const deleteTask = (id) => {
    let copyList = [...list];
    copyList = copyList.filter((item, index) => {
      return index !== id;
    });
    setList(copyList);
  };

  const onSave = (id, task) => {
    if (task === "") {
      return;
    }
    let copyList = [...list];
    copyList[id] = task;
    setList(copyList);
  };

  return (
    <div id="main">
      <header>ToDo List</header>
      <br />
      <input type="text" id="task" onChange={addTask} value={task} />
      <button onClick={onAdd} id="btn">
        Add
      </button>
      <ol>
        {list.map((item, index) => {
          return (
            <List
              key={index}
              item={item}
              id={index}
              onSelect={deleteTask}
              onSave={onSave}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
