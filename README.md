# Prerendering does not work for a route with a space in the name

Run `npm run preview` to see the error at `http://localhost:4173/hello world`

`/hello world` is the example route. You can see `./sveltekit/output/pages/hello world.html` in the prerendering files, but the router does not seem to decode the URL properly and is literally searching with the %20 (check vite server logs)

You can completely recreate the error
1. create a route with a space in the name
2. In the relevant .js file mark the file prerenderable.
3. Check dev server to see it works.
4. Run `npm run build` and `npm run preview`
5. Revisit the route
