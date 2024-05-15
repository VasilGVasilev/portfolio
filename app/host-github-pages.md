
### How to edit our next.js app to upload to github Pages

- edit next.config.js and build script on package.json
- add .nojekyll

1. Generate the static website: Run `next build` in your project directory. This will create a static version of your website in the `out` directory.

2. Create a `.nojekyll` file in the `out` directory: GitHub Pages uses Jekyll for static sites by default, which ignores files that start with an underscore. Next.js uses underscore (`_next`) for its resources, so you need to disable Jekyll by creating a `.nojekyll` file.

404 ERROR -> js and css do not render

GitHub Copilot: This issue can occur if the base URL for your resources is not set correctly. GitHub Pages uses the repository name as a base URL. If your project is not considering this, it might be trying to load resources from the root (`/`), which will result in 404 errors because the resources are not there.

To fix this issue in a Next.js project, you need to set the `assetPrefix` configuration in your `next.config.js` file. The `assetPrefix` should be set to your GitHub repository name.

Here's how you can do it:

1. Create a `next.config.js` file in your project root directory if it doesn't exist.

2. Add the following code to `next.config.js`:

```javascript
module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
  output: 'export', // this here since AppRouter instead of old PagesRouter technique - next export in build script
};
```

3. Set the `BASE_PATH` environment variable to your GitHub repository name when building your project. The repository name should be in the format `/<repositoryname>`. You can do this by modifying your build script in `package.json`:

```json
"scripts": {
  "build": "BASE_PATH='/<repositoryname>' next build",
  // other scripts...
}
```

Replace `<repositoryname>` with the name of your GitHub repository.

4. Run your build script again and push the `out` directory to GitHub.

This will prefix all your resources with the repository name, which should fix the 404 errors.