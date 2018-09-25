import React, { Component } from "react";
import SeriesList from './SeriesList';
import Loader from './Loader';
import Intro from './Intro';


class Series extends Component {
   state = {
      series: [],
      seriesName: '',
      isFetching: false
   }

   onSeriesInputChange = (e) => {

      this.setState({ seriesName: e.target.value, isFetching: true })
      fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
         .then(res => res.json())
         .then(json => this.setState({ series: json, isFetching: false }))

      console.log(e);
      console.log(e.target.value);
   }

   render() {
      const { series, seriesName, isFetching } = this.state;
      return (
         <div>
        <Intro message="here  you can find al of your series" />
            <h3>the Lengrth of serries - {series.length}</h3>
            <input type="text" name="" id=""
               value={seriesName}
               onChange={this.onSeriesInputChange} />
            {
               series.length === 0 && seriesName.trim() === ''
               &&
               <p>please enter serien name</p>
            }
            {
               series.length === 0 && seriesName.trim() !== ''
               &&
               <p>no tv has been found</p>
            }
            {
               isFetching && <Loader />
            }
            {
               !isFetching && <SeriesList list={series} />
            }
            <SeriesList list={series} />
         </div>
      )
   }
}

export default Series;