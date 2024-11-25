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

var precacheConfig = [["README.md","481090a7115be0a3d21b9896827dc6e2"],["Semester 1.html","bac0f315240918fbe91da087c5ad31f4"],["Semester 2.html","27aa9980b51f41412760e1d156dd22c8"],["Semester 3.html","4e8433a2d288a7436dad2bc45babd588"],["Semester 4.html","1d93913f1a60cb591d32043be6c290d3"],["Semester 5.html","aed1135e8b663983239e834a4b0d9832"],["Semester 6.html","056f6a8c863b068b3d384bc551e5125d"],["Semesters/Resources/back.svg","12365a8bc92a9ebf25a2b5d6f3bde5b8"],["Semesters/Resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["Semesters/Resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["Semesters/script.js","934b78b0b8d8c1219b22aaeeb65eac50"],["Semesters/sem1/C programming.html","88580464ad0e86971790155894c1cdcc"],["Semesters/style.css","805ceeb3f518fe9e9d006f0296a00e22"],["about.html","153cc129268447cd1d3a3c753075502a"],["credits.html","c8e393b45a465b641495dfa08c2e119e"],["experimental.html","5ae44be1e7a8e657389f928715bf2e2c"],["font-awesome-4.7.0/HELP-US-OUT.txt","a1e5be58e81e919ba2e579cd1c65283e"],["font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["font-awesome-4.7.0/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["font-awesome-4.7.0/less/animated.less","08baef05e05301cabc91599a54921081"],["font-awesome-4.7.0/less/bordered-pulled.less","898f90e40876883214bbd121b0c20e9f"],["font-awesome-4.7.0/less/core.less","fb4efe4ae63737706875bbbfc7b7e9af"],["font-awesome-4.7.0/less/fixed-width.less","5e07ec001f8d21bd279c12ee542813f7"],["font-awesome-4.7.0/less/font-awesome.less","15cb7faa02437c2f9719351c157fe7e7"],["font-awesome-4.7.0/less/icons.less","bf95b901c36b646ff457379bdcda94b7"],["font-awesome-4.7.0/less/larger.less","8cb65280c0f889daf72626c21a7c8628"],["font-awesome-4.7.0/less/list.less","975571323cf880a4a30601998236b027"],["font-awesome-4.7.0/less/mixins.less","fbb1f2f1ab96ba020c7f14208aac72b8"],["font-awesome-4.7.0/less/path.less","a8c41460c42a4fe9e98550f00c8b3f19"],["font-awesome-4.7.0/less/rotated-flipped.less","a8476cdc50c264abd11ff59d6a9dd025"],["font-awesome-4.7.0/less/screen-reader.less","0f881617264587bef0df6ce92253ecea"],["font-awesome-4.7.0/less/stacked.less","518e2b2d263982d2caa1e6514b4b4eac"],["font-awesome-4.7.0/less/variables.less","be3f6eed38aa909483e1bd9ee0876e80"],["font-awesome-4.7.0/scss/_animated.scss","39ff4f359a7b81d6585075715f41e5dc"],["font-awesome-4.7.0/scss/_bordered-pulled.scss","4cad0df17bf40327feae33fa9a6c6ba2"],["font-awesome-4.7.0/scss/_core.scss","ef059a98cf9de6ca5b77ee6850771cf0"],["font-awesome-4.7.0/scss/_fixed-width.scss","9277ab6964a434d499873687b00be906"],["font-awesome-4.7.0/scss/_icons.scss","de9fa842ad0b619a95ac4f42ac6ba930"],["font-awesome-4.7.0/scss/_larger.scss","e95931566f6fc6ad5685c4fa9802e206"],["font-awesome-4.7.0/scss/_list.scss","7107e80b053928271d5fcf422dc29490"],["font-awesome-4.7.0/scss/_mixins.scss","aa2b8f32b403733713d8885f14ab86cc"],["font-awesome-4.7.0/scss/_path.scss","ab5a9e8388563e097b5ce835601f01d2"],["font-awesome-4.7.0/scss/_rotated-flipped.scss","9f5d4bc6fadea89328d2aac26574a9d8"],["font-awesome-4.7.0/scss/_screen-reader.scss","8907bd7dbf4799e8120bda5568d76fea"],["font-awesome-4.7.0/scss/_stacked.scss","5594237226aedfbca2fa1c7f4604c214"],["font-awesome-4.7.0/scss/_variables.scss","dc5261f37a8a01feeb52a746d16c0459"],["font-awesome-4.7.0/scss/font-awesome.scss","8c015559216d1654630a839b61c6b83d"],["form.html","5065b10a3dbff4ef74a8f5e3a28c471b"],["index.html","a87b650544697631f3ec4cc80368f8c2"],["main.js","ef14d2acadef0d849913ec42a64fa979"],["pagestyle.css","813aac7096431015f61e12554a8a0ba0"],["pdfs/Syllabus.pdf","52ad3dd10b8edfcf6865ea1ae1e1f4d3"],["pdfs/sem1.pdf","fdb5eca3093919d6a500a7f46aff4f40"],["pdfs/sem2.pdf","60daab9e4d45857314666e23c52f814c"],["pdfs/sem3.pdf","55f9ad056b8636f938dcd0fcea71aee1"],["pdfs/sem4.pdf","6203d08be8b56d9612c497f684710963"],["pdfs/sem5.pdf","f87d3e61abf642aa5158ffc5aeec234c"],["pdfs/sem6.pdf","928a5cbc4723fff9ce4eb8ce5d99b99d"],["pref/misc.css","49e15ce9651a633045554ba532702c58"],["pref/style.css","153ed0069383facac1aa8c86a842881f"],["preferences.html","ddfc5eb44c64fffeb0a31cc245b8670b"],["quiz.html","d97ba1d72fd1df4eb67a811291c03bd8"],["quizResources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["quizResources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["quizScript.js","934b78b0b8d8c1219b22aaeeb65eac50"],["quizStyle.css","b099a40b7c79832f7f4049e5e2b0905b"],["resources/apple-touch-icon.png","740deb30a8d994a10b75c7959e7fbb2d"],["resources/dbtn_black.svg","629507a90e562ff0a0bc4abe93053102"],["resources/dbtn_white.svg","544a09b1e20a30227686b62fc5b483e5"],["resources/dm.svg","86d7060bcae0c949de0eaa253cfbe135"],["resources/favicon-96x96.png","3fd0bfce6389bba56a891e183f139cc1"],["resources/favicon.ico","a2ee9d2613b66ee8f014b177ed8d0a05"],["resources/favicon.svg","064caf92832d61503bfe19cb3821c6d7"],["resources/larr_black.svg","12365a8bc92a9ebf25a2b5d6f3bde5b8"],["resources/larr_white.svg","b7396d57bbdc9d17ec229336337fa510"],["resources/lm.svg","2ea42e6f1e2c2d7391b09cc6a15ca987"],["resources/openin.svg","17d30c5b80c519f222540f891b8ef278"],["resources/pattern.png","b1220deaaf71dbab4fe9443873063f83"],["resources/site.webmanifest","fdcae62ba60fd35f500add2a8723d19e"],["resources/svg.svg","bea14a865d1bd2718ba7086a0fa3bfea"],["resources/web-app-manifest-192x192.png","364709b17fb20ac0713392fd3eb82942"],["resources/web-app-manifest-512x512.png","b8bc79dd1d644a939a55ec28a013c4f7"],["script.js","9d81c7c5b8648272bd6341c78a9e6d13"],["stkEdit.css","3c77f7d4c42b20f16952c0f9051c4f5d"],["style.css","433461b57335cad643ad114037724792"],["syllabus.html","715ac31e10559acbe691e7f965503627"],["uncompressed/pagestyleuncomp.css","4da94d9b026bfc8b4cb74e24520ddac1"],["uncompressed/scriptuncomp.js","681b89816bbd62a12c27fde4c731c927"]];
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







