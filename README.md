# Rāgānugā Bhakti Library

A free, static web-app starter prepared from the supplied prototype.

## Publish on GitHub Pages

1. Create a new GitHub repository, e.g. `raganuga-bhakti-library`.
2. Upload all files and folders from this project.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. GitHub will publish the site at `https://YOUR-USERNAME.github.io/raganuga-bhakti-library/`.

No server is required for this version. The app uses browser `localStorage` for its small amount of user state.

## Important

The texts currently included are prototype/sample content. Before publishing a real library, replace them with texts you have the rights/permission to distribute and keep bibliographic/source metadata.

## Next steps

- Move the full book corpus into `data/books/*.json`.
- Add a real full-text search index.
- Add PWA/offline support.
- If AI generation is needed, add a server-side API layer; never put an API secret in this public repository.
