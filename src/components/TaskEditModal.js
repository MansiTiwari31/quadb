import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasksSlice';

const TaskEditModal = ({ task, onClose }) => {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (text.trim()) {
      dispatch(editTask({ id: task.id, text }));
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Task</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskEditModal;
