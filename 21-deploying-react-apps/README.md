## Deployment Steps

1. Write and test Code
2. Optimize Code
3. Build App for Production
    npm run build

4. Upload Production Code to Server
    - npm install -g firebase-tools
    - firebase login
    - firebase init
        - Which Firebase features do you want to set up for this directory? - Hosting
        - Use an existing project
        - Select a default Firebase project for this directory
        - What do you want to use as your public directory? - build

5. Configure Server