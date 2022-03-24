import { useState } from "react";
import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import Counter from "./components/Counter";
import Repo from "./components/Repo";
import useFetch from "./components/useFetch";
import { containerVariants, loaderAnimation } from "./utilities/Animations";

const useStyles = createUseStyles({
  "@global": {
    html: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    },
    body: {
      overflowX: "hidden",
      background: "#F1F9F9",
      backgroundSize: "cover",
      height: "100vh",
      fontFamily: "Verdana",
      color: "#000"
    },
    p: {
      fontFamily: "Montserrat"
    }
  },
  container: {
    paddingBottom: 40
  },
  topSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "60px 0",
    height: "max-content",
    "@media screen and (max-width: 550px)": {
      padding: "60px 0"
    }
  },
  title: {
    fontFamily: "Montserrat",
    textAlign: "center",
    color: "rebeccapurple",
    fontSize: 30,
    textShadow: "2px 2px #c8d8d8",
    "@media screen and (max-width: 550px)": {
      fontSize: 26
    }
  },
  bottomSection: {
    width: "65%",
    height: "auto",
    margin: "0 auto",
    background: "#e2f2f2",
    boxShadow: "2px 2px #c8d8d8",
    padding: 20,
    borderRadius: 5,
    "@media screen and (max-width: 550px)": {
      width: "85%"
    }
  }
});

export default function App() {
  const repositories = [
    "eslint/eslint",
    "yangshun/front-end-interview-handbook",
    "babel/babel",
    "webpack/webpack",
    "storybooks/storybook",
    "facebook/react",
    "reactjs/redux",
    "expressjs/express"
  ];

  const [counter, setCounter] = useState(0);
  const currentRepo = repositories[counter];
  const { data, isLoading } = useFetch(
    `https://api.github.com/repos/${currentRepo}`
  );

  const classes = useStyles();

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={classes.container}
    >
      <section className={classes.topSection}>
        <h1 className={classes.title}>8 great GitHub repositories!</h1>
        <Counter
          counter={counter}
          setCounter={setCounter}
          currentRepo={currentRepo}
          repositories={repositories}
        />
      </section>
      <section className={classes.bottomSection}>
        {isLoading && (
          <motion.p variants={loaderAnimation}>Loading repository...</motion.p>
        )}
        {data && <Repo data={data} />}
      </section>
    </motion.div>
  );
}
