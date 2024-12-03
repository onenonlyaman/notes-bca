/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","83cc2c7066e9961b2155c19dab89facf"],["Semester 1.html","a4d26a3d4a879ca7afae0c449d7a1214"],["Semester 2.html","6f1587af9b10ff208876b718788bb67e"],["Semester 3.html","195a561043a2409b896ea2f6ea20061d"],["Semester 4.html","1a40729947284d2e9ebf88eee7ef5b08"],["Semester 5.html","6fde904febda8cbb789a7b1f9670952e"],["Semester 6.html","88def8cec3fa09b44a2343835a84e1fb"],["Semesters/Resources/back.svg","12365a8bc92a9ebf25a2b5d6f3bde5b8"],["Semesters/Resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["Semesters/Resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["Semesters/index.html","2c681bc9317f3168251555f7a8c3f6ea"],["Semesters/script.js","3f95cf29185cb8a68b9e420e8ac0d2d5"],["Semesters/sem1/C programming.html","3b278d3210ac8ee1c2e0eed1788fbbfc"],["Semesters/sem1/co&a.html","a6ba03ff9c25b33f293918b4bfe099bd"],["Semesters/sem1/discrete maths.html","b217817a0674ed2d404fc83c710431f1"],["Semesters/style.css","af41a956189f260a5a838006ec1ba714"],["about.html","35045fc9d89d3e7b810a343f0cfa6d1b"],["credits.html","e9977b56d845aaf3d7ad8444222a5eab"],["digiNotes/cprog/files/cprogch2.pdf","e9183b73890dd88a79023e1688bb0416"],["digiNotes/cprog/index.html","32d318b14247ebbec08347b9ecf26c94"],["digiNotes/digiNotes.html","4728bfed1c10f284f095f011f6090502"],["digiNotes/income/index.html","fd53f3802545827ff7802136413eef91"],["digiNotes/pref.html","7cc76936129cbbbc63206f05ef6cc62d"],["digiNotes/resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["digiNotes/resources/down.svg","96ad5e00fd17bbf351881e0fb5e154f7"],["digiNotes/resources/download.svg","629507a90e562ff0a0bc4abe93053102"],["digiNotes/resources/hide.svg","380945eec9a07f0925085ae0f3362942"],["digiNotes/resources/home.svg","73ef455bef455f304a62bc0953b2c559"],["digiNotes/resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["digiNotes/resources/script.js","bda629c049abefa893c1c9d4050cf744"],["digiNotes/resources/show.svg","398fcfd3e5b50fad8bc6a49edea48c4c"],["digiNotes/resources/sort.svg","2743566b04db01b60f13e249ee05b2c9"],["digiNotes/resources/style.css","df236bc7b08b566df05c27135ae10c62"],["digiNotes/resources/up.svg","148fbce214c9e597bf556575243a31c2"],["experimental.html","8b5645aa8ecbaeb554bd8cc08f67249f"],["font-awesome-4.7.0/HELP-US-OUT.txt","e5f4d96ed70c0c372ccf7a0d9841ba53"],["font-awesome-4.7.0/css/font-awesome.css","4bb3dd721c4652feee0953261d329710"],["font-awesome-4.7.0/css/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["font-awesome-4.7.0/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["font-awesome-4.7.0/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["font-awesome-4.7.0/less/animated.less","7fec23ef95e17ff623af5dd5db0fc87d"],["font-awesome-4.7.0/less/bordered-pulled.less","1f57858ac2a7ab59b01088c778f5fb0a"],["font-awesome-4.7.0/less/core.less","da355b2c884a067eedd979b445968147"],["font-awesome-4.7.0/less/fixed-width.less","6799c9cf7edf54b7432cca85854b0abf"],["font-awesome-4.7.0/less/font-awesome.less","62ab0957ccd3369ed07a6d7241e7b9c1"],["font-awesome-4.7.0/less/icons.less","ddaa02ea18934d4e03c9978f13311d5e"],["font-awesome-4.7.0/less/larger.less","f588164c1a95535137186bbdb0d236c8"],["font-awesome-4.7.0/less/list.less","abcbffd56677821190cf4dc72f660dd9"],["font-awesome-4.7.0/less/mixins.less","5b203b320a03575de5f369cf49b1e7c2"],["font-awesome-4.7.0/less/path.less","fc4e5dec2b323ba7f687b0414a6faecd"],["font-awesome-4.7.0/less/rotated-flipped.less","2088e18f446fcf2fe91e5293fc7f2847"],["font-awesome-4.7.0/less/screen-reader.less","79f38eb1f3eea913308f49ab5cd663bf"],["font-awesome-4.7.0/less/stacked.less","8b7e28e004c785a0a1a73afde547b9e7"],["font-awesome-4.7.0/less/variables.less","62803119d3ed114705a50717a53e2639"],["font-awesome-4.7.0/scss/_animated.scss","79db4428659752f59630c4388bbaa174"],["font-awesome-4.7.0/scss/_bordered-pulled.scss","6e194951ee06dd4cde6f94ed2ec86e47"],["font-awesome-4.7.0/scss/_core.scss","d4d62bafcfb00eb1b208acbf895a95a3"],["font-awesome-4.7.0/scss/_fixed-width.scss","e6fac8be09e2d3dc38fe9248b2eb0472"],["font-awesome-4.7.0/scss/_icons.scss","e624b0b5cfd7ac3fcb4eefab15f983f6"],["font-awesome-4.7.0/scss/_larger.scss","8b00a4d732107fc1844ea18314c3cff9"],["font-awesome-4.7.0/scss/_list.scss","c33b069275c5877a4b3f144684664bf5"],["font-awesome-4.7.0/scss/_mixins.scss","f07164e3950c5dac464e3f5f9e14858d"],["font-awesome-4.7.0/scss/_path.scss","123f2994215b526902be3fa0596c8d13"],["font-awesome-4.7.0/scss/_rotated-flipped.scss","9a3f214edda562bf122802da5c686a12"],["font-awesome-4.7.0/scss/_screen-reader.scss","b4b497bdd83f580fa3942390763cc270"],["font-awesome-4.7.0/scss/_stacked.scss","638e8ae84e80a3428e9446578a7ed6a0"],["font-awesome-4.7.0/scss/_variables.scss","547c9f94a31ced29cbc7f029d700a639"],["font-awesome-4.7.0/scss/font-awesome.scss","bc5096695c4092d06d77da5329254590"],["form.html","04e1973550a6f9c62a4a9c1ce48724cc"],["index.html","03f3e9ab65ee86364c2daf4a57ba55e9"],["main.js","54c1c8ac24f2d48b1710f1f32c86556d"],["notes-bca/README.md","83cc2c7066e9961b2155c19dab89facf"],["notes-bca/Semester 1.html","b561e9cf2169cbfce698112f73ef21f5"],["notes-bca/Semester 2.html","6f1587af9b10ff208876b718788bb67e"],["notes-bca/Semester 3.html","195a561043a2409b896ea2f6ea20061d"],["notes-bca/Semester 4.html","1a40729947284d2e9ebf88eee7ef5b08"],["notes-bca/Semester 5.html","6fde904febda8cbb789a7b1f9670952e"],["notes-bca/Semester 6.html","88def8cec3fa09b44a2343835a84e1fb"],["notes-bca/Semesters/Resources/back.svg","12365a8bc92a9ebf25a2b5d6f3bde5b8"],["notes-bca/Semesters/Resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["notes-bca/Semesters/Resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["notes-bca/Semesters/index.html","2c681bc9317f3168251555f7a8c3f6ea"],["notes-bca/Semesters/script.js","3f95cf29185cb8a68b9e420e8ac0d2d5"],["notes-bca/Semesters/sem1/C programming.html","3b278d3210ac8ee1c2e0eed1788fbbfc"],["notes-bca/Semesters/sem1/co&a.html","a6ba03ff9c25b33f293918b4bfe099bd"],["notes-bca/Semesters/sem1/discrete maths.html","b217817a0674ed2d404fc83c710431f1"],["notes-bca/Semesters/style.css","af41a956189f260a5a838006ec1ba714"],["notes-bca/about.html","35045fc9d89d3e7b810a343f0cfa6d1b"],["notes-bca/credits.html","e9977b56d845aaf3d7ad8444222a5eab"],["notes-bca/digiNotes/cprog/files/cprogch2.pdf","e9183b73890dd88a79023e1688bb0416"],["notes-bca/digiNotes/cprog/index.html","32d318b14247ebbec08347b9ecf26c94"],["notes-bca/digiNotes/digiNotes.html","4728bfed1c10f284f095f011f6090502"],["notes-bca/digiNotes/income/index.html","fd53f3802545827ff7802136413eef91"],["notes-bca/digiNotes/pref.html","7cc76936129cbbbc63206f05ef6cc62d"],["notes-bca/digiNotes/resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["notes-bca/digiNotes/resources/down.svg","96ad5e00fd17bbf351881e0fb5e154f7"],["notes-bca/digiNotes/resources/download.svg","629507a90e562ff0a0bc4abe93053102"],["notes-bca/digiNotes/resources/hide.svg","380945eec9a07f0925085ae0f3362942"],["notes-bca/digiNotes/resources/home.svg","73ef455bef455f304a62bc0953b2c559"],["notes-bca/digiNotes/resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["notes-bca/digiNotes/resources/script.js","bda629c049abefa893c1c9d4050cf744"],["notes-bca/digiNotes/resources/show.svg","398fcfd3e5b50fad8bc6a49edea48c4c"],["notes-bca/digiNotes/resources/sort.svg","2743566b04db01b60f13e249ee05b2c9"],["notes-bca/digiNotes/resources/style.css","df236bc7b08b566df05c27135ae10c62"],["notes-bca/digiNotes/resources/up.svg","148fbce214c9e597bf556575243a31c2"],["notes-bca/experimental.html","8b5645aa8ecbaeb554bd8cc08f67249f"],["notes-bca/font-awesome-4.7.0/HELP-US-OUT.txt","e5f4d96ed70c0c372ccf7a0d9841ba53"],["notes-bca/font-awesome-4.7.0/css/font-awesome.css","4bb3dd721c4652feee0953261d329710"],["notes-bca/font-awesome-4.7.0/css/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["notes-bca/font-awesome-4.7.0/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["notes-bca/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["notes-bca/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["notes-bca/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["notes-bca/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["notes-bca/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["notes-bca/font-awesome-4.7.0/less/animated.less","7fec23ef95e17ff623af5dd5db0fc87d"],["notes-bca/font-awesome-4.7.0/less/bordered-pulled.less","1f57858ac2a7ab59b01088c778f5fb0a"],["notes-bca/font-awesome-4.7.0/less/core.less","da355b2c884a067eedd979b445968147"],["notes-bca/font-awesome-4.7.0/less/fixed-width.less","6799c9cf7edf54b7432cca85854b0abf"],["notes-bca/font-awesome-4.7.0/less/font-awesome.less","62ab0957ccd3369ed07a6d7241e7b9c1"],["notes-bca/font-awesome-4.7.0/less/icons.less","ddaa02ea18934d4e03c9978f13311d5e"],["notes-bca/font-awesome-4.7.0/less/larger.less","f588164c1a95535137186bbdb0d236c8"],["notes-bca/font-awesome-4.7.0/less/list.less","abcbffd56677821190cf4dc72f660dd9"],["notes-bca/font-awesome-4.7.0/less/mixins.less","5b203b320a03575de5f369cf49b1e7c2"],["notes-bca/font-awesome-4.7.0/less/path.less","fc4e5dec2b323ba7f687b0414a6faecd"],["notes-bca/font-awesome-4.7.0/less/rotated-flipped.less","2088e18f446fcf2fe91e5293fc7f2847"],["notes-bca/font-awesome-4.7.0/less/screen-reader.less","79f38eb1f3eea913308f49ab5cd663bf"],["notes-bca/font-awesome-4.7.0/less/stacked.less","8b7e28e004c785a0a1a73afde547b9e7"],["notes-bca/font-awesome-4.7.0/less/variables.less","62803119d3ed114705a50717a53e2639"],["notes-bca/font-awesome-4.7.0/scss/_animated.scss","79db4428659752f59630c4388bbaa174"],["notes-bca/font-awesome-4.7.0/scss/_bordered-pulled.scss","6e194951ee06dd4cde6f94ed2ec86e47"],["notes-bca/font-awesome-4.7.0/scss/_core.scss","d4d62bafcfb00eb1b208acbf895a95a3"],["notes-bca/font-awesome-4.7.0/scss/_fixed-width.scss","e6fac8be09e2d3dc38fe9248b2eb0472"],["notes-bca/font-awesome-4.7.0/scss/_icons.scss","e624b0b5cfd7ac3fcb4eefab15f983f6"],["notes-bca/font-awesome-4.7.0/scss/_larger.scss","8b00a4d732107fc1844ea18314c3cff9"],["notes-bca/font-awesome-4.7.0/scss/_list.scss","c33b069275c5877a4b3f144684664bf5"],["notes-bca/font-awesome-4.7.0/scss/_mixins.scss","f07164e3950c5dac464e3f5f9e14858d"],["notes-bca/font-awesome-4.7.0/scss/_path.scss","123f2994215b526902be3fa0596c8d13"],["notes-bca/font-awesome-4.7.0/scss/_rotated-flipped.scss","9a3f214edda562bf122802da5c686a12"],["notes-bca/font-awesome-4.7.0/scss/_screen-reader.scss","b4b497bdd83f580fa3942390763cc270"],["notes-bca/font-awesome-4.7.0/scss/_stacked.scss","638e8ae84e80a3428e9446578a7ed6a0"],["notes-bca/font-awesome-4.7.0/scss/_variables.scss","547c9f94a31ced29cbc7f029d700a639"],["notes-bca/font-awesome-4.7.0/scss/font-awesome.scss","bc5096695c4092d06d77da5329254590"],["notes-bca/form.html","04e1973550a6f9c62a4a9c1ce48724cc"],["notes-bca/index.html","03f3e9ab65ee86364c2daf4a57ba55e9"],["notes-bca/main.js","54c1c8ac24f2d48b1710f1f32c86556d"],["notes-bca/pagestyle.css","95804b4a447c26da7de5a25f2f3cb845"],["notes-bca/pdfs/Syllabus.pdf","52ad3dd10b8edfcf6865ea1ae1e1f4d3"],["notes-bca/pdfs/sem1.pdf","fdb5eca3093919d6a500a7f46aff4f40"],["notes-bca/pdfs/sem2.pdf","60daab9e4d45857314666e23c52f814c"],["notes-bca/pdfs/sem3.pdf","55f9ad056b8636f938dcd0fcea71aee1"],["notes-bca/pdfs/sem4.pdf","6203d08be8b56d9612c497f684710963"],["notes-bca/pdfs/sem5.pdf","f87d3e61abf642aa5158ffc5aeec234c"],["notes-bca/pdfs/sem6.pdf","928a5cbc4723fff9ce4eb8ce5d99b99d"],["notes-bca/pref/misc.css","d94a9e14855cd6dc7b2dc73caa2bb185"],["notes-bca/pref/style.css","4cfd42d62b21a188de8f07421946562a"],["notes-bca/preferences.html","8688701d17135a8c8f30791f708d2628"],["notes-bca/quiz.html","4e01a8953dc4885ef96ec29ed6809f08"],["notes-bca/quizResources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["notes-bca/quizResources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["notes-bca/quizScript.js","6da9acc9b2f0e692b74e7bf2d15959c9"],["notes-bca/quizStyle.css","24f9222aeed1a59321b90d6ca85fc492"],["notes-bca/resources/apple-touch-icon.png","740deb30a8d994a10b75c7959e7fbb2d"],["notes-bca/resources/dbtn_black.svg","629507a90e562ff0a0bc4abe93053102"],["notes-bca/resources/dbtn_white.svg","544a09b1e20a30227686b62fc5b483e5"],["notes-bca/resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["notes-bca/resources/favicon-96x96.png","3fd0bfce6389bba56a891e183f139cc1"],["notes-bca/resources/favicon.ico","a2ee9d2613b66ee8f014b177ed8d0a05"],["notes-bca/resources/favicon.svg","b46af76b5e159cc2a78d2c7008931477"],["notes-bca/resources/larr_black.svg","12365a8bc92a9ebf25a2b5d6f3bde5b8"],["notes-bca/resources/larr_white.svg","b7396d57bbdc9d17ec229336337fa510"],["notes-bca/resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["notes-bca/resources/openin.svg","17d30c5b80c519f222540f891b8ef278"],["notes-bca/resources/pattern.png","b1220deaaf71dbab4fe9443873063f83"],["notes-bca/resources/site.webmanifest","ce9079d0e66618f261ba361d9953f5eb"],["notes-bca/resources/svg.svg","bea14a865d1bd2718ba7086a0fa3bfea"],["notes-bca/resources/web-app-manifest-192x192.png","364709b17fb20ac0713392fd3eb82942"],["notes-bca/resources/web-app-manifest-512x512.png","b8bc79dd1d644a939a55ec28a013c4f7"],["notes-bca/script.js","f6ab140a2816690cb735227b27d89b88"],["notes-bca/service-worker.js","23cef6185bf6e545e0b0714962b807b3"],["notes-bca/stkEdit.css","1d5db4952c5e349d3fc9cc031b3d7a33"],["notes-bca/style.css","7d6036bc2fcbb6b26eb8d1788f049480"],["notes-bca/syllabus.html","3f8b89f640a5244381e8005d2b87b6dc"],["notes-bca/template/dontseetemplate.html","7241a6d1171aad1e8d92c034ab2b80d6"],["notes-bca/uncompressed/pagestyleuncomp.css","2f85031eeccb7cff18d889794dd52fda"],["notes-bca/uncompressed/scriptuncomp.js","d528c290141dbaebd9bedc8d429aca0c"],["pagestyle.css","95804b4a447c26da7de5a25f2f3cb845"],["pdfs/Syllabus.pdf","52ad3dd10b8edfcf6865ea1ae1e1f4d3"],["pdfs/sem1.pdf","fdb5eca3093919d6a500a7f46aff4f40"],["pdfs/sem2.pdf","60daab9e4d45857314666e23c52f814c"],["pdfs/sem3.pdf","55f9ad056b8636f938dcd0fcea71aee1"],["pdfs/sem4.pdf","6203d08be8b56d9612c497f684710963"],["pdfs/sem5.pdf","f87d3e61abf642aa5158ffc5aeec234c"],["pdfs/sem6.pdf","928a5cbc4723fff9ce4eb8ce5d99b99d"],["pref/misc.css","d94a9e14855cd6dc7b2dc73caa2bb185"],["pref/style.css","4cfd42d62b21a188de8f07421946562a"],["preferences.html","8688701d17135a8c8f30791f708d2628"],["quiz.html","150bd297e216a622dc7a0a7f60f72336"],["quizResources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["quizResources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["quizScript.js","6da9acc9b2f0e692b74e7bf2d15959c9"],["quizStyle.css","a3d5b6f2bec5eeda54fd83039467d47a"],["resources/apple-touch-icon.png","740deb30a8d994a10b75c7959e7fbb2d"],["resources/dbtn_black.svg","629507a90e562ff0a0bc4abe93053102"],["resources/dbtn_white.svg","544a09b1e20a30227686b62fc5b483e5"],["resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["resources/favicon-96x96.png","3fd0bfce6389bba56a891e183f139cc1"],["resources/favicon.ico","a2ee9d2613b66ee8f014b177ed8d0a05"],["resources/favicon.svg","b46af76b5e159cc2a78d2c7008931477"],["resources/larr_black.svg","12365a8bc92a9ebf25a2b5d6f3bde5b8"],["resources/larr_white.svg","b7396d57bbdc9d17ec229336337fa510"],["resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["resources/openin.svg","17d30c5b80c519f222540f891b8ef278"],["resources/pattern.png","b1220deaaf71dbab4fe9443873063f83"],["resources/site.webmanifest","ce9079d0e66618f261ba361d9953f5eb"],["resources/svg.svg","bea14a865d1bd2718ba7086a0fa3bfea"],["resources/web-app-manifest-192x192.png","364709b17fb20ac0713392fd3eb82942"],["resources/web-app-manifest-512x512.png","b8bc79dd1d644a939a55ec28a013c4f7"],["script.js","f6ab140a2816690cb735227b27d89b88"],["stkEdit.css","1d5db4952c5e349d3fc9cc031b3d7a33"],["style.css","7d6036bc2fcbb6b26eb8d1788f049480"],["syllabus.html","3f8b89f640a5244381e8005d2b87b6dc"],["template/dontseetemplate.html","7241a6d1171aad1e8d92c034ab2b80d6"],["uncompressed/pagestyleuncomp.css","2f85031eeccb7cff18d889794dd52fda"],["uncompressed/scriptuncomp.js","d528c290141dbaebd9bedc8d429aca0c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







