[![npm](https://badgen.net/npm/v/icons-reactjs)](https://www.npmjs.com/package/icons-reactjs) 
[![Price](https://img.shields.io/badge/price-FREE-purple.svg)](https://github.com/Grulla-Software/icons-reactjs/blob/main/LICENSE.md) 
[![License: ISC](https://img.shields.io/badge/license-ISC-yellow.svg)](https://github.com/Grulla-Software/icons-reactjs/blob/main/LICENSE.md) 
[![GitHub package version](https://img.shields.io/badge/version-1.0.5-green.svg)](https://github.com/Grulla-Software/icons-reactjs)

![Image](https://github.com/Grulla-Software/icons-reactjs/blob/main/img/imgHeading.png)

# icons-reactjs 🚀
Icons-reactjs is a component that allows you to display a large number and variety of built-in icons.
It is a lightweight and very easy to use component that helps the developer to meet the requested requirements.
> This shows icons in font format.

## Installing 🔧
To install the component use the Node Package Manager (npm).
You must open the command console at the root of your project and execute the command:
```
 npm install icons-reactjs --save 
```

## Demo 💻

[Click me to go to the demo on codeSandbox!](https://codesandbox.io/embed/icons-reactjs-vb665n?fontsize=14&hidenavigation=1&theme=dark)

## Usage 🛠️

Here is an example of how to implement the component:

```jsx
import logo from './logo.svg';
import './App.css';
import IconsReactjs  from 'icons-reactjs';
function App() {
  return (
    <div className="App App-header">
      <div className=' container'>
        <div className=' row'>
          <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center'>
            <h1>Icons Component</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>icons-reactjs</h2>
            <br/>
            <IconsReactjs 
              icon={'check'} 
              fontSize={'2rem'} 
              color={'#0f5132'}
            />
            <br/>
            <IconsReactjs 
              icon={'github'} 
              fontSize={'2rem'} 
              color={'#0f5132'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
```

### Props of styles 📦

Props for component styles are displayed as a table with Name, Type, Default, and Description as headings.

**Required props are marked with `*`.**

| Name      | Type   | Default         | Description                   |
| --------- | ------ | --------------- | ----------------------------- |
| `fontSize`|`string`| `2rem`          | Indicates the size of icon .  |
| `color`   |`string`| `cornflowerblue`| Indicates the  color of icon. |


### Additional usage information 📋

Additional information about using the component pros.

- **fontSize**: Use this prop to indicate the size for icon component. Specify this as a `string` and in pixel format ("20px") or REM format ("1rem") or EM format ("1em") or the name of size("smaller", "medium", "large", " larger", "x-large", "xx-large").
- **color**: Use this prop for indicate the color of icon component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of the color ("white").

### Props for functionality 📦

Props for component functionality are displayed as a table with Name, Type, Default, and Description as headers.

**Required props are marked with `*`.**

| Name      | Type     | Default | Description                                                    |
| --------- | -------- | ------- | -------------------------------------------------------------- |
| `icon`\*  | `string` | ` `     | Indicates the name of the icon that the component will display |


### Additional usage information 📋

Additional information about using the component pros.

- **icon**: Use this prop to indicates the name of the icon that the component will display. This must be indicated as a `string`.For more information about icon names you can visit the following website: Go to view icons and icon names. [Click me to see icons and icon names!](https://grulla-software.github.io/page-icons/)

## Authors ✒️

People who helped build the project from its inception

* **Marvin Calvo Acuña** - *Software Development* - [marvinjesus](https://github.com/MarvinJesus)
* **Marvin Calvo Acuña** - *Documentation* - [marvinjesus](https://github.com/MarvinJesus)

## License 📄

This project is licensed under the ISC License - see the file [LICENSE.md](LICENSE.md) for details.
