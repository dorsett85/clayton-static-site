import React, {
  ChangeEventHandler,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  makeStyles,
  createStyles,
  Button,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListSubheader,
  TextField,
  Typography
} from '@material-ui/core';
import quickModelVideo from '../../assets/img/quickmodel-vid.mp4';
import ListSkillItem from '../ListSkillItem/ListSkillItem';
import Highcharts from 'highcharts/highstock';

const baseFetchUrl = `${
  process.env.NODE_ENV === 'development' ? 'https://localhost:5001' : ''
}/api`;

const useStyles = makeStyles((theme) =>
  createStyles({
    belowDivider: {
      marginTop: 12
    },
    sampleMedia: {
      width: '100%',
      boxShadow: '0 0 1px #373737'
    },
    tickerInputDiv: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      alignItems: 'baseline'
    },
    chartDivContainer: {
      position: 'relative',
      height: 400,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    chartLoader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    chartDiv: {
      height: '100%'
    }
  })
);

/**
 * Validate the ticker input string
 *
 * Validation checks occur when the string isn't empty. If a non-empty string is
 * returned then a validation error occurred.
 */
const validateTickers = (tickers: string): string => {
  if (tickers) {
    if (/^[^A-Za-z]/.test(tickers)) {
      return 'Must start with a letter';
    } else if (/[^A-Za-z|,\s]/.test(tickers)) {
      return 'Only letters and comma/space separated';
    } else if (/,\s?,/.test(tickers)) {
      return 'Remove extra comma';
    } else if (tickers.replace(/,/g, ' ').trim().split(/\s+/).length > 4) {
      return '4 or fewer tickers allowed';
    }
  }
  return '';
};

/**
 * Format the ticker string so it ends up in the form <TICKER>,<TICKER>,<...>
 */
const formatTickers = (tickers: string): string =>
  tickers.replace(/,/g, ' ').trim().replace(/\s+/g, ',').toUpperCase();

/**
 * Make a backend data request with the ticker string
 */
const fetchTickerData = (tickers: string): Promise<any> =>
  fetch(`${baseFetchUrl}/stockchart/${tickers}`).then((res) => res.json());

/**
 * Render a highcharts stock chart with data and an HTMLElement to render the
 * chart into
 */
const renderChart = (data: any, el: HTMLElement): void => {
  Highcharts.stockChart(el, {
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
};

const LandingModalVisualization: React.FC = () => {
  const classes = useStyles();
  const [tickers, setTickers] = useState('');
  const [tickerHelperText, setTickerHelperText] = useState('');
  const [chartLoading, setChartLoading] = useState(true);
  const stockChartRef = useRef<HTMLDivElement | null>(null);

  const makeChart = async (e?: SyntheticEvent): Promise<void> => {
    // If this function is fired from a form submission, make sure to run
    // preventDefault on the event.
    if (e) {
      e.preventDefault();
    }

    // Format the ticker string to send to the backend
    const formattedTickers = formatTickers(tickers);

    // Disable the update button and activate the progress loader while the data is fetched
    setChartLoading(true);

    try {
      const data = await fetchTickerData(formattedTickers);

      // Create the nice chart
      if (stockChartRef.current) {
        renderChart(data, stockChartRef.current);
      }
    } catch (err) {
      setTickerHelperText('Error loading chart data');
    }
    setChartLoading(false);
  };

  // First render makes a call to render a chart
  useEffect(() => {
    makeChart();
  }, []);

  // Perform ticker input validation
  useEffect(() => {
    setTickerHelperText(validateTickers(tickers));
  }, [tickers]);

  const handleTextOnInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTickers(target.value);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <form className={classes.tickerInputDiv} onSubmit={makeChart}>
            <TextField
              label='Enter stock tickers'
              placeholder='e.g., AAPL, GOOG'
              helperText={tickerHelperText}
              error={!!tickerHelperText}
              onInput={handleTextOnInput}
            />
            <Button
              type='submit'
              disabled={chartLoading || !tickers || !!tickerHelperText}
            >
              Update
            </Button>
          </form>
        </Grid>
      </Grid>
      <div className={classes.chartDivContainer}>
        {chartLoading && (
          <div className={classes.chartLoader}>
            <CircularProgress size={100} />
          </div>
        )}
        <div ref={stockChartRef} className={classes.chartDiv} />
      </div>
      <Divider />
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.belowDivider}
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <video className={classes.sampleMedia} playsInline muted autoPlay loop>
            <source src={quickModelVideo} type='video/mp4' />
          </video>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            My programming life began with reporting and data visualization projects in R.
            Those fundamental skills have led to providing extensive data driven insight
            to stakeholders through technical visualizations.
          </Typography>
          <Typography>
            I now offer analytic applications with the following libraries:
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <List subheader={<ListSubheader disableSticky>Javascript</ListSubheader>}>
            <ListSkillItem primaryText='Highcharts' secondaryText='See example above' />
            <ListSkillItem primaryText='Google Maps' />
            <ListSkillItem primaryText='Mapbox' />
            <ListSkillItem primaryText='Chart.js' />
            <ListSkillItem primaryText='Plotly' />
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <List subheader={<ListSubheader disableSticky>R</ListSubheader>}>
            <ListSkillItem iconComponentColor='blue' primaryText='ggplot2' />
            <ListSkillItem iconComponentColor='blue' primaryText='Leaflet R' />
            <ListSkillItem iconComponentColor='blue' primaryText='R Markdown/Shiny' />
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <List subheader={<ListSubheader disableSticky>Python</ListSubheader>}>
            <ListSkillItem iconComponentColor='green' primaryText='Matplotlib' />
            <ListSkillItem iconComponentColor='green' primaryText='ReportLab' />
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingModalVisualization;
