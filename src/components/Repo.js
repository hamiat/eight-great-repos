import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import { opacityVariants } from "../utilities/Animations";

const useStyles = createUseStyles({
  "@global": {
    p: {
      fontSize: 18
    }
  },
  repoWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 15
  },
  repoInfo: {
    fontFamily: "Courier New",
    fontSize: 18,
    padding: "0 8px"
  },
  repoTitle: {
    fontSize: 20,
    color: "rebeccapurple",
    fontWeight: 600
  },
  repoStar: {
    fontSize: 22,
    color: "#ffae42"
  }
});

export default function Repo({ data }) {
  const classes = useStyles();

  return (
    <motion.div className={classes.repoWrapper} variants={opacityVariants}>
      <p>
        Name:
        <span className={`${classes.repoTitle} ${classes.repoInfo}`}>
          {data.full_name}
        </span>
      </p>
      <p>
        What it's for:
        <span className={classes.repoInfo}> {data.description}</span>
      </p>
      <p>
        Popularity:
        <span className={classes.repoInfo}>{data.stargazers_count}</span>
        <span role="img" aria-label="Star" className={classes.repoStar}>
          &#11088;
        </span>
      </p>
    </motion.div>
  );
}
