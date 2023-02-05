# NextJS learning project

## Data fetching

- client side rendering
  - useEffect
  - browser after fetch the js bundle, can all server endpoint async
  - [client side rendering](/pages/list-tasks-csr.js)
- server side rendering
  - `async function getServerSideProps(context)`
  - browser call new page, and server render the page in server and send to client
  - good for SEO
  - [server side rendering](/pages/list-tasks-server-props.js)
- static side generation
  - `async function getStaticProps(context) `
  - static file generation at build time to generate the HTML
  - endpoint fetched during npm build time
  - [static side generation](/pages/list-tasks-static-props.js)

## Tailwind CSS

## React-icons
