import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonInput,
  IonButton,
} from '@ionic/react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonLabel>{todo.text}</IonLabel>
              <IonCheckbox
                slot="start"
                checked={todo.completed}
                onIonChange={() => toggleTodo(todo.id)}
              />
              <IonButton
                fill="clear"
                slot="end"
                onClick={() => removeTodo(todo.id)}
              >
                Delete
              </IonButton>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            placeholder="Add new todo"
            value={newTodoText}
            onIonChange={e => setNewTodoText(e.detail.value!)}
          />
          <IonButton slot="end" onClick={addTodo}>
            Add
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
