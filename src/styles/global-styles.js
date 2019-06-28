import { injectGlobal } from "styled-components";
import * as fontFiles from "./typography/fontFiles";

export default injectGlobal`

  // FONTS

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


  // ANIMATIONS

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-right {
    0% {
      opacity: 0;
      transform: translateX(-15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
