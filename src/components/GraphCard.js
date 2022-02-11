import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

const GraphCard = (props) => {
  const options = {
    legend: { display: false, },
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">
          {props.chartName}
        </Typography>
        <Line data={props.data} options={options}/>
      </CardContent>
    </Card>
  );
}

export default GraphCard
