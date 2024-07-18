import './App.css';
import IconList from './IconList';

const moviesArray = [
  {
    id: 1,
    name: "Movie 1",
    genre: "Action",
    price: 10,
    is_in_stock: true,
  },
  {
    id: 2,
    name: "Movie 2",
    genre: "Action",
    price: 8,
    is_in_stock: true,
  },
];


const AvailableMovies = () => {
  return (
    <>
    <div className='available-movies-container'>
    <div className="row mb-4">
      <h3 className='text-center'>Available movies</h3>
    </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Price for 12h</th>
            <th>Is in stock</th>
          </tr>
        </thead>
        <tbody>
            {moviesArray.map((movie) => (
                <tr className='mb-2' key={movie.id}>
                    <td>{movie.name}</td>
                    <td className='movie-item'>{movie.genre}</td>
                    <td>{movie.price} $</td>
                    <td>{movie.is_in_stock}</td>
                    <td>
                        <button className="btn btn-dark btn-rent" onClick={''}>
                Rent
            </button></td>
                </tr>
            ))}
        </tbody>

        </table>
    </div>
    </>
    );
}

export default AvailableMovies;
        