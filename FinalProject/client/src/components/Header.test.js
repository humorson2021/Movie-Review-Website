import Header from "./Header";
import { render, screen } from '@testing-library/react';

test("app name is shown", () => {
    render(<Header app="test app" />);
    const headingElement = screen.getByRole("heading", {
        name: /Welcome to test app !/i,
    });
    expect(headingElement).toBeInTheDocument();

})