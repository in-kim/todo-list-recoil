import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector";
import styled from "styled-components";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ListWrapper>
      <ListItem>
        <span>Total items</span>
        <span>{totalNum}</span>
      </ListItem>
      <ListItem>
        <span>Items completed</span>
        <span>{totalCompletedNum}</span>
      </ListItem>
      <ListItem>
        <span>Items not completed</span>
        <span>{totalUncompletedNum}</span>
      </ListItem>
      <ListItem>
        <span>Percent completed</span>
        <span>{formattedPercentCompleted}</span>
      </ListItem>
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
  padding:0;
`;

const ListItem = styled.li`
  display: flex; flex:1;
  flex-direction: column;
  gap: 5px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 5px 6px -3px rgb(145 158 171 / 20%), 0px 9px 12px 1px rgb(145 158 171 / 14%), 0px 3px 16px 2px rgb(145 158 171 / 12%);
  
  padding:30px 10px;
  
  & > span {
    text-align: center;
  }
`;

export default TodoListStats;
