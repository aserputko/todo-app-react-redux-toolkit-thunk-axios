import { useSelector } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { selectFilteredTodos } from '../slices/TodoSlice';
import { TodoListFooter } from './TodoListFooter';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <div className='flex w-full flex-col rounded-md border border-white bg-white py-1 shadow-xl dark:border-slate-800 dark:bg-slate-800'>
      {todos.map((todo: TodoEntity) => {
        return (
          <>
            <TodoListItem key={todo.id} todo={todo} />
            <hr className='border-gray-200 dark:border-slate-700' />
          </>
        );
      })}

      <TodoListFooter />
    </div>
  );
};
