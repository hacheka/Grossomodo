# GROSSOMODO WEBSITE

Website for the spanish rap group GROSSOMODO.

Its main feature is an audio player with the group albums, sync'ed with the lyrics, ala lyrics video but made in Javascript.

Made for education purposes. Mainly for learning about AngularJS features:
* Components: almost all website parts have been made using the new component syntax in AngularJS 1.5.
* Audio player: the audio player and its syncing mechanism with lyrics are developed in a custom directive.
* Webpack: the website code is bundled using Webpack.

### Pending work
* Animation: add animation to several parts of the website.
* Add Xtragos albums: Xtragos, member of the group, has two albums as well.
* Add collaborations and productions: Grossomodo has produced more than 50 tracks for other groups. Include them in a special place.
* Add routing: now the website lacks routing. The router component is not finished and this complicates that task. Reverting components to custom directives could be a solution for using ui-router.
* PostCSS: the css stack doesn't pass for any build step currently. It'd be nice to pass it throught PostCSS through webpack to use variables and to be sure that it has the correct vendor prefixes in production.