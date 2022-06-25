import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AddComment from './AddComment';

test("add comment form", async () => {
    render(<AddComment />, {wrapper: BrowserRouter});
    const addButton = screen.getByRole("button", {
        name: /Submit your comment/i,
    });
    expect(addButton).toBeInTheDocument();
    await userEvent.click(addButton);

});