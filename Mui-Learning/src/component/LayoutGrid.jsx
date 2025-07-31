import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
function LayoutGrid() {
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid size={12}>
            <Button variant="contained" sx={{ width: "100%" }}>
              size=12
            </Button>
          </Grid>
          <Grid size={4}>
            <Button variant="contained" sx={{ width: "100%" }}>
              size=4
            </Button>
          </Grid>
          <Grid size={4}>
            <Button variant="contained" sx={{ width: "100%" }}>
              size=4
            </Button>
          </Grid>
          <Grid size={4}>
            <Button variant="contained" sx={{ width: "100%" }}>
              size=4
            </Button>
          </Grid>
          <Grid size={8}>
            <Button variant="contained" sx={{ width: "100%" }}>
              size=8
            </Button>
          </Grid>
        </Grid>
      </Container>
      <br /> <hr /> <br />
      {/* Stack */}
      <Container>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            <Button variant="contained" sx={{ width: "50%" }}>
              Item 1
            </Button>
            <Button variant="contained" sx={{ width: "50%" }}>
              Item 2
            </Button>
            <Button variant="contained" sx={{ width: "50%" }}>
              Item 3
            </Button>
          </Stack>
        </Box>
      </Container>
      <br /> <hr /> <br />
      {/* Direction:Row */}
      <Container>
        <Box sx={{ width: "100%" }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{ width: "50%" }}>
              Item 1
            </Button>
            <Button variant="contained" sx={{ width: "50%" }}>
              Item 2
            </Button>
            <Button variant="contained" sx={{ width: "50%" }}>
              Item 3
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default LayoutGrid;
