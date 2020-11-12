import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
const useStyle = makeStyles((theme)=> ({
    button:{
        margin: theme.spacing(1)
    }
}))
  
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

function Admin() {
    const classes = useStyle();
    return (
        <>
            <header>
                <Grid justify={"space-between"} alignItems={"flex-end"} container>
                    <Grid item>
                       <h2>Admin: Jeetesh</h2> 
                    </Grid>
                    <Grid item>
                        <div className="logo">Humpty Dumpty</div>
                    </Grid>
                    <Grid item>
                    <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    // onClick={()=> setSave(false)}
                    className={classes.button}
                    // startIcon={}
                    >Logout</Button>
                    </Grid>
                </Grid>
            </header>
            <main>
                <Grid container>
                    <Grid item className="side-nav">
                        <nav>

                        </nav>
                    </Grid>
                    <Grid item>
                    {/* <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" /> 
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart> */}
                    </Grid>
                </Grid>
            </main>
        </>
    )
}

export default Admin
