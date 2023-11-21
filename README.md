# YouBike

This project is designed for Taiwan citizen (mainly living in Taipei City) who are YouBike long term user.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Introduction

This project is available in mobile, tablet and desktop. And the page that currently done is https://tonia83731.github.io/YouBike/stop-info

* The user can view all Youbike station in Taipei, including their distriction, stop name, total stop and available parking stop
* The user can use dropdown list to search for different city data (currently only Taipei city available)
* The user can use search bar to search for the city, region or station name
* The user can click on the checkbox for distriction to filter the table data

## Demo Page Link
https://tonia83731.github.io/YouBike/

## Develp Environment and Tools

* node.js @16.15.0
* react @18.2.0
* react-router-dom @6.18.0
* styled-components @6.1.0
* vite-plugin-svgr @4.1.0
* axios @1.6.0

## Getting Start

1. Clone the project to local, enter:

```
git clone https://github.com/tonia83731/YouBike.git
```

2. Go into the project(cd), later enter to install npm:

```
npm install
```

3. Start the project by enter:

```
npm run dev
```

4. If you wish to end the project, enter:

```
ctrl + c
```

## For Future Development

This is for future development, will not include in current project

* Finished EventPage, InstructionPage, LoginPage, NewsPage, PaymentPage
* For StopInfoPage, including other city's data
