import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Profile';


test("searched movie is not shown, keep loading", async () => {
    render(<ProtectedRoute Component={Profile}/>, {wrapper: BrowserRouter});
    const content = screen.getByText(/Redirecting you to the login/i);
    expect(content).toBeInTheDocument();
})