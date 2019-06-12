import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const bar_query = gql`
  query barQuery {
    Bars{
      name
      address
      description
      urlImage
      owner{
        names
      }
    }
  }
`

export class Queries extends Component {
  render() {
    return (
      <div className="bars_container">
        <Query query={bar_query}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading</h4>
              if (error) console.log(error)
              console.log(data)

              return <Fragment>
                {
                  data.Bars.map((bar, key) => (
                    <div  key={key} className="barContainer">
                      <Card className="card_bar">
                        <CardActionArea>
                          <CardMedia className="image"
                            image= {bar.urlImage}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {bar.name}
                            </Typography>
                            <Typography component="p">
                              {bar.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            {bar.address}
                          </Button>
                          <Button size="small" color="primary">
                            By {bar.owner.map((owner, key) => owner.names)}
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  ))
                }
              </Fragment>
            }
          }
        </Query>
      </div>
    );
  }
}

export default Queries;
