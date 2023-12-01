Once you downloaded this project , then do an 
npm install

Then go to percy.io and create a project and then uset the generated token in the below powershell command

This project will run in windows if you use the powershell commandline
 $env:PERCY_TOKEN = ""

 Use the token you created in percy.io website

 Now run the below command 

 npm run percytest

 Note that you can integrate Github with percy so the github pipeline will not merge until you approve the 
 visual comparison results

 #Note this project will not run if there is a firewall set up in your organization. 
 Until the percy.io is whitelisted in your organization