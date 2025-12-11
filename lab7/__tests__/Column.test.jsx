import { render, screen, fireEvent } from '@testing-library/react';
import Column from '../src/components/Column';
import React from 'react';

const mockColumn = { id: 'col-1', title: 'To Do' };
const mockTasks = [
    { id: 1, content: 'Task 1', columnId: 'col-1' },
];

describe('Column Component', () => {
    test('renders title and task', () => {
        render(
            <Column
                column={mockColumn}
                tasks={mockTasks}
                allColumns={[mockColumn]}
                onRename={() => { }}
                onDeleteColumn={() => { }}
                onAddTask={() => { }}
                onMoveTask={() => { }}
                onDeleteTask={() => { }}
                onAddLabel={() => { }}
            />
        );
        expect(screen.getByText('To Do')).toBeInTheDocument();
        expect(screen.getByText('Task 1')).toBeInTheDocument();
    });

    test('calls onAddTask when adding a card', () => {
        const onAddTask = jest.fn();
        render(
            <Column
                column={mockColumn}
                tasks={[]}
                allColumns={[mockColumn]}
                onRename={() => { }}
                onDeleteColumn={() => { }}
                onAddTask={onAddTask}
                onMoveTask={() => { }}
                onDeleteTask={() => { }}
                onAddLabel={() => { }}
            />
        );

        fireEvent.click(screen.getByText('+ Add Card'));
        const input = screen.getByPlaceholderText('Enter card details...');
        fireEvent.change(input, { target: { value: 'New Card' } });
        fireEvent.click(screen.getByText('Add'));

        expect(onAddTask).toHaveBeenCalledWith('col-1', 'New Card');
    });
});
