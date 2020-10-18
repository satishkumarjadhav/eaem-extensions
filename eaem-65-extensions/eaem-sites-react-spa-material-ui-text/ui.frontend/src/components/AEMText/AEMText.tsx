import { MapTo } from "@adobe/cq-react-editable-components";
import React, { FC, useState, useEffect } from "react";
import {
  makeStyles, Theme, createStyles
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

type TextProps = {
  cqPath: string;
  text: string;
};

const AEMTextEditConfig = {
  emptyLabel: "Text - Experience AEM",

  isEmpty: function (props: any) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};

function extractModelId(path: string) {
  return path && path.replace(/\/|:/g, "_");
}

enum BREAKPOINTS{
  XS = 0,
  SM = 768,
  MD = 992,
  LG = 1200,
  XL = 1600
}

const eaemTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: BREAKPOINTS.XS,
      sm: BREAKPOINTS.SM,
      md: BREAKPOINTS.MD,
      lg: BREAKPOINTS.LG,
      xl: BREAKPOINTS.XL
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& h1': {
        fontFamily: 'AdobeCaslonPro, Times, serif !important',
        [theme.breakpoints.down("xl")]: {
          fontSize: '34px',
        },
        [theme.breakpoints.down("lg")]: {
          fontSize: '30px',
        },
        [theme.breakpoints.down("md")]: {
          fontSize: '26px',
        }
      }
    }
  })
);


const AEMText: FC<TextProps> = props => {
  const classes = useStyles(eaemTheme);

  console.log(classes);

  return (
    <div
      className={classes.root}
      id={extractModelId(props.cqPath)}
      data-rte-editelement
      dangerouslySetInnerHTML={{
        __html: props.text
      }}
    />
  );
};
export default MapTo("eaem-sites-spa-how-to-react/components/text")(AEMText, AEMTextEditConfig);
