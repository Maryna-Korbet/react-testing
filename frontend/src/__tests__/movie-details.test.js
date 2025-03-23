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

    // test("Should display color stars", () => {
    //     render(<MovieDetails movie={selectedMovie} />);
    //     const selected_stars = screen.getAllByClass('.orange');
    //     expect(selected_stars.length).toBe(selectedMovie.avg_rating);
    // });

   /*  test("Should display color stars", () => {
        const { container } = render(<MovieDetails movie={selectedMovie} />);
        const selected_stars = screen.container.querySelectorAll('.orange');
        expect(selected_stars.length).toBe(selectedMovie.avg_rating);
    }); */

  /*   test("Should display color stars", () => {
        render(<MovieDetails movie={selectedMovie} />);
        const stars = screen.container.querySelectorAll('.fa-star');
        const coloredStars = Array.from(stars).filter(star => star.classList.contains('orange'));
        expect(coloredStars.length).toBe(selectedMovie.avg_rating);
    }); */

    test("Should display color stars", () => {
    const { container } = render(<MovieDetails movie={selectedMovie} />);
    const selected_stars = container.querySelectorAll('.orange');
    expect(selected_stars.length).toBe(selectedMovie.avg_rating);
});
});