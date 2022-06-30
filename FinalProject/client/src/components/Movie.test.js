import { render, screen } from '@testing-library/react';
import Task from './Movie';
import {BrowserRouter} from 'react-router-dom';

test("searched movie is not shown, keep loading", async () => {
    render(<Task/>, {wrapper: BrowserRouter});
    const divArray = screen.getAllByRole("div");
    expect(divArray).toHaveLength(1);
})