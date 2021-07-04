## Sound Notification Twitch

Working example, listening to DatsGabs twitch chat can be found on this link: https://bow-ear.glitch.me/

This project uses socket, tmi.js, express for detecting when a message has been sent to a twitch chat and make a sound whenever this happens.

You can clone this repo by using

```console
foo@bar:~$ git clone https://github.com/DatsGabs/sound-notification-twitch
foo@bar:~$ cd sound-notification-twitch
foo@bar:~$ npm i
foo@bar:~$ touch .env
```

In the .env the parameters are profile and password, where profile is the name of the account that uses the twitch api and password is an oauth token. You can get the token in [this link](https://twitchapps.com/tmi/).

If you want to modify the channel in which you want to listen to you have to modify it in the client object, in the channels array. You can set multiple channels to listen to or just one.
