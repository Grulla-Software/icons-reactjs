import * as React from 'react';
import './index.css';
interface Props {
  icon?:  string,
  color?: string,
  fontSize?: string
}
class IconsReactjs extends React.Component<Props> {
  render() {
    const { icon, color, fontSize } = this.props;
    return(
      <i className={`i i-${icon}`} style={{
        color: color?color:'cornflowerblue',
        fontSize: fontSize?fontSize:'2rem'
      }}
      ></i>
    );
  }
}
export default IconsReactjs;
