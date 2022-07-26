import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeIndex from './components/Home/HomeIndex';
import AboutIndex from './components/About/AboutIndex';
import TicketsIndex from './components/Tickets/TicketsIndex';
import DetailsIndex from './components/Tickets/DetailsIndex';
import RentIndex from './components/Rent/RentIndex';
import Header from './components/Shared/Header';
import EventsIndex from './components/Events/EventsIndex';
import EvDetailsIndex from './components/Events/DetailsIndex';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<HomeIndex />} />
                    <Route exact path='/about' element={<AboutIndex />} />
                    <Route exact path='/tickets' element={<TicketsIndex />} />
                    <Route
                        exact
                        path='/ticket-details'
                        element={<DetailsIndex />}
                    />
                    <Route exact path='/rent-venue' element={<RentIndex />} />
                    <Route
                        exact
                        path='/shows-events'
                        element={<EventsIndex />}
                    />
                    <Route
                        exact
                        path='/event-details'
                        element={<EvDetailsIndex />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
