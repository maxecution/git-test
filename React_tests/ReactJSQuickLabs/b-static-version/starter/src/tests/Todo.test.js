import React from 'react';
import { create } from 'react-test-renderer';
import Todo from '../Components/Todo';
import TodoModel from '../Components/utils/Todo.model';

jest.mock('../Components/utils/Todo.model', () => {
    return class TodoModel {
        constructor() {
            this.todoDescription = 'Test Todo';
            this.todoDateCreated = '2019-05-04T15:30:00.000Z';
            this.todoCompleted = true;
        }
    };
});

test('it should render 2 tds with className completed if props.todo.todoCompleted is true', () => {
    const testTodo = new TodoModel();
    const testRendered = create(<Todo todo={testTodo} />);
    const testInstance = testRendered.root;

    const cells = testInstance.findAllByType('td');
    for (let i = 0, l = cells.length - 1; i < l; i++) {
        expect(cells[i].props.className).toBe('completed');
    }
});

test('it should render 2 tds with className completed if props.todo.todoCompleted is false', () => {
    const testTodo = new TodoModel();
    testTodo.todoCompleted = false;
    const testRenderer = create(<Todo todo={testTodo} />);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    for (let i = 0, l = cells.length - 1; i < l; i++) {
        expect(cells[i].props.className).toBe('');
    }
});

test('it should render "N/A" in the last td of the row if props.todo.todoComplted is true', () => {
    const testTodo = new TodoModel();
    const testRenderer = create(<Todo todo={testTodo} />);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    expect(cells[cells.length - 1].children).toContain('N/A');
});

test('it should render "Edit" in the last td of the row if props.todo.todoComplted is false', () => {
    const testTodo = new TodoModel();
    testTodo.todoCompleted = false;
    const testRenderer = create(<Todo todo={testTodo} />);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('a');
    expect(cells[cells.length - 1].children).toContain('Edit');
});