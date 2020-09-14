import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import RestaurantListPage from './RestaurantListPage';

export default class App extends React.Component {
    render() {
        return <div>
            <RestaurantListPage />
        </div>;
    }
}
