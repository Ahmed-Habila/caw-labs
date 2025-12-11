import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../src/components/TaskCard';
import React from 'react';

const mockTask = {
    id: 1,
    content: 'Simple Task',
    columnId: 'col-1',
    labels: []
};

const mockColumns = [
    { id: 'col-1', title: 'To Do' },
    { id: 'col-2', title: 'Done' }
];

describe('TaskCard Component', () => {
    test('renders content', () => {
        render(<TaskCard task={mockTask} currentColumnId="col-1" allColumns={mockColumns} />);
        expect(screen.getByText('Simple Task')).toBeInTheDocument();
    });

    test('can move task via dropdown', () => {
        const onMove = jest.fn();
        render(
            <TaskCard
                task={mockTask}
                currentColumnId="col-1"
                allColumns={mockColumns}
                onMove={onMove}
            />
        );

        // Find select
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'col-2' } });

        expect(onMove).toHaveBeenCalledWith(1, 'col-2');
    });
});
