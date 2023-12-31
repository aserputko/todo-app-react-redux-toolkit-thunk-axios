import { useDispatch, useSelector } from 'react-redux';
import { TodoFilterBy } from '../models/TodoEntity';
import { filterTodosBy, selectTodosFilterBy } from '../slices/TodoSlice';

interface FilterOption {
  name: string;
  filterBy: TodoFilterBy;
  isActive: boolean;
}

export const TodoFilters = () => {
  const dispatch = useDispatch();
  const todosFilterBy = useSelector(selectTodosFilterBy);

  const handleFilterTodos = (filterBy: TodoFilterBy) => {
    dispatch(filterTodosBy(filterBy));
  };

  const todoFilterOptions: FilterOption[] = [
    {
      name: 'All',
      filterBy: TodoFilterBy.All,
      isActive: todosFilterBy === TodoFilterBy.All,
    },
    {
      name: 'Active',
      filterBy: TodoFilterBy.Active,
      isActive: todosFilterBy === TodoFilterBy.Active,
    },
    {
      name: 'Completed',
      filterBy: TodoFilterBy.Completed,
      isActive: todosFilterBy === TodoFilterBy.Completed,
    },
  ];

  const todoFilterButtons = todoFilterOptions.map((option: FilterOption, index: number) => {
    return (
      <button
        key={index}
        className={`mx-2 font-semibold hover:text-dark dark:hover:text-white ${
          option.isActive && 'text-blue'
        }`}
        type='button'
        onClick={() => handleFilterTodos(option.filterBy)}
      >
        {option.name}
      </button>
    );
  });

  return <div className='flex flex-auto justify-center'>{todoFilterButtons}</div>;
};
