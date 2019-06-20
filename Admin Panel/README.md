1. First install nodejs
- sudo apt-get install nodejs

2. install npm
- sudo apt-get install npm

3. install http-server
- npm install http-server -g

4. go to your directory where public directory is placed(\Wallpaper\Admin Panel\ in my case) and start http-server using command
- http-server

5. go to the url shown on the terminal (or goto localhost:8080)

6. for deploying to firebase first we need to install firebase
- npm install firebase-tools -g

7. now login to firebase
- firebase login
then select y 

8. now initialse firebase repository
- firebase init

9. from the options using arrow key goto 'Hosting' press space key to select 'Hosting'.
- type public when prompted for public directory name
- Configure as a single page app? n
-file public/index.html already exists. Overwrite? name


10. Now deploy your project to firebase using command
- firebase deploy
