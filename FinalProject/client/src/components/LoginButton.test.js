import { render, screen } from '@testing-library/react';
import LoginButton from './LoginButton';
import {BrowserRouter} from 'react-router-dom';

test("login button", async () => {
    render(<LoginButton/>, {wrapper: BrowserRouter});
    const addButton = screen.getByRole("button", {
        name: /Login/i,
    });
    expect(addButton).toBeInTheDocument();
})