# Movie Hub

## Overview
Movie Hub is a React application that allows users to explore trending movies and TV series, search for specific titles, and filter results by genre. The application utilizes the TMDB (The Movie Database) API to fetch data and display it in a user-friendly interface.

## Features
- **Trending Movies and TV Series**: View the latest trending content.
- **Search Functionality**: Search for movies and TV series by title.
- **Genre Filtering**: Filter movies by genre for a more tailored experience.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for building responsive and accessible applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For handling routing within the application.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/pavannitheesh/Movies-Hub.git
   cd movie-hub
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```plaintext
   REACT_APP_MOVIE_APIKEY=your_api_key_here
   ```

### Running the Application
To start the development server, run:
```bash
npm start
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests
To run the tests, use:
```bash
npm test
```

### Building for Production
To create a production build, run:
```bash
npm run build
```
The build will be optimized and placed in the `build` folder.

## Folder Structure
```
movie-hub/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/          # Reusable components
│   ├── pages/               # Pages and routes
│   ├── hooks/               # Custom hooks
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json
└── README.md
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.


## Acknowledgments
- **TMDB API** for providing the movie and TV series data.
