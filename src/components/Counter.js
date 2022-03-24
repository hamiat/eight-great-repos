import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width: "65%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0 auto",
    paddingTop: 80,
    "@media screen and (max-width: 700px)": {
      width: "75%",
      justifyContent: "space-between"
    },
    "@media screen and (max-width: 550px)": {
      flexDirection: "column",
      gap: 30,
      paddingTop: 60
    }
  },
  btn: {
    border: "none",
    padding: "8px 14px",
    borderRadius: 5,
    fontFamily: "Courier New",
    fontSize: 16,
    textAlign: "center",
    boxShadow: "2px 2px #c8d8d8",
    cursor: "pointer",
    "&:hover": {
      transform: "rotate(2deg)",
      boxShadow: "2px 2px hotpink"
    },
    "&:active": {
      transform: "rotate(0deg)"
    }
  },
  normalBtn: {
    background: "white",
    border: "1px solid #1c1c1c",
    "&:hover": {
      background: "black",
      color: "white"
    }
  },
  primaryBtn: {
    background: "hotpink",
    border: "1px solid rebeccapurple",
    "&:hover": {
      background: "rebeccapurple",
      color: "white"
    }
  }
});

export default function Counter({
  counter,
  setCounter,
  repositories,
  currentRepo
}) {
  const classes = useStyles();

  const nextRepo = () => {
    const lastIndex = repositories[repositories.length - 1];
    if (currentRepo === lastIndex) {
      return;
    }
    setCounter(counter + 1);
  };

  const prevRepo = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div className={classes.wrapper}>
      <button
        className={`${classes.normalBtn} ${classes.btn}`}
        onClick={prevRepo}
      >
        - Decrement
      </button>
      <p>Counter: {counter}</p>
      <button
        className={`${classes.primaryBtn} ${classes.btn}`}
        onClick={nextRepo}
      >
        + Increment
      </button>
    </div>
  );
}
