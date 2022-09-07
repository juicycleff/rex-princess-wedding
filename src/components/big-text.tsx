/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components"

const WrapperDiv = styled.div`
  padding: var(--size-gutter);
  position: absolute;
  left: 0;
  top: 30%;
  bottom: 40%;
`
const WrapperP = styled.h1`
  word-break: break-all;
  font-size: 90px;
  word-spacing:9999px;
`

function BigText({ children }: { children?: any }) {
  return (
    <WrapperDiv>
      <WrapperP>
        {children}
      </WrapperP>
    </WrapperDiv>
  )
}

export default BigText
