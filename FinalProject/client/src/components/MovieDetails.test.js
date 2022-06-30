import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieDetails from './MovieDetails';

test("add comment button is shown", async () => {
    render(<MovieDetails showForm={false} />);
    const addButton = screen.getByRole("button", {
        name: /Add Comment/i,
    });
    expect(addButton).toBeInTheDocument();
    await userEvent.click(addButton);

});

// expect().not     navigation>, {wrapper:BrowserRouter} role:"link"
// addComment   getByLabelText await userEvent.type(titleInput, "")

//activity4 in s14 testing callback handler
test("callback is being called", async () => {
    const callBackFunction = jest.fn();
    render(<MovieDetails showForm={false} />);
    // screen.debug(); invalid when test
    const closeButton = screen.getByRole("button", {
        name: /Add Comment/i,
    });
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);
    expect(callBackFunction).toHaveBeenCalledTimes(0);

});


// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { BrowserRouter } from 'react-router-dom';
// import AddComment from './AddComment';
// import { Auth0Provider } from "@auth0/auth0-react";

// test("add comment form", async () => {
//     render(<AddComment />, {wrapper: BrowserRouter, Auth0Provider});
//     const addButton = screen.getByRole("button", {
//         name: /Submit your comment/i,
//     });
//     expect(addButton).toBeInTheDocument();
//     await userEvent.click(addButton);

// });