Space Battles (working title)
=============================

Space Battles is a WebGL based multiplayer space shooter in top-down perspective.

-------------------------------

###The File Structure
The Project is separated in three main folders:

####client/
Contains any client exclusive data, like models, libraries, templates (for UI), assets and stuff.

####server/
Contains any server exclusive data like models, libraries and stuff.

####shared/
Contains stuff that is used both by frontend and backend. Thats mainly models and some libraries.

####index.html
Thats the main file where the client is executed from - it gets loaded in the browser.

####client.js
Will be loaded from within the index.html and contains the initialization part of the client app.

####server.js
Will be executed within node.js and is the initialization part of the server app.

####.htaccess
Prevents web access of server scripts.