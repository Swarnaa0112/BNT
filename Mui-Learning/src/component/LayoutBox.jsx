import { Container } from "@mui/material";
import Box from "@mui/material/Box";

function LayoutBox() {
  return (
    <>
      <Box sx={{ backgroundColor: "greenyellow", width: 200, height: 100 }}>
        Hello
      </Box>
      <br /> <hr /> <br />
      <Container maxWidth="sm">
        <Box sx={{ backgroundColor: "greenyellow" }}>Hello</Box>
      </Container>
      
    </>
  );
}

export default LayoutBox;
