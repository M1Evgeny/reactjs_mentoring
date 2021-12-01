import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { configureStore } from "./store/store";
import { App } from "./App";
import { fetchMoviesActionCreator } from "./store/actionCreators/fetchMovies";
import { fetchMovieByIdActionCreator } from "./store/actionCreators/fetchMovieById";

function renderHTML(html, preloadedState) {
  return `<!doctype html>
      <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Netflixroulette</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>window.PRELOADED_STATE = ${JSON.stringify(
            preloadedState
          ).replace(/</g, "\\u003c")}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();

    const context = {};

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot(serverSideProps));

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const reqPath = req.path;
    let searchQuery = null;
    if (reqPath.includes("/search/")) {
      const splitPath = reqPath.split("/");
      if (splitPath.length === 3) {
        searchQuery = decodeURI(splitPath[2]);
      }
    }

    const serverFetchList = [
      store.dispatch(
        fetchMoviesActionCreator(req.query.genre, req.query.sortBy, searchQuery)
      ),
    ];

    const serverSideProps = {};

    if (req.query.movieId) {
      serverFetchList.push(
        store.dispatch(fetchMovieByIdActionCreator(req.query.movieId))
      );
    }

    Promise.all(serverFetchList).then(() => {
      const htmlString = renderToString(renderRoot(serverSideProps));

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });
  };
}
