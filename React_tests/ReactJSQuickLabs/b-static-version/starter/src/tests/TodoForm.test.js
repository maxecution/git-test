import React from 'react';
import { act, create } from 'react-test-renderer';
import TodoForm from '../Components/TodoForm';

jest.mock('../Components/utils/DateCreated', () => {
    return function MockDateCreated() {
        return <span testid='dateCreated'>Date Created Component</span>
    }
});

describe('TodoForm test suite', () => {
    describe('DateCreated function and render tests', () => {
        test('it should render a DateCreated component', () => {
            const testRenderer = create(<TodoForm />);
            const testInstance = testRenderer.root;
            const dateCreated = testInstance.find(
                el => el.type === 'span' && el.props.testid === 'dateCreated'
            );
            expect(dateCreated).toBeTruthy();
            expect(dateCreated.children).toContain('Date Created Component');
        });
    });
    describe('onChange event tests', () => {
        test('it should render the new value in the input when todoDescription onChange is activated', () => {
            const testValue = "Test";
            const { root: testInstance } = create(<TodoForm />);
            const descInput = testInstance.findByProps({ name: "todoDescription" })

            expect(descInput.props.value).toBe('');
            act(() => { descInput.props.onChange({ target: { value: testValue } }) });
            expect(descInput.props.value).toBe(testValue);
        })
    });
    describe('onChange event tests', () => {
        test('it should render the new value in the checkbox when todoCompleted onChange is activated', () => {
            const testValue = true;
            const { root: testInstance } = create(<TodoForm />);
            const descInput = testInstance.findByProps({ name: "todoCompleted" })

            expect(descInput.props.checked).toBe(false);
            act(() => { descInput.props.onChange({ target: { checked: testValue } }) });
            expect(descInput.props.checked).toBe(testValue);
        })
    });
})