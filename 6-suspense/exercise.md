## Suspense

The current application fetches your the user's Profile as well as a list of repositories in two different components and renders them.

1. Switch on the suspense mode for the queries and replicate the current loading behaviour using Suspense. See the docs here: https://github.com/trojanowski/react-apollo-hooks

2. Make sure there is only one loading indicator until both requests are done.

3. Organize your Suspense components in way that the page only shows if profile is loaded. Once profile is loaded and in case repositories fetching isn't done yet a extra loading indicator for that request should be shown. **Hint**: You can nest `<Suspense>` inside other `<Suspense>`.

4) Use the `Img` component to make sure the profile only shows up once the request is done and the profile image is loaded.
