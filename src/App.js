import "./styles.css";

/* eslint-disable import/no-webpack-loader-syntax */
import Content from "!babel-loader!@mdx-js/loader!./Content.mdx";

import { MDXProvider } from "@mdx-js/react";

import Highlight, { defaultProps } from "prism-react-renderer";

const Code = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={children} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
const components = {
  pre: (props) => <div {...props} />,
  code: Code
};

function App() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
}

export default App;
