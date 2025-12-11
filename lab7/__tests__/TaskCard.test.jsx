import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../src/components/TaskCard';
import React from 'react';

const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    status: 'To Do',
};

describe('TaskCard Component', () => {
    test('renders task details', () => {
        render(<TaskCard task={mockTask} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    test('calls onMove when arrow button is clicked', () => {
        const onMove = jest.fn();
        render(<TaskCard task={mockTask} onMove={onMove} />);

        const forwardBtn = screen.getByTitle('Move Forward');
        fireEvent.click(forwardBtn);

        expect(onMove).toHaveBeenCalledWith(1, 'In Progress');
    });

    test('calls onDelete when delete button is clicked', () => {
        const onDelete = jest.fn();
        render(<TaskCard task={mockTask} onDelete={onDelete} />);

        const deleteBtn = screen.getByTitle('Delete Task');
        fireEvent.click(deleteBtn);

        expect(onDelete).toHaveBeenCalledWith(1);
    });
});
