import React, { Component } from 'react';
import {
    Button,
    Row,
} from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = {
        restaurantNames: [],
        showNewRestaurantForm: false,
    }

    handleAddRestaurant = (newRestaurantName) => {
        this.setState(state => ({
            showNewRestaurantForm: false,
            restaurantNames: [
                newRestaurantName,
                ...state.restaurantNames,
            ]
        }));
    }

    handleShowNewRestaurantForm = () => {
        this.setState({ showNewRestaurantForm: true });
    }

    render() {
        const {
            restaurantNames,
            showNewRestaurantForm
        } = this.state;

        return (
            <div>
                <Row>
                    <Button
                        data-test="addRestaurantButton"
                        onClick={this.handleShowNewRestaurantForm}
                    >
                        Add Restaurant
                </Button>
                </Row>
                <Row>
                    {
                        showNewRestaurantForm
                            ?
                            <NewRestaurantForm
                                onSave={this.handleAddRestaurant}
                            />
                            : null
                    }
                </Row>
                <Row>
                    <RestaurantList restaurantNames={restaurantNames} />
                </Row>
            </div>
        )
    }
};
