import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTodos, selectActiveTodosCount } from '../slices/TodoSlice';
import { TodoFilters } from './TodoFilters';

export const TodoListFooter = () => {
  const dispatch = useDispatch();
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const handleClearCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className='flex flex-auto justify-between bg-white px-5 py-4 text-sm text-gray-500 sm:py-5 dark:bg-slate-800 dark:text-slate-500'>
      <div>{activeTodosCount} item(s) left</div>

      <div className='hidden flex-auto sm:flex'>
        <TodoFilters />
      </div>

      <button
        className='hover:text-dark dark:hover:text-white'
        type='button'
        onClick={() => handleClearCompletedTodos()}
      >
        Clear Completed
      </button>
    </div>
  );
};
