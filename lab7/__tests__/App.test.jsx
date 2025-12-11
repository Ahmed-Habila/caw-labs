import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

describe('App Component', () => {
    test('renders Kanban Board title', () => {
        render(<App />);
        expect(screen.getByText('Kanban Board')).toBeInTheDocument();
    });

    test('renders all three columns', () => {
        render(<App />);
        expect(screen.getByText('To Do')).toBeInTheDocument();
        expect(screen.getByText('In Progress')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
    });

    test('can add a new task', () => {
        render(<App />);

        const titleInput = screen.getByPlaceholderText('New Task Title');
        const descInput = screen.getByPlaceholderText('Description (optional)');
        const addButton = screen.getByText('+ Add Task');

        fireEvent.change(titleInput, { target: { value: 'Test Task' } });
        fireEvent.change(descInput, { target: { value: 'Test Description' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });
});
