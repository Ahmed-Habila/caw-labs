import { render, screen } from '@testing-library/react';
import Column from '../src/components/Column';
import React from 'react';

const mockTasks = [
    { id: 1, title: 'Task 1', description: 'Desc 1', status: 'To Do' },
    { id: 2, title: 'Task 2', description: 'Desc 2', status: 'To Do' },
];

describe('Column Component', () => {
    test('renders title and task count', () => {
        render(
            <Column
                title="To Do"
                status="To Do"
                tasks={mockTasks}
                onMove={() => { }}
                onDelete={() => { }}
            />
        );
        expect(screen.getByText('To Do')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    test('renders tasks', () => {
        render(
            <Column
                title="To Do"
                status="To Do"
                tasks={mockTasks}
                onMove={() => { }}
                onDelete={() => { }}
            />
        );
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Desc 1')).toBeInTheDocument();
    });
});
