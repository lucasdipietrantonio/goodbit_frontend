# GoodBit Code base operation manual
### For use of the react interface

To run the website on the localhost in a hot reload config, you need to run the comman
"yarn start"

Keep a terminal dedicated to this as you need to see the debug from time to time and also it needs
a screen open to run properly

To create a new compiled version of the website, you must run the comman
"yarn build"

This will provide you with a fully packaged website that you should NEVER edit. You can find this 
directory in the project path ~/Goodbit/build

To deploy this to a webhost in a secure maner, just place everything in the build directory in 
the webserver root.

If you need to edit some HTML (favicon, meta tags that are applied at the root level 
and you arent using helmet for, you can add then in the public folder. Adding images and 
content it should always be placed in the src directory as it should be compiled.
