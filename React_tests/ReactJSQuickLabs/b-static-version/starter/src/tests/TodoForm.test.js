import React from 'react';
import { create } from 'react-test-renderer';
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
})