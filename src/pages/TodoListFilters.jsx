import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom";
import styled from 'styled-components';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <Wrapper>
      Filter:
      <Select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex; align-items: center; gap:5px;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Select = styled.select`
  height:35px;
  border-radius: 5px;
  border:0;
  box-shadow: 0px 5px 6px -3px rgb(145 158 171 / 20%), 0px 9px 12px 1px rgb(145 158 171 / 14%), 0px 3px 16px 2px rgb(145 158 171 / 12%);

  padding:10px;
`;

export default TodoListFilters
