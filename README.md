# Notes

Project created from front end masters course.

## What has been covered

- Set up react app from scratch without npx create react app (eslintrc.json, prettier.rc, package.json, vite.config.js can be used for future projects)
- use vite as compiler
- dev deps vs production deps (dev - prettier, eslint, prod - react router, router dom)
- production vs dev env modes. ship in production mode for lighter/quicker app
- props
- useState. **localCache!!** Faster then re-requesting api data
- useEffect
- useCustomHooks. Bundle hooks and functions into reusable custom hooks
- disabling eslint warnings
- adding loading states in component for use later on in testing
- react router. Note - use <link> instead of <a> tags for quicker rendering
- useParams - gets URL data to use within page. makes context available to components within the BrowserRouter tags
- react query/useQuery - fetches data and stores in a cache. Does not need to refetch each time. has methods such as isLoading, isError etc
- FormData is browser api to get form data on submit
- class component (no hooks allowed, default props, state)
- arrow functions capture scope where it was invoked as opposed to normal function declaration. more important when using the .this keyword
- - unary coerces string into number
