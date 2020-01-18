# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.2.0](https://github.com/matt-riley/api.mattriley.info/compare/v2.1.0...v2.2.0) (2020-01-05)


### Features

* **mc: artist:** displays single artist when provided an id ([fb12aeb](https://github.com/matt-riley/api.mattriley.info/commit/fb12aeb4d47084ad47cf600f2953e25685777cbc)), closes [#380](https://github.com/matt-riley/api.mattriley.info/issues/380)
* **mc: artists:** lists all artists in the collection ([0166fad](https://github.com/matt-riley/api.mattriley.info/commit/0166fadc008ade15d8245b01561ff845e0abe40a)), closes [#380](https://github.com/matt-riley/api.mattriley.info/issues/380)
* **mc: labels:** returns the labels in the collection ([5a0d768](https://github.com/matt-riley/api.mattriley.info/commit/5a0d76866a0b28e9e5fad8178ffced624953fc95)), closes [#380](https://github.com/matt-riley/api.mattriley.info/issues/380)
* **mc: release:** returns single release ([3654834](https://github.com/matt-riley/api.mattriley.info/commit/3654834e4ac44ec7b397ca4392f27699879b5ba4)), closes [#380](https://github.com/matt-riley/api.mattriley.info/issues/380)
* **mc: releases:** lists all releases ([f957301](https://github.com/matt-riley/api.mattriley.info/commit/f957301f95dc0666d6904d108c78c2277a0bef7f)), closes [#380](https://github.com/matt-riley/api.mattriley.info/issues/380)

### [2.1.1](https://github.com/matt-riley/api.mattriley.info/compare/v2.1.0...v2.1.1) (2020-01-05)

## [2.1.0](https://github.com/matt-riley/api.mattriley.info/compare/v2.0.0...v2.1.0) (2019-12-24)


### Features

* **cloud run:** moves to Cloud Run instead of AppEngine ([6895426](https://github.com/matt-riley/api.mattriley.info/commit/6895426fd0f0d70f82e953c19a317b3e377a2839)), closes [#373](https://github.com/matt-riley/api.mattriley.info/issues/373)

## [2.0.0](https://github.com/matt-riley/api.mattriley.info/compare/v1.1.3...v2.0.0) (2019-12-22)


### ⚠ BREAKING CHANGES

* **add release:** Removes a load of fields that were not being used and ultimately just clutter the
place up
* **nexus:** Totally changes the way it is written

### Features

* **add release:** add release feature added ([#374](https://github.com/matt-riley/api.mattriley.info/issues/374)) ([1483557](https://github.com/matt-riley/api.mattriley.info/commit/1483557e89b8c73f109f86b9d2cce94b7816e095)), closes [#368](https://github.com/matt-riley/api.mattriley.info/issues/368)
* **nexus:** move to nexus ([18d7ced](https://github.com/matt-riley/api.mattriley.info/commit/18d7ced8468a215d9ae85b6af52664591899dbe9)), closes [#370](https://github.com/matt-riley/api.mattriley.info/issues/370)

### [1.1.3](https://github.com/matt-riley/api.mattriley.info/compare/v1.1.2...v1.1.3) (2019-06-03)


### Bug Fixes

* **Cache doesn't work:** Removes caching as it wasn't working on App Engine ([713d8ee](https://github.com/matt-riley/api.mattriley.info/commit/713d8ee))



### [1.1.2](https://github.com/matt-riley/api.mattriley.info/compare/v1.1.0...v1.1.2) (2019-06-02)



### [1.1.1](https://github.com/matt-riley/api.mattriley.info/compare/v1.1.0...v1.1.1) (2019-06-02)



## [1.1.0](https://github.com/matt-riley/api.mattriley.info/compare/v1.0.0...v1.1.0) (2019-06-02)


### Bug Fixes

* **Fixed errors:** Would not work on App Engine, resolved the issues ([4f8a1a8](https://github.com/matt-riley/api.mattriley.info/commit/4f8a1a8))


### Features

* **Caching enabled:** The allows persisted queries, caching of responses and fields in memcache on ([5012ed4](https://github.com/matt-riley/api.mattriley.info/commit/5012ed4))
* **Logger:** Adds winston as the logger and adds it to the context ([90a5d09](https://github.com/matt-riley/api.mattriley.info/commit/90a5d09))
* **Recently listened tracks:** Addes recently listened tracks from Last.fm ([f2aaf51](https://github.com/matt-riley/api.mattriley.info/commit/f2aaf51))



# [1.0.0](https://github.com/matt-riley/mattapps/tree/master/api.mattriley.info/compare/v0.0.1...v1.0.0) (2019-04-27)


* feature switches (#95) ([8d3e5bd](https://github.com/matt-riley/mattapps/tree/master/api.mattriley.info/commit/8d3e5bd)), closes [#95](https://github.com/matt-riley/mattapps/tree/master/api.mattriley.info/issues/95)


### BREAKING CHANGES

* Deprecates status type



## 0.0.1 (2019-03-25)
