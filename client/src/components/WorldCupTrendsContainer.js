import React, { Component } from 'react';
import * as urls from '../api/urls';

const getDataAsync = async url => {
  const response = {
    data: null,
    error: null,
  };
  try {
    response.data = await (await fetch(url)).json();
  } catch (err) {
    response.error = err;
  } finally {
    return response;
  }
};

export default class WorldCupTrendsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      players: [],
    };
  }

  componentDidMount() {
    console.log('cDM: ', 'WorldCupTrendsContainer');
    getDataAsync(urls.baseURL + urls.playersURL).then(res => {
      const { data, error } = res;
      if (error) {
        this.setState({ error: error.message });
      } else {
        this.setState(prevState => {
          return {
            players: [...prevState.players, ...data],
          };
        });
      }
    });
  }

  render() {
    return (
      <>
        <h2>Players</h2>
      </>
    );
  }
}
