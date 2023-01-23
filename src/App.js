import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingPage from './components/booking/BookingPage';
import HomePage from './components/home/Page';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking-page' element={<BookingPage />} />



        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
