import Typography from "@mui/material/Typography";
function Type() {
  return (
    <>
      <Typography>hello</Typography>
      <Typography variant="h3">hello</Typography>
      <Typography variant="h1" component="h6"> hello  </Typography>
      <Typography variant="p" component="h5" align="center"> hello  </Typography>
      <Typography variant="h6" align="center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae
        culpa incidunt nisi repellendus in natus quod. Magnam, earum vero
        possimus aut molestiae, quas neque temporibus iste voluptas fugiat
        laboriosam!
      </Typography>
      
      {/* sbfjhsf......*/}
      <Typography variant="h6" align="center" noWrap={true}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae
        culpa incidunt nisi repellendus in natus quod. Magnam, earum vero
        possimus aut molestiae, quas neque temporibus iste voluptas fugiat
        laboriosam!
      </Typography>
      {/* adds default margin in the botton */}
      <Typography variant="h6" align="center" noWrap={true} gutterBottom={true}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae
        culpa incidunt nisi repellendus in natus quod. Magnam, earum vero
        possimus aut molestiae, quas neque temporibus iste voluptas fugiat
        laboriosam!
      </Typography>

            <Typography variant="h6" align="center" sx={{backgroundColor: "pink" , color : "blueviolet"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae culpa incidunt nisi repellendus in natus quod. Magnam, earum vero possimus aut molestiae, quas neque temporibus iste voluptas fugiat laboriosam!</Typography>

    </>
  );
}

export default Type;
