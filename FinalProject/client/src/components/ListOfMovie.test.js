import { render, screen } from '@testing-library/react';
import ListOfMovie from "./ListOfMovie";
import {BrowserRouter} from 'react-router-dom';

test("searched movie is not shown, keep loading", async () => {
    render(<ListOfMovie input="12" />, {wrapper: BrowserRouter});
    const linkElement1 = screen.getByText(/Loading/i);
    expect(linkElement1).toBeInTheDocument();

})