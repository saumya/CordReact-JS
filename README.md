A reactJS application for Cordova deploy
========================================
Its a companion project for the [Cordova iOS][1] application.
 - A ReactJS application is made
 - Cordova APIs are called
 - Checked for the `deviceready` event and displayed the application
 - Delivered the final build file to the [Cordova iOS][1] application for final delivery

### TODO
 - Check and see if there is any way we could avoid the manual copy-paste of the final build file to the Cordova application
 - Making debugging easier

### NOTE

React 15.0.1 is not supported by
 - material-ui ( 0.15.0-alpha.2 )
 - react-tap-event-plugin ( 0.2.2 )

React 0.14.0 is required to use both material-ui & react-tap-event-plugin.


### Running Project
 `npm run 2js`
 `npm run pack`






[1]: https://github.com/saumya/CordReact-iOS
