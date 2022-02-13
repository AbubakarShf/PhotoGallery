import { PhotoCamera } from "@mui/icons-material"
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography
} from "@mui/material"
import React from "react"
import useStyles from "./style/style"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
const App = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative' color='primary'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>PhotoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              color='textPrimary'
              align='center'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              color='textSecondary'
              align='center'
              gutterBottom
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae tenetur quisquam consequuntur, rem officiis ipsam
              aspernatur quibusdam totam beatae modi vero vel sint saepe facilis
              voluptatum quidem nam necessitatibus ducimus.
            </Typography>
          </Container>

          <Grid
            container
            spacing={2}
            justifyContent='center'
            className={classes.buttons}
          >
            <Grid item>
              <Button variant='contained' color='secondary'>
                Main Call to Action
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Secondary In Action
              </Button>
            </Grid>
          </Grid>
        </div>

        <Container maxWidth='md' className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card) => {
              return (
                <Grid item key={card} xs={12} md={6} sm={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title='Hello There!'
                      image='https://source.unsplash.com/random'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5' color='textSecondary'>
                        Heading
                      </Typography>
                      <Typography variant='p' color='textSecondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus voluptatum, enim veritatis placeat deleniti
                        quaerat maxime similique quia. Laudantium minima
                        praesentium illo ipsum, debitis placeat quod nisi
                        aperiam delectus aspernatur.
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button variant='outlined' color='primary'>
                        View
                      </Button>
                      <Button variant='outlined' color='secondary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
<Typography variant="h6" align="center" gutterBottom>
  footer
</Typography>
<Typography variant="subtitle1" align="center" gutterBottom>
  Something here to give a footer purpose!
</Typography>
      </footer>
    </React.Fragment>
  )
}

export default App
