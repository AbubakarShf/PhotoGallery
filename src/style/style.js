import { makeStyles } from "@mui/styles"
const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palatte.background.paper,
    padding: "30px",
  },
  buttons: {
    marginTop: "40px !important",
  },
  icon: {
    marginRight: "20px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //16:9
  },
  cardContent:{
    flexGrow:1,
  },
  footer:{
    background:'black',
    padding:'20px',
    color:'white',
  }
}))
export default useStyles
