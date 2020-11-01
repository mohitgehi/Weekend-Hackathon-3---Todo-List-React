import React from "react";
import "./../styles/App.css";

function List(props) {
  let item = props.item;
  let id = props.id;
  const [edit, setEdit] = React.useState(false);
  const [task, setTask] = React.useState("");
  const onEdit = () => {
    setEdit(!edit);
  };
  const addTask = (event) => {
    setTask(event.target.value);
  };
  const onSave = () => {
    if (task === "") {
      return;
    }
    setTask("");
    setEdit(false);
  };

  return (
    <>
      <li>{item}</li>
      <button
        onClick={() => {
          props.onSelect(id);
        }}
      >
        Delete
      </button>
      <button onClick={onEdit}>Edit</button>
      <br />
      {edit ? (
        <>
          <input type="textarea" onChange={addTask} value={task} />
          <button
            onClick={() => {
              props.onSave(id, task);
              onSave();
            }}
          >
            Save
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default List;
