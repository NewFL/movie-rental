import './App.css';
import crossImage from './Images/Cross.png';
import checkImage from './Images/Check.png';

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
  {
    id: 3,
    name: "Movie 3",
    genre: "Comedy",
    price: 12,
    is_in_stock: false,
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
                <tr className='table-light' key={movie.id}>
                    <td>{movie.name}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.price} $</td>
                    <td>
                      <img 
                        src={movie.is_in_stock ? checkImage : crossImage} 
                        alt={movie.is_in_stock ? 'In Stock' : 'Out of Stock'} 
                        style={{ width: '20px', height: '20px' }} 
                      />
                </td>
                    <td>
                        <button className="btn btn-dark btn-rent " onClick={''}>
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
        