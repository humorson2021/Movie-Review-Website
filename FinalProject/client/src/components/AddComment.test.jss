import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AddComment from './AddComment';
import { Auth0Provider } from "@auth0/auth0-react";

test("add comment form", async () => {
    render(<AddComment />, {wrapper: BrowserRouter, Auth0Provider});
    const addButton = screen.getByRole("button", {
        name: /Submit your comment/i,
    });
    expect(addButton).toBeInTheDocument();
    await userEvent.click(addButton);

});