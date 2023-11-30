# Nice Days Counter Backend
Backend API for my Nice Days Counter app

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This ExpressJS backend has an endpoint for retrieving daily weather data at a particular latitude/longitude and between a start and end date.

While this can be used independently, the frontend I built that uses this API can be found [here](https://github.com/danieldepaolo/nice-days-counter).

Weather data comes from <a href="https://open-meteo.com/">OpenMeteo</a>.

### Built With
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* <a href="https://nodejs.org/en/">NodeJS</a>

### Installation

1. Clone the repo
2. Install NPM packages
   ```sh
   npm install
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

```sh
npm run start
```
Runs on localhost at port 9000

- Endpoint: /nicedays
- Query params:
  - lat: latitude of location
  - lon: longitude of location
  - startdate: Start date in format YYYY-MM-DD
  - enddate: End date in format YYYY-MM-DD
  - daily_variables: Comma-separated list of metrics.
    - Default: "apparent_temperature_max, apparent_temperature_min, sunshine_duration, rain_sum, precipitation_hours"
    - More variable names can be found at https://open-meteo.com/en/docs
- Returns:
```
  {
    "data": {
        "latitude",
        "longitude",
        "elevation",
        "daily_units": {
            "time",
            "apparent_temperature_max",
            "apparent_temperature_min",
            "sunshine_duration",
            "rain_sum",
            "precipitation_hours"
        },
        "daily": [
            {
                "day",
                "apparent_temperature_max",
                "apparent_temperature_min",
                "sunshine_duration",
                "rain_sum",
                "precipitation_hours"
            }
        ]
    }
  }
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- CONTRIBUTING -->

<!-- LICENSE -->

<!-- CONTACT -->
## Contact

Daniel DePaolo - djdep13@gmail.com

Project Link: [https://github.com/danieldepaolo/nice-days-counter-backend](https://github.com/danieldepaolo/nice-days-counter-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [OpenMeteo Free Weather API](https://open-meteo.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
