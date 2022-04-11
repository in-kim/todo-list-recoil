import { useRecoilState } from "recoil";
import { todoListState } from "../atom";
import styled from "styled-components";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <InputText type="text" value={item.text} onChange={editItemText} />
      <Button onClick={deleteItem}>X</Button>
    </Wrapper>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const InputText = styled.input`
  flex:1; 
  height:35px;
  border-radius: 5px;
  border:0;
  background-color: transparent;
  padding:0 20px;
  box-sizing: border-box;
`;

const Checkbox = styled.input`
  flex:0 0 25px; height:25px;
  border:solid 1px rgba(145, 158, 171, 0.24);
  box-sizing: border-box;
`;

const Button = styled.button`
  flex:0 0 35px; height:35px;
  font-size:30px; font-weight: 700;
  background-color: transparent;
  border:0;
`;

export default TodoItem;
