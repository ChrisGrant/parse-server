## [8.2.1](https://github.com/parse-community/parse-server/compare/8.2.0...8.2.1) (2025-06-01)


### Bug Fixes

* `Parse.Query.containedIn` and `matchesQuery` do not work with nested objects ([#9738](https://github.com/parse-community/parse-server/issues/9738)) ([0db3a6f](https://github.com/parse-community/parse-server/commit/0db3a6ff27a129427770e314a792cc586e4255b5))

### Performance Improvements

* Remove saving Parse Cloud Job request parameters in internal collection `_JobStatus` ([#8343](https://github.com/parse-community/parse-server/issues/8343)) ([e98733c](https://github.com/parse-community/parse-server/commit/e98733cbac9451521a3acc388d2f9d29eb4610e0))

# [8.2.0](https://github.com/parse-community/parse-server/compare/8.1.0...8.2.0) (2025-05-01)


### Features

* Add TypeScript definitions ([#9693](https://github.com/parse-community/parse-server/issues/9693)) ([e86718f](https://github.com/parse-community/parse-server/commit/e86718fc59c7c8e6f3c6abd0feb7d1a68ca76c23))

### Performance Improvements

* Add details to error message in `Parse.Query.aggregate` ([#9689](https://github.com/parse-community/parse-server/issues/9689)) ([9de6999](https://github.com/parse-community/parse-server/commit/9de6999e257d839b68bbca282447777edfdb1ddf))

# [8.1.0](https://github.com/parse-community/parse-server/compare/8.0.2...8.1.0) (2025-04-04)


### Bug Fixes

* Parse Server doesn't shutdown gracefully ([#9634](https://github.com/parse-community/parse-server/issues/9634)) ([aed918d](https://github.com/parse-community/parse-server/commit/aed918d3109e739f7231d481b5f48c68fc01cf04))

### Features

* Add Cloud Code triggers `Parse.Cloud.beforeFind(Parse.File)`and `Parse.Cloud.afterFind(Parse.File)` ([#8700](https://github.com/parse-community/parse-server/issues/8700)) ([b2beaa8](https://github.com/parse-community/parse-server/commit/b2beaa86ff543a7aa4ad274c7a23bc4aa302c3fa))
* Add default ACL ([#8701](https://github.com/parse-community/parse-server/issues/8701)) ([12b5d78](https://github.com/parse-community/parse-server/commit/12b5d781dc3f8c43c0c566dffa9308d02a7d8043))
* Upgrade Parse JS SDK from 6.0.0 to 6.1.0 ([#9686](https://github.com/parse-community/parse-server/issues/9686)) ([f49c371](https://github.com/parse-community/parse-server/commit/f49c371c1373d41e68b091e65f33a71ff6fc6dd0))

## [8.0.2](https://github.com/parse-community/parse-server/compare/8.0.1...8.0.2) (2025-03-21)


### Bug Fixes

* Authentication provider credentials are usable across Parse Server apps; fixes security vulnerability [GHSA-837q-jhwx-cmpv](https://github.com/parse-community/parse-server/security/advisories/GHSA-837q-jhwx-cmpv) ([#9667](https://github.com/parse-community/parse-server/issues/9667)) ([5ef0440](https://github.com/parse-community/parse-server/commit/5ef0440c8e763854e62341acaeb6dc4ade3ba82f))

## [8.0.1](https://github.com/parse-community/parse-server/compare/8.0.0...8.0.1) (2025-03-17)


### Bug Fixes

* Security upgrade node from 20.18.2-alpine3.20 to 20.19.0-alpine3.20 ([#9652](https://github.com/parse-community/parse-server/issues/9652)) ([2be1a19](https://github.com/parse-community/parse-server/commit/2be1a19a13d6f0f8e3eb4e399a6279ff4d01db76))
* Using Parse Server option `extendSessionOnUse` does not correctly clear memory and functions as a debounce instead of a throttle ([#8683](https://github.com/parse-community/parse-server/issues/8683)) ([6258a6a](https://github.com/parse-community/parse-server/commit/6258a6a11235dc642c71074d24e19c055294d26d))

# [8.0.0](https://github.com/parse-community/parse-server/compare/7.4.0...8.0.0) (2025-03-04)


### Bug Fixes

* LiveQueryServer crashes using cacheAdapter on disconnect from Redis 4 server ([#9616](https://github.com/parse-community/parse-server/issues/9616)) ([bbc6bd4](https://github.com/parse-community/parse-server/commit/bbc6bd4b3f493170c13ad3314924cbf1f379eca4))
* Push adapter not loading on some versions of Node 22 ([#9524](https://github.com/parse-community/parse-server/issues/9524)) ([ff7f671](https://github.com/parse-community/parse-server/commit/ff7f671c79f5dcdc44e4319a10f3654e12662c23))
* Remove username from email verification and password reset process ([#8488](https://github.com/parse-community/parse-server/issues/8488)) ([d21dd97](https://github.com/parse-community/parse-server/commit/d21dd973363f9c5eca86a1007cb67e445b0d2e02))
* Security upgrade node from 20.17.0-alpine3.20 to 20.18.2-alpine3.20 ([#9583](https://github.com/parse-community/parse-server/issues/9583)) ([8f85ae2](https://github.com/parse-community/parse-server/commit/8f85ae205474f65414c0536754de12c87dbbf82a))

### Features

* Add dynamic master key by setting Parse Server option `masterKey` to a function ([#9582](https://github.com/parse-community/parse-server/issues/9582)) ([6f1d161](https://github.com/parse-community/parse-server/commit/6f1d161a2f263a166981f9544cf2aadce65afe23))
* Add support for MongoDB `databaseOptions` keys `autoSelectFamily`, `autoSelectFamilyAttemptTimeout` ([#9579](https://github.com/parse-community/parse-server/issues/9579)) ([5966068](https://github.com/parse-community/parse-server/commit/5966068e963e7a79eac8fba8720ee7d83578f207))
* Add support for MongoDB `databaseOptions` keys `minPoolSize`, `connectTimeoutMS`, `socketTimeoutMS` ([#9522](https://github.com/parse-community/parse-server/issues/9522)) ([91618fe](https://github.com/parse-community/parse-server/commit/91618fe738217b937cbfcec35969679e0adb7676))
* Add TypeScript support ([#9550](https://github.com/parse-community/parse-server/issues/9550)) ([59e46d0](https://github.com/parse-community/parse-server/commit/59e46d0aea3e6529994d98160d993144b8075291))
* Change default value of Parse Server option `encodeParseObjectInCloudFunction` to `true` ([#9527](https://github.com/parse-community/parse-server/issues/9527)) ([5c5ad69](https://github.com/parse-community/parse-server/commit/5c5ad69b4a917b7ed7c328a8255144e105c40b08))
* Deprecate `PublicAPIRouter` in favor of `PagesRouter` ([#9526](https://github.com/parse-community/parse-server/issues/9526)) ([7f66629](https://github.com/parse-community/parse-server/commit/7f666292e8b9692966672486b7108edefc356309))
* Increase required minimum MongoDB versions to `6.0.19`, `7.0.16`, `8.0.4` ([#9531](https://github.com/parse-community/parse-server/issues/9531)) ([871e508](https://github.com/parse-community/parse-server/commit/871e5082a9fd768cee3012e26d3c8ddff5c2952c))
* Increase required minimum Node versions to `18.20.4`, `20.18.0`, `22.12.0` ([#9521](https://github.com/parse-community/parse-server/issues/9521)) ([4e151cd](https://github.com/parse-community/parse-server/commit/4e151cd0a52191809452f197b2f29c3a12525b67))
* Increase required minimum versions to Postgres `15`, PostGIS `3.3` ([#9538](https://github.com/parse-community/parse-server/issues/9538)) ([89c9b54](https://github.com/parse-community/parse-server/commit/89c9b5485a07a411fb35de4f8cf0467e7eb01f85))
* Upgrade to express 5.0.1 ([#9530](https://github.com/parse-community/parse-server/issues/9530)) ([e0480df](https://github.com/parse-community/parse-server/commit/e0480dfa8d97946e57eac6b74d937978f8454b3a))
* Upgrade to Parse JS SDK 6.0.0 ([#9624](https://github.com/parse-community/parse-server/issues/9624)) ([bf9db75](https://github.com/parse-community/parse-server/commit/bf9db75e8685def1407034944725e758bc926c26))


### BREAKING CHANGES

* This upgrades the internally used Express framework from version 4 to 5, which may be a breaking change. If Parse Server is set up to be mounted on an Express application, we recommend to also use version 5 of the Express framework to avoid any compatibility issues. Note that even if there are no issues after upgrading, future releases of Parse Server may introduce issues if Parse Server internally relies on Express 5-specific features which are unsupported by the Express version on which it is mounted. See the Express [migration guide](https://expressjs.com/en/guide/migrating-5.html) and [release announcement](https://expressjs.com/2024/10/15/v5-release.html#breaking-changes) for more info. ([e0480df](e0480df))
* This upgrades to the Parse JS SDK 6.0.0. See the [change log](https://github.com/parse-community/Parse-SDK-JS/releases/tag/6.0.0) of the Parse JS SDK for breaking changes and more details. ([bf9db75](bf9db75))
* This removes the username from the email verification and password reset process to prevent storing personally identifiable information (PII) in server and infrastructure logs. Customized HTML pages or emails related to email verification and password reset may need to be adapted accordingly. See the new templates that come bundled with Parse Server and the [migration guide](https://github.com/parse-community/parse-server/blob/alpha/8.0.0.md) for more details. ([d21dd97](d21dd97))
* This releases increases the required minimum versions to Postgres `15`, PostGIS `3.3` and removes support for Postgres `13`, `14`, PostGIS `3.1`, `3.2`. ([89c9b54](89c9b54))
* The default value of Parse Server option `encodeParseObjectInCloudFunction` changes to `true`; the option has been deprecated and will be removed in a future version. ([5c5ad69](5c5ad69))
* This releases increases the required minimum MongoDB versions to `6.0.19`, `7.0.16`, `8.0.4` and removes support for MongoDB `4`, `5`. ([871e508](871e508))
* This releases increases the required minimum Node versions to 18.20.4, 20.18.0, 22.12.0 and removes unofficial support for Node 19. ([4e151cd](4e151cd))

# [7.4.0](https://github.com/parse-community/parse-server/compare/7.3.0...7.4.0) (2024-12-23)


### Bug Fixes

* `Parse.Query.distinct` fails due to invalid aggregate stage 'hint' ([#9295](https://github.com/parse-community/parse-server/issues/9295)) ([5f66c6a](https://github.com/parse-community/parse-server/commit/5f66c6a075cbe1cdaf9d1b108ee65af8ae596b89))
* Security upgrade cross-spawn from 7.0.3 to 7.0.6 ([#9444](https://github.com/parse-community/parse-server/issues/9444)) ([3d034e0](https://github.com/parse-community/parse-server/commit/3d034e0a993e3e5bd9bb96a7e382bb3464f1eb68))
* Security upgrade fast-xml-parser from 4.4.0 to 4.4.1 ([#9262](https://github.com/parse-community/parse-server/issues/9262)) ([992d39d](https://github.com/parse-community/parse-server/commit/992d39d508f230c774dcb764d1d907ec8887e6c5))
* Security upgrade node from 20.14.0-alpine3.20 to 20.17.0-alpine3.20 ([#9300](https://github.com/parse-community/parse-server/issues/9300)) ([15bb17d](https://github.com/parse-community/parse-server/commit/15bb17d87153bf0d38f08fe4c720da29a204b36b))

### Features

* Add support for MongoDB 8 ([#9269](https://github.com/parse-community/parse-server/issues/9269)) ([4756c66](https://github.com/parse-community/parse-server/commit/4756c66cd9f55afa1621d1a3f6fa850ed605cb53))
* Add support for PostGIS 3.5 ([#9354](https://github.com/parse-community/parse-server/issues/9354)) ([8ea3538](https://github.com/parse-community/parse-server/commit/8ea35382db3436d54ab59bd30706705564b0985c))
* Add support for Postgres 17 ([#9324](https://github.com/parse-community/parse-server/issues/9324)) ([fa2ee31](https://github.com/parse-community/parse-server/commit/fa2ee3196e4319a142b3838bb947c98dcba5d5cb))
* Upgrade @parse/push-adapter from 6.7.1 to 6.8.0 ([#9489](https://github.com/parse-community/parse-server/issues/9489)) ([286aa66](https://github.com/parse-community/parse-server/commit/286aa664ac8830d36c3e70d2316917d15f0b6df5))

# [7.3.0](https://github.com/parse-community/parse-server/compare/7.2.0...7.3.0) (2024-10-03)


### Bug Fixes

* Custom object ID allows to acquire role privileges ([GHSA-8xq9-g7ch-35hg](https://github.com/parse-community/parse-server/security/advisories/GHSA-8xq9-g7ch-35hg)) ([#9317](https://github.com/parse-community/parse-server/issues/9317)) ([13ee52f](https://github.com/parse-community/parse-server/commit/13ee52f0d19ef3a3524b3d79aea100e587eb3cfc))
* Parse Server `databaseOptions` nested keys incorrectly identified as invalid ([#9213](https://github.com/parse-community/parse-server/issues/9213)) ([77206d8](https://github.com/parse-community/parse-server/commit/77206d804443cfc1618c24f8961bd677de9920c0))
* Parse Server installation fails due to post install script incorrectly parsing required min. Node version ([#9216](https://github.com/parse-community/parse-server/issues/9216)) ([0fa82a5](https://github.com/parse-community/parse-server/commit/0fa82a54fe38ec14e8054339285d3db71a8624c8))
* Parse Server option `maxLogFiles` doesn't recognize day duration literals such as `1d` to mean 1 day ([#9215](https://github.com/parse-community/parse-server/issues/9215)) ([0319cee](https://github.com/parse-community/parse-server/commit/0319cee2dbf65e90bad377af1ed14ea25c595bf5))
* Security upgrade path-to-regexp from 6.2.1 to 6.3.0 ([#9314](https://github.com/parse-community/parse-server/issues/9314)) ([8b7fe69](https://github.com/parse-community/parse-server/commit/8b7fe699c1c376ecd8cc1c97cce8e704ee41f28a))

### Features

* Add atomic operations for Cloud Config parameters ([#9219](https://github.com/parse-community/parse-server/issues/9219)) ([35cadf9](https://github.com/parse-community/parse-server/commit/35cadf9b8324879fb7309ba5d7ea46f2c722d614))
* Add Cloud Code triggers `Parse.Cloud.beforeSave` and `Parse.Cloud.afterSave` for Parse Config ([#9232](https://github.com/parse-community/parse-server/issues/9232)) ([90a1e4a](https://github.com/parse-community/parse-server/commit/90a1e4a200423d644efb3f0ba2fba4b99f5cf954))
* Add Node 22 support ([#9187](https://github.com/parse-community/parse-server/issues/9187)) ([7778471](https://github.com/parse-community/parse-server/commit/7778471999c7e42236ce404229660d80ecc2acd6))
* Add support for asynchronous invocation of `FilesAdapter.getFileLocation` ([#9271](https://github.com/parse-community/parse-server/issues/9271)) ([1a2da40](https://github.com/parse-community/parse-server/commit/1a2da4055abe831b3017172fb75e16d7a8093873))

# [7.2.0](https://github.com/parse-community/parse-server/compare/7.1.0...7.2.0) (2024-07-09)


### Bug Fixes

* Invalid push notification tokens are not cleaned up from database for FCM API v2 ([#9173](https://github.com/parse-community/parse-server/issues/9173)) ([284da09](https://github.com/parse-community/parse-server/commit/284da09f4546356b37511a589fb5f64a3efffe79))

### Features

* Add support for dot notation on array fields of Parse Object ([#9115](https://github.com/parse-community/parse-server/issues/9115)) ([cf4c880](https://github.com/parse-community/parse-server/commit/cf4c8807b9da87a0a5f9c94e5bdfcf17cda80cf4))
* Upgrade to @parse/push-adapter 6.4.0 ([#9182](https://github.com/parse-community/parse-server/issues/9182)) ([ef1634b](https://github.com/parse-community/parse-server/commit/ef1634bf1f360429108d29b08032fc7961ff96a1))
* Upgrade to Parse JS SDK 5.3.0 ([#9180](https://github.com/parse-community/parse-server/issues/9180)) ([dca187f](https://github.com/parse-community/parse-server/commit/dca187f91b93cbb362b22a3fb9ee38451799ff13))

# [7.1.0](https://github.com/parse-community/parse-server/compare/7.0.0...7.1.0) (2024-06-30)


### Bug Fixes

* `Parse.Cloud.startJob` and `Parse.Push.send` not returning status ID when setting Parse Server option `directAccess: true` ([#8766](https://github.com/parse-community/parse-server/issues/8766)) ([5b0efb2](https://github.com/parse-community/parse-server/commit/5b0efb22efe94c47f243cf8b1e6407ed5c5a67d3))
* `Required` option not handled correctly for special fields (File, GeoPoint, Polygon) on GraphQL API mutations ([#8915](https://github.com/parse-community/parse-server/issues/8915)) ([907ad42](https://github.com/parse-community/parse-server/commit/907ad4267c228d26cfcefe7848b30ce85ba7ff8f))
* Facebook Limited Login not working due to incorrect domain in JWT validation ([#9122](https://github.com/parse-community/parse-server/issues/9122)) ([9d0bd2b](https://github.com/parse-community/parse-server/commit/9d0bd2badd6e5f7429d1af00b118225752e5d86a))
* Live query throws error when constraint `notEqualTo` is set to `null` ([#8835](https://github.com/parse-community/parse-server/issues/8835)) ([11d3e48](https://github.com/parse-community/parse-server/commit/11d3e484df862224c15d20f6171514948981ea90))
* Parse Server option `extendSessionOnUse` not working for session lengths < 24 hours ([#9113](https://github.com/parse-community/parse-server/issues/9113)) ([0a054e6](https://github.com/parse-community/parse-server/commit/0a054e6b541fd5ab470bf025665f5f7d2acedaa0))
* Rate limiting can fail when using Parse Server option `rateLimit.redisUrl` with clusters ([#8632](https://github.com/parse-community/parse-server/issues/8632)) ([c277739](https://github.com/parse-community/parse-server/commit/c27773962399f8e27691e3b8087e7e1d59516efd))
* SQL injection when using Parse Server with PostgreSQL; fixes security vulnerability [GHSA-c2hr-cqg6-8j6r](https://github.com/parse-community/parse-server/security/advisories/GHSA-c2hr-cqg6-8j6r) ([#9167](https://github.com/parse-community/parse-server/issues/9167)) ([2edf1e4](https://github.com/parse-community/parse-server/commit/2edf1e4c0363af01e97a7fbc97694f851b7d1ff3))

### Features

* Add `silent` log level for Cloud Code ([#8803](https://github.com/parse-community/parse-server/issues/8803)) ([5f81efb](https://github.com/parse-community/parse-server/commit/5f81efb42964c4c2fa8bcafee9446a0122e3ce21))
* Add server security check status `security.enableCheck` to Features Router ([#8679](https://github.com/parse-community/parse-server/issues/8679)) ([b07ec15](https://github.com/parse-community/parse-server/commit/b07ec153825882e97cc48dc84072c7f549f3238b))
* Prevent Parse Server start in case of unknown option in server configuration ([#8987](https://github.com/parse-community/parse-server/issues/8987)) ([8758e6a](https://github.com/parse-community/parse-server/commit/8758e6abb9dbb68757bddcbd332ad25100c24a0e))
* Upgrade to @parse/push-adapter 6.0.0 ([#9066](https://github.com/parse-community/parse-server/issues/9066)) ([18bdbf8](https://github.com/parse-community/parse-server/commit/18bdbf89c53a57648891ef582614ba7c2941e587))
* Upgrade to @parse/push-adapter 6.2.0 ([#9127](https://github.com/parse-community/parse-server/issues/9127)) ([ca20496](https://github.com/parse-community/parse-server/commit/ca20496f28e5ec1294a7a23c8559df82b79b2a04))
* Upgrade to Parse JS SDK 5.2.0 ([#9128](https://github.com/parse-community/parse-server/issues/9128)) ([665b8d5](https://github.com/parse-community/parse-server/commit/665b8d52d6cf5275179a5e1fb132c934edb53ecc))

# [7.0.0](https://github.com/parse-community/parse-server/compare/6.4.0...7.0.0) (2024-03-19)


### Bug Fixes

* CacheAdapter does not connect when using a CacheAdapter with a JSON config ([#8633](https://github.com/parse-community/parse-server/issues/8633)) ([720d24e](https://github.com/parse-community/parse-server/commit/720d24e18540da35d50957f17be878316ec30318))
* Conditional email verification not working in some cases if `verifyUserEmails`, `preventLoginWithUnverifiedEmail` set to functions ([#8838](https://github.com/parse-community/parse-server/issues/8838)) ([8e7a6b1](https://github.com/parse-community/parse-server/commit/8e7a6b1480c0117e6c73e7adc5a6619115a04e85))
* Context not passed to Cloud Code Trigger `beforeFind` when using `Parse.Query.include` ([#8765](https://github.com/parse-community/parse-server/issues/8765)) ([7d32d89](https://github.com/parse-community/parse-server/commit/7d32d8934f3ae7af7a7d8b9cc6a829c7d73973d3))
* Deny request if master key is not set in Parse Server option `masterKeyIps` regardless of ACL and CLP ([#8957](https://github.com/parse-community/parse-server/issues/8957)) ([a7b5b38](https://github.com/parse-community/parse-server/commit/a7b5b38418cbed9be3f4a7665f25b97f592663e1))
* Docker image not published to Docker Hub on new release ([#8905](https://github.com/parse-community/parse-server/issues/8905)) ([a2ac8d1](https://github.com/parse-community/parse-server/commit/a2ac8d133c71cd7b61e5ef59c4be915cfea85db6))
* Docker version releases by removing arm/v6 and arm/v7 support ([#8976](https://github.com/parse-community/parse-server/issues/8976)) ([1f62dd0](https://github.com/parse-community/parse-server/commit/1f62dd0f4e107b22a387692558a042ee26ce8703))
* GraphQL file upload fails in case of use of pointer or relation ([#8721](https://github.com/parse-community/parse-server/issues/8721)) ([1aba638](https://github.com/parse-community/parse-server/commit/1aba6382c873fb489d4a898d301e6da9fb6aa61b))
* Improve PostgreSQL injection detection; fixes security vulnerability [GHSA-6927-3vr9-fxf2](https://github.com/parse-community/parse-server/security/advisories/GHSA-6927-3vr9-fxf2) which affects Parse Server deployments using a Postgres database ([#8961](https://github.com/parse-community/parse-server/issues/8961)) ([cbefe77](https://github.com/parse-community/parse-server/commit/cbefe770a7260b54748a058b8a7389937dc35833))
* Incomplete user object in `verifyEmail` function if both username and email are changed ([#8889](https://github.com/parse-community/parse-server/issues/8889)) ([1eb95ae](https://github.com/parse-community/parse-server/commit/1eb95aeb41a96250e582d79a703f6adcb403c08b))
* Parse Server option `emailVerifyTokenReuseIfValid: true` generates new token on every email verification request ([#8885](https://github.com/parse-community/parse-server/issues/8885)) ([0023ce4](https://github.com/parse-community/parse-server/commit/0023ce448a5e9423337d0e1a25648bde1156bc95))
* Parse Server option `fileExtensions` default value rejects file extensions that are less than 3 or more than 4 characters long ([#8699](https://github.com/parse-community/parse-server/issues/8699)) ([2760381](https://github.com/parse-community/parse-server/commit/276038118377c2b22381bcd8d30337203822121b))
* Parse Server option `fileUpload.fileExtensions` fails to determine file extension if filename contains multiple dots ([#8754](https://github.com/parse-community/parse-server/issues/8754)) ([3d6d50e](https://github.com/parse-community/parse-server/commit/3d6d50e0afff18b95fb906914e2cebd3839b517a))
* Security bump @babel/traverse from 7.20.5 to 7.23.2 ([#8777](https://github.com/parse-community/parse-server/issues/8777)) ([2d6b3d1](https://github.com/parse-community/parse-server/commit/2d6b3d18499179e99be116f25c0850d3f449509c))
* Security upgrade graphql from 16.6.0 to 16.8.1 ([#8758](https://github.com/parse-community/parse-server/issues/8758)) ([71dfd8a](https://github.com/parse-community/parse-server/commit/71dfd8a7ece8c0dd1a66d03bb9420cfd39f4f9b1))
* Server crashes on invalid Cloud Function or Cloud Job name; fixes security vulnerability [GHSA-6hh7-46r2-vf29](https://github.com/parse-community/parse-server/security/advisories/GHSA-6hh7-46r2-vf29) ([#9024](https://github.com/parse-community/parse-server/issues/9024)) ([9f6e342](https://github.com/parse-community/parse-server/commit/9f6e3429d3b326cf4e2994733c618d08032fac6e))
* Server crashes when receiving an array of `Parse.Pointer` in the request body ([#8784](https://github.com/parse-community/parse-server/issues/8784)) ([66e3603](https://github.com/parse-community/parse-server/commit/66e36039d8af654cfa0284666c0ddd94975dcb52))
* Username is `undefined` in email verification link on email change ([#8887](https://github.com/parse-community/parse-server/issues/8887)) ([e315c13](https://github.com/parse-community/parse-server/commit/e315c137bf41bedfa8f0df537f2c3f6ab45b7e60))

### Features

* Add `$setOnInsert` operator to `Parse.Server.database.update` ([#8791](https://github.com/parse-community/parse-server/issues/8791)) ([f630a45](https://github.com/parse-community/parse-server/commit/f630a45aa5e87bc73a81fded061400c199b71a29))
* Add `installationId` to arguments for `verifyUserEmails`, `preventLoginWithUnverifiedEmail` ([#8836](https://github.com/parse-community/parse-server/issues/8836)) ([a22dbe1](https://github.com/parse-community/parse-server/commit/a22dbe16d5ac0090608f6caaf0ebd134925b7fd4))
* Add `installationId`, `ip`, `resendRequest` to arguments passed to `verifyUserEmails` on verification email request ([#8873](https://github.com/parse-community/parse-server/issues/8873)) ([8adcbee](https://github.com/parse-community/parse-server/commit/8adcbee11283d3e95179ca2047e2615f52c18806))
* Add `Parse.User` as function parameter to Parse Server options `verifyUserEmails`, `preventLoginWithUnverifiedEmail` on login ([#8850](https://github.com/parse-community/parse-server/issues/8850)) ([972f630](https://github.com/parse-community/parse-server/commit/972f6300163b3cd7d95eeb95986e8322c95f821c))
* Add compatibility for MongoDB Atlas Serverless and AWS Amazon DocumentDB with collation options `enableCollationCaseComparison`, `transformEmailToLowercase`, `transformUsernameToLowercase` ([#8805](https://github.com/parse-community/parse-server/issues/8805)) ([09fbeeb](https://github.com/parse-community/parse-server/commit/09fbeebba8870e7cf371fb84371a254c7b368620))
* Add context to Cloud Code Triggers `beforeLogin` and `afterLogin` ([#8724](https://github.com/parse-community/parse-server/issues/8724)) ([a9c34ef](https://github.com/parse-community/parse-server/commit/a9c34ef1e2c78a42fb8b5fa8d569b7677c74919d))
* Add password validation via POST request for user with unverified email using master key and option `ignoreEmailVerification` ([#8895](https://github.com/parse-community/parse-server/issues/8895)) ([633a9d2](https://github.com/parse-community/parse-server/commit/633a9d25e4253e2125bc93c02ee8a37e0f5f7b83))
* Add support for MongoDB 7 ([#8761](https://github.com/parse-community/parse-server/issues/8761)) ([3de8494](https://github.com/parse-community/parse-server/commit/3de8494a221991dfd10a74e0a2dc89576265c9b7))
* Add support for MongoDB query comment ([#8928](https://github.com/parse-community/parse-server/issues/8928)) ([2170962](https://github.com/parse-community/parse-server/commit/2170962a50fa353ed85eda3f11dce7ee3647b087))
* Add support for Node 20, drop support for Node 14, 16 ([#8907](https://github.com/parse-community/parse-server/issues/8907)) ([ced4872](https://github.com/parse-community/parse-server/commit/ced487246ea0ef72a8aa014991f003209b34841e))
* Add support for Postgres 16 ([#8898](https://github.com/parse-community/parse-server/issues/8898)) ([99489b2](https://github.com/parse-community/parse-server/commit/99489b22e4f0982e6cb39992974b51aa8d3a31e4))
* Allow `Parse.Session.current` on expired session token instead of throwing error ([#8722](https://github.com/parse-community/parse-server/issues/8722)) ([f9dde4a](https://github.com/parse-community/parse-server/commit/f9dde4a9f8a90c63f71172c9bc515b0f6c6d2e4a))
* Allow setting `createdAt` and `updatedAt` during `Parse.Object` creation with maintenance key ([#8696](https://github.com/parse-community/parse-server/issues/8696)) ([77bbfb3](https://github.com/parse-community/parse-server/commit/77bbfb3f186f5651c33ba152f04cff95128eaf2d))
* Deprecation DEPPS5: Config option `allowClientClassCreation` defaults to `false` ([#8849](https://github.com/parse-community/parse-server/issues/8849)) ([29624e0](https://github.com/parse-community/parse-server/commit/29624e0fae17161cd412ae58d35a195cfa286cad))
* Deprecation DEPPS6: Authentication adapters disabled by default ([#8858](https://github.com/parse-community/parse-server/issues/8858)) ([0cf58eb](https://github.com/parse-community/parse-server/commit/0cf58eb8d60c8e5f485764e154f3214c49eee430))
* Deprecation DEPPS7: Remove deprecated Cloud Code file trigger syntax ([#8855](https://github.com/parse-community/parse-server/issues/8855)) ([4e6a375](https://github.com/parse-community/parse-server/commit/4e6a375b5184ae0f7aa256a921eca4021c609435))
* Deprecation DEPPS8:  Parse Server option `allowExpiredAuthDataToken` defaults to `false` ([#8860](https://github.com/parse-community/parse-server/issues/8860)) ([e29845f](https://github.com/parse-community/parse-server/commit/e29845f8dacac09ce3093d75c0d92330c24389e8))
* Deprecation DEPPS9: LiveQuery `fields` option is renamed to `keys` ([#8852](https://github.com/parse-community/parse-server/issues/8852)) ([38983e8](https://github.com/parse-community/parse-server/commit/38983e8e9b5cdbd006f311a2338103624137d013))
* Node process exits with error code 1 on uncaught exception to allow custom uncaught exception handling ([#8894](https://github.com/parse-community/parse-server/issues/8894)) ([70c280c](https://github.com/parse-community/parse-server/commit/70c280ca578ff28b5acf92f37fbe06d42a5b34ca))
* Switch GraphQL server from Yoga v2 to Apollo v4 ([#8959](https://github.com/parse-community/parse-server/issues/8959)) ([105ae7c](https://github.com/parse-community/parse-server/commit/105ae7c8a57d5a650b243174a80c26bf6db16e28))
* Upgrade Parse Server Push Adapter to 5.0.2 ([#8813](https://github.com/parse-community/parse-server/issues/8813)) ([6ef1986](https://github.com/parse-community/parse-server/commit/6ef1986c03a1d84b7e11c05851e5bf9688d88740))
* Upgrade to Parse JS SDK 5 ([#9022](https://github.com/parse-community/parse-server/issues/9022)) ([ad4aa83](https://github.com/parse-community/parse-server/commit/ad4aa83983205a0e27639f6ee6a4a5963b67e4b8))

### Performance Improvements

* Improved IP validation performance for `masterKeyIPs`, `maintenanceKeyIPs` ([#8510](https://github.com/parse-community/parse-server/issues/8510)) ([b87daba](https://github.com/parse-community/parse-server/commit/b87daba0671a1b0b7b8d63bc671d665c91a04522))


### BREAKING CHANGES

* The Parse Server option `allowClientClassCreation` defaults to `false`. ([29624e0](29624e0))
* A request using the master key will now be rejected as unauthorized if the IP from which the request originates is not set in the Parse Server option `masterKeyIps`, even if the request does not require the master key permission, for example for a public object in a public class class. ([a7b5b38](a7b5b38))
* Node process now exits with code 1 on uncaught exceptions, enabling custom handlers that were blocked by Parse Server's default behavior of re-throwing errors. This change may lead to automatic process restarts by the environment, unlike before. ([70c280c](70c280c))
* Authentication adapters are disabled by default; to use an authentication adapter it needs to be explicitly enabled in the Parse Server authentication adapter option `auth.<provider>.enabled: true` ([0cf58eb](0cf58eb))
* Parse Server option `allowExpiredAuthDataToken` defaults to `false`; a 3rd party authentication token will be validated every time the user tries to log in and the login will fail if the token has expired; the effect of this change may differ for different authentication adapters, depending on the token lifetime and the token refresh logic of the adapter ([e29845f](e29845f))
* LiveQuery `fields` option is renamed to `keys` ([38983e8](38983e8))
* Cloud Code file trigger syntax has been aligned with object trigger syntax, for example `Parse.Cloud.beforeDeleteFile'` has been changed to `Parse.Cloud.beforeDelete(Parse.File, (request) => {})'` ([4e6a375](4e6a375))
* Removes support for Node 14 and 16 ([ced4872](ced4872))
* Removes support for Postgres 11 and 12 ([99489b2](99489b2))
* The `Parse.User` passed as argument if `verifyUserEmails` is set to a function is renamed from `user` to `object` for consistency with invocations of `verifyUserEmails` on signup or login; the user object is not a plain JavaScript object anymore but an instance of `Parse.User` ([8adcbee](8adcbee))
* `Parse.Session.current()` no longer throws an error if the session token is expired, but instead returns the session token with its expiration date to allow checking its validity ([f9dde4a](f9dde4a))
* `Parse.Query` no longer supports the BSON type `code`; although this feature was never officially documented, its removal is announced as a breaking change to protect deployments where it might be in use. ([3de8494](3de8494))

# [6.4.0](https://github.com/parse-community/parse-server/compare/6.3.1...6.4.0) (2023-11-16)


### Bug Fixes

* Parse Server option `fileUpload.fileExtensions` does not work with an array of extensions ([#8688](https://github.com/parse-community/parse-server/issues/8688)) ([6a4a00c](https://github.com/parse-community/parse-server/commit/6a4a00ca7af1163ea74b047b85cd6817366b824b))
* Redis 4 does not reconnect after unhandled error ([#8706](https://github.com/parse-community/parse-server/issues/8706)) ([2b3d4e5](https://github.com/parse-community/parse-server/commit/2b3d4e5d3c85cd142f85af68dec51a8523548d49))
* Remove config logging when launching Parse Server via CLI ([#8710](https://github.com/parse-community/parse-server/issues/8710)) ([ae68f0c](https://github.com/parse-community/parse-server/commit/ae68f0c31b741eeb83379c905c7ddfaa124436ec))
* Server does not start via CLI when `auth` option is set ([#8666](https://github.com/parse-community/parse-server/issues/8666)) ([4e2000b](https://github.com/parse-community/parse-server/commit/4e2000bc563324389584ace3c090a5c1a7796a64))

### Features

* Add conditional email verification via dynamic Parse Server options `verifyUserEmails`, `sendUserEmailVerification` that now accept functions ([#8425](https://github.com/parse-community/parse-server/issues/8425)) ([44acd6d](https://github.com/parse-community/parse-server/commit/44acd6d9ed157ad4842200c9d01f9c77a05fec3a))
* Add property `Parse.Server.version` to determine current version of Parse Server in Cloud Code ([#8670](https://github.com/parse-community/parse-server/issues/8670)) ([a9d376b](https://github.com/parse-community/parse-server/commit/a9d376b61f5b07806eafbda91c4e36c322f09298))
* Add TOTP authentication adapter ([#8457](https://github.com/parse-community/parse-server/issues/8457)) ([cc079a4](https://github.com/parse-community/parse-server/commit/cc079a40f6849a0e9bc6fdc811e8649ecb67b589))

### Performance Improvements

* Improve performance of recursive pointer iterations ([#8741](https://github.com/parse-community/parse-server/issues/8741)) ([45a3ed0](https://github.com/parse-community/parse-server/commit/45a3ed0fcf2c0170607505a1550fb15896e705fd))

## [6.3.1](https://github.com/parse-community/parse-server/compare/6.3.0...6.3.1) (2023-10-20)


### Bug Fixes

* Server crash when uploading file without extension; fixes security vulnerability [GHSA-792q-q67h-w579](https://github.com/parse-community/parse-server/security/advisories/GHSA-792q-q67h-w579) ([#8781](https://github.com/parse-community/parse-server/issues/8781)) ([fd86278](https://github.com/parse-community/parse-server/commit/fd86278919556d3682e7e2c856dfccd5beffbfc0))

# [6.3.0](https://github.com/parse-community/parse-server/compare/6.2.2...6.3.0) (2023-09-16)


### Bug Fixes

* Cloud Code Trigger `afterSave` executes even if not set ([#8520](https://github.com/parse-community/parse-server/issues/8520)) ([afd0515](https://github.com/parse-community/parse-server/commit/afd0515e207bd947840579d3f245980dffa6f804))
* GridFS file storage doesn't work with certain `enableSchemaHooks` settings ([#8467](https://github.com/parse-community/parse-server/issues/8467)) ([d4cda4b](https://github.com/parse-community/parse-server/commit/d4cda4b26c9bde8c812549b8780bea1cfabdb394))
* Inaccurate table total row count for PostgreSQL ([#8511](https://github.com/parse-community/parse-server/issues/8511)) ([0823a02](https://github.com/parse-community/parse-server/commit/0823a02fbf80bc88dc403bc47e9f5c6597ea78b4))
* LiveQuery server is not shut down properly when `handleShutdown` is called ([#8491](https://github.com/parse-community/parse-server/issues/8491)) ([967700b](https://github.com/parse-community/parse-server/commit/967700bdbc94c74f75ba84d2b3f4b9f3fd2dca0b))
* Rate limit feature is incompatible with Node 14 ([#8578](https://github.com/parse-community/parse-server/issues/8578)) ([f911f2c](https://github.com/parse-community/parse-server/commit/f911f2cd3a8c45cd326272dcd681532764a3761e))
* Unnecessary log entries by `extendSessionOnUse` ([#8562](https://github.com/parse-community/parse-server/issues/8562)) ([fd6a007](https://github.com/parse-community/parse-server/commit/fd6a0077f2e5cf83d65e52172ae5a950ab0f1eae))

### Features

* `extendSessionOnUse` to automatically renew Parse Sessions ([#8505](https://github.com/parse-community/parse-server/issues/8505)) ([6f885d3](https://github.com/parse-community/parse-server/commit/6f885d36b94902fdfea873fc554dee83589e6029))
* Add new Parse Server option `preventSignupWithUnverifiedEmail` to prevent returning a user without session token on sign-up with unverified email address ([#8451](https://github.com/parse-community/parse-server/issues/8451)) ([82da308](https://github.com/parse-community/parse-server/commit/82da30842a55980aa90cb7680fbf6db37ee16dab))
* Add option to change the log level of logs emitted by Cloud Functions ([#8530](https://github.com/parse-community/parse-server/issues/8530)) ([2caea31](https://github.com/parse-community/parse-server/commit/2caea310be412d82b04a85716bc769ccc410316d))
* Add support for `$eq` query constraint in LiveQuery ([#8614](https://github.com/parse-community/parse-server/issues/8614)) ([656d673](https://github.com/parse-community/parse-server/commit/656d673cf5dea354e4f2b3d4dc2b29a41d311b3e))
* Add zones for rate limiting by `ip`, `user`, `session`, `global` ([#8508](https://github.com/parse-community/parse-server/issues/8508)) ([03fba97](https://github.com/parse-community/parse-server/commit/03fba97e0549bfcaeee9f2fa4c9905dbcc91840e))
* Allow `Parse.Object` pointers in Cloud Code arguments ([#8490](https://github.com/parse-community/parse-server/issues/8490)) ([28aeda3](https://github.com/parse-community/parse-server/commit/28aeda3f160efcbbcf85a85484a8d26567fa9761))

### Reverts

* fix: Inaccurate table total row count for PostgreSQL ([6722110](https://github.com/parse-community/parse-server/commit/6722110f203bc5fdcaa68cdf091cf9e7b48d1cff))

## [6.2.2](https://github.com/parse-community/parse-server/compare/6.2.1...6.2.2) (2023-09-04)


### Bug Fixes

* Parse Pointer allows to access internal Parse Server classes and circumvent `beforeFind` query trigger; fixes security vulnerability [GHSA-fcv6-fg5r-jm9q](https://github.com/parse-community/parse-server/security/advisories/GHSA-fcv6-fg5r-jm9q) ([be4c7e2](https://github.com/parse-community/parse-server/commit/be4c7e23c63a2fb690685665cebed0de26be05c5))

## [6.2.1](https://github.com/parse-community/parse-server/compare/6.2.0...6.2.1) (2023-06-28)


### Bug Fixes

* Remote code execution via MongoDB BSON parser through prototype pollution; fixes security vulnerability [GHSA-462x-c3jw-7vr6](https://github.com/parse-community/parse-server/security/advisories/GHSA-462x-c3jw-7vr6) ([#8674](https://github.com/parse-community/parse-server/issues/8674)) ([3dd99dd](https://github.com/parse-community/parse-server/commit/3dd99dd80e27e5e1d99b42844180546d90c7aa90))

# [6.2.0](https://github.com/parse-community/parse-server/compare/6.1.0...6.2.0) (2023-05-20)


### Features

* Add new Parse Server option `fileUpload.fileExtensions` to restrict file upload by file extension; this fixes a security vulnerability in which a phishing attack could be performed using an uploaded HTML file; by default the new option only allows file extensions matching the regex pattern `^[^hH][^tT][^mM][^lL]?$`, which excludes HTML files; if your app currently depends on uploading files with HTML file extensions then this may be a breaking change and you could allow HTML file upload by setting the option to `['.*']` ([#8538](https://github.com/parse-community/parse-server/issues/8538)) ([a318e7b](https://github.com/parse-community/parse-server/commit/a318e7bbafcf7a3425b0a1b3c2dd30f526b4b6f9))

# [6.1.0](https://github.com/parse-community/parse-server/compare/6.0.0...6.1.0) (2023-05-01)


### Bug Fixes

* LiveQuery can return incorrectly formatted date ([#8456](https://github.com/parse-community/parse-server/issues/8456)) ([4ce135a](https://github.com/parse-community/parse-server/commit/4ce135a4fe930776044bc8fd786a4e17a0144e03))
* Nested date is incorrectly decoded as empty object `{}` when fetching a Parse Object ([#8446](https://github.com/parse-community/parse-server/issues/8446)) ([22d2446](https://github.com/parse-community/parse-server/commit/22d2446dfea2bc339affc20535d181097e152acf))
* Parameters missing in `afterFind` trigger of authentication adapters ([#8458](https://github.com/parse-community/parse-server/issues/8458)) ([ce34747](https://github.com/parse-community/parse-server/commit/ce34747e8af54cb0b6b975da38f779a5955d2d59))
* Rate limiting across multiple servers via Redis not working ([#8469](https://github.com/parse-community/parse-server/issues/8469)) ([d9e347d](https://github.com/parse-community/parse-server/commit/d9e347d7413f30f58ffbb8397fc8b5ae23be6ff0))
* Security upgrade jsonwebtoken to 9.0.0 ([#8420](https://github.com/parse-community/parse-server/issues/8420)) ([f5bfe45](https://github.com/parse-community/parse-server/commit/f5bfe4571e82b2b7440d41f3cff0d49937398164))

### Features

* Add `afterFind` trigger to authentication adapters ([#8444](https://github.com/parse-community/parse-server/issues/8444)) ([c793bb8](https://github.com/parse-community/parse-server/commit/c793bb88e7485743c7ceb65fe419cde75833ff33))
* Add option `schemaCacheTtl` for schema cache pulling as alternative to `enableSchemaHooks` ([#8436](https://github.com/parse-community/parse-server/issues/8436)) ([b3b76de](https://github.com/parse-community/parse-server/commit/b3b76de71b1d4265689d052e7837c38ec1fa4323))
* Add Parse Server option `resetPasswordSuccessOnInvalidEmail` to choose success or error response on password reset with invalid email ([#7551](https://github.com/parse-community/parse-server/issues/7551)) ([e5d610e](https://github.com/parse-community/parse-server/commit/e5d610e5e487ddab86409409ac3d7362aba8f59b))
* Add rate limiting across multiple servers via Redis ([#8394](https://github.com/parse-community/parse-server/issues/8394)) ([34833e4](https://github.com/parse-community/parse-server/commit/34833e42eec08b812b733be78df0535ab0e096b6))
* Allow multiple origins for header `Access-Control-Allow-Origin` ([#8517](https://github.com/parse-community/parse-server/issues/8517)) ([4f15539](https://github.com/parse-community/parse-server/commit/4f15539ac244aa2d393ac5177f7604b43f69e271))
* Deprecate LiveQuery `fields` option in favor of `keys` for semantic consistency ([#8388](https://github.com/parse-community/parse-server/issues/8388)) ([a49e323](https://github.com/parse-community/parse-server/commit/a49e323d5ae640bff1c6603ec37fdaddb9328dd1))
* Export `AuthAdapter` to make it available for extension with custom authentication adapters ([#8443](https://github.com/parse-community/parse-server/issues/8443)) ([40c1961](https://github.com/parse-community/parse-server/commit/40c196153b8efa12ae384c1c0092b2ed60a260d6))

# [6.0.0](https://github.com/parse-community/parse-server/compare/5.4.0...6.0.0) (2023-01-31)


### Bug Fixes

* `ParseServer.verifyServerUrl` may fail if server response headers are missing; remove unnecessary logging ([#8391](https://github.com/parse-community/parse-server/issues/8391)) ([1c37a7c](https://github.com/parse-community/parse-server/commit/1c37a7cd0715949a70b220a629071c7dab7d5e7b))
* Cloud Code trigger `beforeSave` does not work with `Parse.Role` ([#8320](https://github.com/parse-community/parse-server/issues/8320)) ([f29d972](https://github.com/parse-community/parse-server/commit/f29d9720e9b37918fd885c97a31e34c42750e724))
* ES6 modules do not await the import of Cloud Code files ([#8368](https://github.com/parse-community/parse-server/issues/8368)) ([a7bd180](https://github.com/parse-community/parse-server/commit/a7bd180cddd784c8735622f22e012c342ad535fb))
* Nested objects are encoded incorrectly for MongoDB ([#8209](https://github.com/parse-community/parse-server/issues/8209)) ([1412666](https://github.com/parse-community/parse-server/commit/1412666f75829612de6fb9d7ccae35761c9b75cb))
* Parse Server option `masterKeyIps` does not include localhost by default for IPv6 ([#8322](https://github.com/parse-community/parse-server/issues/8322)) ([ab82635](https://github.com/parse-community/parse-server/commit/ab82635b0d4cf323a07ddee51fee587b43dce95c))
* Rate limiter may reject requests that contain a session token ([#8399](https://github.com/parse-community/parse-server/issues/8399)) ([c114dc8](https://github.com/parse-community/parse-server/commit/c114dc8831055d74187b9dfb4c9eeb558520237c))
* Remove Node 12 and Node 17 support ([#8279](https://github.com/parse-community/parse-server/issues/8279)) ([2546cc8](https://github.com/parse-community/parse-server/commit/2546cc8572bea6610cb9b3c7401d9afac0e3c1d6))
* Schema without class level permissions may cause error ([#8409](https://github.com/parse-community/parse-server/issues/8409)) ([aa2cd51](https://github.com/parse-community/parse-server/commit/aa2cd51b703388d925e4572e5c2b2d883c68e49c))
* The client IP address may be determined incorrectly in some cases; this fixes a security vulnerability in which the Parse Server option `masterKeyIps` may be circumvented, see [GHSA-vm5r-c87r-pf6x](https://github.com/parse-community/parse-server/security/advisories/GHSA-vm5r-c87r-pf6x) ([#8372](https://github.com/parse-community/parse-server/issues/8372)) ([892040d](https://github.com/parse-community/parse-server/commit/892040dc2f82a3e2abe2824e4b553521b6f894de))
* Throwing error in Cloud Code Triggers `afterLogin`, `afterLogout` crashes server ([#8280](https://github.com/parse-community/parse-server/issues/8280)) ([130d290](https://github.com/parse-community/parse-server/commit/130d29074e3f763460e5685d0b9059e5a333caff))

### Features

* Access the internal scope of Parse Server using the new `maintenanceKey`; the internal scope contains unofficial and undocumented fields (prefixed with underscore `_`) which are used internally by Parse Server; you may want to manipulate these fields for out-of-band changes such as data migration or correction tasks; changes within the internal scope of Parse Server may happen at any time without notice or changelog entry, it is therefore recommended to look at the source code of Parse Server to understand the effects of manipulating internal fields before using the key; it is discouraged to use the `maintenanceKey` for routine operations in a production environment; see [access scopes](https://github.com/parse-community/parse-server#access-scopes) ([#8212](https://github.com/parse-community/parse-server/issues/8212)) ([f3bcc93](https://github.com/parse-community/parse-server/commit/f3bcc9365cd6f08b0a32c132e8e5ff6d1b650863))
* Adapt `verifyServerUrl` for new asynchronous Parse Server start-up states ([#8366](https://github.com/parse-community/parse-server/issues/8366)) ([ffa4974](https://github.com/parse-community/parse-server/commit/ffa4974158615fbff4a2692b9db41dcb50d3f77b))
* Add `ParseQuery.watch` to trigger LiveQuery only on update of specific fields ([#8028](https://github.com/parse-community/parse-server/issues/8028)) ([fc92faa](https://github.com/parse-community/parse-server/commit/fc92faac75107b3392eeddd916c4c5b45e3c5e0c))
* Add Node 19 support ([#8363](https://github.com/parse-community/parse-server/issues/8363)) ([a4990dc](https://github.com/parse-community/parse-server/commit/a4990dcd29abcb4442f3c424aff482a0a116160f))
* Add option to change the log level of the logs emitted by triggers ([#8328](https://github.com/parse-community/parse-server/issues/8328)) ([8f3b694](https://github.com/parse-community/parse-server/commit/8f3b694e39d4a966567e50dbea4d62e954fa5c06))
* Add request rate limiter based on IP address ([#8174](https://github.com/parse-community/parse-server/issues/8174)) ([6c79f6a](https://github.com/parse-community/parse-server/commit/6c79f6a69e25e47846e3b0685d6bdfd6b91086b1))
* Asynchronous initialization of Parse Server ([#8232](https://github.com/parse-community/parse-server/issues/8232)) ([99fcf45](https://github.com/parse-community/parse-server/commit/99fcf45e55c368de2345b0c4d780e70e0adf0e15))
* Improve authentication adapter interface to support multi-factor authentication (MFA), authentication challenges, and provide a more powerful interface for writing custom authentication adapters ([#8156](https://github.com/parse-community/parse-server/issues/8156)) ([5bbf9ca](https://github.com/parse-community/parse-server/commit/5bbf9cade9a527787fd1002072d4013ab5d8db2b))
* Reduce Docker image size by improving stages ([#8359](https://github.com/parse-community/parse-server/issues/8359)) ([40810b4](https://github.com/parse-community/parse-server/commit/40810b48ebde8b1f21d2448a3a4de0585b1b5e34))
* Remove deprecation `DEPPS1`: Native MongoDB syntax in aggregation pipeline ([#8362](https://github.com/parse-community/parse-server/issues/8362)) ([d0d30c4](https://github.com/parse-community/parse-server/commit/d0d30c4f1394f563724644a8fc81734be538a2c0))
* Remove deprecation `DEPPS2`: Config option `directAccess` defaults to true ([#8284](https://github.com/parse-community/parse-server/issues/8284)) ([f535ee6](https://github.com/parse-community/parse-server/commit/f535ee6ec2abba63f702127258ca49fa5b4e08c9))
* Remove deprecation `DEPPS3`: Config option `enforcePrivateUsers` defaults to `true` ([#8283](https://github.com/parse-community/parse-server/issues/8283)) ([ed499e3](https://github.com/parse-community/parse-server/commit/ed499e32a21bab9a874a9e5367dc71248ce836c4))
* Remove deprecation `DEPPS4`: Remove convenience method for http request `Parse.Cloud.httpRequest`  ([#8287](https://github.com/parse-community/parse-server/issues/8287)) ([2d79c08](https://github.com/parse-community/parse-server/commit/2d79c0835b6a9acaf20d5c943d9b4619bb96831c))
* Remove support for MongoDB 4.0 ([#8292](https://github.com/parse-community/parse-server/issues/8292)) ([37245f6](https://github.com/parse-community/parse-server/commit/37245f62ce83516b6b95a54b850f0274ef680478))
* Restrict use of `masterKey` to localhost by default ([#8281](https://github.com/parse-community/parse-server/issues/8281)) ([6c16021](https://github.com/parse-community/parse-server/commit/6c16021a1f03a70a6d9e68cb64df362d07f3b693))
* Upgrade Node Package Manager lock file `package-lock.json` to version 2 ([#8285](https://github.com/parse-community/parse-server/issues/8285)) ([ee72467](https://github.com/parse-community/parse-server/commit/ee7246733d63e4bda20401f7b00262ff03299f20))
* Upgrade Redis 3 to 4 ([#8293](https://github.com/parse-community/parse-server/issues/8293)) ([7d622f0](https://github.com/parse-community/parse-server/commit/7d622f06a4347e0ad2cba9a4ec07d8d4fb0f67bc))
* Upgrade Redis 3 to 4 for LiveQuery ([#8333](https://github.com/parse-community/parse-server/issues/8333)) ([b2761fb](https://github.com/parse-community/parse-server/commit/b2761fb3786b519d9bbcf35be54309d2d35da1a9))
* Upgrade to Parse JavaScript SDK 4 ([#8332](https://github.com/parse-community/parse-server/issues/8332)) ([9092874](https://github.com/parse-community/parse-server/commit/9092874a9a482a24dfdce1dce56615702999d6b8))
* Write log entry when request with master key is rejected as outside of `masterKeyIps` ([#8350](https://github.com/parse-community/parse-server/issues/8350)) ([e22b73d](https://github.com/parse-community/parse-server/commit/e22b73d4b700c8ff745aa81726c6680082294b45))


### BREAKING CHANGES

* The Docker image does not contain the git dependency anymore; if you have been using git as a transitive dependency it now needs to be explicitly installed in your Docker file, for example with `RUN apk --no-cache add git` (#8359) ([40810b4](40810b4))
* Fields in the internal scope of Parse Server (prefixed with underscore `_`) are only returned using the new `maintenanceKey`; previously the `masterKey` allowed reading of internal fields; see [access scopes](https://github.com/parse-community/parse-server#access-scopes) for a comparison of the keys' access permissions (#8212) ([f3bcc93](f3bcc93))
* The method `ParseServer.verifyServerUrl` now returns a promise instead of a callback. ([ffa4974](ffa4974))
* The MongoDB aggregation pipeline requires native MongoDB syntax instead of the custom Parse Server syntax; for example pipeline stage names require a leading dollar sign like `$match` and the MongoDB document ID is referenced using `_id` instead of `objectId` (#8362) ([d0d30c4](d0d30c4))
* The mechanism to determine the client IP address has been rewritten; to correctly determine the IP address it is now required to set the Parse Server option `trustProxy` accordingly if Parse Server runs behind a proxy server, see the express framework's [trust proxy](https://expressjs.com/en/guide/behind-proxies.html) setting (#8372) ([892040d](892040d))
* The Node Package Manager lock file `package-lock.json` is upgraded to version 2; while it is backwards with version 1 for the npm installer, consider this if you run any non-npm analysis tools that use the lock file (#8285) ([ee72467](ee72467))
* This release introduces the asynchronous initialization of Parse Server to prevent mounting Parse Server before being ready to receive request; it changes how Parse Server is imported, initialized and started; it also removes the callback `serverStartComplete`; see the [Parse Server 6 migration guide](https://github.com/parse-community/parse-server/blob/alpha/6.0.0.md) for more details (#8232) ([99fcf45](99fcf45))
* Nested objects are now properly stored in the database using JSON serialization; previously, due to a bug only top-level objects were serialized, but nested objects were saved as raw JSON; for example, a nested `Date` object was saved as a JSON object like `{ "__type": "Date", "iso": "2020-01-01T00:00:00.000Z" }` instead of its serialized representation `2020-01-01T00:00:00.000Z` (#8209) ([1412666](1412666))
* The Parse Server option `enforcePrivateUsers` is set to `true` by default; in previous releases this option defaults to `false`; this change improves the default security configuration of Parse Server (#8283) ([ed499e3](ed499e3))
* This release restricts the use of `masterKey` to localhost by default; if you are using Parse Dashboard on a different server to connect to Parse Server you need to add the IP address of the server that hosts Parse Dashboard to this option (#8281) ([6c16021](6c16021))
* This release upgrades to Redis 4; if you are using the Redis cache adapter with Parse Server then this is a breaking change as the Redis client options have changed; see the [Redis migration guide](https://github.com/redis/node-redis/blob/redis%404.0.0/docs/v3-to-v4.md) for more details (#8293) ([7d622f0](7d622f0))
* This release removes support for MongoDB 4.0; the new minimum supported MongoDB version is 4.2. which also removes support for the deprecated MongoDB MMAPv1 storage engine ([37245f6](37245f6))
* Throwing an error in Cloud Code Triggers `afterLogin`, `afterLogout` returns a rejected promise; in previous releases it crashed the server if you did not handle the error on the Node.js process level; consider adapting your code if your app currently handles these errors on the Node.js process level with `process.on('unhandledRejection', ...)` ([130d290](130d290))
* Config option `directAccess` defaults to true; set this to `false` in environments where multiple Parse Server instances run behind a load balancer and Parse requests within the current Node.js environment should be routed via the load balancer and distributed as HTTP requests among all instances via the `serverURL`. ([f535ee6](f535ee6))
* The convenience method for HTTP requests `Parse.Cloud.httpRequest` is removed; use your preferred 3rd party library for making HTTP requests ([2d79c08](2d79c08))
* This release removes Node 12 and Node 17 support ([2546cc8](2546cc8))

# [5.4.0](https://github.com/parse-community/parse-server/compare/5.3.3...5.4.0) (2022-11-19)


### Bug Fixes

* graphQL query ignores condition `equalTo` with value `false` ([#8032](https://github.com/parse-community/parse-server/issues/8032)) ([7f5a15d](https://github.com/parse-community/parse-server/commit/7f5a15d5df0dfa3515e9f73709d6a49663545f9b))
* internal indices for classes `_Idempotency` and `_Role` are not protected in defined schema ([#8121](https://github.com/parse-community/parse-server/issues/8121)) ([c16f529](https://github.com/parse-community/parse-server/commit/c16f529f74f92154401bf662f634b3c5fa45e18e))
* liveQuery with `containedIn` not working when object field is an array ([#8128](https://github.com/parse-community/parse-server/issues/8128)) ([1d9605b](https://github.com/parse-community/parse-server/commit/1d9605bc93009263d3811df4d4249034ba6eb8c4))
* push notifications `badge` doesn't update with Installation beforeSave trigger ([#8162](https://github.com/parse-community/parse-server/issues/8162)) ([3c75c2b](https://github.com/parse-community/parse-server/commit/3c75c2ba4851fae96a8c19b11a3efde03816c9a1))
* query aggregation pipeline cannot handle value of type `Date` when `directAccess: true` ([#8167](https://github.com/parse-community/parse-server/issues/8167)) ([e424137](https://github.com/parse-community/parse-server/commit/e4241374061caef66538de15112fb6bbafb1f5bb))
* relation constraints in compound queries `Parse.Query.or`, `Parse.Query.and` not working ([#8203](https://github.com/parse-community/parse-server/issues/8203)) ([28f0d26](https://github.com/parse-community/parse-server/commit/28f0d2667787d2ac68726607b811d6f0ef62b9f1))
* security upgrade undici from 5.6.0 to 5.8.0 ([#8108](https://github.com/parse-community/parse-server/issues/8108)) ([4aa016b](https://github.com/parse-community/parse-server/commit/4aa016b7322467422b9fdf05d8e29b9ecf910da7))
* sorting by non-existing value throws `INVALID_SERVER_ERROR` on Postgres ([#8157](https://github.com/parse-community/parse-server/issues/8157)) ([3b775a1](https://github.com/parse-community/parse-server/commit/3b775a1fb8a1878714e3451191438963d688f1b0))
* updating object includes unchanged keys in client response for certain key types ([#8159](https://github.com/parse-community/parse-server/issues/8159)) ([37af1d7](https://github.com/parse-community/parse-server/commit/37af1d78fce5a15039ffe3af7b323c1f1e8582fc))

### Features

* add convenience access to Parse Server configuration in Cloud Code via `Parse.Server` ([#8244](https://github.com/parse-community/parse-server/issues/8244)) ([9f11115](https://github.com/parse-community/parse-server/commit/9f111158edf7fd57a65db0c4f9244b37e58cf293))
* add option to change the default value of the `Parse.Query.limit()` constraint ([#8152](https://github.com/parse-community/parse-server/issues/8152)) ([0388956](https://github.com/parse-community/parse-server/commit/038895680894984e569dff54bf5c7b31094f3891))
* add support for MongoDB 6 ([#8242](https://github.com/parse-community/parse-server/issues/8242)) ([aba0081](https://github.com/parse-community/parse-server/commit/aba0081ce1a166a93de57f3928c19a05562b5cc1))
* add support for Postgres 15 ([#8215](https://github.com/parse-community/parse-server/issues/8215)) ([2feb6c4](https://github.com/parse-community/parse-server/commit/2feb6c46080946c984daa351187fa07cd582355d))
* liveQuery support for unsorted distance queries ([#8221](https://github.com/parse-community/parse-server/issues/8221)) ([0f763da](https://github.com/parse-community/parse-server/commit/0f763da17d646b2fec2cd980d3857e46072a8a07))

## [5.3.3](https://github.com/parse-community/parse-server/compare/5.3.2...5.3.3) (2022-11-09)


### Bug Fixes

* Prototype pollution via Cloud Code Webhooks; fixes security vulnerability [GHSA-93vw-8fm5-p2jf](https://github.com/parse-community/parse-server/security/advisories/GHSA-93vw-8fm5-p2jf) ([#8305](https://github.com/parse-community/parse-server/issues/8305)) ([60c5a73](https://github.com/parse-community/parse-server/commit/60c5a73d257e0d536056b38bdafef8b7130524d8))

## [5.3.2](https://github.com/parse-community/parse-server/compare/5.3.1...5.3.2) (2022-11-09)


### Bug Fixes

* Parse Server option `requestKeywordDenylist` can be bypassed via Cloud Code Webhooks or Triggers; fixes security vulnerability [GHSA-xprv-wvh7-qqqx](https://github.com/parse-community/parse-server/security/advisories/GHSA-xprv-wvh7-qqqx) ([#8302](https://github.com/parse-community/parse-server/issues/8302)) ([6728da1](https://github.com/parse-community/parse-server/commit/6728da1e3591db1e27031d335d64d8f25546a06f))

## [5.3.1](https://github.com/parse-community/parse-server/compare/5.3.0...5.3.1) (2022-11-07)


### Bug Fixes

* Remote code execution via MongoDB BSON parser through prototype pollution; fixes security vulnerability [GHSA-prm5-8g2m-24gg](https://github.com/parse-community/parse-server/security/advisories/GHSA-prm5-8g2m-24gg) ([#8295](https://github.com/parse-community/parse-server/issues/8295)) ([50eed3c](https://github.com/parse-community/parse-server/commit/50eed3cffe80fadfb4bdac52b2783a18da2cfc4f))

# [5.3.0](https://github.com/parse-community/parse-server/compare/5.2.8...5.3.0) (2022-10-29)


### Bug Fixes

* afterSave trigger removes pointer in Parse object ([#7913](https://github.com/parse-community/parse-server/issues/7913)) ([47d796e](https://github.com/parse-community/parse-server/commit/47d796ea58f65e71612ce37149be692abc9ea97f))
* auto-release process may fail if optional back-merging task fails ([#8051](https://github.com/parse-community/parse-server/issues/8051)) ([cf925e7](https://github.com/parse-community/parse-server/commit/cf925e75e87a6989f41e2e2abb2aba4332b1e79f))
* custom database options are not passed to MongoDB GridFS ([#7911](https://github.com/parse-community/parse-server/issues/7911)) ([b1e5565](https://github.com/parse-community/parse-server/commit/b1e5565b22f2eff229571fe9a9500314bd30965b))
* depreciate allowClientClassCreation defaulting to true ([#7925](https://github.com/parse-community/parse-server/issues/7925)) ([38ed96a](https://github.com/parse-community/parse-server/commit/38ed96ace534d639db007aa7dd5387b2da8f03ae))
* errors in GraphQL do not show the original error but a general `Unexpected Error` ([#8045](https://github.com/parse-community/parse-server/issues/8045)) ([0d81887](https://github.com/parse-community/parse-server/commit/0d818879c217f9c56100a5f59868fa37e6d24b71))
* interrupted WebSocket connection not closed by LiveQuery server ([#8012](https://github.com/parse-community/parse-server/issues/8012)) ([2d5221e](https://github.com/parse-community/parse-server/commit/2d5221e48012fb7781c0406d543a922d313075ea))
* live query role cache does not clear when a user is added to a role ([#8026](https://github.com/parse-community/parse-server/issues/8026)) ([199dfc1](https://github.com/parse-community/parse-server/commit/199dfc17226d85a78ab85f24362cce740f4ada39))
* peer dependency mismatch for GraphQL dependencies ([#7934](https://github.com/parse-community/parse-server/issues/7934)) ([0a6faa8](https://github.com/parse-community/parse-server/commit/0a6faa81fa97f8620e7fd05e8c7bbdb4b7da9578))
* return correct response when revert is used in beforeSave ([#7839](https://github.com/parse-community/parse-server/issues/7839)) ([19900fc](https://github.com/parse-community/parse-server/commit/19900fcdf8c9f29a674fb62cf6e4b3341d796891))
* security upgrade @parse/fs-files-adapter from 1.2.1 to 1.2.2 ([#7948](https://github.com/parse-community/parse-server/issues/7948)) ([3a70fda](https://github.com/parse-community/parse-server/commit/3a70fda6798d4143f21046439b5eaf232a31bdb6))
* security upgrade moment from 2.29.1 to 2.29.2 ([#7931](https://github.com/parse-community/parse-server/issues/7931)) ([731c550](https://github.com/parse-community/parse-server/commit/731c5507144bbacff236097e7a2a03bfe54f6e10))
* security upgrade parse push adapter from 4.1.0 to 4.1.2 ([#7893](https://github.com/parse-community/parse-server/issues/7893)) ([93667b4](https://github.com/parse-community/parse-server/commit/93667b4e8402bf13b46c4d3ef12cec6532fd9da7))
* websocket connection of LiveQuery interrupts frequently ([#8048](https://github.com/parse-community/parse-server/issues/8048)) ([03caae1](https://github.com/parse-community/parse-server/commit/03caae1e611f28079cdddbbe433daaf69e3f595c))

### Features

* add MongoDB 5.1 compatibility ([#7682](https://github.com/parse-community/parse-server/issues/7682)) ([022a856](https://github.com/parse-community/parse-server/commit/022a85619d8a2c57a2f2938e245e4d8a47c15276))
* add MongoDB 5.2 support ([#7894](https://github.com/parse-community/parse-server/issues/7894)) ([5bfa716](https://github.com/parse-community/parse-server/commit/5bfa7160d9e35b237cbae1016ed86724aa99f8d7))
* add support for Node 17 and 18 ([#7896](https://github.com/parse-community/parse-server/issues/7896)) ([3e9f292](https://github.com/parse-community/parse-server/commit/3e9f292d840334244934cee9a34545ac86313549))
* align file trigger syntax with class trigger; use the new syntax `Parse.Cloud.beforeSave(Parse.File, (request) => {})`, the old syntax `Parse.Cloud.beforeSaveFile((request) => {})` has been deprecated ([#7966](https://github.com/parse-community/parse-server/issues/7966)) ([c6dcad8](https://github.com/parse-community/parse-server/commit/c6dcad8d167d44912dbd416d328519314c0809bd))
* replace GraphQL Apollo with GraphQL Yoga ([#7967](https://github.com/parse-community/parse-server/issues/7967)) ([1aa2204](https://github.com/parse-community/parse-server/commit/1aa2204aebfdbe273d54d6d56c6029f7c34aab14))
* selectively enable / disable default authentication adapters ([#7953](https://github.com/parse-community/parse-server/issues/7953)) ([c1e808f](https://github.com/parse-community/parse-server/commit/c1e808f9e807fc49508acbde0d8b3f2b901a1638))
* upgrade mongodb from 4.4.1 to 4.5.0 ([#7991](https://github.com/parse-community/parse-server/issues/7991)) ([e692b5d](https://github.com/parse-community/parse-server/commit/e692b5dd8214cdb0ce79bedd30d9aa3cf4de76a5))

### Performance Improvements

* reduce database operations when using the constant parameter in Cloud Function validation ([#7892](https://github.com/parse-community/parse-server/issues/7892)) ([041197f](https://github.com/parse-community/parse-server/commit/041197fb4ca1cd7cf18dc426ce38647267823668))

## [5.2.8](https://github.com/parse-community/parse-server/compare/5.2.7...5.2.8) (2022-10-14)


### Bug Fixes

* server crashes when receiving file download request with invalid byte range; this fixes a security vulnerability that allows an attacker to impact the availability of the server instance; the fix improves parsing of the range parameter to properly handle invalid range requests ([GHSA-h423-w6qv-2wj3](https://github.com/parse-community/parse-server/security/advisories/GHSA-h423-w6qv-2wj3)) ([#8235](https://github.com/parse-community/parse-server/issues/8235)) ([066f296](https://github.com/parse-community/parse-server/commit/066f29673ab4030b6b5b90c0c0326f7d3fe7612a))

## [5.2.7](https://github.com/parse-community/parse-server/compare/5.2.6...5.2.7) (2022-09-20)


### Bug Fixes

* authentication adapter app ID validation may be circumvented; this fixes a vulnerability that affects configurations which allow users to authenticate using the Parse Server authentication adapter for *Facebook* or *Spotify* and where the server-side authentication adapter configuration `appIds` is set as a string (e.g. `abc`) instead of an array of strings (e.g. `["abc"]`) ([GHSA-r657-33vp-gp22](https://github.com/parse-community/parse-server/security/advisories/GHSA-r657-33vp-gp22)) ([#8185](https://github.com/parse-community/parse-server/issues/8185)) ([ecf0814](https://github.com/parse-community/parse-server/commit/ecf0814499bde31ab6082b6e42854aa65ad2e03e))

## [5.2.6](https://github.com/parse-community/parse-server/compare/5.2.5...5.2.6) (2022-09-20)


### Bug Fixes

* session object properties can be updated by foreign user; this fixes a security vulnerability in which a foreign user can write to the session object of another user if the session object ID is known; the fix prevents writing to foreign session objects ([GHSA-6w4q-23cf-j9jp](https://github.com/parse-community/parse-server/security/advisories/GHSA-6w4q-23cf-j9jp)) ([#8182](https://github.com/parse-community/parse-server/issues/8182)) ([6d0b2f5](https://github.com/parse-community/parse-server/commit/6d0b2f534603301bb630d9c8e497af3bc7ff1d09))

## [5.2.5](https://github.com/parse-community/parse-server/compare/5.2.4...5.2.5) (2022-09-02)


### Bug Fixes

* brute force guessing of user sensitive data via search patterns; this fixes a security vulnerability in which internal and protected fields may be used as query constraints to guess the value of these fields and obtain sensitive data (GHSA-2m6g-crv8-p3c6) ([#8144](https://github.com/parse-community/parse-server/issues/8144)) ([e39d51b](https://github.com/parse-community/parse-server/commit/e39d51bd329cd978589983bd659db46e1d45aad4))

## [5.2.4](https://github.com/parse-community/parse-server/compare/5.2.3...5.2.4) (2022-06-30)


### Bug Fixes

* protected fields exposed via LiveQuery; this removes protected fields from the client response; this may be a breaking change if your app is currently expecting to receive these protected fields ([GHSA-crrq-vr9j-fxxh](https://github.com/parse-community/parse-server/security/advisories/GHSA-crrq-vr9j-fxxh)) (https://github.com/parse-community/parse-server/pull/8074) ([#8073](https://github.com/parse-community/parse-server/issues/8073)) ([309f64c](https://github.com/parse-community/parse-server/commit/309f64ced8700321df056fb3cc97f15007a00df1))

## [5.2.3](https://github.com/parse-community/parse-server/compare/5.2.2...5.2.3) (2022-06-17)


### Bug Fixes

* invalid file request not properly handled; this fixes a security vulnerability in which an invalid file request can crash the server ([GHSA-xw6g-jjvf-wwf9](https://github.com/parse-community/parse-server/security/advisories/GHSA-xw6g-jjvf-wwf9)) ([#8060](https://github.com/parse-community/parse-server/issues/8060)) ([5be375d](https://github.com/parse-community/parse-server/commit/5be375dec2fa35425c1003ae81c55995ac72af92))

## [5.2.2](https://github.com/parse-community/parse-server/compare/5.2.1...5.2.2) (2022-06-17)


### Bug Fixes

* certificate in Apple Game Center auth adapter not validated; this fixes a security vulnerability in which authentication could be bypassed using a fake certificate; if you are using the Apple Gamer Center auth adapter it is your responsibility to keep its root certificate up-to-date and we advice you read the security advisory ([GHSA-rh9j-f5f8-rvgc](https://github.com/parse-community/parse-server/security/advisories/GHSA-rh9j-f5f8-rvgc)) ([ba2b0a9](https://github.com/parse-community/parse-server/commit/ba2b0a9cb9a568817a114b132a4c2e0911d76df1))

## [5.2.1](https://github.com/parse-community/parse-server/compare/5.2.0...5.2.1) (2022-05-01)


### Bug Fixes

* authentication bypass and denial of service (DoS) vulnerabilities in Apple Game Center auth adapter (GHSA-qf8x-vqjv-92gr) ([#7962](https://github.com/parse-community/parse-server/issues/7962)) ([af4a041](https://github.com/parse-community/parse-server/commit/af4a0417a9f3c1e99b3793806b4b18e04d9fa999))

# [5.2.0](https://github.com/parse-community/parse-server/compare/5.1.1...5.2.0) (2022-03-24)


### Bug Fixes

* security bump minimist from 1.2.5 to 1.2.6 ([#7884](https://github.com/parse-community/parse-server/issues/7884)) ([c5cf282](https://github.com/parse-community/parse-server/commit/c5cf282d11ffdc023764f8e7539a2bd6bc246fe1))
* sensitive keyword detection may produce false positives ([#7881](https://github.com/parse-community/parse-server/issues/7881)) ([0d6f9e9](https://github.com/parse-community/parse-server/commit/0d6f9e951d9e186e95e96d8869066ce7022bad02))

### Features

* improved LiveQuery error logging with additional information ([#7837](https://github.com/parse-community/parse-server/issues/7837)) ([443a509](https://github.com/parse-community/parse-server/commit/443a5099059538d379fe491793a5871fcbb4f377))

## [5.1.1](https://github.com/parse-community/parse-server/compare/5.1.0...5.1.1) (2022-03-18)


### Reverts

* ci: temporarily disable breaking change detection ([#7861](https://github.com/parse-community/parse-server/issues/7861)) ([effed92](https://github.com/parse-community/parse-server/commit/effed92cabd88676fdf9eca2e079a4d8be017f1b))

# [5.1.0](https://github.com/parse-community/parse-server/compare/5.0.0...5.1.0) (2022-03-18)


### Bug Fixes

* adding or modifying a nested property requires addField permissions ([#7679](https://github.com/parse-community/parse-server/issues/7679)) ([6a6248b](https://github.com/parse-community/parse-server/commit/6a6248b6cb2e732d17131e18e659943b894ed2f1))
* bump nanoid from 3.1.25 to 3.2.0 ([#7781](https://github.com/parse-community/parse-server/issues/7781)) ([f5f63bf](https://github.com/parse-community/parse-server/commit/f5f63bfc64d3481ed944ceb5e9f50b33dccd1ce9))
* bump node-fetch from 2.6.1 to 3.1.1 ([#7782](https://github.com/parse-community/parse-server/issues/7782)) ([9082351](https://github.com/parse-community/parse-server/commit/90823514113a1a085ebc818f7109b3fd7591346f))
* node engine compatibility did not include node 16 ([#7739](https://github.com/parse-community/parse-server/issues/7739)) ([ea7c014](https://github.com/parse-community/parse-server/commit/ea7c01400f992a1263543706fe49b6174758a2d6))
* node engine range has no upper limit to exclude incompatible node versions ([#7692](https://github.com/parse-community/parse-server/issues/7692)) ([573558d](https://github.com/parse-community/parse-server/commit/573558d3adcbcc6222c92003829867e1a73eef94))
* package.json & package-lock.json to reduce vulnerabilities ([#7823](https://github.com/parse-community/parse-server/issues/7823)) ([5ca2288](https://github.com/parse-community/parse-server/commit/5ca228882332b65f3ac05407e6e4da1ee3ef3749))
* schema cache not cleared in some cases ([#7678](https://github.com/parse-community/parse-server/issues/7678)) ([5af6e5d](https://github.com/parse-community/parse-server/commit/5af6e5dfaa129b1a350afcba4fb381b21c4cc35d))
* security upgrade follow-redirects from 1.14.6 to 1.14.7 ([#7769](https://github.com/parse-community/parse-server/issues/7769)) ([8f5a861](https://github.com/parse-community/parse-server/commit/8f5a8618cfa7ed9a2a239a095abffa8f3fd8d31a))
* security upgrade follow-redirects from 1.14.7 to 1.14.8 ([#7801](https://github.com/parse-community/parse-server/issues/7801)) ([70088a9](https://github.com/parse-community/parse-server/commit/70088a95a78393da2a4ac68be81e63107747626a))
* security vulnerability that allows remote code execution (GHSA-p6h4-93qp-jhcm) ([#7844](https://github.com/parse-community/parse-server/issues/7844)) ([e569f40](https://github.com/parse-community/parse-server/commit/e569f402b1fd8648fb0d1523b71b2a03273902a5))
* server crash using GraphQL due to missing @apollo/client peer dependency ([#7787](https://github.com/parse-community/parse-server/issues/7787)) ([08089d6](https://github.com/parse-community/parse-server/commit/08089d6fcbb215412448ce7d92b21b9fe6c929f2))
* unable to use objectId size higher than 19 on GraphQL API ([#7627](https://github.com/parse-community/parse-server/issues/7627)) ([ed86c80](https://github.com/parse-community/parse-server/commit/ed86c807721cc52a1a5a9dea0b768717eec269ed))
* upgrade mime from 2.5.2 to 3.0.0 ([#7725](https://github.com/parse-community/parse-server/issues/7725)) ([f5ef98b](https://github.com/parse-community/parse-server/commit/f5ef98bde32083403c0e30a12162fcc1e52cac37))
* upgrade parse from 3.3.1 to 3.4.0 ([#7723](https://github.com/parse-community/parse-server/issues/7723)) ([d4c1f47](https://github.com/parse-community/parse-server/commit/d4c1f473073764cb0570c633fc4a30669c2ce889))
* upgrade winston from 3.5.0 to 3.5.1 ([#7820](https://github.com/parse-community/parse-server/issues/7820)) ([4af253d](https://github.com/parse-community/parse-server/commit/4af253d1f8654a6f57b5137ad310cdacadc922cc))

### Features

* add Cloud Code context to `ParseObject.fetch` ([#7779](https://github.com/parse-community/parse-server/issues/7779)) ([315290d](https://github.com/parse-community/parse-server/commit/315290d16110110938f80a6b779cc2d1db58c552))
* add Idempotency to Postgres ([#7750](https://github.com/parse-community/parse-server/issues/7750)) ([0c3feaa](https://github.com/parse-community/parse-server/commit/0c3feaaa1751964c0db89f25674935c3354b1538))
* add support for Node 16 ([#7707](https://github.com/parse-community/parse-server/issues/7707)) ([45cc58c](https://github.com/parse-community/parse-server/commit/45cc58c7e5e640a46c5d508019a3aa81242964b1))
* bump required node engine to >=12.22.10 ([#7846](https://github.com/parse-community/parse-server/issues/7846)) ([5ace99d](https://github.com/parse-community/parse-server/commit/5ace99d542a11e422af46d9fd6b1d3d2513b34cf))
* support `postgresql` protocol in database URI ([#7757](https://github.com/parse-community/parse-server/issues/7757)) ([caf4a23](https://github.com/parse-community/parse-server/commit/caf4a2341f554b28e3918c53e7e897a3ca47bf8b))
* support relativeTime query constraint on Postgres ([#7747](https://github.com/parse-community/parse-server/issues/7747)) ([16b1b2a](https://github.com/parse-community/parse-server/commit/16b1b2a19714535ca805f2dbb3b561d8f6a519a7))
* upgrade to MongoDB Node.js driver 4.x for MongoDB 5.0 support ([#7794](https://github.com/parse-community/parse-server/issues/7794)) ([f88aa2a](https://github.com/parse-community/parse-server/commit/f88aa2a62a533e5344d1c13dd38c5a0b283a480a))

### Reverts

* refactor: allow ES import for cloud string if package type is module ([b64640c](https://github.com/parse-community/parse-server/commit/b64640c5705f733798783e68d216e957044ef23c))
* update node engine to 2.22.0 ([#7827](https://github.com/parse-community/parse-server/issues/7827)) ([f235412](https://github.com/parse-community/parse-server/commit/f235412c1b6c2b173b7531f285429ea7214b56a2))

### ⚠️ NOTABLE CHANGES

*The following changes would formally require a major version increment (Parse Server 6.0), but given their low relevance they are released as part of this minor version increment (Parse Server 5.1).*

* The MongoDB GridStore adapter has been removed. By default, Parse Server already uses GridFS, so if you do not manually use the GridStore adapter, you can ignore this change. Parse Server uses the GridFSBucket adapter instead of GridStore adapter by default since 2018. ([f88aa2a](f88aa2a))
* Removes official Node 15 support which has already reached it End-of-Life date. ([45cc58c](45cc58c))


# [5.0.0](https://github.com/parse-community/parse-server/compare/4.10.7...5.0.0) (2022-03-14)


### BREAKING CHANGES
- Improved schema caching through database real-time hooks. Reduces DB queries, decreases Parse Query execution time and fixes a potential schema memory leak. If multiple Parse Server instances connect to the same DB (for example behind a load balancer), set the [Parse Server Option](https://parseplatform.org/parse-server/api/master/ParseServerOptions.html) `databaseOptions.enableSchemaHooks: true` to enable this feature and keep the schema in sync across all instances. Failing to do so will cause a schema change to not propagate to other instances and re-syncing will only happen when these instances restart. The options `enableSingleSchemaCache` and `schemaCacheTTL` have been removed. To use this feature with MongoDB, a replica set cluster with [change stream](https://docs.mongodb.com/manual/changeStreams/#availability) support is required. (Diamond Lewis, SebC) [#7214](https://github.com/parse-community/parse-server/issues/7214)
- Fix security vulnerability that allows remote code execution; as part of the fix a new security feature scans for sensitive keywords in request data to prevent JavaScript prototype pollution. If such a keyword is found, the request is rejected with HTTP response code `400` and Parse Error `105` (`INVALID_KEY_NAME`). By default these keywords are: `{_bsontype: "Code"}`, `constructor`, `__proto__`. If you are using any of these keywords in your request data, you can override the default keywords by setting the new Parse Server option `requestKeywordDenylist` to `[]` and specify your own keywords as needed. ([GHSA-p6h4-93qp-jhcm](https://github.com/advisories/GHSA-p6h4-93qp-jhcm)) ([#7843](https://github.com/parse-community/parse-server/issues/7843)) ([971adb5](https://github.com/parse-community/parse-server/commit/971adb54387b0ede31be05ca407d5f35b4575c83))
- Added file upload restriction. File upload is now only allowed for authenticated users by default for improved security. To allow file upload also for Anonymous Users or Public, set the `fileUpload` parameter in the [Parse Server Options](https://parseplatform.org/parse-server/api/master/ParseServerOptions.html) (dblythy, Manuel Trezza) [#7071](https://github.com/parse-community/parse-server/pull/7071)
- Removed [parse-server-simple-mailgun-adapter](https://github.com/parse-community/parse-server-simple-mailgun-adapter) dependency; to continue using the adapter it has to be explicitly installed (Manuel Trezza) [#7321](https://github.com/parse-community/parse-server/pull/7321)
- Remove support for MongoDB 3.6 which has reached its End-of-Life date and PostgreSQL 10 (Manuel Trezza) [#7315](https://github.com/parse-community/parse-server/pull/7315)
- Remove support for Node 10 which has reached its End-of-Life date (Manuel Trezza) [#7314](https://github.com/parse-community/parse-server/pull/7314)
- Bump required Node engine to >=12.22.10 ([#7848](https://github.com/parse-community/parse-server/issues/7848)) ([23a3488](https://github.com/parse-community/parse-server/commit/23a3488f15511fafbe0e1d7ff0ef8355f9cb0215))
- Remove S3 Files Adapter from Parse Server, instead install separately as `@parse/s3-files-adapter` (Manuel Trezza) [#7324](https://github.com/parse-community/parse-server/pull/7324)
- Remove Session field `restricted`; the field was a code artifact from a feature that never existed in Open Source Parse Server; if you have been using this field for custom purposes, consider that for new Parse Server installations the field does not exist anymore in the schema, and for existing installations the field default value `false` will not be set anymore when creating a new session (Manuel Trezza) [#7543](https://github.com/parse-community/parse-server/pull/7543)
- To delete a field via the GraphQL API, the field value has to be set to `null`. Previously, setting a field value to `null` would save a null value in the database, which was not according to the [GraphQL specs](https://spec.graphql.org/June2018/#sec-Null-Value). To delete a file field use `file: null`, the previous way of using `file: { file: null }` has become obsolete. ([626fad2](626fad2))

### Notable Changes
- Alphabetical ordered GraphQL API, improved GraphQL Schema cache system and fix GraphQL input reassign issue (Moumouls) [#7344](https://github.com/parse-community/parse-server/issues/7344)
- Added Parse Server Security Check to report weak security settings (Manuel Trezza, dblythy) [#7247](https://github.com/parse-community/parse-server/issues/7247)
- EXPERIMENTAL: Added new page router with placeholder rendering and localization of custom and feature pages such as password reset and email verification (Manuel Trezza) [#7128](https://github.com/parse-community/parse-server/pull/7128)
- EXPERIMENTAL: Added custom routes to easily customize flows for password reset, email verification or build entirely new flows (Manuel Trezza) [#7231](https://github.com/parse-community/parse-server/pull/7231)
- Added Deprecation Policy to govern the introduction of breaking changes in a phased pattern that is more predictable for developers (Manuel Trezza) [#7199](https://github.com/parse-community/parse-server/pull/7199)
- Add REST API endpoint `/loginAs` to create session of any user with master key; allows to impersonate another user. (GormanFletcher) [#7406](https://github.com/parse-community/parse-server/pull/7406)
- Add official support for MongoDB 5.0 (Manuel Trezza) [#7469](https://github.com/parse-community/parse-server/pull/7469)
- Added Parse Server Configuration `enforcePrivateUsers`, which will remove public access by default on new Parse.Users (dblythy) [#7319](https://github.com/parse-community/parse-server/pull/7319)
- add support for Postgres 14 ([#7644](https://github.com/parse-community/parse-server/issues/7644)) ([090350a](https://github.com/parse-community/parse-server/commit/090350a7a0fac945394ca1cb24b290316ef06aa7))
- add user-defined schema and migrations ([#7418](https://github.com/parse-community/parse-server/issues/7418)) ([25d5c30](https://github.com/parse-community/parse-server/commit/25d5c30be2111be332eb779eb0697774a17da7af))
- setting a field to null does not delete it via GraphQL API ([#7649](https://github.com/parse-community/parse-server/issues/7649)) ([626fad2](https://github.com/parse-community/parse-server/commit/626fad2e71017dcc62196c487de5f908fa43000b))
- combined `and` query with relational query condition returns incorrect results ([#7593](https://github.com/parse-community/parse-server/issues/7593)) ([174886e](https://github.com/parse-community/parse-server/commit/174886e385e091c6bbd4a84891ef95f80b50d05c))
- node engine range has no upper limit to exclude incompatible node versions ([#7693](https://github.com/parse-community/parse-server/issues/7693)) ([6a54dac](https://github.com/parse-community/parse-server/commit/6a54dac24d9fb63a44f311b8d414f4aa64140f32))
- unable to use objectId size higher than 19 on GraphQL API ([#7722](https://github.com/parse-community/parse-server/issues/7722)) ([8ee0445](https://github.com/parse-community/parse-server/commit/8ee0445c0aeeb88dff2559b46ade408071d22143))
- schema cache not cleared in some cases ([#7771](https://github.com/parse-community/parse-server/issues/7771)) ([3b92fa1](https://github.com/parse-community/parse-server/commit/3b92fa1ca9e8889127a32eba913d68309397ca2c))

### Other Changes
- Support native mongodb syntax in aggregation pipelines (Raschid JF Rafeally) [#7339](https://github.com/parse-community/parse-server/pull/7339)
- Fix error when a not yet inserted job is updated (Antonio Davi Macedo Coelho de Castro) [#7196](https://github.com/parse-community/parse-server/pull/7196)
- request.context for afterFind triggers (dblythy) [#7078](https://github.com/parse-community/parse-server/pull/7078)
- Winston Logger interpolating stdout to console (dplewis) [#7114](https://github.com/parse-community/parse-server/pull/7114)
- Added convenience method `Parse.Cloud.sendEmail(...)` to send email via email adapter in Cloud Code (dblythy) [#7089](https://github.com/parse-community/parse-server/pull/7089)
- LiveQuery support for $and, $nor, $containedBy, $geoWithin, $geoIntersects queries (dplewis) [#7113](https://github.com/parse-community/parse-server/pull/7113)
- Supporting patterns in LiveQuery server's config parameter `classNames` (Nes-si) [#7131](https://github.com/parse-community/parse-server/pull/7131)
- Added `requireAnyUserRoles` and `requireAllUserRoles` for Parse Cloud validator (dblythy) [#7097](https://github.com/parse-community/parse-server/pull/7097)
- Support Facebook Limited Login (miguel-s) [#7219](https://github.com/parse-community/parse-server/pull/7219)
- Removed Stage name check on aggregate pipelines (BRETT71) [#7237](https://github.com/parse-community/parse-server/pull/7237)
- Retry transactions on MongoDB when it fails due to transient error (Antonio Davi Macedo Coelho de Castro) [#7187](https://github.com/parse-community/parse-server/pull/7187)
- Bump tests to use Mongo 4.4.4 (Antonio Davi Macedo Coelho de Castro) [#7184](https://github.com/parse-community/parse-server/pull/7184)
- Added new account lockout policy option `accountLockout.unlockOnPasswordReset` to automatically unlock account on password reset (Manuel Trezza) [#7146](https://github.com/parse-community/parse-server/pull/7146)
- Test Parse Server continuously against all recent MongoDB versions that have not reached their end-of-life support date, added MongoDB compatibility table to Parse Server docs (Manuel Trezza) [#7161](https://github.com/parse-community/parse-server/pull/7161)
- Test Parse Server continuously against all recent Node.js versions that have not reached their end-of-life support date, added Node.js compatibility table to Parse Server docs (Manuel Trezza) [7161](https://github.com/parse-community/parse-server/pull/7177)
- Throw error on invalid Cloud Function validation configuration (dblythy) [#7154](https://github.com/parse-community/parse-server/pull/7154)
- Allow Cloud Validator `options` to be async (dblythy) [#7155](https://github.com/parse-community/parse-server/pull/7155)
- Optimize queries on classes with pointer permissions (Pedro Diaz) [#7061](https://github.com/parse-community/parse-server/pull/7061)
- Test Parse Server continuously against all relevant Postgres versions (minor versions), added Postgres compatibility table to Parse Server docs (Corey Baker) [#7176](https://github.com/parse-community/parse-server/pull/7176)
- Randomize test suite (Diamond Lewis) [#7265](https://github.com/parse-community/parse-server/pull/7265)
- LDAP: Properly unbind client on group search error (Diamond Lewis) [#7265](https://github.com/parse-community/parse-server/pull/7265)
- Improve data consistency in Push and Job Status update (Diamond Lewis) [#7267](https://github.com/parse-community/parse-server/pull/7267)
- Excluding keys that have trailing edges.node when performing GraphQL resolver (Chris Bland) [#7273](https://github.com/parse-community/parse-server/pull/7273)
- Added centralized feature deprecation with standardized warning logs (Manuel Trezza) [#7303](https://github.com/parse-community/parse-server/pull/7303)
- Use Node.js 15.13.0 in CI (Olle Jonsson) [#7312](https://github.com/parse-community/parse-server/pull/7312)
- Fix file upload issue for S3 compatible storage (Linode, DigitalOcean) by avoiding empty tags property when creating a file (Ali Oguzhan Yildiz) [#7300](https://github.com/parse-community/parse-server/pull/7300)
- Add building Docker image as CI check (Manuel Trezza) [#7332](https://github.com/parse-community/parse-server/pull/7332)
- Add NPM package-lock version check to CI (Manuel Trezza) [#7333](https://github.com/parse-community/parse-server/pull/7333)
- Fix incorrect LiveQuery events triggered for multiple subscriptions on the same class with different events [#7341](https://github.com/parse-community/parse-server/pull/7341)
- Fix select and excludeKey queries to properly accept JSON string arrays. Also allow nested fields in exclude (Corey Baker) [#7242](https://github.com/parse-community/parse-server/pull/7242)
- Fix LiveQuery server crash when using $all query operator on a missing object key (Jason Posthuma) [#7421](https://github.com/parse-community/parse-server/pull/7421)
- Added runtime deprecation warnings (Manuel Trezza) [#7451](https://github.com/parse-community/parse-server/pull/7451)
- Add ability to pass context of an object via a header, X-Parse-Cloud-Context, for Cloud Code triggers. The header addition allows client SDK's to add context without injecting _context in the body of JSON objects (Corey Baker) [#7437](https://github.com/parse-community/parse-server/pull/7437)
- Add CI check to add changelog entry (Manuel Trezza) [#7512](https://github.com/parse-community/parse-server/pull/7512)
- Refactor: uniform issue templates across repos (Manuel Trezza) [#7528](https://github.com/parse-community/parse-server/pull/7528)
- ci: bump ci environment (Manuel Trezza) [#7539](https://github.com/parse-community/parse-server/pull/7539)
- CI now pushes docker images to Docker Hub (Corey Baker) [#7548](https://github.com/parse-community/parse-server/pull/7548)
- Allow afterFind and afterLiveQueryEvent to set unsaved pointers and keys (dblythy) [#7310](https://github.com/parse-community/parse-server/pull/7310)
- Allow setting descending sort to full text queries (dblythy) [#7496](https://github.com/parse-community/parse-server/pull/7496)
- Allow cloud string for ES modules (Daniel Blyth) [#7560](https://github.com/parse-community/parse-server/pull/7560)
- docs: Introduce deprecation ID for reference in comments and online search (Manuel Trezza) [#7562](https://github.com/parse-community/parse-server/pull/7562)
- refactor: deprecate `Parse.Cloud.httpRequest`; it is recommended to use a HTTP library instead. (Daniel Blyth) [#7595](https://github.com/parse-community/parse-server/pull/7595)
- refactor: Modernize HTTPRequest tests (brandongregoryscott) [#7604](https://github.com/parse-community/parse-server/pull/7604)
- Allow liveQuery on Session class (Daniel Blyth) [#7554](https://github.com/parse-community/parse-server/pull/7554)
- security upgrade follow-redirects from 1.14.2 to 1.14.7 ([#7772](https://github.com/parse-community/parse-server/issues/7772)) ([4bd34b1](https://github.com/parse-community/parse-server/commit/4bd34b189bc9f5aa2e70b7e7c1a456e91b6de773))
- security upgrade follow-redirects from 1.14.7 to 1.14.8 ([#7802](https://github.com/parse-community/parse-server/issues/7802)) ([7029b27](https://github.com/parse-community/parse-server/commit/7029b274ca87bc8058617f29865d683dc3b351a1))
- Add node engine version check (Manuel Trezza) [#7574](https://github.com/parse-community/parse-server/pull/7574)

## [4.10.7](https://github.com/parse-community/parse-server/compare/4.10.6...4.10.7) (2022-03-11)


### Bug Fixes

* security vulnerability that allows remote code execution ([GHSA-p6h4-93qp-jhcm](https://github.com/parse-community/parse-server/security/advisories/GHSA-p6h4-93qp-jhcm)) ([#7841](https://github.com/parse-community/parse-server/issues/7841)) ([886bfd7](https://github.com/parse-community/parse-server/commit/886bfd7cac69496e3f73d4bb536f0eec3cba0e4d))

  Note that as part of the fix a new security feature scans for sensitive keywords in request data to prevent JavaScript prototype pollution. If such a keyword is found, the request is rejected with HTTP response code `400` and Parse Error `105` (`INVALID_KEY_NAME`). By default these keywords are: `{_bsontype: "Code"}`, `constructor`, `__proto__`. If you are using any of these keywords in your request data, you can override the default keywords by setting the new Parse Server option `requestKeywordDenylist` to `[]` and specify your own keywords as needed.

## [4.10.6](https://github.com/parse-community/parse-server/compare/4.10.5...4.10.6) (2022-02-12)


### Bug Fixes

* update graphql dependencies to work with Parse Dashboard ([#7658](https://github.com/parse-community/parse-server/issues/7658)) ([350ecde](https://github.com/parse-community/parse-server/commit/350ecdee590f1b9d721895b2c79306c01622c3fc))

## [4.10.5](https://github.com/parse-community/parse-server/compare/4.10.4...4.10.5) (2022-02-12)


### Bug Fixes

* security upgrade follow-redirects from 1.13.0 to 1.14.8 ([#7803](https://github.com/parse-community/parse-server/issues/7803)) ([611332e](https://github.com/parse-community/parse-server/commit/611332ea33831258efd3dd2f2c621c2e35fc95d3))

# [4.10.4](https://github.com/parse-community/parse-server/compare/4.10.3...4.10.4)

### Security Fixes
- Strip out sessionToken when LiveQuery is used on Parse.User (Daniel Blyth) [GHSA-7pr3-p5fm-8r9x](https://github.com/parse-community/parse-server/security/advisories/GHSA-7pr3-p5fm-8r9x)

# [4.10.3](https://github.com/parse-community/parse-server/compare/4.10.2...4.10.3)

### Security Fixes
- Validate `explain` query parameter to avoid a server crash due to MongoDB bug [NODE-3463](https://jira.mongodb.org/browse/NODE-3463) (Kartal Kaan Bozdogan) [GHSA-xqp8-w826-hh6x](https://github.com/parse-community/parse-server/security/advisories/GHSA-xqp8-w826-hh6x)

# [4.10.2](https://github.com/parse-community/parse-server/compare/4.10.1...4.10.2)

### Other Changes
- Move graphql-tag from devDependencies to dependencies (Antonio Davi Macedo Coelho de Castro) [#7183](https://github.com/parse-community/parse-server/pull/7183)

# [4.10.1](https://github.com/parse-community/parse-server/compare/4.10.0...4.10.1)

### Security Fixes
- Updated to Parse JS SDK 3.3.0 and other security fixes (Manuel Trezza) [#7508](https://github.com/parse-community/parse-server/pull/7508)

> ⚠️ This includes a security fix of the Parse JS SDK where `logIn` will default to `POST` instead of `GET` method. This may require changes in your deployment before you upgrade to this release, see the Parse JS SDK 3.0.0 [release notes](https://github.com/parse-community/Parse-SDK-JS/releases/tag/3.0.0).

# [4.10.0](https://github.com/parse-community/parse-server/compare/4.5.2...4.10.0)

*Versions >4.5.2 and <4.10.0 are skipped.*

> ⚠️ A security incident caused a number of incorrect version tags to be pushed to the Parse Server repository. These version tags linked to a personal fork of a contributor who had write access to the repository. The code to which these tags linked has not been reviewed or approved by Parse Platform. Even though no releases were published with these incorrect versions, it was possible to define a Parse Server dependency that pointed to these version tags, for example if you defined this dependency:
> ```js
> "parse-server": "git@github.com:parse-community/parse-server.git#4.9.3"
> ```
>
> We have since deleted the incorrect version tags, but they may still show up if your personal fork on GitHub or locally. We do not know when these tags have been pushed to the Parse Server repository, but we first became aware of this issue on July 21, 2021. We are not aware of any malicious code or concerns related to privacy, security or legality (e.g. proprietary code). However, it has been reported that some functionality does not work as expected and the introduction of security vulnerabilities cannot be ruled out.
>
> You may be also affected if you used the Bitnami image for Parse Server. Bitnami picked up the incorrect version tag `4.9.3` and published a new Bitnami image for Parse Server.
>
>**If you are using any of the affected versions, we urgently recommend to upgrade to version `4.10.0`.**

# [4.5.2](https://github.com/parse-community/parse-server/compare/4.5.0...4.5.2)

#### Security Fixes
- SECURITY FIX: Fixes incorrect session property `authProvider: password` of anonymous users. When signing up an anonymous user, the session field `createdWith` indicates incorrectly that the session has been created using username and password with `authProvider: password`, instead of an anonymous sign-up with `authProvider: anonymous`. This fixes the issue by setting the correct `authProvider: anonymous` for future sign-ups of anonymous users. This fix does not fix incorrect `authProvider: password` for existing sessions of anonymous users. Consider this if your app logic depends on the `authProvider` field. (Corey Baker) [GHSA-23r4-5mxp-c7g5](https://github.com/parse-community/parse-server/security/advisories/GHSA-23r4-5mxp-c7g5)

# 4.5.1
*This version was published by mistake and has been removed.*

# [4.5.0](https://github.com/parse-community/parse-server/compare/4.4.0...4.5.0)
### Breaking Changes
- FIX: Consistent casing for afterLiveQueryEvent. The afterLiveQueryEvent was introduced in 4.4.0 with inconsistent casing for the event names, which was fixed in 4.5.0. [#7023](https://github.com/parse-community/parse-server/pull/7023). Thanks to [dblythy](https://github.com/dblythy).
### Other Changes
- FIX: Properly handle serverURL and publicServerUrl in Batch requests. [#7049](https://github.com/parse-community/parse-server/pull/7049). Thanks to [Zach Goldberg](https://github.com/ZachGoldberg).
- IMPROVE: Prevent invalid column names (className and length). [#7053](https://github.com/parse-community/parse-server/pull/7053). Thanks to [Diamond Lewis](https://github.com/dplewis).
- IMPROVE: GraphQL: Remove viewer from logout mutation. [#7029](https://github.com/parse-community/parse-server/pull/7029). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- IMPROVE: GraphQL: Optimize on Relation. [#7044](https://github.com/parse-community/parse-server/pull/7044). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- NEW: Include sessionToken in onLiveQueryEvent. [#7043](https://github.com/parse-community/parse-server/pull/7043). Thanks to [dblythy](https://github.com/dblythy).
- FIX: Definitions for accountLockout and passwordPolicy. [#7040](https://github.com/parse-community/parse-server/pull/7040). Thanks to [dblythy](https://github.com/dblythy).
- FIX: Fix typo in server definitions for emailVerifyTokenReuseIfValid. [#7037](https://github.com/parse-community/parse-server/pull/7037). Thanks to [dblythy](https://github.com/dblythy).
- SECURITY FIX: LDAP auth stores password in plain text. See [GHSA-4w46-w44m-3jq3](https://github.com/parse-community/parse-server/security/advisories/GHSA-4w46-w44m-3jq3) for more details about the vulnerability and [da905a3](https://github.com/parse-community/parse-server/commit/da905a357d062ab4fea727a21eac231acc2ed92a) for the fix. Thanks to [Fabian Strachanski](https://github.com/fastrde).
- NEW: Reuse tokens if they haven't expired. [#7017](https://github.com/parse-community/parse-server/pull/7017). Thanks to [dblythy](https://github.com/dblythy).
- NEW: Add LDAPS-support to LDAP-Authcontroller. [#7014](https://github.com/parse-community/parse-server/pull/7014). Thanks to [Fabian Strachanski](https://github.com/fastrde).
- FIX: (beforeSave/afterSave): Return value instead of Parse.Op for nested fields. [#7005](https://github.com/parse-community/parse-server/pull/7005). Thanks to [Diamond Lewis](https://github.com/dplewis).
- FIX: (beforeSave): Skip Sanitizing Database results. [#7003](https://github.com/parse-community/parse-server/pull/7003). Thanks to [Diamond Lewis](https://github.com/dplewis).
- FIX: Fix includeAll for querying a Pointer and Pointer array. [#7002](https://github.com/parse-community/parse-server/pull/7002). Thanks to [Corey Baker](https://github.com/cbaker6).
- FIX: Add encryptionKey to src/options/index.js. [#6999](https://github.com/parse-community/parse-server/pull/6999). Thanks to [dblythy](https://github.com/dblythy).
- IMPROVE: Update PostgresStorageAdapter.js. [#6989](https://github.com/parse-community/parse-server/pull/6989). Thanks to [Vitaly Tomilov](https://github.com/vitaly-t).

# [4.4.0](https://github.com/parse-community/parse-server/compare/4.3.0...4.4.0)
- IMPROVE: Update PostgresStorageAdapter.js. [#6981](https://github.com/parse-community/parse-server/pull/6981). Thanks to [Vitaly Tomilov](https://github.com/vitaly-t)
- NEW: skipWithMasterKey on Built-In Validator. [#6972](https://github.com/parse-community/parse-server/issues/6972). Thanks to [dblythy](https://github.com/dblythy).
- NEW: Add fileKey rotation to GridFSBucketAdapter. [#6768](https://github.com/parse-community/parse-server/pull/6768). Thanks to [Corey Baker](https://github.com/cbaker6).
- IMPROVE: Remove unused parameter in Cloud Function. [#6969](https://github.com/parse-community/parse-server/issues/6969). Thanks to [Diamond Lewis](https://github.com/dplewis).
- IMPROVE: Validation Handler Update. [#6968](https://github.com/parse-community/parse-server/issues/6968). Thanks to [dblythy](https://github.com/dblythy).
- FIX: (directAccess): Properly handle response status. [#6966](https://github.com/parse-community/parse-server/issues/6966). Thanks to [Diamond Lewis](https://github.com/dplewis).
- FIX: Remove hostnameMaxLen for Mongo URL. [#6693](https://github.com/parse-community/parse-server/issues/6693). Thanks to [markhoward02](https://github.com/markhoward02).
- IMPROVE: Show a message if cloud functions are duplicated. [#6963](https://github.com/parse-community/parse-server/issues/6963). Thanks to [dblythy](https://github.com/dblythy).
- FIX: Pass request.query to afterFind. [#6960](https://github.com/parse-community/parse-server/issues/6960). Thanks to [dblythy](https://github.com/dblythy).
- SECURITY FIX: Patch session vulnerability over Live Query. See [GHSA-2xm2-xj2q-qgpj](https://github.com/parse-community/parse-server/security/advisories/GHSA-2xm2-xj2q-qgpj) for more details about the vulnerability and [78b59fb](https://github.com/parse-community/parse-server/commit/78b59fb26b1c36e3cdbd42ba9fec025003267f58) for the fix. Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo).
- IMPROVE: LiveQueryEvent Error Logging Improvements. [#6951](https://github.com/parse-community/parse-server/issues/6951). Thanks to [dblythy](https://github.com/dblythy).
- IMPROVE: Include stack in Cloud Code. [#6958](https://github.com/parse-community/parse-server/issues/6958). Thanks to [dblythy](https://github.com/dblythy).
- FIX: (jobs): Add Error Message to JobStatus Failure. [#6954](https://github.com/parse-community/parse-server/issues/6954). Thanks to [Diamond Lewis](https://github.com/dplewis).
- NEW: Create Cloud function afterLiveQueryEvent. [#6859](https://github.com/parse-community/parse-server/issues/6859). Thanks to [dblythy](https://github.com/dblythy).
- FIX: Update vkontakte API to the latest version. [#6944](https://github.com/parse-community/parse-server/issues/6944). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo).
- FIX: Use an empty object as default value of options for Google Sign in. [#6844](https://github.com/parse-community/parse-server/issues/6844). Thanks to [Kevin Kuang](https://github.com/kvnkuang).
- FIX: Postgres: prepend className to unique indexes. [#6741](https://github.com/parse-community/parse-server/pull/6741). Thanks to [Corey Baker](https://github.com/cbaker6).
- FIX: GraphQL: Transform input types also on user mutations. [#6934](https://github.com/parse-community/parse-server/pull/6934). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Set objectId into query for Email Validation. [#6930](https://github.com/parse-community/parse-server/pull/6930). Thanks to [Danaru](https://github.com/Danaru87).
- FIX: GraphQL: Optimize queries, fixes some null returns (on object), fix stitched GraphQLUpload. [#6709](https://github.com/parse-community/parse-server/pull/6709). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Do not throw error if user provide a pointer like index onMongo. [#6923](https://github.com/parse-community/parse-server/pull/6923). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Hotfix instagram api. [#6922](https://github.com/parse-community/parse-server/issues/6922). Thanks to [Tim](https://github.com/timination).
- FIX: (directAccess/cloud-code): Pass installationId with LogIn. [#6903](https://github.com/parse-community/parse-server/issues/6903). Thanks to [Diamond Lewis](https://github.com/dplewis).
- FIX: Fix bcrypt binary incompatibility. [#6891](https://github.com/parse-community/parse-server/issues/6891). Thanks to [Manuel Trezza](https://github.com/mtrezza).
- NEW: Keycloak auth adapter. [#6376](https://github.com/parse-community/parse-server/issues/6376). Thanks to [Rhuan](https://github.com/rhuanbarreto).
- IMPROVE: Changed incorrect key name in apple auth adapter tests. [#6861](https://github.com/parse-community/parse-server/issues/6861). Thanks to [Manuel Trezza](https://github.com/mtrezza).
- FIX: Fix mutating beforeSubscribe Query. [#6868](https://github.com/parse-community/parse-server/issues/6868). Thanks to [dblythy](https://github.com/dblythy).
- FIX: Fix beforeLogin for users logging in with AuthData. [#6872](https://github.com/parse-community/parse-server/issues/6872). Thanks to [Kevin Kuang](https://github.com/kvnkuang).
- FIX: Remove Facebook AccountKit auth. [#6870](https://github.com/parse-community/parse-server/issues/6870). Thanks to [Diamond Lewis](https://github.com/dplewis).
- FIX: Updated TOKEN_ISSUER to 'accounts.google.com'. [#6836](https://github.com/parse-community/parse-server/issues/6836). Thanks to [Arjun Vedak](https://github.com/arjun3396).
- IMPROVE: Optimized deletion of class field from schema by using an index if available to do an index scan instead of a collection scan. [#6815](https://github.com/parse-community/parse-server/issues/6815). Thanks to [Manuel Trezza](https://github.com/mtrezza).
- IMPROVE: Enable MongoDB transaction test for MongoDB >= 4.0.4 [#6827](https://github.com/parse-community/parse-server/pull/6827). Thanks to [Manuel](https://github.com/mtrezza).

# [4.3.0](https://github.com/parse-community/parse-server/compare/4.2.0...4.3.0)
- PERFORMANCE: Optimizing pointer CLP query decoration done by DatabaseController#addPointerPermissions [#6747](https://github.com/parse-community/parse-server/pull/6747). Thanks to [mess-lelouch](https://github.com/mess-lelouch).
- SECURITY: Fix security breach on GraphQL viewer [78239ac](https://github.com/parse-community/parse-server/commit/78239ac9071167fdf243c55ae4bc9a2c0b0d89aa), [security advisory](https://github.com/parse-community/parse-server/security/advisories/GHSA-236h-rqv8-8q73). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Save context not present if direct access enabled [#6764](https://github.com/parse-community/parse-server/pull/6764). Thanks to [Omair Vaiyani](https://github.com/omairvaiyani).
- NEW: Before Connect + Before Subscribe [#6793](https://github.com/parse-community/parse-server/pull/6793). Thanks to [dblythy](https://github.com/dblythy).
- FIX: Add version to playground to fix CDN [#6804](https://github.com/parse-community/parse-server/pull/6804). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- NEW (EXPERIMENTAL): Idempotency enforcement for client requests. This deduplicates requests where the client intends to send one request to Parse Server but due to network issues the server receives the request multiple times. **Caution, this is an experimental feature that may not be appropriate for production.** [#6748](https://github.com/parse-community/parse-server/issues/6748). Thanks to [Manuel Trezza](https://github.com/mtrezza).
- FIX: Add production Google Auth Adapter instead of using the development url [#6734](https://github.com/parse-community/parse-server/pull/6734). Thanks to [SebC.](https://github.com/SebC99).
- IMPROVE: Run Prettier JS Again Without requiring () on arrow functions [#6796](https://github.com/parse-community/parse-server/pull/6796). Thanks to [Diamond Lewis](https://github.com/dplewis).
- IMPROVE: Run Prettier JS [#6795](https://github.com/parse-community/parse-server/pull/6795). Thanks to [Diamond Lewis](https://github.com/dplewis).
- IMPROVE: Replace bcrypt with @node-rs/bcrypt [#6794](https://github.com/parse-community/parse-server/pull/6794). Thanks to [LongYinan](https://github.com/Brooooooklyn).
- IMPROVE: Make clear description of anonymous user [#6655](https://github.com/parse-community/parse-server/pull/6655). Thanks to [Jerome De Leon](https://github.com/JeromeDeLeon).
- IMPROVE: Simplify GraphQL merge system to avoid js ref bugs [#6791](https://github.com/parse-community/parse-server/pull/6791). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- NEW: Pass context in beforeDelete, afterDelete, beforeFind and Parse.Cloud.run [#6666](https://github.com/parse-community/parse-server/pull/6666). Thanks to [yog27ray](https://github.com/yog27ray).
- NEW: Allow passing custom gql schema function to ParseServer#start options [#6762](https://github.com/parse-community/parse-server/pull/6762). Thanks to [Luca](https://github.com/lucatk).
- NEW: Allow custom cors origin header [#6772](https://github.com/parse-community/parse-server/pull/6772). Thanks to [Kevin Yao](https://github.com/kzmeyao).
- FIX: Fix context for cascade-saving and saving existing object [#6735](https://github.com/parse-community/parse-server/pull/6735). Thanks to [Manuel](https://github.com/mtrezza).
- NEW: Add file bucket encryption using fileKey [#6765](https://github.com/parse-community/parse-server/pull/6765). Thanks to [Corey Baker](https://github.com/cbaker6).
- FIX: Removed gaze from dev dependencies and removed not working dev script [#6745](https://github.com/parse-community/parse-server/pull/6745). Thanks to [Vincent Semrau](https://github.com/vince1995).
- IMPROVE: Upgrade graphql-tools to v6 [#6701](https://github.com/parse-community/parse-server/pull/6701). Thanks to [Yaacov Rydzinski](https://github.com/yaacovCR).
- NEW: Support Metadata in GridFSAdapter [#6660](https://github.com/parse-community/parse-server/pull/6660). Thanks to [Diamond Lewis](https://github.com/dplewis).
- NEW: Allow to unset file from graphql [#6651](https://github.com/parse-community/parse-server/pull/6651). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- NEW: Handle shutdown for RedisCacheAdapter [#6658](https://github.com/parse-community/parse-server/pull/6658). Thanks to [promisenxu](https://github.com/promisenxu).
- FIX: Fix explain on user class [#6650](https://github.com/parse-community/parse-server/pull/6650). Thanks to [Manuel](https://github.com/mtrezza).
- FIX: Fix read preference for aggregate [#6585](https://github.com/parse-community/parse-server/pull/6585). Thanks to [Manuel](https://github.com/mtrezza).
- NEW: Add context to Parse.Object.save [#6626](https://github.com/parse-community/parse-server/pull/6626). Thanks to [Manuel](https://github.com/mtrezza).
- NEW: Adding ssl config params to Postgres URI [#6580](https://github.com/parse-community/parse-server/pull/6580). Thanks to [Corey Baker](https://github.com/cbaker6).
- FIX: Travis postgres update: removing unnecessary start of mongo-runner [#6594](https://github.com/parse-community/parse-server/pull/6594). Thanks to [Corey Baker](https://github.com/cbaker6).
- FIX: ObjectId size for Pointer in Postgres [#6619](https://github.com/parse-community/parse-server/pull/6619). Thanks to [Corey Baker](https://github.com/cbaker6).
- IMPROVE: Improve a test case [#6629](https://github.com/parse-community/parse-server/pull/6629). Thanks to [Gordon Sun](https://github.com/sunshineo).
- NEW: Allow to resolve automatically Parse Type fields from Custom Schema [#6562](https://github.com/parse-community/parse-server/pull/6562). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Remove wrong console log in test [#6627](https://github.com/parse-community/parse-server/pull/6627). Thanks to [Gordon Sun](https://github.com/sunshineo).
- IMPROVE: Graphql tools v5 [#6611](https://github.com/parse-community/parse-server/pull/6611). Thanks to [Yaacov Rydzinski](https://github.com/yaacovCR).
- FIX: Catch JSON.parse and return 403 properly [#6589](https://github.com/parse-community/parse-server/pull/6589). Thanks to [Gordon Sun](https://github.com/sunshineo).
- PERFORMANCE: Allow covering relation queries with minimal index [#6581](https://github.com/parse-community/parse-server/pull/6581). Thanks to [Noah Silas](https://github.com/noahsilas).
- FIX: Fix Postgres group aggregation [#6522](https://github.com/parse-community/parse-server/pull/6522). Thanks to [Siddharth Ramesh](https://github.com/srameshr).
- NEW: Allow set user mapped from JWT directly on request [#6411](https://github.com/parse-community/parse-server/pull/6411). Thanks to [Gordon Sun](https://github.com/sunshineo).

# [4.2.0](https://github.com/parse-community/parse-server/compare/4.1.0...4.2.0)

### Breaking Changes
- CHANGE: The Sign-In with Apple authentication adapter parameter `client_id` has been changed to `clientId`. If using the Apple authentication adapter, this change requires to update the Parse Server configuration accordingly. See [#6523](https://github.com/parse-community/parse-server/pull/6523) for details.
___
- UPGRADE: Parse JS SDK to 2.12.0 [#6548](https://github.com/parse-community/parse-server/pull/6548)
- NEW: Support Group aggregation on multiple columns for Postgres [#6483](https://github.com/parse-community/parse-server/pull/6483). Thanks to [Siddharth Ramesh](https://github.com/srameshr).
- FIX: Improve test reliability by instructing Travis to only install one version of Postgres [#6490](https://github.com/parse-community/parse-server/pull/6490). Thanks to
[Corey Baker](https://github.com/cbaker6).
- FIX: Unknown type bug on overloaded types [#6494](https://github.com/parse-community/parse-server/pull/6494). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Improve reliability of 'SignIn with AppleID' [#6416](https://github.com/parse-community/parse-server/pull/6416). Thanks to [Andy King](https://github.com/andrewking0207).
- FIX: Improve Travis reliability by separating Postgres & Mongo scripts [#6505](https://github.com/parse-community/parse-server/pull/6505). Thanks to
[Corey Baker](https://github.com/cbaker6).
- NEW: Apple SignIn support for multiple IDs [#6523](https://github.com/parse-community/parse-server/pull/6523). Thanks to [UnderratedDev](https://github.com/UnderratedDev).
- NEW: Add support for new Instagram API [#6398](https://github.com/parse-community/parse-server/pull/6398). Thanks to [Maravilho Singa](https://github.com/maravilhosinga).
- FIX: Updating Postgres/Postgis Call and Postgis to 3.0 [#6528](https://github.com/parse-community/parse-server/pull/6528). Thanks to
[Corey Baker](https://github.com/cbaker6).
- FIX: enableExpressErrorHandler logic [#6423](https://github.com/parse-community/parse-server/pull/6423). Thanks to [Nikolay Andryukhin](https://github.com/hybeats).
- FIX: Change Order Enum Strategy for GraphQL [#6515](https://github.com/parse-community/parse-server/pull/6515). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Switch ACL to Relay Global Id for GraphQL [#6495](https://github.com/parse-community/parse-server/pull/6495). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Handle keys for pointer fields properly for GraphQL [#6499](https://github.com/parse-community/parse-server/pull/6499). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: GraphQL file mutation [#6507](https://github.com/parse-community/parse-server/pull/6507). Thanks to [Antoine Cormouls](https://github.com/Moumouls).
- FIX: Aggregate geoNear with date query [#6540](https://github.com/parse-community/parse-server/pull/6540). Thanks to [Manuel](https://github.com/mtrezza).
- NEW: Add file triggers and file meta data [#6344](https://github.com/parse-community/parse-server/pull/6344). Thanks to [stevestencil](https://github.com/stevestencil).
- FIX: Improve local testing of postgres [#6531](https://github.com/parse-community/parse-server/pull/6531). Thanks to
[Corey Baker](https://github.com/cbaker6).
- NEW: Case insensitive username and email indexing and query planning for Postgres [#6506](https://github.com/parse-community/parse-server/issues/6441). Thanks to
[Corey Baker](https://github.com/cbaker6).

# [4.1.0](https://github.com/parse-community/parse-server/compare/4.0.2...4.1.0)

_SECURITY RELEASE_: see [advisory](https://github.com/parse-community/parse-server/security/advisories/GHSA-h4mf-75hf-67w4) for details
- SECURITY FIX: Patch Regex vulnerabilities. See [3a3a5ee](https://github.com/parse-community/parse-server/commit/3a3a5eee5ffa48da1352423312cb767de14de269). Special thanks to [W0lfw00d](https://github.com/W0lfw00d) for identifying and [responsibly reporting](https://github.com/parse-community/parse-server/blob/master/SECURITY.md) the vulnerability. Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo) for the speedy fix.

# [4.0.2](https://github.com/parse-community/parse-server/compare/4.0.1...4.0.2)

### Breaking Changes
1. Remove Support for Mongo 3.2 & 3.4. The new minimum supported version is Mongo 3.6.
2. Change username and email validation to be case insensitive. This change should be transparent in most use cases. The validation behavior should now behave 'as expected'. See [#5634](https://github.com/parse-community/parse-server/pull/5634) for details.

> __Special Note on Upgrading to Parse Server 4.0.0 and above__
>
> In addition to the breaking changes noted above, [#5634](https://github.com/parse-community/parse-server/pull/5634) introduces a two new case insensitive indexes on the `User` collection. Special care should be taken when upgrading to this version to ensure that:
>
> 1. The new indexes can be successfully created (see issue [#6465](https://github.com/parse-community/parse-server/issues/6465) for details on a potential issue for your installation).
>
> 2. Care is taken ensure that there is adequate compute capacity to create the index in the background while still servicing requests.

- FIX: attempt to get travis to deploy to npmjs again. See [#6475](https://github.com/parse-community/parse-server/pull/6457). Thanks to [Arthur Cinader](https://github.com/acinader).

# [4.0.1](https://github.com/parse-community/parse-server/compare/4.0.0...4.0.1)
- FIX: correct 'new' travis config to properly deploy.  See [#6452](https://github.com/parse-community/parse-server/pull/6452). Thanks to [Arthur Cinader](https://github.com/acinader).
- FIX: Better message on not allowed to protect default fields. See [#6439](https://github.com/parse-community/parse-server/pull/6439).Thanks to [Old Grandpa](https://github.com/BufferUnderflower)

# [4.0.0](https://github.com/parse-community/parse-server/compare/3.10.0...4.0.0)

> __Special Note on Upgrading to Parse Server 4.0.0 and above__
>
> In addition to the breaking changes noted below, [#5634](https://github.com/parse-community/parse-server/pull/5634) introduces a two new case insensitive indexes on the `User` collection. Special care should be taken when upgrading to this version to ensure that:
>
> 1. The new indexes can be successfully created (see issue [#6465](https://github.com/parse-community/parse-server/issues/6465) for details on a potential issue for your installation).
>
> 2. Care is taken ensure that there is adequate compute capacity to create the index in the background while still servicing requests.

- NEW: add hint option to Parse.Query [#6322](https://github.com/parse-community/parse-server/pull/6322). Thanks to [Steve Stencil](https://github.com/stevestencil)
- FIX: CLP objectId size validation fix [#6332](https://github.com/parse-community/parse-server/pull/6332). Thanks to [Old Grandpa](https://github.com/BufferUnderflower)
- FIX: Add volumes to Docker command [#6356](https://github.com/parse-community/parse-server/pull/6356). Thanks to [Kasra Bigdeli](https://github.com/githubsaturn)
- NEW: GraphQL 3rd Party LoginWith Support [#6371](https://github.com/parse-community/parse-server/pull/6371). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- FIX: GraphQL Geo Queries [#6363](https://github.com/parse-community/parse-server/pull/6363). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: GraphQL Nested File Upload [#6372](https://github.com/parse-community/parse-server/pull/6372). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: Granular CLP pointer permissions [#6352](https://github.com/parse-community/parse-server/pull/6352). Thanks to [Old Grandpa](https://github.com/BufferUnderflower)
- FIX: Add missing colon for customPages [#6393](https://github.com/parse-community/parse-server/pull/6393). Thanks to [Jerome De Leon](https://github.com/JeromeDeLeon)
- NEW: `afterLogin` cloud code hook [#6387](https://github.com/parse-community/parse-server/pull/6387). Thanks to [David Corona](https://github.com/davesters)
- FIX: __BREAKING CHANGE__ Prevent new usernames or emails that clash with existing users' email or username if it only differs by case.  For example, don't allow a new user with the name 'Jane' if we already have a user 'jane'. [#5634](https://github.com/parse-community/parse-server/pull/5634). Thanks to [Arthur Cinader](https://github.com/acinader)
- FIX: Support Travis CI V2. [#6414](https://github.com/parse-community/parse-server/pull/6414). Thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: Prevent crashing on websocket error. [#6418](https://github.com/parse-community/parse-server/pull/6418). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Allow protectedFields for Authenticated users and Public. [$6415](https://github.com/parse-community/parse-server/pull/6415). Thanks to [Old Grandpa](https://github.com/BufferUnderflower)
- FIX: Correct bug in determining GraphQL pointer errors when mutating. [#6413](https://github.com/parse-community/parse-server/pull/6431). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: Allow true GraphQL Schema Customization. [#6360](https://github.com/parse-community/parse-server/pull/6360). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- __BREAKING CHANGE__: Remove Support for Mongo version < 3.6 [#6445](https://github.com/parse-community/parse-server/pull/6445). Thanks to [Arthur Cinader](https://github.com/acinader)

# [3.10.0](https://github.com/parse-community/parse-server/compare/3.9.0...3.10.0)
- FIX: correct and cover ordering queries in GraphQL [#6316](https://github.com/parse-community/parse-server/pull/6316).  Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: GraphQL support for reset password email [#6301](https://github.com/parse-community/parse-server/pull/6301). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- FIX: Add default limit to GraphQL fetch [#6304](https://github.com/parse-community/parse-server/pull/6304). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- DOCS: use bash syntax highlighting [#6302](https://github.com/parse-community/parse-server/pull/6302). Thanks to [Jerome De Leon](https://github.com/JeromeDeLeon)
- NEW: Add max log file option [#6296](https://github.com/parse-community/parse-server/pull/6296). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: support user supplied objectId [#6101](https://github.com/parse-community/parse-server/pull/6101). Thanks to [Ruhan](https://github.com/rhuanbarretos)
- FIX: Add missing encodeURIComponent on username [#6278](https://github.com/parse-community/parse-server/pull/6278). Thanks to [Christopher Brookes](https://github.com/Klaitos)
- NEW: update  PostgresStorageAdapter.js to use async/await [#6275](https://github.com/parse-community/parse-server/pull/6275). Thanks to [Vitaly Tomilov](https://github.com/vitaly-t)
- NEW: Support required fields on output type for GraphQL [#6279](https://github.com/parse-community/parse-server/pull/6279). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: Support required fields for GraphQL [#6271](https://github.com/parse-community/parse-server/pull/6279). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- CHANGE: use mongodb 3.3.5 [#6263](https://github.com/parse-community/parse-server/pull/6263). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: GraphQL: DX Relational Where Query [#6255](https://github.com/parse-community/parse-server/pull/6255). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- CHANGE: test against Postgres 11 [#6260](https://github.com/parse-community/parse-server/pull/6260). Thanks to [Diamond Lewis](https://github.com/dplewis)
- CHANGE: test against Postgres 11 [#6260](https://github.com/parse-community/parse-server/pull/6260). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: GraphQL alias for mutations in classConfigs [#6258](https://github.com/parse-community/parse-server/pull/6258). Thanks to [Old Grandpa](https://github.com/BufferUnderflower)
- NEW: GraphQL classConfig query alias [#6257](https://github.com/parse-community/parse-server/pull/6257). Thanks to [Old Grandpa](https://github.com/BufferUnderflower)
- NEW: Allow validateFilename to return a string or Parse Error [#6246](https://github.com/parse-community/parse-server/pull/6246). Thanks to [Mike Patnode](https://github.com/mpatnode)
- NEW: Relay Spec [#6089](https://github.com/parse-community/parse-server/pull/6089). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- CHANGE: Set default ACL for GraphQL [#6249](https://github.com/parse-community/parse-server/pull/6249). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: LDAP auth Adapter [#6226](https://github.com/parse-community/parse-server/pull/6226). Thanks to [Julian Dax](https://github.com/brodo)
- FIX: improve beforeFind to include Query info [#6237](https://github.com/parse-community/parse-server/pull/6237). Thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: improve websocket error handling [#6230](https://github.com/parse-community/parse-server/pull/6230). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: addition of an afterLogout trigger [#6217](https://github.com/parse-community/parse-server/pull/6217). Thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: Initialize default logger [#6186](https://github.com/parse-community/parse-server/pull/6186). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Add funding link [#6192](https://github.com/parse-community/parse-server/pull/6192 ). Thanks to [Tom Fox](https://github.com/TomWFox)
- FIX: installationId on LiveQuery connect [#6180](https://github.com/parse-community/parse-server/pull/6180). Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Add exposing port in docker container [#6165](https://github.com/parse-community/parse-server/pull/6165). Thanks to [Priyash Patil](https://github.com/priyashpatil)
- NEW: Support Google Play Games Service [#6147](https://github.com/parse-community/parse-server/pull/6147). Thanks to [Diamond Lewis](https://github.com/dplewis)
- DOC: Throw error when setting authData to null [#6154](https://github.com/parse-community/parse-server/pull/6154). Thanks to [Manuel](https://github.com/mtrezza)
- CHANGE: Move filename validation out of the Router and into the FilesAdaptor [#6157](https://github.com/parse-community/parse-server/pull/6157). Thanks to [Mike Patnode](https://github.com/mpatnode)
- NEW: Added warning for special URL sensitive characters for appId [#6159](https://github.com/parse-community/parse-server/pull/6159). Thanks to [Saimoom Safayet Akash](https://github.com/saimoomsafayet)
- NEW: Support Apple Game Center Auth [#6143](https://github.com/parse-community/parse-server/pull/6143). Thanks to [Diamond Lewis](https://github.com/dplewis)
- CHANGE: test with Node 12 [#6133](https://github.com/parse-community/parse-server/pull/6133). Thanks to [Arthur Cinader](https://github.com/acinader)
- FIX: prevent after find from firing when saving objects [#6127](https://github.com/parse-community/parse-server/pull/6127). Thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: GraphQL Mutations not returning updated information [6130](https://github.com/parse-community/parse-server/pull/6130). Thanks to [Omair Vaiyani](https://github.com/omairvaiyani)
- CHANGE: Cleanup Schema cache per request [#6216](https://github.com/parse-community/parse-server/pull/6216). Thanks to [Diamond Lewis](https://github.com/dplewis)
- DOC: Improve installation instructions [#6120](https://github.com/parse-community/parse-server/pull/6120). Thanks to [Andres Galante](https://github.com/andresgalante)
- DOC: add code formatting to contributing guidelines [#6119](https://github.com/parse-community/parse-server/pull/6119). Thanks to [Andres Galante](https://github.com/andresgalante)
- NEW: Add GraphQL ACL Type + Input [#5957](https://github.com/parse-community/parse-server/pull/5957). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- CHANGE: replace public key [#6099](https://github.com/parse-community/parse-server/pull/6099). Thanks to [Arthur Cinader](https://github.com/acinader)
- NEW: Support microsoft authentication in GraphQL [#6051](https://github.com/parse-community/parse-server/pull/6051). Thanks to [Alann Maulana](https://github.com/alann-maulana)
- NEW: Install parse-server 3.9.0 instead of 2.2 [#6069](https://github.com/parse-community/parse-server/pull/6069). Thanks to [Julian Dax](https://github.com/brodo)
- NEW: Use #!/bin/bash instead of #!/bin/sh [#6062](https://github.com/parse-community/parse-server/pull/6062). Thanks to [Julian Dax](https://github.com/brodo)
- DOC: Update GraphQL readme section [#6030](https://github.com/parse-community/parse-server/pull/6030). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)

# [3.9.0](https://github.com/parse-community/parse-server/compare/3.8.0...3.9.0)
- NEW: Add allowHeaders to Options [#6044](https://github.com/parse-community/parse-server/pull/6044). Thanks to [Omair Vaiyani](https://github.com/omairvaiyani)
- CHANGE: Introduce ReadOptionsInput to GraphQL API [#6030](https://github.com/parse-community/parse-server/pull/6030). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Stream video with GridFSBucketAdapter (implements byte-range requests) [#6028](https://github.com/parse-community/parse-server/pull/6028). Thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: Aggregate not matching null values [#6043](https://github.com/parse-community/parse-server/pull/6043). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- CHANGE: Improve callCloudCode mutation to receive a CloudCodeFunction enum instead of a String in the GraphQL API [#6029](https://github.com/parse-community/parse-server/pull/6029). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- TEST: Add more tests to transactions [#6022](https://github.com/parse-community/parse-server/pull/6022). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- CHANGE: Pointer constraint input type as ID in the GraphQL API [#6020](https://github.com/parse-community/parse-server/pull/6020). Thanks to [Douglas Muraoka](https://github.com/douglasmuraoka)
- CHANGE: Remove underline from operators of the GraphQL API [#6024](https://github.com/parse-community/parse-server/pull/6024). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: Make method async as expected in usage [#6025](https://github.com/parse-community/parse-server/pull/6025). Thanks to [Omair Vaiyani](https://github.com/omairvaiyani)
- DOC: Added breaking change note to 3.8 release [#6023](https://github.com/parse-community/parse-server/pull/6023). Thanks to [Manuel](https://github.com/mtrezza)
- NEW: Added support for line auth [#6007](https://github.com/parse-community/parse-server/pull/6007). Thanks to [Saimoom Safayet Akash](https://github.com/saimoomsafayet)
- FIX: Fix aggregate group id [#5994](https://github.com/parse-community/parse-server/pull/5994). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- CHANGE: Schema operations instead of generic operations in the GraphQL API [#5993](https://github.com/parse-community/parse-server/pull/5993). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- DOC: Fix changelog formatting[#6009](https://github.com/parse-community/parse-server/pull/6009). Thanks to [Tom Fox](https://github.com/TomWFox)
- CHANGE: Rename objectId to id in the GraphQL API [#5985](https://github.com/parse-community/parse-server/pull/5985). Thanks to [Douglas Muraoka](https://github.com/douglasmuraoka)
- FIX: Fix beforeLogin trigger when user has a file [#6001](https://github.com/parse-community/parse-server/pull/6001). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- DOC: Update GraphQL Docs with the latest changes [#5980](https://github.com/parse-community/parse-server/pull/5980). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)

# [3.8.0](https://github.com/parse-community/parse-server/compare/3.7.2...3.8.0)
- NEW:  Protected fields pointer-permissions support [#5951](https://github.com/parse-community/parse-server/pull/5951).  Thanks to [Dobbias Nan](https://github.com/Dobbias)
- NEW: GraphQL DX: Relation/Pointer [#5946](https://github.com/parse-community/parse-server/pull/5946).  Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: Master Key Only Config Properties [#5953](https://github.com/parse-community/parse-server/pull/5954). Thanks to [Manuel](https://github.com/mtrezza)
- FIX: Better validation when creating a Relation fields [#5922](https://github.com/parse-community/parse-server/pull/5922).  Thanks to [Lucas Alencar](https://github.com/alencarlucas)
- NEW: enable GraphQL file upload [#5944](https://github.com/parse-community/parse-server/pull/5944). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Handle shutdown on grid adapters  [#5943](https://github.com/parse-community/parse-server/pull/5943).  Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Fix GraphQL max upload size [#5940](https://github.com/parse-community/parse-server/pull/5940). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: Remove Buffer() deprecation notice [#5942](https://github.com/parse-community/parse-server/pull/5942).  Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: Remove MongoDB unified topology deprecation notice from the grid adapter [#5941](https://github.com/parse-community/parse-server/pull/5941).  Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: add callback for serverCloseComplete [#5937](https://github.com/parse-community/parse-server/pull/5937). Thanks to [Diamond Lewis](https://github.com/dplewis)
- DOCS: Add Cloud Code guide to README [#5936](https://github.com/parse-community/parse-server/pull/5936).  Thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Remove nested operations from GraphQL API [#5931](https://github.com/parse-community/parse-server/pull/5931).  Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Improve Live Query Monitoring [#5927](https://github.com/parse-community/parse-server/pull/5927).  Thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: GraphQL: Fix undefined Array [#5296](https://github.com/parse-community/parse-server/pull/5926). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- NEW: Added array support for pointer-permissions [#5921](https://github.com/parse-community/parse-server/pull/5921).  Thanks to [Dobbias Nan](https://github.com/Dobbias)
- GraphQL: Renaming Types/Inputs [#5921](https://github.com/parse-community/parse-server/pull/5921). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- FIX: Lint no-prototype-builtins [#5920](https://github.com/parse-community/parse-server/pull/5920). Thanks to [Diamond Lewis](https://github.com/dplewis)
- GraphQL: Inline Fragment on Array Fields [#5908](https://github.com/parse-community/parse-server/pull/5908). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- DOCS: Add instructions to launch a compatible Docker Postgres [](). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- Fix: Undefined dot notation in matchKeyInQuery [#5917](https://github.com/parse-community/parse-server/pull/5917). Thanks to [Diamond Lewis](https://github.com/dplewis)
- Fix: Logger print JSON and Numbers [#5916](https://github.com/parse-community/parse-server/pull/5916). Thanks to [Diamond Lewis](https://github.com/dplewis)
- GraphQL: Return specific Type on specific Mutation [#5893](https://github.com/parse-community/parse-server/pull/5893). Thanks to [Antoine Cormouls](https://github.com/Moumouls)
- FIX: Apple sign-in authAdapter [#5891](https://github.com/parse-community/parse-server/pull/5891). Thanks to [SebC](https://github.com/SebC99).
- DOCS: Add GraphQL beta notice [#5886](https://github.com/parse-community/parse-server/pull/5886). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- GraphQL: Remove "password" output field from _User class [#5889](https://github.com/parse-community/parse-server/pull/5889). Thanks to [Douglas Muraoka](https://github.com/douglasmuraoka)
- GraphQL: Object constraints [#5715](https://github.com/parse-community/parse-server/pull/5715). Thanks to [Douglas Muraoka](https://github.com/douglasmuraoka)
- DOCS: README top section overhaul + add sponsors [#5876](https://github.com/parse-community/parse-server/pull/5876). Thanks to [Tom Fox](https://github.com/TomWFox)
- FIX: Return a Promise from classUpdate method [#5877](https://github.com/parse-community/parse-server/pull/5877). Thanks to [Lucas Alencar](https://github.com/alencarlucas)
- FIX: Use UTC Month in aggregate tests [#5879](https://github.com/parse-community/parse-server/pull/5879). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: Transaction was aborting before all promises have either resolved or rejected [#5878](https://github.com/parse-community/parse-server/pull/5878). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Use transactions for batch operation [#5849](https://github.com/parse-community/parse-server/pull/5849). Thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)

#### Breaking Changes
- If you are running Parse Server on top of a MongoDB deployment which does not fit the [Retryable Writes Requirements](https://docs.mongodb.com/manual/core/retryable-writes/#prerequisites), you will have to add `retryWrites=false` to your connection string in order to upgrade to Parse Server 3.8.

# [3.7.2](https://github.com/parse-community/parse-server/compare/3.7.1...3.7.2)

- FIX: Live Query was failing on release 3.7.1

# [3.7.1](https://github.com/parse-community/parse-server/compare/3.7.0...3.7.1)

- FIX: Missing APN module
- FIX: Set falsy values as default to schema fields [#5868](https://github.com/parse-community/parse-server/pull/5868), thanks to [Lucas Alencar](https://github.com/alencarlucas)
- NEW: Implement WebSocketServer Adapter [#5866](https://github.com/parse-community/parse-server/pull/5866), thanks to [Diamond Lewis](https://github.com/dplewis)

# [3.7.0](https://github.com/parse-community/parse-server/compare/3.6.0...3.7.0)

- FIX: Prevent linkWith sessionToken from generating new session [#5801](https://github.com/parse-community/parse-server/pull/5801), thanks to [Diamond Lewis](https://github.com/dplewis)
- GraphQL: Improve session token error messages [#5753](https://github.com/parse-community/parse-server/pull/5753), thanks to [Douglas Muraoka](https://github.com/douglasmuraoka)
- NEW: GraphQL { functions { call } } generic mutation [#5818](https://github.com/parse-community/parse-server/pull/5818), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: GraphQL Custom Schema [#5821](https://github.com/parse-community/parse-server/pull/5821), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: GraphQL custom schema on CLI [#5828](https://github.com/parse-community/parse-server/pull/5828), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: GraphQL @mock directive [#5836](https://github.com/parse-community/parse-server/pull/5836), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: GraphQL _or operator not working [#5840](https://github.com/parse-community/parse-server/pull/5840), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Add "count" to CLP initial value [#5841](https://github.com/parse-community/parse-server/pull/5841), thanks to [Douglas Muraoka](https://github.com/douglasmuraoka)
- NEW: Add ability to alter the response from the after save trigger [#5814](https://github.com/parse-community/parse-server/pull/5814), thanks to [BrunoMaurice](https://github.com/brunoMaurice)
- FIX: Cache apple public key for the case it fails to fetch again [#5848](https://github.com/parse-community/parse-server/pull/5848), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: GraphQL Configuration Options [#5782](https://github.com/parse-community/parse-server/pull/5782), thanks to [Omair Vaiyani](https://github.com/omairvaiyani)
- NEW: Required fields and default values [#5835](https://github.com/parse-community/parse-server/pull/5835), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: Postgres safely escape strings in nested objects [#5855](https://github.com/parse-community/parse-server/pull/5855), thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Support PhantAuth authentication [#5850](https://github.com/parse-community/parse-server/pull/5850), thanks to [Ivan SZKIBA](https://github.com/szkiba)
- FIX: Remove uws package [#5860](https://github.com/parse-community/parse-server/pull/5860), thanks to [Zeal Murapa](https://github.com/GoGross)

# [3.6.0](https://github.com/parse-community/parse-server/compare/3.5.0...3.6.0)

- SECURITY FIX: Address [Security Advisory](https://github.com/parse-community/parse-server/security/advisories/GHSA-8w3j-g983-8jh5) of a potential [Enumeration Attack](https://www.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)#Description_of_the_Issue) [73b0f9a](https://github.com/parse-community/parse-server/commit/73b0f9a339b81f5d757725dc557955a7b670a3ec), big thanks to [Fabian Strachanski](https://github.com/fastrde) for identifying the problem, creating a fix and following the [vulnerability disclosure guidelines](https://github.com/parse-community/parse-server/blob/master/SECURITY.md#parse-community-vulnerability-disclosure-program)
- NEW: Added rest option: excludeKeys [#5737](https://github.com/parse-community/parse-server/pull/5737), thanks to [Raschid J.F. Rafeally](https://github.com/RaschidJFR)
- FIX: LiveQuery create event with fields [#5790](https://github.com/parse-community/parse-server/pull/5790), thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: Generate sessionToken with linkWith [#5799](https://github.com/parse-community/parse-server/pull/5799), thanks to [Diamond Lewis](https://github.com/dplewis)

# [3.5.0](https://github.com/parse-community/parse-server/compare/3.4.4...3.5.0)

- NEW: GraphQL Support [#5674](https://github.com/parse-community/parse-server/pull/5674), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)

[GraphQL Guide](https://github.com/parse-community/parse-server#graphql)

- NEW: Sign in with Apple [#5694](https://github.com/parse-community/parse-server/pull/5694), thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: AppSecret to Facebook Auth [#5695](https://github.com/parse-community/parse-server/pull/5695), thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Postgres: Regex support foreign characters [#5598](https://github.com/parse-community/parse-server/pull/5598), thanks to [Jeff Gu Kang](https://github.com/JeffGuKang)
- FIX: Winston Logger string interpolation [#5729](https://github.com/parse-community/parse-server/pull/5729), thanks to [Diamond Lewis](https://github.com/dplewis)

# [3.4.4](https://github.com/parse-community/parse-server/compare/3.4.3...3.4.4)

Fix: Commit changes

# [3.4.3](https://github.com/parse-community/parse-server/compare/3.4.2...3.4.3)

Fix: Use changes in master to travis configuration to enable pushing to npm and gh_pages.  See diff for details.

# [3.4.2](https://github.com/parse-community/parse-server/compare/3.4.1...3.4.2)

Fix: In my haste to get a [Security Fix](https://github.com/parse-community/parse-server/security/advisories/GHSA-2479-qvv7-47qq) out, I added [8709daf](https://github.com/parse-community/parse-server/commit/8709daf698ea69b59268cb66f0f7cee75b52daa5) to master instead of to 3.4.1.  This commit fixes that.  [Arthur Cinader](https://github.com/acinader)

# [3.4.1](https://github.com/parse-community/parse-server/compare/3.4.0...3.4.1)

Security Fix: see Advisory: [GHSA-2479-qvv7-47q](https://github.com/parse-community/parse-server/security/advisories/GHSA-2479-qvv7-47qq) for details [8709daf](https://github.com/parse-community/parse-server/commit/8709daf698ea69b59268cb66f0f7cee75b52daa5). Big thanks to: [Benjamin Simonsson](https://github.com/BenniPlejd) for identifying the issue and promptly bringing it to the Parse Community's attention and also big thanks to the indefatigable [Diamond Lewis](https://github.com/dplewis) for crafting a failing test and then a solution within an hour of the report.

# [3.4.0](https://github.com/parse-community/parse-server/compare/3.3.0...3.4.0)
- NEW: Aggregate supports group by date fields [#5538](https://github.com/parse-community/parse-server/pull/5538) thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: API for Read Preferences [#3963](https://github.com/parse-community/parse-server/pull/3963) thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- NEW: Add Redis options for LiveQuery [#5584](https://github.com/parse-community/parse-server/pull/5584) thanks to [Diamond Lewis](https://github.com/dplewis)
- NEW: Add Direct Access option for Server Config [#5550](https://github.com/parse-community/parse-server/pull/5550) thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: updating mixed array in Postgres [#5552](https://github.com/parse-community/parse-server/pull/5552) thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: notEqualTo GeoPoint Query in Postgres [#5549](https://github.com/parse-community/parse-server/pull/5549), thanks to [Diamond Lewis](https://github.com/dplewis)
- FIX: put the timestamp back in logs that was lost after Winston upgrade [#5571](https://github.com/parse-community/parse-server/pull/5571), thanks to [Steven Rowe](https://github.com/mrowe009) and [Arthur Cinader](https://github.com/acinader)
- FIX: Validates permission before calling beforeSave [#5546](https://github.com/parse-community/parse-server/pull/5546), thanks to [Antonio Davi Macedo Coelho de Castro](https://github.com/davimacedo)
- FIX: Remove userSensitiveFields default value. [#5588](https://github.com/parse-community/parse-server/pull/5588), thanks to [William George](https://github.com/awgeorge)
- FIX: Decode Date JSON value in LiveQuery. [#5540](https://github.com/parse-community/parse-server/pull/5540), thanks to [ananfang](https://github.com/ananfang)


# [3.3.0](https://github.com/parse-community/parse-server/compare/3.2.3...3.3.0)
- NEW: beforeLogin trigger with support for auth providers ([#5445](https://github.com/parse-community/parse-server/pull/5445)), thanks to [Omair Vaiyani](https://github.com/omairvaiyani)
- NEW: RFC 7662 compliant OAuth2 auth adapter ([#4910](https://github.com/parse-community/parse-server/pull/4910)), thanks to [Müller Zsolt](https://github.com/zsmuller)
- FIX: cannot change password when maxPasswordHistory is 1 ([#5191](https://github.com/parse-community/parse-server/pull/5191)), thanks to [Tulsi Sapkota](https://github.com/Tolsee)
- FIX (Postgres): count being very slow on large Parse Classes' collections ([#5330](https://github.com/parse-community/parse-server/pull/5330)), thanks to [CoderickLamar](https://github.com/CoderickLamar)
- FIX: using per-key basis queue ([#5420](https://github.com/parse-community/parse-server/pull/5420)), thanks to [Georges Jamous](https://github.com/georgesjamous)
- FIX: issue on count with Geo constraints and mongo ([#5286](https://github.com/parse-community/parse-server/pull/5286)), thanks to [Julien Quéré](https://github.com/jlnquere)

# [3.2.3](https://github.com/parse-community/parse-server/compare/3.2.2...3.2.3)
- Correct previous release with patch that is fully merged

# [3.2.2](https://github.com/parse-community/parse-server/compare/3.2.1...3.2.2)
- Security fix to properly process userSensitiveFields when parse-server is started with
  ../lib/cli/parse-server [#5463](https://github.com/parse-community/parse-server/pull/5463
  )

# [3.2.1](https://github.com/parse-community/parse-server/compare/3.2.0...3.2.1)
- Increment package.json version to match the deployment tag

# [3.2.0](https://github.com/parse-community/parse-server/compare/3.1.3...3.2.0)
- NEW: Support accessing sensitive fields with an explicit ACL.  Not documented yet, see [tests](https://github.com/parse-community/parse-server/blob/f2c332ea6a984808ad5b2e3ce34864a20724f72b/spec/UserPII.spec.js#L526) for examples
- Upgrade Parse SDK JS to 2.3.1 [#5457](https://github.com/parse-community/parse-server/pull/5457)
- Hides token contents in logStartupOptions if they arrive as a buffer [#6a9380](https://github.com/parse-community/parse-server/commit/6a93806c62205a56a8f4e3b8765848c552510337)
- Support custom message for password requirements [#5399](https://github.com/parse-community/parse-server/pull/5399)
- Support for Ajax password reset [#5332](https://github.com/parse-community/parse-server/pull/5332)
- Postgres: Refuse to build unsafe JSON lists for contains [#5337](https://github.com/parse-community/parse-server/pull/5337)
- Properly handle return values in beforeSave [#5228](https://github.com/parse-community/parse-server/pull/5228)
- Fixes issue when querying user roles [#5276](https://github.com/parse-community/parse-server/pull/5276)
- Fixes issue affecting update with CLP [#5269](https://github.com/parse-community/parse-server/pull/5269)

# [3.1.3](https://github.com/parse-community/parse-server/compare/3.1.2...3.1.3)

- Postgres: Fixes support for global configuration
- Postgres: Fixes support for numeric arrays
- Postgres: Fixes issue affecting queries on empty arrays
- LiveQuery: Adds support for transmitting the original object
- Queries: Use estimated count if query is empty
- Docker: Reduces the size of the docker image to 154Mb


# [3.1.2](https://github.com/parse-community/parse-server/compare/3.1.1...3.1.2)

- Removes dev script, use TDD instead of server.
- Removes nodemon and problematic dependencies.
- Addressed event-stream security debacle.

# [3.1.1](https://github.com/parse-community/parse-server/compare/3.1.0...3.1.1)

### Improvements:
* Fixes issue that would prevent users with large number of roles to resolve all of them [Antoine Cormouls](https://github.com/Moumouls) (#5131, #5132)
* Fixes distinct query on special fields ([#5144](https://github.com/parse-community/parse-server/pull/5144))


# [3.1.0](https://github.com/parse-community/parse-server/compare/3.0.0...3.1.0)

#### Breaking Changes:
* Return success on sendPasswordResetEmail even if email not found. (#7fe4030)
### Security Fix:
* Expire password reset tokens on email change (#5104)
### Improvements:
* Live Query CLPs (#4387)
* Reduces number of calls to injectDefaultSchema (#5107)
* Remove runtime dependency on request (#5076)
### Bug fixes:
* Fixes issue with vkontatke authentication (#4977)
* Use the correct function when validating google auth tokens (#5018)
* fix unexpected 'delete' trigger issue on LiveQuery (#5031)
* Improves performance for roles and ACL's in live query server (#5126)


# [3.0.0](https://github.com/parse-community/parse-server/compare/2.8.4...3.0.0)

`parse-server` 3.0.0 comes with brand new handlers for cloud code. It now fully supports promises and async / await.
For more informations, visit the v3.0.0 [migration guide](https://github.com/parse-community/parse-server/blob/master/3.0.0.md).

#### Breaking Changes:
* Cloud Code handlers have a new interface based on promises.
* response.success / response.error are removed in Cloud Code
* Cloud Code runs with Parse-SDK 2.0
* The aggregate now require aggregates to be passed in the form: `{"pipeline": [...]}` (REST Only)

### Improvements:
* Adds Pipeline Operator to Aggregate Router.
* Adds documentations for parse-server's adapters, constructors and more.
* Adds ability to pass a context object between `beforeSave` and `afterSave` affecting the same object.

### Bug Fixes:
* Fixes issue that would crash the server when mongo objects had undefined values [#4966](https://github.com/parse-community/parse-server/issues/4966)
* Fixes issue that prevented ACL's from being used with `select` (see [#571](https://github.com/parse-community/Parse-SDK-JS/issues/571))

### Dependency updates:
* [@parse/simple-mailgun-adapter@1.1.0](https://www.npmjs.com/package/@parse/simple-mailgun-adapter)
* [mongodb@3.1.3](https://www.npmjs.com/package/mongodb)
* [request@2.88.0](https://www.npmjs.com/package/request)

### Development Dependencies Updates:
* [@parse/minami@1.0.0](https://www.npmjs.com/package/@parse/minami)
* [deep-diff@1.0.2](https://www.npmjs.com/package/deep-diff)
* [flow-bin@0.79.0](https://www.npmjs.com/package/flow-bin)
* [jsdoc@3.5.5](https://www.npmjs.com/package/jsdoc)
* [jsdoc-babel@0.4.0](https://www.npmjs.com/package/jsdoc-babel)

# [2.8.4](https://github.com/parse-community/parse-server/compare/2.8.3...2.8.4)

#### Improvements:
* Adds ability to forward errors to express handler (#4697)
* Adds ability to increment the push badge with an arbitrary value (#4889)
* Adds ability to preserve the file names when uploading (#4915)
* `_User` now follow regular ACL policy. Letting administrator lock user out. (#4860) and (#4898)
* Ensure dates are properly handled in aggregates (#4743)
* Aggregates: Improved support for stages sharing the same name
* Add includeAll option
* Added verify password to users router and tests. (#4747)
* Ensure read preference is never overriden, so DB config prevails (#4833)
* add support for geoWithin.centerSphere queries via withJSON (#4825)
* Allow sorting an object field (#4806)
* Postgres: Don't merge JSON fields after save() to keep same behaviour as MongoDB (#4808) (#4815)

#### Dependency updates
* [commander@2.16.0](https://www.npmjs.com/package/commander)
* [mongodb@3.1.1](https://www.npmjs.com/package/mongodb)
* [pg-promise@8.4.5](https://www.npmjs.com/package/pg-promise)
* [ws@6.0.0](https://www.npmjs.com/package/ws)
* [bcrypt@3.0.0](https://www.npmjs.com/package/bcrypt)
* [uws@10.148.1](https://www.npmjs.com/package/uws)

##### Development Dependencies Updates:
* [cross-env@5.2.0](https://www.npmjs.com/package/cross-env)
* [eslint@5.0.0](https://www.npmjs.com/package/eslint)
* [flow-bin@0.76.0](https://www.npmjs.com/package/flow-bin)
* [mongodb-runner@4.0.0](https://www.npmjs.com/package/mongodb-runner)
* [nodemon@1.18.1](https://www.npmjs.com/package/nodemon)
* [nyc@12.0.2](https://www.npmjs.com/package/nyc)
* [request-promise@4.2.2](https://www.npmjs.com/package/request-promise)
* [supports-color@5.4.0](https://www.npmjs.com/package/supports-color)

# [2.8.3](https://github.com/parse-community/parse-server/compare/2.8.2...2.8.3)

#### Improvements:

* Adds support for JS SDK 2.0 job status header
* Removes npm-git scripts as npm supports using git repositories that build, thanks to [Florent Vilmart](https://github.com/flovilmart)


# [2.8.2](https://github.com/parse-community/parse-server/compare/2.8.1...2.8.2)

##### Bug Fixes:
* Ensure legacy users without ACL's are not locked out, thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Improvements:
* Use common HTTP agent to increase webhooks performance, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Adds withinPolygon support for Polygon objects, thanks to [Mads Bjerre](https://github.com/madsb)

#### Dependency Updates:
* [ws@5.2.0](https://www.npmjs.com/package/ws)
* [commander@2.15.1](https://www.npmjs.com/package/commander)
* [nodemon@1.17.5](https://www.npmjs.com/package/nodemon)

##### Development Dependencies Updates:
* [flow-bin@0.73.0](https://www.npmjs.com/package/flow-bin)
* [cross-env@5.1.6](https://www.npmjs.com/package/cross-env)
* [gaze@1.1.3](https://www.npmjs.com/package/gaze)
* [deepcopy@1.0.0](https://www.npmjs.com/package/deepcopy)
* [deep-diff@1.0.1](https://www.npmjs.com/package/deep-diff)


# [2.8.1](https://github.com/parse-community/parse-server/compare/2.8.1...2.8.0)

Ensure all the files are properly exported to the final package.

# [2.8.0](https://github.com/parse-community/parse-server/compare/2.8.0...2.7.4)

#### New Features
* Adding Mongodb element to add `arrayMatches` the #4762 (#4766), thanks to [Jérémy Piednoel](https://github.com/jeremypiednoel)
* Adds ability to Lockout users (#4749), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug fixes:
* Fixes issue when using afterFind with relations (#4752), thanks to [Florent Vilmart](https://github.com/flovilmart)
* New query condition support to match all strings that starts with some other given strings (#3864), thanks to [Eduard Bosch Bertran](https://github.com/eduardbosch)
* Allow creation of indices on default fields (#4738), thanks to [Claire Neveu](https://github.com/ClaireNeveu)
* Purging empty class (#4676), thanks to [Diamond Lewis](https://github.com/dplewis)
* Postgres: Fixes issues comparing to zero or false (#4667), thanks to [Diamond Lewis](https://github.com/dplewis)
* Fix Aggregate Match Pointer (#4643), thanks to [Diamond Lewis](https://github.com/dplewis)

#### Improvements:
* Allow Parse.Error when returning from Cloud Code (#4695), thanks to [Saulo Tauil](https://github.com/saulogt)
* Fix typo: "requrest" -> "request" (#4761), thanks to [Joseph Frazier](https://github.com/josephfrazier)
* Send version for Vkontakte API (#4725), thanks to [oleg](https://github.com/alekoleg)
* Ensure we respond with invalid password even if email is unverified (#4708), thanks to [dblythy](https://github.com/dblythy)
* Add _password_history to default sensitive data (#4699), thanks to [Jong Eun Lee](https://github.com/yomybaby)
* Check for node version in postinstall script (#4657), thanks to [Diamond Lewis](https://github.com/dplewis)
* Remove FB Graph API version from URL to use the oldest non deprecated version, thanks to [SebC](https://github.com/SebC99)

#### Dependency Updates:
* [@parse/push-adapter@2.0.3](https://www.npmjs.com/package/@parse/push-adapter)
* [@parse/simple-mailgun-adapter@1.0.2](https://www.npmjs.com/package/@parse/simple-mailgun-adapter)
* [uws@10.148.0](https://www.npmjs.com/package/uws)
* [body-parser@1.18.3](https://www.npmjs.com/package/body-parser)
* [mime@2.3.1](https://www.npmjs.com/package/mime)
* [request@2.85.0](https://www.npmjs.com/package/request)
* [mongodb@3.0.7](https://www.npmjs.com/package/mongodb)
* [bcrypt@2.0.1](https://www.npmjs.com/package/bcrypt)
* [ws@5.1.1](https://www.npmjs.com/package/ws)

##### Development Dependencies Updates:
* [cross-env@5.1.5](https://www.npmjs.com/package/cross-env)
* [flow-bin@0.71.0](https://www.npmjs.com/package/flow-bin)
* [deep-diff@1.0.0](https://www.npmjs.com/package/deep-diff)
* [nodemon@1.17.3](https://www.npmjs.com/package/nodemon)


# [2.7.4](https://github.com/parse-community/parse-server/compare/2.7.4...2.7.3)

#### Bug Fixes:
* Fixes an issue affecting polygon queries, thanks to [Diamond Lewis](https://github.com/dplewis)

#### Dependency Updates:
* [pg-promise@8.2.1](https://www.npmjs.com/package/pg-promise)

##### Development Dependencies Updates:
* [nodemon@1.17.1](https://www.npmjs.com/package/nodemon)

# [2.7.3](https://github.com/parse-community/parse-server/compare/2.7.3...2.7.2)

#### Improvements:
* Improve documentation for LiveQuery options, thanks to [Arthur Cinader](https://github.com/acinader)
* Improve documentation for using cloud code with docker, thanks to [Stephen Tuso](https://github.com/stephentuso)
* Adds support for Facebook's AccountKit, thanks to [6thfdwp](https://github.com/6thfdwp)
* Disable afterFind routines when running aggregates, thanks to [Diamond Lewis](https://github.com/dplewis)
* Improve support for distinct aggregations of nulls, thanks to [Diamond Lewis](https://github.com/dplewis)
* Regenreate the email verification token when requesting a new email, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)

#### Bug Fixes:
* Fix issue affecting readOnly masterKey and purge command, thanks to [AreyouHappy](https://github.com/AreyouHappy)
* Fixes Issue unsetting in beforeSave doesn't allow object creation, thanks to [Diamond Lewis](https://github.com/dplewis)
* Fixes issue crashing server on invalid live query payload, thanks to [fridays](https://github.com/fridays)
* Fixes issue affecting postgres storage adapter "undefined property '__op'", thanks to [Tyson Andre](https://github,com/TysonAndre)

#### Dependency Updates:
* [winston@2.4.1](https://www.npmjs.com/package/winston)
* [pg-promise@8.2.0](https://www.npmjs.com/package/pg-promise)
* [commander@2.15.0](https://www.npmjs.com/package/commander)
* [lru-cache@4.1.2](https://www.npmjs.com/package/lru-cache)
* [parse@1.11.1](https://www.npmjs.com/package/parse)
* [ws@5.0.0](https://www.npmjs.com/package/ws)
* [mongodb@3.0.4](https://www.npmjs.com/package/mongodb)
* [lodash@4.17.5](https://www.npmjs.com/package/lodash)

##### Development Dependencies Updates:
* [cross-env@5.1.4](https://www.npmjs.com/package/cross-env)
* [flow-bin@0.67.1](https://www.npmjs.com/package/flow-bin)
* [jasmine@3.1.0](https://www.npmjs.com/package/jasmine)
* [parse@1.11.1](https://www.npmjs.com/package/parse)
* [babel-eslint@8.2.2](https://www.npmjs.com/package/babel-eslint)
* [nodemon@1.15.0](https://www.npmjs.com/package/nodemon)

# [2.7.2](https://github.com/parse-community/parse-server/compare/2.7.2...2.7.1)

#### Improvements:
* Improved match aggregate
* Do not mark the empty push as failed
* Support pointer in aggregate query
* Introduces flow types for storage
* Postgres: Refactoring of Postgres Storage Adapter
* Postgres: Support for multiple projection in aggregate
* Postgres: performance optimizations
* Adds infos about vulnerability disclosures
* Adds ability to login with email when provided as username

#### Bug Fixes
* Scrub Passwords with URL Encoded Characters
* Fixes issue affecting using sorting in beforeFind

#### Dependency Updates:
* [commander@2.13.0](https://www.npmjs.com/package/commander)
* [semver@5.5.0](https://www.npmjs.com/package/semver)
* [pg-promise@7.4.0](https://www.npmjs.com/package/pg-promise)
* [ws@4.0.0](https://www.npmjs.com/package/ws)
* [mime@2.2.0](https://www.npmjs.com/package/mime)
* [parse@1.11.0](https://www.npmjs.com/package/parse)

##### Development Dependencies Updates:
* [nodemon@1.14.11](https://www.npmjs.com/package/nodemon)
* [flow-bin@0.64.0](https://www.npmjs.com/package/flow-bin)
* [jasmine@2.9.0](https://www.npmjs.com/package/jasmine)
* [cross-env@5.1.3](https://www.npmjs.com/package/cross-env)

# [2.7.1](https://github.com/parse-community/parse-server/compare/2.7.1...2.7.0)

:warning: Fixes a security issue affecting Class Level Permissions

* Adds support for dot notation when using matchesKeyInQuery, thanks to [Henrik](https://github.com/bohemima) and [Arthur Cinader](https://github.com/acinader)

# [2.7.0](https://github.com/parse-community/parse-server/compare/2.7.0...2.6.5)

:warning: This version contains an issue affecting Class Level Permissions on mongoDB. Please upgrade to 2.7.1.

Starting parse-server 2.7.0, the minimun nodejs version is 6.11.4, please update your engines before updating parse-server

#### New Features:
* Aggregation endpoints, thanks to [Diamond Lewis](https://github.com/dplewis)
* Adds indexation options onto Schema endpoints, thanks to [Diamond Lewis](https://github.com/dplewis)

#### Bug fixes:
* Fixes sessionTokens being overridden in 'find' (#4332), thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Proper `handleShutdown()` feature to close database connections (#4361), thanks to [CHANG, TZU-YEN](https://github.com/trylovetom)
* Fixes issue affecting state of _PushStatus objects, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Fixes issue affecting calling password reset password pages with wrong appid, thanks to [Bryan de Leon](https://github.com/bryandel)
* Fixes issue affecting duplicates _Sessions on successive logins, thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Improvements:
* Updates contributing guides, and improves windows support, thanks to [Addison Elliott](https://github.com/addisonelliott)
* Uses new official scoped packaged, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Improves health checks responses, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Add password confirmation to choose_password, thanks to [Worathiti Manosroi](https://github.com/pungme)
* Improve performance of relation queries, thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Dependency Updates:
* [commander@2.12.1](https://www.npmjs.com/package/commander)
* [ws@3.3.2](https://www.npmjs.com/package/ws)
* [uws@9.14.0](https://www.npmjs.com/package/uws)
* [pg-promise@7.3.2](https://www.npmjs.com/package/pg-promise)
* [parse@1.10.2](https://www.npmjs.com/package/parse)
* [pg-promise@7.3.1](https://www.npmjs.com/package/pg-promise)

##### Development Dependencies Updates:
* [cross-env@5.1.1](https://www.npmjs.com/package/cross-env)



# [2.6.5](https://github.com/ParsePlatform/parse-server/compare/2.6.5...2.6.4)

#### New Features:
* Adds support for read-only masterKey, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Adds support for relative time queries (mongodb only), thanks to [Marvel Mathew](https://github.com/marvelm)

#### Improvements:
* Handle possible afterSave exception, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Add support for expiration interval in Push, thanks to [Marvel Mathew](https://github.com/marvelm)

#### Bug Fixes:
* The REST API key was improperly inferred from environment when using the CLI, thanks to [Florent Vilmart](https://github.com/flovilmart)

# [2.6.4](https://github.com/ParsePlatform/parse-server/compare/2.6.4...2.6.3)

#### Improvements:
* Improves management of configurations and default values, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Adds ability to start ParseServer with `ParseServer.start(options)`, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Adds request original IP to cloud code hooks, thanks to [Gustav Ahlberg](https://github.com/Gyran)
* Corrects some outdated links, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Adds serverURL validation on startup, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Adds ability to login with POST requests alongside GET, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)
* Adds ability to login with email, instead of username, thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug Fixes:
* Fixes issue affecting beforeSaves and increments, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)

#### Dependency Updates:
* [parse-server-push-adapter@2.0.2](https://www.npmjs.com/package/parse-server-push-adapter)
* [semver@5.4.1](https://www.npmjs.com/package/semver)
* [pg-promise@7.0.3](https://www.npmjs.com/package/pg-promise)
* [mongodb@2.2.33](https://www.npmjs.com/package/mongodb)
* [parse@1.10.1](https://www.npmjs.com/package/parse)
* [express@4.16.0](https://www.npmjs.com/package/express)
* [mime@1.4.1](https://www.npmjs.com/package/mime)
* [parse-server-simple-mailgun-adapter@1.0.1](https://www.npmjs.com/package/parse-server-simple-mailgun-adapter)

##### Development Dependencies Updates:
* [babel-preset-env@1.6.1](https://www.npmjs.com/package/babel-preset-env)
* [cross-env@5.1.0](https://www.npmjs.com/package/cross-env)
* [mongodb-runner@3.6.1](https://www.npmjs.com/package/mongodb-runner)
* [eslint-plugin-flowtype@2.39.1](https://www.npmjs.com/package/eslint-plugin-flowtype)
* [eslint@4.9.0](https://www.npmjs.com/package/eslint)

# [2.6.3](https://github.com/ParsePlatform/parse-server/compare/2.6.2...2.6.3)

#### Improvements:
* Queries on Pointer fields with `$in` and `$nin` now supports list of objectId's, thanks to [Florent Vilmart](https://github.com/flovilmart)
* LiveQueries on `$in` and `$nin` for pointer fields work as expected thanks to [Florent Vilmart](https://github.com/flovilmart)
* Also remove device token when APNS error is BadDeviceToken, thanks to [Mauricio Tollin](https://github.com/)
* LRU cache is not available on the ParseServer object, thanks to [Tyler Brock](https://github.com/tbrock)
* Error messages are more expressive, thanks to [Tyler Brock](https://github.com/tbrock)
* Postgres: Properly handle undefined field values, thanks to [Diamond Lewis](https://github.com/dlewis)
* Updating with two GeoPoints fails correctly, thanks to [Anthony Mosca](https://github.com/aontas)

#### New Features:
* Adds ability to set a maxLimit on server configuration for queries, thanks to [Chris Norris](https://github.com/)

#### Bug fixes:
* Fixes issue affecting reporting `_PushStatus` with misconfigured serverURL, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fixes issue affecting deletion of class that doesn't exist, thanks to [Diamond Lewis](https://github.com/dlewis)

#### Dependency Updates:
* [winston@2.4.0](https://www.npmjs.com/package/winston)
* [pg-promise@6.10.2](https://www.npmjs.com/package/pg-promise)
* [winston-daily-rotate-file@1.6.0](https://www.npmjs.com/package/winston-daily-rotate-file)
* [request@2.83.0](https://www.npmjs.com/package/request)
* [body-parser@1.18.2](https://www.npmjs.com/package/body-parser)

##### Development Dependencies Updates:
* [request-promise@4.2.2](https://www.npmjs.com/package/request-promise)
* [eslint@4.7.1](https://www.npmjs.com/package/eslint)

# [2.6.2](https://github.com/ParsePlatform/parse-server/compare/2.6.1...2.6.2)

#### Improvements:
* PushWorker/PushQueue channels are properly prefixed with the Parse applicationId, thanks to [Marvel Mathew](https://github.com/marvelm)
* You can use Parse.Cloud.afterSave hooks on _PushStatus
* You can use Parse.Cloud.onLiveQueryEvent to track the number of clients and subscriptions
* Adds support for more fields from the Audience class.

#### New Features:
* Push: Adds ability to track sentPerUTC offset if your push scheduler supports it.
* Push: Adds support for cleaning up invalid deviceTokens from _Installation (PARSE_SERVER_CLEANUP_INVALID_INSTALLATIONS=1).

#### Dependency Updates:
* [ws@3.2.0](https://www.npmjs.com/package/ws)
* [pg-promise@6.5.3](https://www.npmjs.com/package/pg-promise)
* [winston-daily-rotate-file@1.5.0](https://www.npmjs.com/package/winston-daily-rotate-file)
* [body-parser@1.18.1](https://www.npmjs.com/package/body-parser)

##### Development Dependencies Updates:
* [nodemon@1.12.1](https://www.npmjs.com/package/nodemon)
* [mongodb-runner@3.6.0](https://www.npmjs.com/package/mongodb-runner)
* [babel-eslint@8.0.0](https://www.npmjs.com/package/babel-eslint)

# [2.6.1](https://github.com/ParsePlatform/parse-server/compare/2.6.0...2.6.1)

#### Improvements:
* Improves overall performance of the server, more particularly with large query results.
* Improves performance of InMemoryCacheAdapter by removing serialization.
* Improves logging performance by skipping necessary log calls.
* Refactors object routers to simplify logic.
* Adds automatic indexing on $text indexes, thanks to [Diamon Lewis](https://github.com/dplewis)

#### New Features:
* Push: Adds ability to send localized pushes according to the _Installation localeIdentifier
* Push: proper support for scheduling push in user's locale time, thanks to [Marvel Mathew](https://github.com/marvelm)
* LiveQuery: Adds ability to use LiveQuery with a masterKey, thanks to [Jeremy May](https://github.com/kenishi)

#### Bug Fixes:
* Fixes an issue that would duplicate Session objects per userId-installationId pair.
* Fixes an issue affecting pointer permissions introduced in this release.
* Fixes an issue that would prevent displaying audiences correctly in dashboard.
* Fixes an issue affecting preventLoginWithUnverifiedEmail upon signups.

#### Dependency Updates:
* [pg-promise@6.3.2](https://www.npmjs.com/package/pg-promise)
* [body-parser@1.18.0](https://www.npmjs.com/package/body-parser)
* [nodemon@1.11.1](https://www.npmjs.com/package/nodemon)

##### Development Dependencies Updates:
* [babel-cli@6.26.0](https://www.npmjs.com/package/babel-cli)

# [2.6.0](https://github.com/ParsePlatform/parse-server/compare/2.5.3...2.6.0)

##### Breaking Changes:
* [parse-server-s3-adapter@1.2.0](https://www.npmjs.com/package/parse-server-s3-adapter): A new deprecation notice is introduced with parse-server-s3-adapter's version 1.2.0.  An upcoming release will remove passing key and password arguments.  AWS credentials should be set using AWS best practices.  See the [Deprecation Notice for AWS credentials]( https://github.com/parse-server-modules/parse-server-s3-adapter/blob/master/README.md#deprecation-notice----aws-credentials) section of the adapter's README.

#### New Features
* Polygon is fully supported as a type, thanks to [Diamond Lewis](https://github.com/dplewis)
* Query supports PolygonContains, thanks to [Diamond Lewis](https://github.com/dplewis)

#### Improvements
* Postgres: Adds support nested contains and containedIn, thanks to [Diamond Lewis](https://github.com/dplewis)
* Postgres: Adds support for `null` in containsAll queries, thanks to [Diamond Lewis](https://github.com/dplewis)
* Cloud Code: Request headers are passed to the cloud functions, thanks to [miguel-s](https://github.com/miguel-s)
* Push: All push queries now filter only where deviceToken exists

#### Bug Fixes:
* Fixes issue affecting updates of _User objects when authData was passed.
* Push: Pushing to an empty audience should now properly report a failed _PushStatus
* Linking Users: Fixes issue affecting linking users with sessionToken only

#### Dependency Updates:
* [ws@3.1.0](https://www.npmjs.com/package/ws)
* [mime@1.4.0](https://www.npmjs.com/package/mime)
* [semver@5.4.0](https://www.npmjs.com/package/semver)
* [uws@8.14.1](https://www.npmjs.com/package/uws)
* [bcrypt@1.0.3](https://www.npmjs.com/package/bcrypt)
* [mongodb@2.2.31](https://www.npmjs.com/package/mongodb)
* [redis@2.8.0](https://www.npmjs.com/package/redis)
* [pg-promise@6.3.1](https://www.npmjs.com/package/pg-promise)
* [commander@2.11.0](https://www.npmjs.com/package/commander)

##### Development Dependencies Updates:
* [jasmine@2.8.0](https://www.npmjs.com/package/jasmine)
* [babel-register@6.26.0](https://www.npmjs.com/package/babel-register)
* [babel-core@6.26.0](https://www.npmjs.com/package/babel-core)
* [cross-env@5.0.2](https://www.npmjs.com/package/cross-env)

# [2.5.3](https://github.com/ParsePlatform/parse-server/compare/2.5.2...2.5.3)

#### New Features:
* badge property on android installations will now be set as on iOS (#3970), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug Fixes:
* Fixes incorrect number parser for cache options

# [2.5.2](https://github.com/ParsePlatform/parse-server/compare/2.5.1...2.5.2)

#### Improvements:
* Restores ability to run on node >= 4.6
* Adds ability to configure cache from CLI
* Removes runtime check for node >= 4.6

# [2.5.1](https://github.com/ParsePlatform/parse-server/compare/2.5.0...2.5.1)

#### New Features:
* Adds ability to set default objectId size (#3950), thanks to [Steven Shipton](https://github.com/steven-supersolid)

#### Improvements:
* Uses LRU cache instead of InMemoryCache by default (#3979), thanks to [Florent Vilmart](https://github.com/flovilmart)
* iOS pushes are now using HTTP/2.0 instead of binary API  (#3983), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Dependency Updates:
* [parse@1.10.0](https://www.npmjs.com/package/parse)
* [pg-promise@6.3.0](https://www.npmjs.com/package/pg-promise)
* [parse-server-s3-adapter@1.1.0](https://www.npmjs.com/package/parse-server-s3-adapter)
* [parse-server-push-adapter@2.0.0](https://www.npmjs.com/package/parse-server-push-adapter)

# [2.5.0](https://github.com/ParsePlatform/parse-server/compare/2.4.2...2.5.0)

#### New Features:
* Adds ability to run full text search (#3904), thanks to [Diamond Lewis](https://github.com/dplewis)
* Adds ability to run `$withinPolygon` queries (#3889), thanks to [Diamond Lewis](https://github.com/dplewis)
* Adds ability to pass read preference per query with mongodb (#3865), thanks to [davimacedo](https://github.com/davimacedo)
* beforeFind trigger now includes `isGet` for get queries (#3862), thanks to [davimacedo](https://github.com/davimacedo)
* Adds endpoints for dashboard's audience API (#3861), thanks to [davimacedo](https://github.com/davimacedo)
* Restores the job scheduling endpoints (#3927), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Improvements:
* Removes unnecessary warning when using maxTimeMs with mongodb, thanks to [Tyler Brock](https://github.com/tbrock)
* Improves access control on system classes (#3916), thanks to [Worathiti Manosroi](https://github.com/pungme)
* Adds bytes support in postgres (#3894), thanks to [Diamond Lewis](https://github.com/dplewis)

#### Bug Fixes:
* Fixes issue with vkontakte adapter that would hang the request, thanks to [Denis Trofimov](https://github.com/denistrofimov)
* Fixes issue affecting null relational data (#3924), thanks to [davimacedo](https://github.com/davimacedo)
* Fixes issue affecting session token deletion (#3937), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fixes issue affecting the serverInfo endpoint (#3933), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fixes issue affecting beforeSave with dot-noted sub-documents (#3912), thanks to [IlyaDiallo](https://github.com/IlyaDiallo)
* Fixes issue affecting emails being sent when using a 3rd party auth (#3882), thanks to [davimacedo](https://github.com/davimacedo)

#### Dependency Updates:
* [commander@2.10.0](https://www.npmjs.com/package/commander)
* [pg-promise@5.9.7](https://www.npmjs.com/package/pg-promise)
* [lru-cache@4.1.0](https://www.npmjs.com/package/lru-cache)
* [mongodb@2.2.28](https://www.npmjs.com/package/mongodb)

##### Development dependencies
* [babel-core@6.25.0](https://www.npmjs.com/package/babel-core)
* [cross-env@5.0.1](https://www.npmjs.com/package/cross-env)
* [nyc@11.0.2](https://www.npmjs.com/package/nyc)

# [2.4.2](https://github.com/ParsePlatform/parse-server/compare/2.4.1...2.4.2)

#### New Features:
* ParseQuery: Support for withinPolygon [#3866](https://github.com/parse-community/parse-server/pull/3866), thanks to [Diamond Lewis](https://github.com/dplewis)

#### Improvements:
* Postgres: Use transactions when deleting a class, [#3869](https://github.com/parse-community/parse-server/pull/3836), thanks to [Vitaly Tomilov](https://github.com/vitaly-t)
* Postgres: Proper support for GeoPoint equality query, [#3874](https://github.com/parse-community/parse-server/pull/3836), thanks to [Diamond Lewis](https://github.com/dplewis)
* beforeSave and liveQuery will be correctly triggered on email verification [#3851](https://github.com/parse-community/parse-server/pull/3851), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug fixes:
* Skip authData validation if it hasn't changed, on PUT requests [#3872](https://github.com/parse-community/parse-server/pull/3872), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Dependency Updates:
* [mongodb@2.2.27](https://www.npmjs.com/package/mongodb)
* [pg-promise@5.7.2](https://www.npmjs.com/package/pg-promise)


# [2.4.1](https://github.com/ParsePlatform/parse-server/compare/2.4.0...2.4.1)

#### Bug fixes:
* Fixes issue affecting relation updates ([#3835](https://github.com/parse-community/parse-server/pull/3835), [#3836](https://github.com/parse-community/parse-server/pull/3836)), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fixes issue affecting sending push notifications, thanks to [Felipe Andrade](https://github.com/felipemobile)
* Session are always cleared when updating the passwords ([#3289](https://github.com/parse-community/parse-server/pull/3289), [#3821](https://github.com/parse-community/parse-server/pull/3821), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Dependency Updates:
* [body-parser@1.17.2](https://www.npmjs.com/package/body-parser)
* [pg-promise@5.7.1](https://www.npmjs.com/package/pg-promise)
* [ws@3.0.0](https://www.npmjs.com/package/ws)


# [2.4.0](https://github.com/ParsePlatform/parse-server/compare/2.3.8...2.4.0)

Starting 2.4.0, parse-server is tested against node 6.10 and 7.10, mongodb 3.2 and 3.4.
If you experience issues with older versions, please [open a issue](https://github.com/parse-community/parse-server/issues).

#### New Features:
* Adds `count` Class Level Permission ([#3814](https://github.com/parse-community/parse-server/pull/3814)), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Proper graceful shutdown support ([#3786](https://github.com/parse-community/parse-server/pull/3786)), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Let parse-server store as `scheduled` Push Notifications with push_time (#3717, #3722), thanks to [Felipe Andrade](https://github.com/felipemobile)

#### Improvements
* Parse-Server images are built through docker hub, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Skip authData validation if it hasn't changed, thanks to [Florent Vilmart](https://github.com/flovilmart)
* [postgres] Improve performance when adding many new fields to the Schema ([#3740](https://github.com/parse-community/parse-server/pull/3740)), thanks to [Paulo Vítor S Reis](https://github.com/paulovitin)
* Test maintenance, wordsmithing and nits ([#3744](https://github.com/parse-community/parse-server/pull/3744)), thanks to [Arthur Cinader](https://github.com/acinader)

#### Bug Fixes:
* [postgres] Fixes issue affecting deleting multiple fields of a Schema ([#3734](https://github.com/parse-community/parse-server/pull/3734), [#3735](https://github.com/parse-community/parse-server/pull/3735)), thanks to [Paulo Vítor S Reis](https://github.com/paulovitin)
* Fix issue affecting _PushStatus state ([#3808](https://github.com/parse-community/parse-server/pull/3808)), thanks to [Florent Vilmart](https://github.com/flovilmart)
* requiresAuthentication Class Level Permission behaves correctly, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Email Verification related fields are not exposed ([#3681](https://github.com/parse-community/parse-server/pull/3681), [#3393](https://github.com/parse-community/parse-server/pull/3393), [#3432](https://github.com/parse-community/parse-server/pull/3432)), thanks to [Anthony Mosca](https://github.com/aontas)
* HTTP query parameters are properly obfuscated in logs ([#3793](https://github.com/parse-community/parse-server/pull/3793), [#3789](https://github.com/parse-community/parse-server/pull/3789)), thanks to [@youngerong](https://github.com/youngerong)
* Improve handling of `$near` operators in `$or` queries ([#3767](https://github.com/parse-community/parse-server/pull/3767), [#3798](https://github.com/parse-community/parse-server/pull/3798)), thanks to [Jack Wearden](https://github.com/NotBobTheBuilder)
* Fix issue affecting arrays of pointers ([#3169](https://github.com/parse-community/parse-server/pull/3169)), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix issue affecting overloaded query constraints ([#3723](https://github.com/parse-community/parse-server/pull/3723), [#3678](https://github.com/parse-community/parse-server/pull/3678)), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Properly catch unhandled rejections in _Installation updates ([#3795](https://github.com/parse-community/parse-server/pull/3795)), thanks to [kahoona77](https://github.com/kahoona77)

#### Dependency Updates:

* [uws@0.14.5](https://www.npmjs.com/package/uws)
* [mime@1.3.6](https://www.npmjs.com/package/mime)
* [mongodb@2.2.26](https://www.npmjs.com/package/mongodb)
* [pg-promise@5.7.0](https://www.npmjs.com/package/pg-promise)
* [semver@5.3.0](https://www.npmjs.com/package/semver)

##### Development dependencies
* [babel-cli@6.24.1](https://www.npmjs.com/package/babel-cli)
* [babel-core@6.24.1](https://www.npmjs.com/package/babel-core)
* [babel-preset-es2015@6.24.1](https://www.npmjs.com/package/babel-preset-es2015)
* [babel-preset-stage-0@6.24.1](https://www.npmjs.com/package/babel-preset-stage-0)
* [babel-register@6.24.1](https://www.npmjs.com/package/babel-register)
* [cross-env@5.0.0](https://www.npmjs.com/package/cross-env)
* [deep-diff@0.3.8](https://www.npmjs.com/package/deep-diff)
* [gaze@1.1.2](https://www.npmjs.com/package/gaze)
* [jasmine@2.6.0](https://www.npmjs.com/package/jasmine)
* [jasmine-spec-reporter@4.1.0](https://www.npmjs.com/package/jasmine-spec-reporter)
* [mongodb-runner@3.5.0](https://www.npmjs.com/package/mongodb-runner)
* [nyc@10.3.2](https://www.npmjs.com/package/nyc)
* [request-promise@4.2.1](https://www.npmjs.com/package/request-promise)


# [2.3.8](https://github.com/ParsePlatform/parse-server/compare/2.3.7...2.3.8)

#### New Features
* Support for PG-Promise options, thanks to [ren dong](https://github.com/rendongsc)

#### Improvements
* Improves support for graceful shutdown, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Improves configuration validation for Twitter Authentication, thanks to [Benjamin Wilson Friedman](https://github.com/montymxb)

#### Bug Fixes
* Fixes issue affecting GeoPoint __type with Postgres, thanks to [zhoul-HS](https://github.com/zhoul-HS)
* Prevent user creation if username or password is empty, thanks to [Wissam Abirached](https://github.com/wabirached)

#### Dependency Updates:
* [cross-env@4.0.0 ](https://www.npmjs.com/package/cross-env)
* [ws@2.2.3](https://www.npmjs.com/package/ws)
* [babel-core@6.24.0](https://www.npmjs.com/package/babel-core)
* [uws@0.14.0](https://www.npmjs.com/package/uws)
* [babel-preset-es2015@6.24.0](https://www.npmjs.com/package/babel-preset-es2015)
* [babel-plugin-syntax-flow@6.18.0](https://www.npmjs.com/package/babel-plugin-syntax-flow)
* [babel-cli@6.24.0](https://www.npmjs.com/package/babel-cli)
* [babel-register@6.24.0](https://www.npmjs.com/package/babel-register)
* [winston-daily-rotate-file@1.4.6](https://www.npmjs.com/package/winston-daily-rotate-file)
* [mongodb@2.2.25](https://www.npmjs.com/package/mongodb)
* [redis@2.7.0](https://www.npmjs.com/package/redis)
* [pg-promise@5.6.4](https://www.npmjs.com/package/pg-promise)
* [parse-server-push-adapter@1.3.0](https://www.npmjs.com/package/parse-server-push-adapter)

# [2.3.7](https://github.com/ParsePlatform/parse-server/compare/2.3.6...2.3.7)

#### New Features
* New endpoint to resend verification email, thanks to [Xy Ziemba](https://github.com/xyziemba)

#### Improvements
* Add TTL option for Redis Cache Adapter, thanks to [Ryan Foster](https://github.com/f0ster)
* Update Postgres Storage Adapter, thanks to [Vitaly Tomilov](https://github.com/vitaly-t)

#### Bug Fixes
* Add index on Role.name, fixes (#3579), thanks to [Natan Rolnik](https://github.com/natanrolnik)
* Fix default value of userSensitiveFields, fixes (#3593), thanks to [Arthur Cinader](https://github.com/acinader)

#### Dependency Updates:
* [body-parser@1.17.1](https://www.npmjs.com/package/body-parser)
* [express@4.15.2](https://www.npmjs.com/package/express)
* [request@2.81.0](https://www.npmjs.com/package/request)
* [winston-daily-rotate-file@1.4.5](https://www.npmjs.com/package/winston-daily-rotate-file)
* [ws@2.2.0](https://www.npmjs.com/package/ws)


# [2.3.6](https://github.com/ParsePlatform/parse-server/compare/2.3.5...2.3.6)

#### Improvements
* Adds support for injecting a middleware for instumentation in the CLI, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Alleviate mongodb bug with $or queries [SERVER-13732](https://jira.mongodb.org/browse/SERVER-13732), thanks to [Jack Wearden](https://github.com/NotBobTheBuilder)

#### Bug Fixes
* Fix issue affecting password policy and empty passwords, thanks to [Bhaskar Reddy Yasa](https://github.com/bhaskaryasa)
* Fix issue when logging url in non string objects, thanks to [Paulo Vítor S Reis](https://github.com/paulovitin)

#### Dependencies updates:
* [ws@2.1.0](https://npmjs.com/package/ws)
* [uws@0.13.0](https://npmjs.com/package/uws)
* [pg-promise@5.6.2](https://npmjs.com/package/pg-promise)


# [2.3.5](https://github.com/ParsePlatform/parse-server/compare/2.3.3...2.3.5)

#### Bug Fixes
* Allow empty client key
(#3497), thanks to [Arthur Cinader](https://github.com/acinader)
* Fix LiveQuery unsafe user
(#3525), thanks to [David Starke](https://github.com/dstarke)
* Use `flushdb` instead of `flushall` in RedisCacheAdapter
(#3523), thanks to [Jeremy Louie](https://github.com/JeremyPlease)
* Fix saving GeoPoints and Files in `_GlobalConfig` (Make sure we don't treat
dot notation keys as topLevel atoms)
(#3531), thanks to [Florent Vilmart](https://github.com/flovilmart)

# [2.3.3](https://github.com/ParsePlatform/parse-server/compare/2.3.2...2.3.3)

##### Breaking Changes
* **Minimum Node engine bumped to 4.6** (#3480), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug Fixes
* Add logging on failure to create file (#3424), thanks to [Arthur Cinader](https://github.com/acinader)
* Log Parse Errors so they are intelligible (#3431), thanks to [Arthur Cinader](https://github.com/acinader)
* MongoDB $or Queries avoid SERVER-13732 bug (#3476), thanks to [Jack Wearden](https://github.com/NotBobTheBuilder)
* Mongo object to Parse object date serialization - avoid re-serialization of iso of type Date (#3389), thanks to [nodechefMatt](https://github.com/nodechefMatt)

#### Improvements
* Ground preparations for push scalability (#3080), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Use uWS as optional dependency for ws server (#3231), thanks to [Florent Vilmart](https://github.com/flovilmart)

# [2.3.2](https://github.com/ParsePlatform/parse-server/compare/2.3.1...2.3.2)

#### New features
* Add parseFrameURL for masking user-facing pages (#3267), thanks to  [Lenart Rudel](https://github.com/lenart)

#### Bug fixes
* Fix Parse-Server to work with winston-daily-rotate-1.4.2 (#3335), thanks to [Arthur Cinader](https://github.com/acinader)

#### Improvements
* Add support for regex string for password policy validatorPattern setting (#3331), thanks to [Bhaskar Reddy Yasa](https://github.com/bhaskaryasa)
* LiveQuery should match subobjects with dot notation (#3322), thanks to [David Starke](https://github.com/dstarke)
* Reduce time to process high number of installations for push (#3264), thanks to [jeacott1](https://github.com/jeacott1)
* Fix trivial typo in error message (#3238), thanks to [Arthur Cinader](https://github.com/acinader)

# [2.3.1](https://github.com/ParsePlatform/parse-server/compare/2.3.0...2.3.1)

A major issue was introduced when refactoring the authentication modules.
This release addresses only that issue.

# [2.3.0](https://github.com/ParsePlatform/parse-server/compare/2.2.25...2.3.0)

##### Breaking Changes
* Parse.Cloud.useMasterKey() is a no-op, please refer to (Cloud Code migration guide)[https://github.com/ParsePlatform/parse-server/wiki/Compatibility-with-Hosted-Parse#cloud-code]
* Authentication helpers are now proper adapters, deprecates oauth option in favor of auth.
* DEPRECATES: facebookAppIds, use `auth: { facebook: { appIds: ["AAAAAAAAA" ] } }`
* `email` field is not returned anymore for `Parse.User` queries. (Provided only on the user itself if provided).

#### New Features
* Adds ability to restrict access through Class Level Permissions to only authenticated users [see docs](http://parseplatform.github.io/docs/ios/guide/#requires-authentication-permission-requires-parse-server---230)
* Adds ability to strip sensitive data from `_User` responses, strips emails by default, thanks to [Arthur Cinader](https://github.com/acinader)
* Adds password history support for password policies, thanks to [Bhaskar Reddy Yasa](https://github.com/bhaskaryasa)

#### Improvements
* Bump parse-server-s3-adapter to 1.0.6, thanks to [Arthur Cinader](https://github.com/acinader)
* Using PARSE_SERVER_ENABLE_EXPERIMENTAL_DIRECT_ACCESS let you create user sessions when passing {installationId: "xxx-xxx"} on signup in cloud code, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Add CLI option to pass `host` parameter when creating parse-server from CLI, thanks to [Kulshekhar Kabra](https://github.com/kulshekhar)

#### Bug fixes
* Ensure batch routes are only using posix paths, thanks to [Steven Shipton](https://github.com/steven-supersolid)
* Ensure falsy options from CLI are properly taken into account, thanks to [Steven Shipton](https://github.com/steven-supersolid)
* Fixes issues affecting calls to `matchesKeyInQuery` with pointers.
* Ensure that `select` keys can be changed in triggers (beforeFind...), thanks to [Arthur Cinader](https://github.com/acinader)

#### Housekeeping
* Enables and enforces linting with eslint, thanks to [Arthur Cinader](https://github.com/acinader)

### 2.2.25

Postgres support requires v9.5

#### New Features
* Dockerizing Parse Server, thanks to [Kirill Kravinsky](https://github.com/woyorus)
* Login with qq, wechat, weibo, thanks to [haifeizhang]()
* Password policy, validation and expiration, thanks to [Bhaskar Reddy Yasa](https://github.com/bhaskaryasa)
* Health check on /health, thanks to [Kirill Kravinsky](https://github.com/woyorus)
* Reuse SchemaCache across requests option, thanks to [Steven Shipton](https://github.com/steven-supersolid)

#### Improvements
* Better support for CLI options, thanks to [Steven Shipton](https://github.com/steven-supersolid)
* Specity a database timeout with maxTimeMS, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Adds the username to reset password success pages, thanks to [Halim Qarroum](https://github.com/HQarroum)
* Better support for Redis cache adapter, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Better coverage of Postgres, thanks to [Kulshekhar Kabra](https://github.com/kulshekhar)

#### Bug Fixes
* Fixes issue when sending push to multiple installations, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fixes issues with twitter authentication, thanks to [jonas-db](https://github.com/jonas-db)
* Ignore createdAt fields update, thanks to [Yuki Takeichi](https://github.com/yuki-takeichi)
* Improve support for array equality with LiveQuery, thanks to [David Poetzsch-Heffter](https://github.com/dpoetzsch)
* Improve support for batch endpoint when serverURL and publicServerURL have different paths, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Support saving relation objects, thanks to [Yuki Takeichi](https://github.com/yuki-takeichi)

### 2.2.24

#### New Features
* LiveQuery: Bring your own adapter (#2902), thanks to [Florent Vilmart](https://github.com/flovilmart)
* LiveQuery: Adds "update" operator to update a query subscription (#2935), thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Improvements
* Better Postgres support, thanks to [Kulshekhar Kabra](https://github.com/kulshekhar)
* Logs the function name when failing (#2963), thanks to [Michael Helvey](https://github.com/michaelhelvey)
* CLI: forces closing the connections with SIGINT/SIGTERM (#2964), thanks to [Kulshekhar Kabra](https://github.com/kulshekhar)
* Reduce the number of calls to the `_SCHEMA` table (#2912), thanks to [Steven Shipton](https://github.com/steven-supersolid)
* LiveQuery: Support for Role ACL's, thanks to [Aaron Blondeau](https://github.com/aaron-blondeau-dose)

#### Bug Fixes
* Better support for checking application and client keys, thanks to [Steven Shipton](https://github.com/steven-supersolid)
* Google OAuth, better support for android and web logins, thanks to [Florent Vilmart](https://github.com/flovilmart)

### 2.2.23

* Run liveQuery server from CLI with a different port, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Support for Postgres databaseURI, thanks to [Kulshekhar Kabra](https://github.com/kulshekhar)
* Support for Postgres options, thanks to [Kulshekhar Kabra](https://github.com/kulshekhar)
* Improved support for google login (id_token and access_token), thanks to [Florent Vilmart](https://github.com/flovilmart)
* Improvements with VKontakte login, thanks to [Eugene Antropov](https://github.com/antigp)
* Improved support for `select` and `include`, thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug fixes

* Fix error when updating installation with useMasterKey (#2888), thanks to [Jeremy Louie](https://github.com/JeremyPlease)
* Fix bug affecting usage of multiple `notEqualTo`, thanks to [Jeremy Louie](https://github.com/JeremyPlease)
* Improved support for null values in arrays, thanks to [Florent Vilmart](https://github.com/flovilmart)

### 2.2.22

* Minimum nodejs engine is now 4.5

#### New Features
* New: CLI for parse-live-query-server, thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: Start parse-live-query-server for parse-server CLI, thanks to [Florent Vilmart](https://github.com/flovilmart)

#### Bug fixes
* Fix: Include with pointers are not conflicting with get CLP anymore, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Removes dependency on babel-polyfill, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Support nested select calls, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Use native column selection instead of runtime, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: installationId header is properly used when updating `_Installation` objects, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: don't crash parse-server on improperly formatted live-query messages, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Passwords are properly stripped out of logs, thanks to [Arthur Cinader](https://github.com/acinader)
* Fix: Lookup for email in username if email is not set, thanks to [Florent Vilmart](https://github.com/flovilmart)

### 2.2.21

* Fix: Reverts removal of babel-polyfill

### 2.2.20

* New: Adds CloudCode handler for `beforeFind`, thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: RedisCacheAdapter for syncing schema, role and user caches across servers, thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: Latest master build available at `ParsePlatform/parse-server#latest`, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Better support for upgradeToRevocableSession with missing session token, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Removes babel-polyfill runtime dependency, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Cluster option now support a boolean value for automatically choosing the right number of processes, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Filenames now appear correctly, thanks to [Lama Chandrasena](https://github.com/lama-buddy)
* Fix: `_acl` is properly updated, thanks to [Steven Shipton](https://github.com/steven-supersolid)

Other fixes by [Mathias Rangel Wulff](https://github.com/mathiasrw)

### 2.2.19

* New: support for upgrading to revocable sessions, thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: NullCacheAdapter for disabling caching, thanks to [Yuki Takeichi](https://github.com/yuki-takeichi)
* New: Account lockout policy [#2601](https://github.com/ParsePlatform/parse-server/pull/2601), thanks to [Diwakar Cherukumilli](https://github.com/cherukumilli)
* New: Jobs endpoint for defining and run jobs (no scheduling), thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: Add --cluster option to the CLI, thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: Support for login with vk.com, thanks to [Nurdaulet Bolatov](https://github.com/nbolatov)
* New: experimental support for postgres databases, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: parse-server doesn't call next() after successful responses, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Nested objects are properly includeed with Pointer Permissions on, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: null values in include calls are properly handled, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Schema validations now runs after beforeSave hooks, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: usersname and passwords are properly type checked, thanks to [Bam Wang](https://github.com/bamwang)
* Fix: logging in info log would log also in error log, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: removes extaneous logging from ParseLiveQueryServer, thanks to [Flavio Torres](https://github.com/flavionegrao)
* Fix: support for Range requests for files, thanks to [Brage G. Staven](https://github.com/Bragegs)

### 2.2.18

* Fix: Improve support for objects in push alert, thanks to [Antoine Lenoir](https://github.com/alenoir)
* Fix; Prevent pointed from getting clobbered when they are changed in a beforeSave, thanks to [sud](https://github.com/sud80)
* Fix: Improve support for "Bytes" type, thanks to [CongHoang](https://github.com/conghoang)
* Fix: Better logging compatability with Parse.com, thanks to [Arthur Cinader](https://github.com/acinader)
* New: Add Janrain Capture and Janrain Engage auth provider, thanks to [Andrew Lane](https://github.com/AndrewLane)
* Improved: Include content length header in files response, thanks to [Steven Van Bael](https://github.com/vbsteven)
* Improved: Support byte range header for files, thanks to [Brage G. Staven](https://github.com/Bragegs)
* Improved: Validations for LinkedIn access_tokens, thanks to [Felix Dumit](https://github.com/felix-dumit)
* Improved: Experimental postgres support, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Perf: Use native bcrypt implementation if available, thanks to [Florent Vilmart](https://github.com/flovilmart)


# [2.2.17](https://github.com/ParsePlatform/parse-server/compare/2.2.16...2.2.17)

* Cloud code logs [\#2370](https://github.com/ParsePlatform/parse-server/pull/2370) ([flovilmart](https://github.com/flovilmart))
* Make sure \_PushStatus operations are run in order [\#2367](https://github.com/ParsePlatform/parse-server/pull/2367) ([flovilmart](https://github.com/flovilmart))
* Typo fix for error message when can't ensure uniqueness of user email addresses [\#2360](https://github.com/ParsePlatform/parse-server/pull/2360) ([AndrewLane](https://github.com/AndrewLane))
* LiveQuery constrains matching fix [\#2357](https://github.com/ParsePlatform/parse-server/pull/2357) ([simonas-notcat](https://github.com/simonas-notcat))
* Fix typo in logging for commander parseConfigFile [\#2352](https://github.com/ParsePlatform/parse-server/pull/2352) ([AndrewLane](https://github.com/AndrewLane))
* Fix minor typos in test names [\#2351](https://github.com/ParsePlatform/parse-server/pull/2351) ([acinader](https://github.com/acinader))
* Makes sure we don't strip authData or session token from users using masterKey [\#2348](https://github.com/ParsePlatform/parse-server/pull/2348) ([flovilmart](https://github.com/flovilmart))
* Run coverage with istanbul [\#2340](https://github.com/ParsePlatform/parse-server/pull/2340) ([flovilmart](https://github.com/flovilmart))
* Run next\(\) after successfully sending data to the client [\#2338](https://github.com/ParsePlatform/parse-server/pull/2338) ([blacha](https://github.com/blacha))
* Cache all the mongodb/version folder [\#2336](https://github.com/ParsePlatform/parse-server/pull/2336) ([flovilmart](https://github.com/flovilmart))
* updates usage of setting: emailVerifyTokenValidityDuration [\#2331](https://github.com/ParsePlatform/parse-server/pull/2331) ([cherukumilli](https://github.com/cherukumilli))
* Update Mongodb client to 2.2.4 [\#2329](https://github.com/ParsePlatform/parse-server/pull/2329) ([flovilmart](https://github.com/flovilmart))
* Allow usage of analytics adapter [\#2327](https://github.com/ParsePlatform/parse-server/pull/2327) ([deashay](https://github.com/deashay))
* Fix flaky tests [\#2324](https://github.com/ParsePlatform/parse-server/pull/2324) ([flovilmart](https://github.com/flovilmart))
* don't serve null authData values [\#2320](https://github.com/ParsePlatform/parse-server/pull/2320) ([yuzeh](https://github.com/yuzeh))
* Fix null relation problem [\#2319](https://github.com/ParsePlatform/parse-server/pull/2319) ([flovilmart](https://github.com/flovilmart))
* Clear the connectionPromise upon close or error [\#2314](https://github.com/ParsePlatform/parse-server/pull/2314) ([flovilmart](https://github.com/flovilmart))
* Report validation errors with correct error code [\#2299](https://github.com/ParsePlatform/parse-server/pull/2299) ([flovilmart](https://github.com/flovilmart))
* Parses correctly Parse.Files and Dates when sent to Cloud Code Functions [\#2297](https://github.com/ParsePlatform/parse-server/pull/2297) ([flovilmart](https://github.com/flovilmart))
* Adding proper generic Not Implemented. [\#2292](https://github.com/ParsePlatform/parse-server/pull/2292) ([vitaly-t](https://github.com/vitaly-t))
* Adds schema caching capabilities \(5s by default\) [\#2286](https://github.com/ParsePlatform/parse-server/pull/2286) ([flovilmart](https://github.com/flovilmart))
* add digits oauth provider [\#2284](https://github.com/ParsePlatform/parse-server/pull/2284) ([ranhsd](https://github.com/ranhsd))
* Improve installations query [\#2281](https://github.com/ParsePlatform/parse-server/pull/2281) ([flovilmart](https://github.com/flovilmart))
* Adding request headers to cloud functions fixes \#1461 [\#2274](https://github.com/ParsePlatform/parse-server/pull/2274) ([blacha](https://github.com/blacha))
* Creates a new sessionToken when updating password [\#2266](https://github.com/ParsePlatform/parse-server/pull/2266) ([flovilmart](https://github.com/flovilmart))
* Add Gitter chat link to the README. [\#2264](https://github.com/ParsePlatform/parse-server/pull/2264) ([nlutsenko](https://github.com/nlutsenko))
* Restores ability to include non pointer keys [\#2263](https://github.com/ParsePlatform/parse-server/pull/2263) ([flovilmart](https://github.com/flovilmart))
* Allow next middleware handle error in handleParseErrors [\#2260](https://github.com/ParsePlatform/parse-server/pull/2260) ([mejcz](https://github.com/mejcz))
* Exposes the ClientSDK infos if available [\#2259](https://github.com/ParsePlatform/parse-server/pull/2259) ([flovilmart](https://github.com/flovilmart))
* Adds support for multiple twitter auths options [\#2256](https://github.com/ParsePlatform/parse-server/pull/2256) ([flovilmart](https://github.com/flovilmart))
* validate\_purchase fix for SANDBOX requests [\#2253](https://github.com/ParsePlatform/parse-server/pull/2253) ([valeryvaskabovich](https://github.com/valeryvaskabovich))

### 2.2.16

* New: Expose InMemoryCacheAdapter publicly, thanks to [Steven Shipton](https://github.com/steven-supersolid)
* New: Add ability to prevent login with unverified email, thanks to [Diwakar Cherukumilli](https://github.com/cherukumilli)
* Improved: Better error message for incorrect type, thanks to [Andrew Lane](https://github.com/AndrewLane)
* Improved: Better error message for permission denied, thanks to [Blayne Chard](https://github.com/blacha)
* Improved: Update authData on login, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Improved: Ability to not check for old files on Parse.com, thanks to [OzgeAkin](https://github.com/OzgeAkin)
* Fix: Issues with email adapter validation, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Issues with nested $or queries, thanks to [Florent Vilmart](https://github.com/flovilmart)

### 2.2.15

* Fix: Type in description for Parse.Error.INVALID_QUERY, thanks to [Andrew Lane](https://github.com/AndrewLane)
* Improvement: Stop requiring verifyUserEmails for password reset functionality, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Improvement: Kill without validation, thanks to [Drew Gross](https://github.com/drew-gross)
* Fix: Deleting a file does not delete from fs.files, thanks to [David Keita](https://github.com/maninga)
* Fix: Postgres stoage adapter fix, thanks to [Vitaly Tomilov](https://github.com/vitaly-t)
* Fix: Results invalid session when providing an invalid session token, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: issue creating an anonymous user, thanks to [Hussam Moqhim](https://github.com/hmoqhim)
* Fix: make http response serializable, thanks to [Florent Vilmart](https://github.com/flovilmart)
* New: Add postmark email adapter alternative [Glenn Reyes](https://github.com/glennreyes)

### 2.2.14

* Hotfix: Fix Parse.Cloud.HTTPResponse serialization

### 2.2.13

* Hotfix: Pin version of deepcopy

### 2.2.12

* New: Custom error codes in cloud code response.error, thanks to [Jeremy Pease](https://github.com/JeremyPlease)
* Fix: Crash in beforeSave when response is not an object, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Allow "get" on installations
* Fix: Fix overly restrictive Class Level Permissions, thanks to [Florent Vilmart](https://github.com/flovilmart)
* Fix: Fix nested date parsing in Cloud Code, thanks to [Marco Cheung](https://github.com/Marco129)
* Fix: Support very old file formats from Parse.com

### 2.2.11

* Security: Censor user password in logs, thanks to [Marco Cheung](https://github.com/Marco129)
* New: Add PARSE_SERVER_LOGS_FOLDER env var for setting log folder, thanks to [KartikeyaRokde](https://github.com/KartikeyaRokde)
* New: Webhook key support, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Perf: Add cache adapter and default caching of certain objects, thanks to [Blayne Chard](https://github.com/blacha)
* Improvement: Better error messages for schema type mismatches, thanks to [Jeremy Pease](https://github.com/JeremyPlease)
* Improvement: Better error messages for reset password emails
* Improvement: Webhook key support in CLI, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Remove read only fields when using beforeSave, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Use content type provided by JS SDK, thanks to [Blayne Chard](https://github.com/blacha) and [Florent Vilmart](https://github.com/flovilmart)
* Fix: Tell the dashboard the stored push data is available, thanks to [Jeremy Pease](https://github.com/JeremyPlease)
* Fix: Add support for HTTP Basic Auth, thanks to [Hussam Moqhim](https://github.com/hmoqhim)
* Fix: Support for MongoDB version 3.2.6, (note: do not use MongoDB 3.2 with migrated apps that still have traffic on Parse.com), thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Prevent `pm2` from crashing when push notifications fail, thanks to [benishak](https://github.com/benishak)
* Fix: Add full list of default _Installation fields, thanks to [Jeremy Pease](https://github.com/JeremyPlease)
* Fix: Strip objectId out of hooks responses, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Fix external webhook response format, thanks to [Tyler Brock](https://github.com/TylerBrock)
* Fix: Fix beforeSave when object is passed to `success`, thanks to [Madhav Bhagat](https://github.com/codebreach)
* Fix: Remove use of deprecated APIs, thanks to [Emad Ehsan](https://github.com/emadehsan)
* Fix: Crash when multiple Parse Servers on the same machine try to write to the same logs folder, thanks to [Steven Shipton](https://github.com/steven-supersolid)
* Fix: Various issues with key names in `Parse.Object`s
* Fix: Treat Bytes type properly
* Fix: Caching bugs that caused writes by masterKey or other session token to not show up to users reading with a different session token
* Fix: Pin mongo driver version, preventing a regression in version 2.1.19
* Fix: Various issues with pointer fields not being treated properly
* Fix: Issues with pointed getting un-fetched due to changes in beforeSave
* Fix: Fixed crash when deleting classes that have CLPs

### 2.2.10

* Fix: Write legacy ACLs to Mongo so that clients that still go through Parse.com can read them, thanks to [Tyler Brock](https://github.com/TylerBrock) and [carmenlau](https://github.com/carmenlau)
* Fix: Querying installations with limit = 0 and count = 1 now works, thanks to [ssk7833](https://github.com/ssk7833)
* Fix: Return correct error when violating unique index, thanks to [Marco Cheung](https://github.com/Marco129)
* Fix: Allow unsetting user's email, thanks to [Marco Cheung](https://github.com/Marco129)
* New: Support for Node 6.1

### 2.2.9

* Fix: Fix a regression that caused Parse Server to crash when a null parameter is passed to a Cloud function

### 2.2.8

* New: Support for Pointer Permissions
* New: Expose logger in Cloud Code
* New: Option to revoke sessions on password reset
* New: Option to expire inactive sessions
* Perf: Improvements in ACL checking query
* Fix: Issues when sending pushes to list of devices that contains invalid values
* Fix: Issues caused by using babel-polyfill outside of Parse Server, but in the same express app
* Fix: Remove creation of extra session tokens
* Fix: Return authData when querying with master key
* Fix: Bugs when deleting webhooks
* Fix: Ignore _RevocableSession header, which might be sent by the JS SDK
* Fix: Issues with querying via URL params
* Fix: Properly encode "Date" parameters to cloud code functions


### 2.2.7

* Adds support for --verbose and verbose option when running ParseServer [\#1414](https://github.com/ParsePlatform/parse-server/pull/1414) ([flovilmart](https://github.com/flovilmart))
* Adds limit = 0 as a valid parameter for queries [\#1493](https://github.com/ParsePlatform/parse-server/pull/1493) ([seijiakiyama](https://github.com/seijiakiyama))
* Makes sure we preserve Installations when updating a token  \(\#1475\) [\#1486](https://github.com/ParsePlatform/parse-server/pull/1486) ([flovilmart](https://github.com/flovilmart))
* Hotfix for tests [\#1503](https://github.com/ParsePlatform/parse-server/pull/1503) ([flovilmart](https://github.com/flovilmart))
* Enable logs [\#1502](https://github.com/ParsePlatform/parse-server/pull/1502) ([drew-gross](https://github.com/drew-gross))
* Do some triple equals for great justice [\#1499](https://github.com/ParsePlatform/parse-server/pull/1499) ([TylerBrock](https://github.com/TylerBrock))
* Apply credential stripping to all untransforms for \_User [\#1498](https://github.com/ParsePlatform/parse-server/pull/1498) ([TylerBrock](https://github.com/TylerBrock))
* Checking if object has defined key for Pointer constraints in liveQuery [\#1487](https://github.com/ParsePlatform/parse-server/pull/1487) ([simonas-notcat](https://github.com/simonas-notcat))
* Remove collection prefix and default mongo URI [\#1479](https://github.com/ParsePlatform/parse-server/pull/1479) ([drew-gross](https://github.com/drew-gross))
* Store collection prefix in mongo adapter, and clean up adapter interface [\#1472](https://github.com/ParsePlatform/parse-server/pull/1472) ([drew-gross](https://github.com/drew-gross))
* Move field deletion logic into mongo adapter [\#1471](https://github.com/ParsePlatform/parse-server/pull/1471) ([drew-gross](https://github.com/drew-gross))
* Adds support for Long and Double mongodb types \(fixes \#1316\) [\#1470](https://github.com/ParsePlatform/parse-server/pull/1470) ([flovilmart](https://github.com/flovilmart))
* Schema.js database agnostic [\#1468](https://github.com/ParsePlatform/parse-server/pull/1468) ([flovilmart](https://github.com/flovilmart))
* Remove console.log [\#1465](https://github.com/ParsePlatform/parse-server/pull/1465) ([drew-gross](https://github.com/drew-gross))
* Push status nits [\#1462](https://github.com/ParsePlatform/parse-server/pull/1462) ([flovilmart](https://github.com/flovilmart))
* Fixes \#1444 [\#1451](https://github.com/ParsePlatform/parse-server/pull/1451) ([flovilmart](https://github.com/flovilmart))
* Removing sessionToken and authData from \_User objects included in a query [\#1450](https://github.com/ParsePlatform/parse-server/pull/1450) ([simonas-notcat](https://github.com/simonas-notcat))
* Move mongo field type logic into mongoadapter [\#1432](https://github.com/ParsePlatform/parse-server/pull/1432) ([drew-gross](https://github.com/drew-gross))
* Prevents \_User lock out when setting ACL on signup or afterwards [\#1429](https://github.com/ParsePlatform/parse-server/pull/1429) ([flovilmart](https://github.com/flovilmart))
* Update .travis.yml [\#1428](https://github.com/ParsePlatform/parse-server/pull/1428) ([flovilmart](https://github.com/flovilmart))
* Adds relation fields to objects [\#1424](https://github.com/ParsePlatform/parse-server/pull/1424) ([flovilmart](https://github.com/flovilmart))
* Update .travis.yml [\#1423](https://github.com/ParsePlatform/parse-server/pull/1423) ([flovilmart](https://github.com/flovilmart))
* Sets the defaultSchemas keys in the SchemaCollection [\#1421](https://github.com/ParsePlatform/parse-server/pull/1421) ([flovilmart](https://github.com/flovilmart))
* Fixes \#1417 [\#1420](https://github.com/ParsePlatform/parse-server/pull/1420) ([drew-gross](https://github.com/drew-gross))
* Untransform should treat Array's as nested objects [\#1416](https://github.com/ParsePlatform/parse-server/pull/1416) ([blacha](https://github.com/blacha))
* Adds X-Parse-Push-Status-Id header [\#1412](https://github.com/ParsePlatform/parse-server/pull/1412) ([flovilmart](https://github.com/flovilmart))
* Schema format cleanup [\#1407](https://github.com/ParsePlatform/parse-server/pull/1407) ([drew-gross](https://github.com/drew-gross))
* Updates the publicServerURL option [\#1397](https://github.com/ParsePlatform/parse-server/pull/1397) ([flovilmart](https://github.com/flovilmart))
* Fix exception with non-expiring session tokens. [\#1386](https://github.com/ParsePlatform/parse-server/pull/1386) ([0x18B2EE](https://github.com/0x18B2EE))
* Move mongo schema format related logic into mongo adapter [\#1385](https://github.com/ParsePlatform/parse-server/pull/1385) ([drew-gross](https://github.com/drew-gross))
* WIP: Huge performance improvement on roles queries [\#1383](https://github.com/ParsePlatform/parse-server/pull/1383) ([flovilmart](https://github.com/flovilmart))
* Removes GCS Adapter from provided adapters [\#1339](https://github.com/ParsePlatform/parse-server/pull/1339) ([flovilmart](https://github.com/flovilmart))
* DBController refactoring [\#1228](https://github.com/ParsePlatform/parse-server/pull/1228) ([flovilmart](https://github.com/flovilmart))
* Spotify authentication [\#1226](https://github.com/ParsePlatform/parse-server/pull/1226) ([1nput0utput](https://github.com/1nput0utput))
* Expose DatabaseAdapter to simplify application tests [\#1121](https://github.com/ParsePlatform/parse-server/pull/1121) ([steven-supersolid](https://github.com/steven-supersolid))

### 2.2.6

* Important Fix: Disables find on installation from clients [\#1374](https://github.com/ParsePlatform/parse-server/pull/1374) ([flovilmart](https://github.com/flovilmart))
* Adds missing options to the CLI [\#1368](https://github.com/ParsePlatform/parse-server/pull/1368) ([flovilmart](https://github.com/flovilmart))
* Removes only master on travis [\#1367](https://github.com/ParsePlatform/parse-server/pull/1367) ([flovilmart](https://github.com/flovilmart))
* Auth.\_loadRoles should not query the same role twice. [\#1366](https://github.com/ParsePlatform/parse-server/pull/1366) ([blacha](https://github.com/blacha))

### 2.2.5

* Improves config loading and tests [\#1363](https://github.com/ParsePlatform/parse-server/pull/1363) ([flovilmart](https://github.com/flovilmart))
* Adds travis configuration to deploy NPM on new version tags [\#1361](https://github.com/ParsePlatform/parse-server/pull/1361) ([gfosco](https://github.com/gfosco))
* Inject the default schemas properties when loading it [\#1357](https://github.com/ParsePlatform/parse-server/pull/1357) ([flovilmart](https://github.com/flovilmart))
* Adds console transport when testing with VERBOSE=1 [\#1351](https://github.com/ParsePlatform/parse-server/pull/1351) ([flovilmart](https://github.com/flovilmart))
* Make notEqual work on relations  [\#1350](https://github.com/ParsePlatform/parse-server/pull/1350) ([flovilmart](https://github.com/flovilmart))
* Accept only bool for $exists in LiveQuery [\#1315](https://github.com/ParsePlatform/parse-server/pull/1315) ([drew-gross](https://github.com/drew-gross))
* Adds more options when using CLI/config [\#1305](https://github.com/ParsePlatform/parse-server/pull/1305) ([flovilmart](https://github.com/flovilmart))
* Update error message [\#1297](https://github.com/ParsePlatform/parse-server/pull/1297) ([drew-gross](https://github.com/drew-gross))
* Properly let masterKey add fields [\#1291](https://github.com/ParsePlatform/parse-server/pull/1291) ([flovilmart](https://github.com/flovilmart))
* Point to \#1271 as how to write a good issue report [\#1290](https://github.com/ParsePlatform/parse-server/pull/1290) ([drew-gross](https://github.com/drew-gross))
* Adds ability to override mount with publicServerURL for production uses [\#1287](https://github.com/ParsePlatform/parse-server/pull/1287) ([flovilmart](https://github.com/flovilmart))
* Single object queries to use include and keys [\#1280](https://github.com/ParsePlatform/parse-server/pull/1280) ([jeremyjackson89](https://github.com/jeremyjackson89))
* Improves report for Push error in logs and \_PushStatus [\#1269](https://github.com/ParsePlatform/parse-server/pull/1269) ([flovilmart](https://github.com/flovilmart))
* Removes all stdout/err logs while testing [\#1268](https://github.com/ParsePlatform/parse-server/pull/1268) ([flovilmart](https://github.com/flovilmart))
* Matching queries with doesNotExist constraint [\#1250](https://github.com/ParsePlatform/parse-server/pull/1250) ([andrecardoso](https://github.com/andrecardoso))
* Added session length option for session tokens to server configuration [\#997](https://github.com/ParsePlatform/parse-server/pull/997) ([Kenishi](https://github.com/Kenishi))
* Regression test for \#1259 [\#1286](https://github.com/ParsePlatform/parse-server/pull/1286) ([drew-gross](https://github.com/drew-gross))
* Regression test for \#871 [\#1283](https://github.com/ParsePlatform/parse-server/pull/1283) ([drew-gross](https://github.com/drew-gross))
* Add a test to repro \#701 [\#1281](https://github.com/ParsePlatform/parse-server/pull/1281) ([drew-gross](https://github.com/drew-gross))
* Fix for \#1334: using relative cloud code files broken  [\#1353](https://github.com/ParsePlatform/parse-server/pull/1353) ([airdrummingfool](https://github.com/airdrummingfool))
* Fix Issue/1288 [\#1346](https://github.com/ParsePlatform/parse-server/pull/1346) ([flovilmart](https://github.com/flovilmart))
* Fixes \#1271 [\#1295](https://github.com/ParsePlatform/parse-server/pull/1295) ([drew-gross](https://github.com/drew-gross))
* Fixes issue \#1302 [\#1314](https://github.com/ParsePlatform/parse-server/pull/1314) ([flovilmart](https://github.com/flovilmart))
* Fixes bug related to include in queries [\#1312](https://github.com/ParsePlatform/parse-server/pull/1312) ([flovilmart](https://github.com/flovilmart))


### 2.2.4

* Hotfix: fixed imports issue for S3Adapter, GCSAdapter, FileSystemAdapter [\#1263](https://github.com/ParsePlatform/parse-server/pull/1263) ([drew-gross](https://github.com/drew-gross)
* Fix: Clean null authData values on _User update [\#1199](https://github.com/ParsePlatform/parse-server/pull/1199) ([yuzeh](https://github.com/yuzeh))

### 2.2.3

* Fixed bug with invalid email verification link on email update. [\#1253](https://github.com/ParsePlatform/parse-server/pull/1253) ([kzielonka](https://github.com/kzielonka))
* Badge update supports increment as well as Increment [\#1248](https://github.com/ParsePlatform/parse-server/pull/1248) ([flovilmart](https://github.com/flovilmart))
* Config/Push Tested with the dashboard. [\#1235](https://github.com/ParsePlatform/parse-server/pull/1235) ([drew-gross](https://github.com/drew-gross))
* Better logging with winston [\#1234](https://github.com/ParsePlatform/parse-server/pull/1234) ([flovilmart](https://github.com/flovilmart))
* Make GlobalConfig work like parse.com [\#1210](https://github.com/ParsePlatform/parse-server/pull/1210) ([framp](https://github.com/framp))
* Improve flattening of results from pushAdapter [\#1204](https://github.com/ParsePlatform/parse-server/pull/1204) ([flovilmart](https://github.com/flovilmart))
* Push adapters are provided by external packages [\#1195](https://github.com/ParsePlatform/parse-server/pull/1195) ([flovilmart](https://github.com/flovilmart))
* Fix flaky test [\#1188](https://github.com/ParsePlatform/parse-server/pull/1188) ([drew-gross](https://github.com/drew-gross))
* Fixes problem affecting finding array pointers [\#1185](https://github.com/ParsePlatform/parse-server/pull/1185) ([flovilmart](https://github.com/flovilmart))
* Moves Files adapters to external packages [\#1172](https://github.com/ParsePlatform/parse-server/pull/1172) ([flovilmart](https://github.com/flovilmart))
* Mark push as enabled in serverInfo endpoint [\#1164](https://github.com/ParsePlatform/parse-server/pull/1164) ([drew-gross](https://github.com/drew-gross))
* Document email adapter [\#1144](https://github.com/ParsePlatform/parse-server/pull/1144) ([drew-gross](https://github.com/drew-gross))
* Reset password fix [\#1133](https://github.com/ParsePlatform/parse-server/pull/1133) ([carmenlau](https://github.com/carmenlau))

### 2.2.2

* Important Fix: Mounts createLiveQueryServer, fix babel induced problem [\#1153](https://github.com/ParsePlatform/parse-server/pull/1153) (flovilmart)
* Move ParseServer to it's own file [\#1166](https://github.com/ParsePlatform/parse-server/pull/1166) (flovilmart)
* Update README.md * remove deploy buttons * replace with community links [\#1139](https://github.com/ParsePlatform/parse-server/pull/1139) (drew-gross)
* Adds bootstrap.sh [\#1138](https://github.com/ParsePlatform/parse-server/pull/1138) (flovilmart)
* Fix: Do not override username [\#1142](https://github.com/ParsePlatform/parse-server/pull/1142) (flovilmart)
* Fix: Add pushId back to GCM payload [\#1168](https://github.com/ParsePlatform/parse-server/pull/1168) (wangmengyan95)

### 2.2.1

* New: Add FileSystemAdapter file adapter [\#1098](https://github.com/ParsePlatform/parse-server/pull/1098) (dtsolis)
* New: Enabled CLP editing [\#1128](https://github.com/ParsePlatform/parse-server/pull/1128) (drew-gross)
* Improvement: Reduces the number of connections to mongo created [\#1111](https://github.com/ParsePlatform/parse-server/pull/1111) (flovilmart)
* Improvement: Make ParseServer a class [\#980](https://github.com/ParsePlatform/parse-server/pull/980) (flovilmart)
* Fix: Adds support for plain object in $add, $addUnique, $remove [\#1114](https://github.com/ParsePlatform/parse-server/pull/1114) (flovilmart)
* Fix: Generates default CLP, freezes objects [\#1132](https://github.com/ParsePlatform/parse-server/pull/1132) (flovilmart)
* Fix: Properly sets installationId on creating session with 3rd party auth [\#1110](https://github.com/ParsePlatform/parse-server/pull/1110) (flovilmart)

### 2.2.0

* New Feature: Real-time functionality with Live Queries! [\#1092](https://github.com/ParsePlatform/parse-server/pull/1092) (wangmengyan95)
* Improvement: Push Status API [\#1004](https://github.com/ParsePlatform/parse-server/pull/1004) (flovilmart)
* Improvement: Allow client operations on Roles [\#1068](https://github.com/ParsePlatform/parse-server/pull/1068) (flovilmart)
* Improvement: Add URI encoding to mongo auth parameters [\#986](https://github.com/ParsePlatform/parse-server/pull/986) (bgw)
* Improvement: Adds support for apps key in config file, but only support single app for now [\#979](https://github.com/ParsePlatform/parse-server/pull/979) (flovilmart)
* Documentation: Getting Started and Configuring Parse Server [\#988](https://github.com/ParsePlatform/parse-server/pull/988) (hramos)
* Fix: Various edge cases with REST API [\#1066](https://github.com/ParsePlatform/parse-server/pull/1066) (flovilmart)
* Fix: Makes sure the location in results has the proper objectId [\#1065](https://github.com/ParsePlatform/parse-server/pull/1065) (flovilmart)
* Fix: Third-party auth is properly removed when unlinked [\#1081](https://github.com/ParsePlatform/parse-server/pull/1081) (flovilmart)
* Fix: Clear the session-user cache when changing \_User objects [\#1072](https://github.com/ParsePlatform/parse-server/pull/1072) (gfosco)
* Fix: Bug related to subqueries on unfetched objects [\#1046](https://github.com/ParsePlatform/parse-server/pull/1046) (flovilmart)
* Fix: Properly urlencode parameters for email validation and password reset [\#1001](https://github.com/ParsePlatform/parse-server/pull/1001) (flovilmart)
* Fix: Better sanitization/decoding of object data for afterSave triggers [\#992](https://github.com/ParsePlatform/parse-server/pull/992) (flovilmart)
* Fix: Changes default encoding for httpRequest [\#892](https://github.com/ParsePlatform/parse-server/pull/892) (flovilmart)

### 2.1.6

* Improvement: Full query support for badge Increment \(\#931\) [\#983](https://github.com/ParsePlatform/parse-server/pull/983) (flovilmart)
* Improvement: Shutdown standalone parse server gracefully [\#958](https://github.com/ParsePlatform/parse-server/pull/958) (raulr)
* Improvement: Add database options to ParseServer constructor and pass to MongoStorageAdapter [\#956](https://github.com/ParsePlatform/parse-server/pull/956) (steven-supersolid)
* Improvement: AuthData logic refactor [\#952](https://github.com/ParsePlatform/parse-server/pull/952) (flovilmart)
* Improvement: Changed FileLoggerAdapterSpec to fail gracefully on Windows [\#946](https://github.com/ParsePlatform/parse-server/pull/946) (aneeshd16)
* Improvement: Add new schema collection type and replace all usages of direct mongo collection for schema operations. [\#943](https://github.com/ParsePlatform/parse-server/pull/943) (nlutsenko)
* Improvement: Adds CLP API to Schema router [\#898](https://github.com/ParsePlatform/parse-server/pull/898) (flovilmart)
* Fix: Cleans up authData null keys on login for android crash [\#978](https://github.com/ParsePlatform/parse-server/pull/978) (flovilmart)
* Fix: Do master query for before/afterSaveHook [\#959](https://github.com/ParsePlatform/parse-server/pull/959) (wangmengyan95)
* Fix: re-add shebang [\#944](https://github.com/ParsePlatform/parse-server/pull/944) (flovilmart)
* Fix: Added test command for Windows support [\#886](https://github.com/ParsePlatform/parse-server/pull/886) (aneeshd16)

### 2.1.5

* New: FileAdapter for Google Cloud Storage [\#708](https://github.com/ParsePlatform/parse-server/pull/708) (mcdonamp)
* Improvement: Minimize extra schema queries in some scenarios. [\#919](https://github.com/ParsePlatform/parse-server/pull/919) (Marco129)
* Improvement: Move DatabaseController and Schema fully to adaptive mongo collection. [\#909](https://github.com/ParsePlatform/parse-server/pull/909) (nlutsenko)
* Improvement: Cleanup PushController/PushRouter, remove raw mongo collection access. [\#903](https://github.com/ParsePlatform/parse-server/pull/903) (nlutsenko)
* Improvement: Increment badge the right way [\#902](https://github.com/ParsePlatform/parse-server/pull/902) (flovilmart)
* Improvement: Migrate ParseGlobalConfig to new database storage API. [\#901](https://github.com/ParsePlatform/parse-server/pull/901) (nlutsenko)
* Improvement: Improve delete flow for non-existent \_Join collection [\#881](https://github.com/ParsePlatform/parse-server/pull/881) (Marco129)
* Improvement: Adding a role scenario test for issue 827 [\#878](https://github.com/ParsePlatform/parse-server/pull/878) (gfosco)
* Improvement: Test empty authData block on login for \#413 [\#863](https://github.com/ParsePlatform/parse-server/pull/863) (gfosco)
* Improvement: Modified the npm dev script to support Windows [\#846](https://github.com/ParsePlatform/parse-server/pull/846) (aneeshd16)
* Improvement: Move HooksController to use MongoCollection instead of direct Mongo access. [\#844](https://github.com/ParsePlatform/parse-server/pull/844) (nlutsenko)
* Improvement: Adds public\_html and views for packaging [\#839](https://github.com/ParsePlatform/parse-server/pull/839) (flovilmart)
* Improvement: Better support for windows builds [\#831](https://github.com/ParsePlatform/parse-server/pull/831) (flovilmart)
* Improvement: Convert Schema.js to ES6 class. [\#826](https://github.com/ParsePlatform/parse-server/pull/826) (nlutsenko)
* Improvement: Remove duplicated instructions [\#816](https://github.com/ParsePlatform/parse-server/pull/816) (hramos)
* Improvement: Completely migrate SchemasRouter to new MongoCollection API. [\#794](https://github.com/ParsePlatform/parse-server/pull/794) (nlutsenko)
* Fix: Do not require where clause in $dontSelect condition on queries. [\#925](https://github.com/ParsePlatform/parse-server/pull/925) (nlutsenko)
* Fix: Make sure that ACLs propagate to before/after save hooks. [\#924](https://github.com/ParsePlatform/parse-server/pull/924) (nlutsenko)
* Fix: Support params option in Parse.Cloud.httpRequest. [\#912](https://github.com/ParsePlatform/parse-server/pull/912) (carmenlau)
* Fix: Fix flaky Parse.GeoPoint test. [\#908](https://github.com/ParsePlatform/parse-server/pull/908) (nlutsenko)
* Fix: Handle legacy \_client\_permissions key in \_SCHEMA. [\#900](https://github.com/ParsePlatform/parse-server/pull/900) (drew-gross)
* Fix: Fixes bug when querying equalTo on objectId and relation [\#887](https://github.com/ParsePlatform/parse-server/pull/887) (flovilmart)
* Fix: Allow crossdomain on filesRouter [\#876](https://github.com/ParsePlatform/parse-server/pull/876) (flovilmart)
* Fix: Remove limit when counting results. [\#867](https://github.com/ParsePlatform/parse-server/pull/867) (gfosco)
* Fix: beforeSave changes should propagate to the response [\#865](https://github.com/ParsePlatform/parse-server/pull/865) (gfosco)
* Fix: Delete relation field when \_Join collection not exist [\#864](https://github.com/ParsePlatform/parse-server/pull/864) (Marco129)
* Fix: Related query on non-existing column [\#861](https://github.com/ParsePlatform/parse-server/pull/861) (gfosco)
* Fix: Update markdown in .github/ISSUE\_TEMPLATE.md [\#859](https://github.com/ParsePlatform/parse-server/pull/859) (igorshubovych)
* Fix: Issue with creating wrong \_Session for Facebook login [\#857](https://github.com/ParsePlatform/parse-server/pull/857) (tobernguyen)
* Fix: Leak warnings in tests, use mongodb-runner from node\_modules [\#843](https://github.com/ParsePlatform/parse-server/pull/843) (drew-gross)
* Fix: Reversed roles lookup [\#841](https://github.com/ParsePlatform/parse-server/pull/841) (flovilmart)
* Fix: Improves loading of Push Adapter, fix loading of S3Adapter [\#833](https://github.com/ParsePlatform/parse-server/pull/833) (flovilmart)
* Fix: Add field to system schema [\#828](https://github.com/ParsePlatform/parse-server/pull/828) (Marco129)

### 2.1.4

* New: serverInfo endpoint that returns server version and info about the server's features
* Improvement: Add support for badges on iOS
* Improvement: Improve failure handling in cloud code http requests
* Improvement: Add support for queries on pointers and relations
* Improvement: Add support for multiple $in clauses in a query
* Improvement: Add allowClientClassCreation config option
* Improvement: Allow atomically setting subdocument keys
* Improvement: Allow arbitrarily deeply nested roles
* Improvement: Set proper content-type in S3 File Adapter
* Improvement: S3 adapter auto-creates buckets
* Improvement: Better error messages for many errors
* Performance: Improved algorithm for validating client keys
* Experimental: Parse Hooks and Hooks API
* Experimental: Email verification and password reset emails
* Experimental: Improve compatability of logs feature with Parse.com
* Fix: Fix for attempting to delete missing classes via schemas API
* Fix: Allow creation of system classes via schemas API
* Fix: Allow missing where cause in $select
* Fix: Improve handling of invalid object ids
* Fix: Replace query overwriting existing query
* Fix: Propagate installationId in cloud code triggers
* Fix: Session expiresAt is now a Date instead of a string
* Fix: Fix count queries
* Fix: Disallow _Role objects without names or without ACL
* Fix: Better handling of invalid types submitted
* Fix: beforeSave will not be triggered for attempts to save with invalid authData
* Fix: Fix duplicate device token issues on Android
* Fix: Allow empty authData on signup
* Fix: Allow Master Key Headers (CORS)
* Fix: Fix bugs if JavaScript key was not provided in server configuration
* Fix: Parse Files on objects can now be stored without URLs
* Fix: allow both objectId or installationId when modifying installation
* Fix: Command line works better when not given options

### 2.1.3

* Feature: Add initial support for in-app purchases
* Feature: Better error messages when attempting to run the server on a port that is already in use or without a server URL
* Feature: Allow customization of max file size
* Performance: Faster saves if not using beforeSave triggers
* Fix: Send session token in response to current user endpoint
* Fix: Remove triggers for _Session collection
* Fix: Improve compatability of cloud code beforeSave hook for newly created object
* Fix: ACL creation for master key only objects
* Fix: Allow uploading files without Content-Type
* Fix: Add features to http request to match Parse.com
* Fix: Bugs in development script when running from locations other than project root
* Fix: Can pass query constraints in URL
* Fix: Objects with legacy "_tombstone" key now don't cause issues.
* Fix: Allow nested keys in objects to begin with underscores
* Fix: Allow correct headers for CORS

### 2.1.2

* Change: The S3 file adapter constructor requires a bucket name
* Fix: Parse Query should throw if improperly encoded
* Fix: Issue where roles were not used in some requests
* Fix: serverURL will no longer default to api.parse.com/1

### 2.1.1

* Experimental: Schemas API support for DELETE operations
* Fix: Session token issue fetching Users
* Fix: Facebook auth validation
* Fix: Invalid error when deleting missing session

### 2.1.0

* Feature: Support for additional OAuth providers
* Feature: Ability to implement custom OAuth providers
* Feature: Support for deleting Parse Files
* Feature: Allow querying roles
* Feature: Support for logs, extensible via Log Adapter
* Feature: New Push Adapter for sending push notifications through OneSignal
* Feature: Tighter default security for Users
* Feature: Pass parameters to cloud code in query string
* Feature: Disable anonymous users via configuration.
* Experimental: Schemas API support for PUT operations
* Fix: Prevent installation ID from being added to User
* Fix: Becoming a user works properly with sessions
* Fix: Including multiple object when some object are unavailable will get all the objects that are available
* Fix: Invalid URL for Parse Files
* Fix: Making a query without a limit now returns 100 results
* Fix: Expose installation id in cloud code
* Fix: Correct username for Anonymous users
* Fix: Session token issue after fetching user
* Fix: Issues during install process
* Fix: Issue with Unity SDK sending _noBody

### 2.0.8

* Add: support for Android and iOS push notifications
* Experimental: cloud code validation hooks (can mark as non-experimental after we have docs)
* Experimental: support for schemas API (GET and POST only)
* Experimental: support for Parse Config (GET and POST only)
* Fix: Querying objects with equality constraint on array column
* Fix: User logout will remove session token
* Fix: Various files related bugs
* Fix: Force minimum node version 4.3 due to security issues in earlier version
* Performance Improvement: Improved caching
