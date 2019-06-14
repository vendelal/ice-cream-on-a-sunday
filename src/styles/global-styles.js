import { injectGlobal } from "styled-components";
import * as fontFiles from "./typography/fontFiles";

export default injectGlobal`
  @font-face {
    font-family: "Circular-Regular";
    font-style: normal;
    font-weight: normal;
    src: local("CircularStd-Book"), url(${fontFiles.bodyFont}) format("woff");
  }

  @font-face {
    font-family: "Circular-Bold";
    font-style: normal;
    font-weight: normal;
    src: local("CircularStd-Bold"), url(${fontFiles.bodyFontBold}) format("woff");
  }

  @font-face {
    font-family: "Ahkio-Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Ahkio-Regular"), url(${fontFiles.headerFontRegular}) format("woff");
  }

  @font-face {
    font-family: "Ahkio-Bold";
    font-style: normal;
    font-weight: normal;
    src: local("Ahkio-Bold"), url(${fontFiles.headerFontBold}) format("woff");
  }
`
