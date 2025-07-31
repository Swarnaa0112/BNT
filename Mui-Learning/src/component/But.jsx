import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
function But() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br /> <br />
      <Button variant="contained" disabled={true}>
        Disabled Contained
      </Button>
      <Button variant="contained" disableElevation={true}>
        Contained
      </Button>
      <br /> <br />
      <Button
        variant="contained"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Contained
      </Button>
      <br /> <br />
      
      <Container >
      <Button variant="contained" color="warning">Contained</Button>
      <Button variant="contained" color="warning" size="large">Contained</Button>
      <Button variant="contained" color="warning" size="small">Contained</Button>
            <br /> <br />
            {/* hover */}
      <Button variant="contained" sx={{backgroundColor:"blue", color: "pink","&:hover":{backgroundColor:"pink", color:"blue"}}}>Contained</Button>
      </ Container >

    </>
  );
}
export default But;
