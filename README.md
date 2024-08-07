# FilmVault


Welcome to FilmVault, an IMdB like website used to display all the latest movies

The application is created using ReactJS.
The entire project has several files, including dependency files, which need to be in the same folder.
The application is deployed on Netlify.

Key features:

1) This website gets real time movies using an API
2) It has a watchlist component, which stores all movies shortlisted by the user.
3) The watchlist does not change on refresh
4) Searching, sorting and Genre-based filtering are present in the watchlist
5) Makes use of key React hooks to maintain state and maintainability of code

Configuration, Installation information:
1) Vite is used as a build tool for this React application. Vite is comparitively faster than other builds like Webpack.
2) NodeJS installation is a prerequisite
3) React router installation in terminal
4) JSX files were used
5) TailwindCSS was used for easier webpage design
6) Font awesome was used for custom buttons

Executing files:
1) Opening integrated terminal in the folder
2) Run 'npm run dev' to see the desired output on the localhost.


Deployment:
This React app was deployed on Netlify.
To deploy on Netlify, production build package needs to be created. 
In this project, dist is the build package created, after running 'npm run build'


Link to App:
https://filmvaultabhinav.netlify.app/




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
