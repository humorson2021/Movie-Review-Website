import { render, screen } from '@testing-library/react';
import ListOfSearch from './ListOfSearch';
import {BrowserRouter} from 'react-router-dom';

test("searched movie is not shown, keep loading", async () => {
    render(<ListOfSearch/>, {wrapper: BrowserRouter});
    const linkElement = screen.queryByText(/rate/i);
    expect(linkElement).toBeNull();
})