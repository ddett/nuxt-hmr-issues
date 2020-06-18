# nuxt-hmr-issues
importing a json file into a server middleware file breaks HMR

steps to reporduce the problem: 
1. run the app
2. open api/server.js and change the console log
3. look at the server logs, see HMR kick in and the new console log appear
4. change the console log again
5. see that this time HMR does not do its thing: no refresh!

to verify that it is the json import that causes this, just comment out the json import in api/server.js. 
then repeat the steps above and see HMR work fine even for multiple changes of the console log. 
