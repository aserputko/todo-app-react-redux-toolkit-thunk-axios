import { useDispatch } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { markTodoAsCompleted, removeTodo } from '../slices/TodoSlice';
import { Checkbox } from './Checkbox';

interface TodoListItemProps {
  todo: TodoEntity;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  const dispatch = useDispatch();
  const nameClassNames = todo.completed ? 'text-gray-300 dark:text-slate-600 line-through' : '';

  const handleMarkTodoAsCompleted = () => {
    dispatch(markTodoAsCompleted(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className='card group flex-auto items-center'>
      <Checkbox checked={todo.completed} handleChange={handleMarkTodoAsCompleted} />

      <span
        className={`flex flex-auto cursor-pointer px-2 ${nameClassNames}`}
        onClick={handleMarkTodoAsCompleted}
      >
        {todo.name}
      </span>

      <button
        className='group-hover:flex sm:hidden'
        type='button'
        onClick={() => handleRemoveTodo()}
      >
        <i className='icon icon-cross'></i>
      </button>
    </div>
  );
};
