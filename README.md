# Notes

course - https://react-v8.holt.courses/
Project created from front end masters course.

## What has been covered

## Intro to react

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
- \+ unary coerces string into number
- error boundary. can only use a class component. instantiate using `static getDerivedStateFromError` or `componentDidCatch`. this wraps component. could stop app crash and show error instead
- useRef. like a container to give yourself back the same thing every time. etc can add/remove a div from the dom but it uses the same div every time
- unmount. use return in useEffect to run a function when the component unmounts. used for clear up. removing event listeners, timers, dom nodes
- createPortal. render children into a dom node that exists outside the dom hierarchy. can pick up on event listeners even though it is in a different part of the app
- context. app wide general state. wrap components in provider to use. have option to read and write from different parts of the app
- useNavigate. programmatically navigate someone. (opposed to Link which is like an anchor element)

## Intermediate React

### Hooks

- useRef. common use case to access a child imperatively. useRef is like a box that can hold a mutable value in its .current property.
- useReducer. similar to useState and how redux works. good for if there is complex state management and you need state which depends on previous state.
- useMemo. pass a create function and a dependency array. will also recompute when one of the dependencies has changes. used for performance optimization
- useCallback. similar to useMemo. return a memoized callback
- useLayoutEffect. similar to useEffect but fires synchronously after all DOM mutations. use to read layout from the DOM. updates before browser paints
- useId. for generating IDs which are stable across client/server. not to be used for mapped keys etc. can be linked with appended suffix e.g `{id + -'firstname}, {id + -'surname}`

### Code splitting

- use lazy loading to load a component/route only when it has been requested. use for large kbs sizes mainly.
- use the Suspense react component to show fallback until lazy loads.

### Server side rendering

- loads initial page whilst JS and app loads in background.

### Low priority re-rendering

- useDeferredValue. use if there is expensive to render, could be delayed and user is perceiving slowdown. use alongside useMemo to hold value and reupdate once deferred value has changed. defer a heaving loading component
- useTransition. when requesting something that is low priority. have react provide at own speed. anticipating a heavy loading component.

## Redux

(see newer repo)

## Testing

- install vitest (based on jest) testing library and happy-dom
- happy dom faster than jsDOM
- try to tell user stories through tests. think in user terms of what they would want to see when interacting
- **test** folder name is seen by vitest and everything in there is assumed to be a test. Can also name files by using filename.spec/filename.spec. run test by `npm t`
- Testing where if something is given a value, does it return the correct value (pet.test.jsx)
- testing user interaction (carousel.test.jsx)
- testing custom hooks (useBreedList.test.jsx). hooks only work inside a react component so you have to create a react component. call the hook inside another component and return the value to bypass
- updated useBreedList.test to generic testCustomHook

# bug examples from this app

1. `images.length` will fail if no array is passed in. changed to `images && images.length`
2. useHref() may be used only in the context of a <Router> component. Using <Link> tag without a router. Put static router in test file. (Static router works in node and not a browser env)

- creating mocks. if testing a component which uses API request. instead of hitting API request you can mock the fetch. npm i -D vitest-fetch-mock. the file created setupVitest.js will run before all other tests are run
- snapshots. smaller tests to write. will output html in snapshots folder and you can rerun to compare to previous results. change .toMatchSnapshot to .toMatchInlineSnapshot to have output in same file. can change data to compare e.g pass in JSON data instead of fragment. valid use case - is JSON same between front end and back end?
