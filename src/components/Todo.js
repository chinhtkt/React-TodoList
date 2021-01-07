import React,{ useState } from "react";


export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
      }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
             Nhập tên mới cho {props.name}
            </label>
            <input id={props.id} className="todo-text" type="text" 
            value={newName}
            onChange={handleChange}
            />
          </div>
          <div className="btn-group">
            <button type="button" className="btn todo-cancel"
            onClick={() => setEditing(false)}
            >
              Hủy
              <span className="visually-hidden">Trên list {props.name}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Lưu
              <span className="visually-hidden">Nhập tên mới cho {props.name}</span>
            </button>
          </div>
        </form>
      );
      const viewTemplate = (
        <div className={props.completed ? 'stack-small complete': 'stack-small'}>
          <div className='c-cb'> 
              <input
                id={props.id}
                type="checkbox"
                onClick={() => (props.toggleTaskCompleted(props.id))}
                
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn"
              onClick={() => setEditing(true)}
              >
                Sửa <span className="visually-hidden">{props.name}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
              >
                Xóa <span className="visually-hidden">{props.name}</span>
              </button>
            </div>
            <hr></hr>
        </div>
      );
    return  <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
    
  }