import React from 'react';
import Highcharts from 'highcharts/highstock';
import Landing from '../components/Landing/Landing';
import SEO from '../components/Seo/Seo';

export default class App extends React.Component {
  state = {
    tickers: '',
    tickerHelperText: '',
    tickerInputError: false,
    tickerDisabled: true,
    chartLoading: false
  };

  constructor(props: any) {
    super(props);

    // Bind methods
    this.handleTextInput = this.handleTextInput.bind(this);
    this.makeChart = this.makeChart.bind(this);
  }

  handleTextInput(e: any) {
    this.setState(
      {
        tickers: e.target.value
      },
      this.validateTextInput
    );
  }

  validateTextInput() {
    const tickers = this.state.tickers;
    let helperText = '';
    if (/^[^A-Za-z]/.test(tickers)) {
      helperText = 'Must start with a letter';
    } else if (/[^A-Za-z|,|\s]/.test(tickers)) {
      helperText = 'Only letters and comma/space separated';
    } else if (/,\s?,/.test(tickers)) {
      helperText = 'Remove extra comma';
    } else if (this.state.tickers.replace(/,/g, ' ').trim().split(/\s+/).length > 4) {
      helperText = '4 or fewer tickers allowed';
    }

    this.setState({
      tickerHelperText: helperText,
      tickerInputError: Boolean(helperText),
      tickerDisabled: Boolean(helperText) || !this.state.tickers
    });
  }

  makeChart(e: any) {
    if (e) {
      e.preventDefault();
    }

    // Format the ticker string to send to the backend
    const tickers = this.state.tickers
      .replace(/,/g, ' ')
      .trim()
      .replace(/\s+/g, ',')
      .toUpperCase();

    // Disable the update button and activate the progress loader while the data is fetched
    this.setState({
      tickerDisabled: true,
      chartLoading: true
    });
    fetch(`http://localhost:3000/chartData/${tickers}`)
      .then((res) => res.json())
      .then((data) => {
        // Remove the progress loader
        this.setState(
          {
            chartLoading: false
          },
          () => {
            // Create the nice chart
            Highcharts.stockChart('stockChart', {
              title: {
                text: 'Closing Prices'
              },
              subtitle: {
                text: data
                  .filter((v: any) => v.data.length)
                  .map((v: any) => v.name)
                  .join(', ')
              },
              tooltip: {
                xDateFormat: '%Y-%m-%d',
                shared: true
              },

              series: data
            });
          }
        );
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          chartLoading: false
        });
      });
  }

  render() {
    return (
      <Landing
        handleTextInput={this.handleTextInput}
        tickerHelperText={this.state.tickerHelperText}
        tickerInputError={this.state.tickerInputError}
        tickerDisabled={this.state.tickerDisabled}
        chartLoading={this.state.chartLoading}
        makeChart={this.makeChart}
      >
        <SEO title='Home' />
      </Landing>
    );
  }
}
