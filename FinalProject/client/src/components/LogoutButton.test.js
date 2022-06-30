import { render, screen } from '@testing-library/react';
import LogoutButton from './LogoutButton';
import {BrowserRouter} from 'react-router-dom';

test("Logout button", async () => {
    render(<LogoutButton/>, {wrapper: BrowserRouter});
    const addButton = screen.getByRole("button", {
        name: /Logout/i,
    });
    expect(addButton).toBeInTheDocument();
})