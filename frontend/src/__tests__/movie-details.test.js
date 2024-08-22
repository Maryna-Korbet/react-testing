import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '../components/movie-details';

const selectedMovie = {
    id: 1,
    title: "some title",
    description: "some description",
    avg_rating: 3,
    no_of_ratings: 2
}

describe('MovieDetals component', () => {

    test("Should match a snapshot", () => {
        const { container } = render(<MovieDetails movie={selectedMovie} />);
        expect(container).toMatchSnapshot();
    });

    test("Should display title an descrition", () => {
        render(<MovieDetails movie={selectedMovie} />);
        expect(screen.getByText(selectedMovie.title)).toBeTruthy();
        expect(screen.getByText(selectedMovie.description)).toBeTruthy();
    });
});