import {
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "center",
    height: 800,
    paddingTop: 100,
  },
  table_div: {
    width: 800,
  },
});

function createData(period, company, role, techspecs) {
  return { period, company, role, techspecs };
}

const rows = [
  createData(
    "Sep-2014 to present",
    "Rakuten India Enterprise Pvt. Ltd and Rakuten Inc"
  ),
  createData("Jan-2014 to Sep-2014", "ITC infotech and Robert Bosch"),
  createData("Apr-2013 to Jan-2014", "eHover Systems India Pvt. Ltd."),
  createData(
    "Apr-2011 to Apr-2013",
    "Dept. of P.G. Studies and Research in Biotechnology and Bioinformatics, Kuvempu University"
  ),
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function WorkHistory() {
  const classes = useStyles();
  return (
    <div id="WorkHistory" className={classes.root}>
      {/* <Toolbar style={{ minHeight: 100 }} /> */}
      <Typography align="center" variant="h5">
        Work History
      </Typography>
      <div className={classes.table_div}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Typography>Period</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>Company</Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.company}>
                  <StyledTableCell component="th" scope="row">
                    <Typography>{row.period}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>{row.company}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default WorkHistory;
