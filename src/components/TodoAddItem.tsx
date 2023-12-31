import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/TodoSlice';
import { Checkbox } from './Checkbox';

export const TodoAddItem = () => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ name, completed: isCompleted }));

    setName('');
    setIsCompleted(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form className='card mb-4 w-full flex-auto items-center' onSubmit={handleSubmitForm}>
      <Checkbox checked={isCompleted} handleChange={() => setIsCompleted(!isCompleted)} />

      <input
        className='flex flex-auto border border-white bg-white px-2 placeholder-gray-500 caret-blue focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:placeholder-slate-500'
        placeholder='Create a new todo...'
        value={name}
        onChange={handleChangeInput}
      />
    </form>
  );
};
