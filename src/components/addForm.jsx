import React, { memo } from "react";

const AddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onsubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onsubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default AddForm;
