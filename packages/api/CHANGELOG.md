# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.4.0 (2025-03-08)

### Bug Fixes

- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))
- **@aws-amplify/api:** Content-Type header on init options ([#1720](https://github.com/aws-amplify/amplify-js/issues/1720)) ([dbe37e0](https://github.com/aws-amplify/amplify-js/commit/dbe37e0f5e39619435c206bbe44f0f5a25157d08))
- **@aws-amplify/api:** error handling for signed requests in RestClient ([#1362](https://github.com/aws-amplify/amplify-js/issues/1362)) ([fbbeffb](https://github.com/aws-amplify/amplify-js/commit/fbbeffb535dbb3a53a18c7bd3dd1faa143415238))
- **@aws-amplify/api:** expose tree-shaking for Webpack ([768a5f2](https://github.com/aws-amplify/amplify-js/commit/768a5f2bed0b1ecdfc9518c313a4a550a703fea7))
- **@aws-amplify/api:** graphql API.cancel fix ([#9578](https://github.com/aws-amplify/amplify-js/issues/9578)) ([a9ae27f](https://github.com/aws-amplify/amplify-js/commit/a9ae27f65e1a782321c0be87556f92d2ee432352))
- **@aws-amplify/api:** Improve API.graphql return type ([#9197](https://github.com/aws-amplify/amplify-js/issues/9197)) ([9a0531b](https://github.com/aws-amplify/amplify-js/commit/9a0531b11e9eb6659d36ca0c51c642b3d947f63c))
- **@aws-amplify/api:** send websocket disconnect errors thru observable and add paho client on vendor ([#1698](https://github.com/aws-amplify/amplify-js/issues/1698)) ([72c6b4b](https://github.com/aws-amplify/amplify-js/commit/72c6b4b573621b29ed8da64606986a5f88d900e6))
- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))
- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))
- api/enable ts strict ([#12560](https://github.com/aws-amplify/amplify-js/issues/12560)) ([92789fb](https://github.com/aws-amplify/amplify-js/commit/92789fbb94f19d91f38fb1d90578160666901d0b))
- **api:** allow API options to be merged with root level options ([8965b36](https://github.com/aws-amplify/amplify-js/commit/8965b36ce782a0d3a4045e7b8917f70acf624b5d)), closes [#1302](https://github.com/aws-amplify/amplify-js/issues/1302)
- **api:** issue 12756 by exporting CONNECTION_STATE_CHANGE as a value ([#12757](https://github.com/aws-amplify/amplify-js/issues/12757)) ([bedbdbd](https://github.com/aws-amplify/amplify-js/commit/bedbdbdca2cba466bcce3a06942dd644a5ee08dd))
- **aws-amplify-angular:** Angular rollup ([#1441](https://github.com/aws-amplify/amplify-js/issues/1441)) ([eb84e01](https://github.com/aws-amplify/amplify-js/commit/eb84e012397b8ba4ef93083da7ccc52e1b3d39fb))
- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws-amplify/amplify-js/commit/9ce5a720a659ee01857feadc12f169fdc1c8cbaa))
- bumping version for deploying on unstable tag ([#1706](https://github.com/aws-amplify/amplify-js/issues/1706)) ([b5d6468](https://github.com/aws-amplify/amplify-js/commit/b5d646875cf0121ca0bfac7897cde0852ca0a65f))
- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))
- Client type explicit default type arg ([#12580](https://github.com/aws-amplify/amplify-js/issues/12580)) ([4953a58](https://github.com/aws-amplify/amplify-js/commit/4953a584b95db10dd528c6d1814d8bd47a33ee3d))
- **data:** fix library configuration options headers for subscriptions ([#12590](https://github.com/aws-amplify/amplify-js/issues/12590)) ([#12659](https://github.com/aws-amplify/amplify-js/issues/12659)) ([e101cea](https://github.com/aws-amplify/amplify-js/commit/e101ceac6a901e240d574e30909ca4409fe91357))
- **deps:** fix more implicit deps and add linting ([#14137](https://github.com/aws-amplify/amplify-js/issues/14137)) ([22ca811](https://github.com/aws-amplify/amplify-js/commit/22ca811743f6729d3a00dd71726ff6b5afb44b53))
- Downgrade TS to ~3.6 ([86597db](https://github.com/aws-amplify/amplify-js/commit/86597db2b0704d7aff5b612557536142b82e1731))
- export generateClient return types; don't throw error in genClient ([#12577](https://github.com/aws-amplify/amplify-js/issues/12577)) ([c69c562](https://github.com/aws-amplify/amplify-js/commit/c69c5628458e49d705f2c58dc942bbbc7b9e60f4))
- Lower `tslib` version to improve dependency flattening ([#10588](https://github.com/aws-amplify/amplify-js/issues/10588)) ([a48a17b](https://github.com/aws-amplify/amplify-js/commit/a48a17b1b6adaf09305e338869129b4f7c380fc9))
- **pubsub,api-test:** Do not disconnect active mqtt connections when establishing new ones. ([#1649](https://github.com/aws-amplify/amplify-js/issues/1649)) ([b19d688](https://github.com/aws-amplify/amplify-js/commit/b19d688ecdcb0345a93d2da311e9531b0e2816dd))
- **pubsub,api,appsync:** Use subscriber-id header (AppSync subscription) ([#1618](https://github.com/aws-amplify/amplify-js/issues/1618)) ([03f2517](https://github.com/aws-amplify/amplify-js/commit/03f251758bf79e70e18443b1f5bb7cf19658cb95))
- **pubsub:** Better handling of multiple AppSync subscriptions ([#1611](https://github.com/aws-amplify/amplify-js/issues/1611)) ([6c86500](https://github.com/aws-amplify/amplify-js/commit/6c86500792898a931ac3fd3fd5960d9cc2d28b1a))
- Restore `tslib` dependencies for v5 ([#10512](https://github.com/aws-amplify/amplify-js/issues/10512)) ([b631360](https://github.com/aws-amplify/amplify-js/commit/b6313600557e822f76ddaee8d571d17aa534874c))
- Rollback the manual major version changes and change release command to increment the major versions ([#10638](https://github.com/aws-amplify/amplify-js/issues/10638)) ([660e5d9](https://github.com/aws-amplify/amplify-js/commit/660e5d9e7f18c514dc3c88322a1df6b5d5a5e796))
- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))

### Features

- **@aws-amplify/api,graphql:** DocumentNode support for GraphQL Client ([#2227](https://github.com/aws-amplify/amplify-js/issues/2227)) ([f31d649](https://github.com/aws-amplify/amplify-js/commit/f31d6492862c360fb04e0edb905a859c73c76ea6)), closes [#1237](https://github.com/aws-amplify/amplify-js/issues/1237)
- **@aws-amplify/api:** Add ability to set withCredentials in API ([#3634](https://github.com/aws-amplify/amplify-js/issues/3634)) ([8437578](https://github.com/aws-amplify/amplify-js/commit/8437578b876f06c37e7d7dfed28e05c839ff3b71))
- **@aws-amplify/api:** pass additionalHeaders to graphql function ([#5001](https://github.com/aws-amplify/amplify-js/issues/5001)) ([44b4faf](https://github.com/aws-amplify/amplify-js/commit/44b4faf294088cee533c8a5a6ff3b3d1334162c3))
- **@aws-amplify/api:** publish ES2015/ESM artifacts ([68e0870](https://github.com/aws-amplify/amplify-js/commit/68e087056a0798d465b2c16d6f043e2ae8fd5a7c))
- **@aws-amplify/core:** publish ES2015/ESM artifacts ([d73d5e1](https://github.com/aws-amplify/amplify-js/commit/d73d5e14b5e6a46b36dc00045029693a229046d4))
- **@aws-amplify/datastore:** DataStore - Multi-Auth ([#8008](https://github.com/aws-amplify/amplify-js/issues/8008)) ([dedd564](https://github.com/aws-amplify/amplify-js/commit/dedd5641dfcfce209433088fe9570874cd810997))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)
- add data-schema client ([#12552](https://github.com/aws-amplify/amplify-js/issues/12552)) ([922eb86](https://github.com/aws-amplify/amplify-js/commit/922eb86d030a6b50d05da2191a6d6c8f3b40dcdd))
- Add GraphQL user agent info. ([#12366](https://github.com/aws-amplify/amplify-js/issues/12366)) ([b4c2654](https://github.com/aws-amplify/amplify-js/commit/b4c2654a26c9f64042d21825b05fcd3a9ab96fb6))
- Added Prettier formatting ([4dfd9aa](https://github.com/aws-amplify/amplify-js/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))
- **api-rest:** internal API handling GraphQL requests ([#12138](https://github.com/aws-amplify/amplify-js/issues/12138)) ([3bbd5d9](https://github.com/aws-amplify/amplify-js/commit/3bbd5d91926d90d58fbdab3516ed546c3be7b37c))
- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))
- **api:** expose generateClient from /server subpath ([#12691](https://github.com/aws-amplify/amplify-js/issues/12691)) ([f4d3873](https://github.com/aws-amplify/amplify-js/commit/f4d3873c546f2117eccfd40cef043e115c8de7bf))
- **api:** expose HTTP response from API errors ([#12835](https://github.com/aws-amplify/amplify-js/issues/12835)) ([38c1d56](https://github.com/aws-amplify/amplify-js/commit/38c1d56973c6318fc63ce0bdba888c2b0136d083))
- **api:** REST API handlers ([#12172](https://github.com/aws-amplify/amplify-js/issues/12172)) ([8d0489f](https://github.com/aws-amplify/amplify-js/commit/8d0489f0fafad9eb26fc4bd6be97ba13aa345448))
- Better api graphql types ([#12175](https://github.com/aws-amplify/amplify-js/issues/12175)) ([7236358](https://github.com/aws-amplify/amplify-js/commit/7236358a2412264f97a7e15250ee0d5bafae1e7b))
- change JS target to ES2020 ([#12365](https://github.com/aws-amplify/amplify-js/issues/12365)) ([381b201](https://github.com/aws-amplify/amplify-js/commit/381b2010afb0ca72d392307d4da64af3ca146d6f))
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- **core:** refactor signer implementation to remove polyfill ([#11319](https://github.com/aws-amplify/amplify-js/issues/11319)) ([1603af3](https://github.com/aws-amplify/amplify-js/commit/1603af38ea7faa163f7fcb92fd09c056454c8a0a)), closes [#11273](https://github.com/aws-amplify/amplify-js/issues/11273) [#11307](https://github.com/aws-amplify/amplify-js/issues/11307) [#11310](https://github.com/aws-amplify/amplify-js/issues/11310) [#11120](https://github.com/aws-amplify/amplify-js/issues/11120) [#11320](https://github.com/aws-amplify/amplify-js/issues/11320)
- custom user agent Auth changes for UI handoff ([#11606](https://github.com/aws-amplify/amplify-js/issues/11606)) ([2790f04](https://github.com/aws-amplify/amplify-js/commit/2790f0421b70977547378108e890d442637a45ba))
- Custom user agent enhancement for api-rest ([#11457](https://github.com/aws-amplify/amplify-js/issues/11457)) ([4315ba0](https://github.com/aws-amplify/amplify-js/commit/4315ba05ad2e4463a4ef19431f20f8d5308cdc62))
- custom user agent Geo changes for UI handoff ([#11632](https://github.com/aws-amplify/amplify-js/issues/11632)) ([01bfa8f](https://github.com/aws-amplify/amplify-js/commit/01bfa8f692737bd14422f7dc2eae11ed00c19048))
- custom user agent InternalCognitoUser ([#11709](https://github.com/aws-amplify/amplify-js/issues/11709)) ([4115295](https://github.com/aws-amplify/amplify-js/commit/411529560d225e789af220c554da8cd733b1563c))
- **data:** add custom header support to data schema client ([#12559](https://github.com/aws-amplify/amplify-js/issues/12559)) ([2b1db67](https://github.com/aws-amplify/amplify-js/commit/2b1db67a8fec5f58a1a70f362e43979685a615d5))
- **data:** add GraphQL API V6 support for custom headers, non-Appsync endpoints, and custom domains; add / update tests ([#12185](https://github.com/aws-amplify/amplify-js/issues/12185)) ([6d5afce](https://github.com/aws-amplify/amplify-js/commit/6d5afce390687e925438d6d208a18c84e61399a9))
- **data:** add request cancellation functionality to GraphQL API V6 ([#12142](https://github.com/aws-amplify/amplify-js/issues/12142)) ([335b6f1](https://github.com/aws-amplify/amplify-js/commit/335b6f1ca4398bef8ebcd4861e63e8dff9e15c57))
- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))
- **data:** migrate `zen-observable-ts` to `rxjs` for API category packages ([#12081](https://github.com/aws-amplify/amplify-js/issues/12081)) ([51a8a54](https://github.com/aws-amplify/amplify-js/commit/51a8a548241563f750d90532ea548e475ffff0cc))
- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))
- **pubsub:** Enable PubSub to work along side GraphQL/Appsync ([d8c972d](https://github.com/aws-amplify/amplify-js/commit/d8c972dff0ad4483db8a7122f5bf4952cc8a295a))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- ssr support for graphql ([#12430](https://github.com/aws-amplify/amplify-js/issues/12430)) ([6f4d984](https://github.com/aws-amplify/amplify-js/commit/6f4d98474db133959560232e3e4804ca84c4ba89))
- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))
- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))
- V6 api graphql ssr ([#12214](https://github.com/aws-amplify/amplify-js/issues/12214)) ([d4a8756](https://github.com/aws-amplify/amplify-js/commit/d4a8756ac7bc2fcc91e963ff86fd68e7610d3e73))

### Reverts

- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/aws-amplify/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)
- Revert "chore: Upgrade Prettier (#12582)" (#12600) ([cd937f5](https://github.com/aws-amplify/amplify-js/commit/cd937f56bef5f90a4b42638776656faf746c48aa)), closes [#12582](https://github.com/aws-amplify/amplify-js/issues/12582) [#12600](https://github.com/aws-amplify/amplify-js/issues/12600)
- Revert "update API exports" ([fc87f24](https://github.com/aws-amplify/amplify-js/commit/fc87f24eb8da001525f064050343755bb73ea427))
- Revert "feat: pipe auth user agent details through to service call (#11755)" ([812875f](https://github.com/aws-amplify/amplify-js/commit/812875fce7b85209486b7ff8cad8674fac43d12c)), closes [#11755](https://github.com/aws-amplify/amplify-js/issues/11755)
- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))
- Revert "chore(release): Publish [ci skip]" ([9b03c49](https://github.com/aws-amplify/amplify-js/commit/9b03c49b0ba5eef09920017386c9fae139b6e0f9))

## [6.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.3.3...@aws-amplify/api@6.3.4) (2025-03-07)

**Note:** Version bump only for package @aws-amplify/api

## [6.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.3.2...@aws-amplify/api@6.3.3) (2025-03-05)

**Note:** Version bump only for package @aws-amplify/api

## [6.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.3.1...@aws-amplify/api@6.3.2) (2025-02-27)

**Note:** Version bump only for package @aws-amplify/api

## [6.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.3.0...@aws-amplify/api@6.3.1) (2025-02-20)

**Note:** Version bump only for package @aws-amplify/api

# [6.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.2.3...@aws-amplify/api@6.3.0) (2025-02-12)

### Features

- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)

## [6.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.2.2...@aws-amplify/api@6.2.3) (2025-02-04)

### Bug Fixes

- **deps:** fix more implicit deps and add linting ([#14137](https://github.com/aws-amplify/amplify-js/issues/14137)) ([22ca811](https://github.com/aws-amplify/amplify-js/commit/22ca811743f6729d3a00dd71726ff6b5afb44b53))

## [6.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.2.1...@aws-amplify/api@6.2.2) (2025-01-24)

**Note:** Version bump only for package @aws-amplify/api

## [6.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.2.0...@aws-amplify/api@6.2.1) (2025-01-14)

**Note:** Version bump only for package @aws-amplify/api

# [6.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.9...@aws-amplify/api@6.2.0) (2025-01-03)

### Features

- **api:** add custom endpoint support to API ([#14086](https://github.com/aws-amplify/amplify-js/issues/14086)) ([ca2e4b8](https://github.com/aws-amplify/amplify-js/commit/ca2e4b87a456dfe9a027e49bdcd912a2cba8e59d))

## [6.1.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.8...@aws-amplify/api@6.1.9) (2024-12-19)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.7...@aws-amplify/api@6.1.8) (2024-12-12)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.6...@aws-amplify/api@6.1.7) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.5...@aws-amplify/api@6.1.6) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.4...@aws-amplify/api@6.1.5) (2024-11-25)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.3...@aws-amplify/api@6.1.4) (2024-11-20)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.2...@aws-amplify/api@6.1.3) (2024-11-13)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.1...@aws-amplify/api@6.1.2) (2024-11-12)

**Note:** Version bump only for package @aws-amplify/api

## [6.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.1.0...@aws-amplify/api@6.1.1) (2024-10-31)

**Note:** Version bump only for package @aws-amplify/api

# [6.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.56...@aws-amplify/api@6.1.0) (2024-10-29)

### Features

- **data:** events client ([#13923](https://github.com/aws-amplify/amplify-js/issues/13923)) ([847fb51](https://github.com/aws-amplify/amplify-js/commit/847fb51acee1ee8585503625a6f73d67265217d0))

## [6.0.56](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.55...@aws-amplify/api@6.0.56) (2024-10-25)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.55](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.54...@aws-amplify/api@6.0.55) (2024-10-21)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.54](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.53...@aws-amplify/api@6.0.54) (2024-10-15)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.53](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.52...@aws-amplify/api@6.0.53) (2024-10-05)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.52](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.51...@aws-amplify/api@6.0.52) (2024-09-30)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.51](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.50...@aws-amplify/api@6.0.51) (2024-09-17)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.50](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.49...@aws-amplify/api@6.0.50) (2024-09-16)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.49](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.48...@aws-amplify/api@6.0.49) (2024-09-04)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.48](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.47...@aws-amplify/api@6.0.48) (2024-09-03)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.47](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.46...@aws-amplify/api@6.0.47) (2024-08-26)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.46](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.45...@aws-amplify/api@6.0.46) (2024-08-21)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.45](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.44...@aws-amplify/api@6.0.45) (2024-08-15)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.44](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.43...@aws-amplify/api@6.0.44) (2024-08-07)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.43](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.42...@aws-amplify/api@6.0.43) (2024-08-05)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.42](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.41...@aws-amplify/api@6.0.42) (2024-07-23)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.41](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.40...@aws-amplify/api@6.0.41) (2024-07-22)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.40](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.39...@aws-amplify/api@6.0.40) (2024-07-19)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.39](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.38...@aws-amplify/api@6.0.39) (2024-07-08)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.38](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.37...@aws-amplify/api@6.0.38) (2024-06-24)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.37](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.36...@aws-amplify/api@6.0.37) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.36](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.35...@aws-amplify/api@6.0.36) (2024-06-04)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.35](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.34...@aws-amplify/api@6.0.35) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.34](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.33...@aws-amplify/api@6.0.34) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.33](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.32...@aws-amplify/api@6.0.33) (2024-05-13)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.32](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.31...@aws-amplify/api@6.0.32) (2024-05-07)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.30...@aws-amplify/api@6.0.31) (2024-04-29)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.29...@aws-amplify/api@6.0.30) (2024-04-26)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.28...@aws-amplify/api@6.0.29) (2024-04-22)

**Note:** Version bump only for package @aws-amplify/api

## [6.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@6.0.27...@aws-amplify/api@6.0.28) (2024-04-09)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.27 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.26 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.25 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.24 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.22 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.21 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 6.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/api

## 6.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/api

## 5.4.4 (2023-08-23)

**Note:** Version bump only for package @aws-amplify/api

## 5.4.3 (2023-08-22)

**Note:** Version bump only for package @aws-amplify/api

## 5.4.2 (2023-08-17)

**Note:** Version bump only for package @aws-amplify/api

## 5.4.1 (2023-08-10)

**Note:** Version bump only for package @aws-amplify/api

# [5.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.3.5...@aws-amplify/api@5.4.0) (2023-07-31)

### Features

- custom user agent Geo changes for UI handoff ([#11632](https://github.com/aws-amplify/amplify-js/issues/11632)) ([01bfa8f](https://github.com/aws-amplify/amplify-js/commit/01bfa8f692737bd14422f7dc2eae11ed00c19048))

## [5.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.3.4...@aws-amplify/api@5.3.5) (2023-07-20)

**Note:** Version bump only for package @aws-amplify/api

## [5.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.3.3...@aws-amplify/api@5.3.4) (2023-07-13)

**Note:** Version bump only for package @aws-amplify/api

## [5.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.3.2...@aws-amplify/api@5.3.3) (2023-06-28)

**Note:** Version bump only for package @aws-amplify/api

## [5.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.3.1...@aws-amplify/api@5.3.2) (2023-06-27)

**Note:** Version bump only for package @aws-amplify/api

## [5.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.3.0...@aws-amplify/api@5.3.1) (2023-06-21)

**Note:** Version bump only for package @aws-amplify/api

# [5.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.2.1...@aws-amplify/api@5.3.0) (2023-06-20)

### Features

- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- Custom user agent enhancement for api-rest ([#11457](https://github.com/aws-amplify/amplify-js/issues/11457)) ([4315ba0](https://github.com/aws-amplify/amplify-js/commit/4315ba05ad2e4463a4ef19431f20f8d5308cdc62))
- user agent enhancements - cross-category api>api-graphql>pubsub ([#11368](https://github.com/aws-amplify/amplify-js/issues/11368)) ([a88dda2](https://github.com/aws-amplify/amplify-js/commit/a88dda202919aa1d4dc2af48f33c3533d8626261))

## [5.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.2.0...@aws-amplify/api@5.2.1) (2023-06-14)

**Note:** Version bump only for package @aws-amplify/api

# [5.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.1.1...@aws-amplify/api@5.2.0) (2023-06-05)

### Bug Fixes

- address feedbacks ([2d6eecf](https://github.com/aws-amplify/amplify-js/commit/2d6eecfa4763a6cfb6aeaabedd49a530c6420dcd))

### Features

- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))

## [5.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.1.0...@aws-amplify/api@5.1.1) (2023-05-27)

**Note:** Version bump only for package @aws-amplify/api

# [5.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.31...@aws-amplify/api@5.1.0) (2023-05-12)

### Features

- **core:** refactor signer implementation to remove polyfill ([#11319](https://github.com/aws-amplify/amplify-js/issues/11319)) ([1603af3](https://github.com/aws-amplify/amplify-js/commit/1603af38ea7faa163f7fcb92fd09c056454c8a0a)), closes [#11273](https://github.com/aws-amplify/amplify-js/issues/11273) [#11307](https://github.com/aws-amplify/amplify-js/issues/11307) [#11310](https://github.com/aws-amplify/amplify-js/issues/11310) [#11120](https://github.com/aws-amplify/amplify-js/issues/11120) [#11320](https://github.com/aws-amplify/amplify-js/issues/11320)

## [5.0.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.30...@aws-amplify/api@5.0.31) (2023-05-04)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.29...@aws-amplify/api@5.0.30) (2023-04-27)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.28...@aws-amplify/api@5.0.29) (2023-04-20)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.27...@aws-amplify/api@5.0.28) (2023-04-18)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.27](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.26...@aws-amplify/api@5.0.27) (2023-04-13)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.26](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.25...@aws-amplify/api@5.0.26) (2023-04-12)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.24...@aws-amplify/api@5.0.25) (2023-04-06)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.23...@aws-amplify/api@5.0.24) (2023-04-04)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.22...@aws-amplify/api@5.0.23) (2023-03-30)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.21...@aws-amplify/api@5.0.22) (2023-03-23)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.20...@aws-amplify/api@5.0.21) (2023-03-21)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.19...@aws-amplify/api@5.0.20) (2023-03-16)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.18...@aws-amplify/api@5.0.19) (2023-03-13)

### Bug Fixes

- Run ts coverage check with test ([#11047](https://github.com/aws-amplify/amplify-js/issues/11047)) ([430bedf](https://github.com/aws-amplify/amplify-js/commit/430bedfd0d0618bd0093b488233521356feef787))

## [5.0.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.17...@aws-amplify/api@5.0.18) (2023-03-08)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.16...@aws-amplify/api@5.0.17) (2023-03-06)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.15...@aws-amplify/api@5.0.16) (2023-02-24)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.14...@aws-amplify/api@5.0.15) (2023-02-16)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.13...@aws-amplify/api@5.0.14) (2023-02-09)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.12...@aws-amplify/api@5.0.13) (2023-02-08)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.11...@aws-amplify/api@5.0.12) (2023-01-30)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.10...@aws-amplify/api@5.0.11) (2023-01-19)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.9...@aws-amplify/api@5.0.10) (2023-01-13)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.8...@aws-amplify/api@5.0.9) (2023-01-10)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.7...@aws-amplify/api@5.0.8) (2022-12-27)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.6...@aws-amplify/api@5.0.7) (2022-12-16)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.5...@aws-amplify/api@5.0.6) (2022-12-15)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.4...@aws-amplify/api@5.0.5) (2022-12-06)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.3...@aws-amplify/api@5.0.4) (2022-11-23)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.2...@aws-amplify/api@5.0.3) (2022-11-19)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.1...@aws-amplify/api@5.0.2) (2022-11-16)

**Note:** Version bump only for package @aws-amplify/api

## [5.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@5.0.0...@aws-amplify/api@5.0.1) (2022-11-11)

**Note:** Version bump only for package @aws-amplify/api

# [5.0.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.61...@aws-amplify/api@5.0.0) (2022-11-09)

### Bug Fixes

- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))

### Features

- Setup tslib & importHelpers to improve bundle size ([#10435](https://github.com/aws-amplify/amplify-js/pull/10435))
- Migrate auth and amazon-cognito-identity-js to use @aws-crypto/sha256-js ([#10523](https://github.com/aws-amplify/amplify-js/pull/10523))
- Remove (most) default exports ([10461](https://github.com/aws-amplify/amplify-js/pull/10461))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)

## [4.0.60](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.59...@aws-amplify/api@4.0.60) (2022-10-27)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.59](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.58...@aws-amplify/api@4.0.59) (2022-10-26)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.58](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.57...@aws-amplify/api@4.0.58) (2022-10-25)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.57](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.56...@aws-amplify/api@4.0.57) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.56](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.55...@aws-amplify/api@4.0.56) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.55](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.53...@aws-amplify/api@4.0.55) (2022-09-30)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.54](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.53...@aws-amplify/api@4.0.54) (2022-09-20)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.53](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.52...@aws-amplify/api@4.0.53) (2022-09-08)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.52](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.51...@aws-amplify/api@4.0.52) (2022-09-01)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.51](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.50...@aws-amplify/api@4.0.51) (2022-08-23)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.50](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.49...@aws-amplify/api@4.0.50) (2022-08-18)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.49](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.48...@aws-amplify/api@4.0.49) (2022-08-16)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.48](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.47...@aws-amplify/api@4.0.48) (2022-08-01)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.47](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.46...@aws-amplify/api@4.0.47) (2022-07-28)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.46](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.45...@aws-amplify/api@4.0.46) (2022-07-21)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.45](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.44...@aws-amplify/api@4.0.45) (2022-07-07)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.44](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.43...@aws-amplify/api@4.0.44) (2022-06-18)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.43](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.42...@aws-amplify/api@4.0.43) (2022-06-15)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.42](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.41...@aws-amplify/api@4.0.42) (2022-05-24)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.41](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.40...@aws-amplify/api@4.0.41) (2022-05-23)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.40](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.39...@aws-amplify/api@4.0.40) (2022-05-12)

### Bug Fixes

- **@aws-amplify/api:** graphql API.cancel fix ([#9578](https://github.com/aws-amplify/amplify-js/issues/9578)) ([a9ae27f](https://github.com/aws-amplify/amplify-js/commit/a9ae27f65e1a782321c0be87556f92d2ee432352))

## [4.0.39](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.38...@aws-amplify/api@4.0.39) (2022-05-03)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.38](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.37...@aws-amplify/api@4.0.38) (2022-04-14)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.37](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.36...@aws-amplify/api@4.0.37) (2022-04-04)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.36](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.35...@aws-amplify/api@4.0.36) (2022-03-28)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.35](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.34...@aws-amplify/api@4.0.35) (2022-03-22)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.34](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.33...@aws-amplify/api@4.0.34) (2022-03-10)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.33](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.32...@aws-amplify/api@4.0.33) (2022-02-28)

### Bug Fixes

- **@aws-amplify/api:** Improve API.graphql return type ([#9197](https://github.com/aws-amplify/amplify-js/issues/9197)) ([9a0531b](https://github.com/aws-amplify/amplify-js/commit/9a0531b11e9eb6659d36ca0c51c642b3d947f63c))

## [4.0.32](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.31...@aws-amplify/api@4.0.32) (2022-02-03)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.30...@aws-amplify/api@4.0.31) (2022-01-27)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.29...@aws-amplify/api@4.0.30) (2022-01-07)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.28...@aws-amplify/api@4.0.29) (2021-12-16)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.27...@aws-amplify/api@4.0.28) (2021-12-03)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.27](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.26...@aws-amplify/api@4.0.27) (2021-12-02)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.26](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.25...@aws-amplify/api@4.0.26) (2021-11-18)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.24...@aws-amplify/api@4.0.25) (2021-11-16)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.23...@aws-amplify/api@4.0.24) (2021-11-12)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.22...@aws-amplify/api@4.0.23) (2021-11-09)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.21...@aws-amplify/api@4.0.22) (2021-10-28)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.20...@aws-amplify/api@4.0.21) (2021-10-21)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.19...@aws-amplify/api@4.0.20) (2021-10-07)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.18...@aws-amplify/api@4.0.19) (2021-09-30)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.17...@aws-amplify/api@4.0.18) (2021-09-24)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.16...@aws-amplify/api@4.0.17) (2021-09-22)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.15...@aws-amplify/api@4.0.16) (2021-09-17)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.14...@aws-amplify/api@4.0.15) (2021-09-09)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.13...@aws-amplify/api@4.0.14) (2021-09-07)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.12...@aws-amplify/api@4.0.13) (2021-09-04)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.11...@aws-amplify/api@4.0.12) (2021-09-02)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.10...@aws-amplify/api@4.0.11) (2021-08-26)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.9...@aws-amplify/api@4.0.10) (2021-08-19)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.8...@aws-amplify/api@4.0.9) (2021-08-12)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.7...@aws-amplify/api@4.0.8) (2021-07-28)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.6...@aws-amplify/api@4.0.7) (2021-07-22)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.5...@aws-amplify/api@4.0.6) (2021-07-16)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.4...@aws-amplify/api@4.0.5) (2021-07-08)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.3...@aws-amplify/api@4.0.4) (2021-06-24)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.2...@aws-amplify/api@4.0.3) (2021-06-18)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@4.0.1...@aws-amplify/api@4.0.2) (2021-06-10)

**Note:** Version bump only for package @aws-amplify/api

## [4.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.3.2...@aws-amplify/api@4.0.1) (2021-05-26)

**Note:** Version bump only for package @aws-amplify/api

## [3.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.3.1...@aws-amplify/api@3.3.2) (2021-05-14)

**Note:** Version bump only for package @aws-amplify/api

## [3.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.3.0...@aws-amplify/api@3.3.1) (2021-05-11)

**Note:** Version bump only for package @aws-amplify/api

# [3.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.30...@aws-amplify/api@3.3.0) (2021-05-06)

### Features

- **@aws-amplify/datastore:** DataStore - Multi-Auth ([#8008](https://github.com/aws-amplify/amplify-js/issues/8008)) ([dedd564](https://github.com/aws-amplify/amplify-js/commit/dedd5641dfcfce209433088fe9570874cd810997))

## [3.2.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.29...@aws-amplify/api@3.2.30) (2021-04-15)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.28...@aws-amplify/api@3.2.29) (2021-03-25)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.27...@aws-amplify/api@3.2.28) (2021-03-18)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.27](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.26...@aws-amplify/api@3.2.27) (2021-03-12)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.26](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.25...@aws-amplify/api@3.2.26) (2021-03-08)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.24...@aws-amplify/api@3.2.25) (2021-03-03)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.23...@aws-amplify/api@3.2.24) (2021-02-25)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.22...@aws-amplify/api@3.2.23) (2021-02-18)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.21...@aws-amplify/api@3.2.22) (2021-02-15)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.20...@aws-amplify/api@3.2.21) (2021-02-09)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.19...@aws-amplify/api@3.2.20) (2021-02-03)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.18...@aws-amplify/api@3.2.19) (2021-02-01)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.17...@aws-amplify/api@3.2.18) (2021-01-29)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.16...@aws-amplify/api@3.2.17) (2021-01-07)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.15...@aws-amplify/api@3.2.16) (2020-12-17)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.14...@aws-amplify/api@3.2.15) (2020-12-10)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.13...@aws-amplify/api@3.2.14) (2020-11-30)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.12...@aws-amplify/api@3.2.13) (2020-11-23)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.11...@aws-amplify/api@3.2.12) (2020-11-20)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.10...@aws-amplify/api@3.2.11) (2020-11-13)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.9...@aws-amplify/api@3.2.10) (2020-11-03)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.8...@aws-amplify/api@3.2.9) (2020-10-31)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.7...@aws-amplify/api@3.2.8) (2020-10-29)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.6...@aws-amplify/api@3.2.7) (2020-10-15)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.5...@aws-amplify/api@3.2.6) (2020-10-01)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.4...@aws-amplify/api@3.2.5) (2020-09-25)

### Bug Fixes

- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))

## [3.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.3...@aws-amplify/api@3.2.4) (2020-09-16)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.2...@aws-amplify/api@3.2.3) (2020-09-15)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.1...@aws-amplify/api@3.2.2) (2020-09-10)

**Note:** Version bump only for package @aws-amplify/api

## [3.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.2.0...@aws-amplify/api@3.2.1) (2020-09-03)

**Note:** Version bump only for package @aws-amplify/api

# [3.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.24...@aws-amplify/api@3.2.0) (2020-09-03)

### Features

- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))

## [3.1.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.23...@aws-amplify/api@3.1.24) (2020-09-01)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.22...@aws-amplify/api@3.1.23) (2020-08-19)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.21...@aws-amplify/api@3.1.22) (2020-08-06)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.20...@aws-amplify/api@3.1.21) (2020-07-27)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.19...@aws-amplify/api@3.1.20) (2020-07-22)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.18...@aws-amplify/api@3.1.19) (2020-07-09)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.17...@aws-amplify/api@3.1.18) (2020-07-07)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.16...@aws-amplify/api@3.1.17) (2020-06-18)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.15...@aws-amplify/api@3.1.16) (2020-06-09)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.14...@aws-amplify/api@3.1.15) (2020-06-04)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.13...@aws-amplify/api@3.1.14) (2020-06-03)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.12...@aws-amplify/api@3.1.13) (2020-06-02)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.11...@aws-amplify/api@3.1.12) (2020-05-26)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.10...@aws-amplify/api@3.1.11) (2020-05-22)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.9...@aws-amplify/api@3.1.10) (2020-05-14)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.8...@aws-amplify/api@3.1.9) (2020-04-30)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.7...@aws-amplify/api@3.1.8) (2020-04-24)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.6...@aws-amplify/api@3.1.7) (2020-04-14)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.5...@aws-amplify/api@3.1.6) (2020-04-08)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.4...@aws-amplify/api@3.1.5) (2020-04-07)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.3...@aws-amplify/api@3.1.4) (2020-04-03)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.2...@aws-amplify/api@3.1.3) (2020-04-02)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.1...@aws-amplify/api@3.1.2) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/api

## [3.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@3.1.0...@aws-amplify/api@3.1.1) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/api

# [3.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.2.1...@aws-amplify/api@3.1.0) (2020-03-31)

### Bug Fixes

- **@aws-amplify/api:** expose tree-shaking for Webpack ([768a5f2](https://github.com/aws-amplify/amplify-js/commit/768a5f2bed0b1ecdfc9518c313a4a550a703fea7))

### Features

- **@aws-amplify/api:** publish ES2015/ESM artifacts ([68e0870](https://github.com/aws-amplify/amplify-js/commit/68e087056a0798d465b2c16d6f043e2ae8fd5a7c))
- **@aws-amplify/core:** publish ES2015/ESM artifacts ([d73d5e1](https://github.com/aws-amplify/amplify-js/commit/d73d5e14b5e6a46b36dc00045029693a229046d4))

### Reverts

- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))

## [2.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.2.0...@aws-amplify/api@2.2.1) (2020-03-30)

**Note:** Version bump only for package @aws-amplify/api

# [2.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.1.6...@aws-amplify/api@2.2.0) (2020-03-25)

### Features

- **@aws-amplify/api:** pass additionalHeaders to graphql function ([#5001](https://github.com/aws-amplify/amplify-js/issues/5001)) ([44b4faf](https://github.com/aws-amplify/amplify-js/commit/44b4faf294088cee533c8a5a6ff3b3d1334162c3))

## [2.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.1.5...@aws-amplify/api@2.1.6) (2020-02-28)

**Note:** Version bump only for package @aws-amplify/api

## [2.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.1.3...@aws-amplify/api@2.1.5) (2020-02-07)

### Bug Fixes

- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))

## [2.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.1.2...@aws-amplify/api@2.1.3) (2020-01-10)

### Bug Fixes

- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))

## [2.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.1.1...@aws-amplify/api@2.1.2) (2019-12-18)

**Note:** Version bump only for package @aws-amplify/api

## [2.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@2.1.0...@aws-amplify/api@2.1.1) (2019-12-03)

### Bug Fixes

- Downgrade TS to ~3.6 ([86597db](https://github.com/aws-amplify/amplify-js/commit/86597db2b0704d7aff5b612557536142b82e1731))

# [2.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@1.2.4...@aws-amplify/api@2.1.0) (2019-11-15)

### Features

- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))

## [1.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@1.2.3...@aws-amplify/api@1.2.4) (2019-10-29)

**Note:** Version bump only for package @aws-amplify/api

## [1.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/api@1.2.2...@aws-amplify/api@1.2.3) (2019-10-23)

**Note:** Version bump only for package @aws-amplify/api

## [1.2.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.2.0...@aws-amplify/api@1.2.2) (2019-10-10)

**Note:** Version bump only for package @aws-amplify/api

# [1.2.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.1.3...@aws-amplify/api@1.2.0) (2019-10-10)

### Features

- Added Prettier formatting ([4dfd9aa](https://github.com/aws/aws-amplify/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))

## [1.1.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.1.1...@aws-amplify/api@1.1.3) (2019-09-13)

**Note:** Version bump only for package @aws-amplify/api

## [1.1.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.1.0...@aws-amplify/api@1.1.1) (2019-09-05)

**Note:** Version bump only for package @aws-amplify/api

# [1.1.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.42...@aws-amplify/api@1.1.0) (2019-09-04)

### Features

- **@aws-amplify/api:** Add ability to set withCredentials in API ([#3634](https://github.com/aws/aws-amplify/issues/3634)) ([8437578](https://github.com/aws/aws-amplify/commit/8437578))

## [1.0.42](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.41...@aws-amplify/api@1.0.42) (2019-08-05)

**Note:** Version bump only for package @aws-amplify/api

## [1.0.41](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.40...@aws-amplify/api@1.0.41) (2019-07-31)

**Note:** Version bump only for package @aws-amplify/api

## [1.0.40](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.39...@aws-amplify/api@1.0.40) (2019-07-30)

**Note:** Version bump only for package @aws-amplify/api

## [1.0.39](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.37...@aws-amplify/api@1.0.39) (2019-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.38-unstable.2"></a>

## [1.0.38-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.38-unstable.1...@aws-amplify/api@1.0.38-unstable.2) (2019-07-12)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.38-unstable.1"></a>

## [1.0.38-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.38-unstable.0...@aws-amplify/api@1.0.38-unstable.1) (2019-07-12)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.38-unstable.0"></a>

## [1.0.38-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.37...@aws-amplify/api@1.0.38-unstable.0) (2019-07-10)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.37"></a>

## [1.0.37](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.37-unstable.0...@aws-amplify/api@1.0.37) (2019-07-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.37-unstable.0"></a>

## [1.0.37-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.36...@aws-amplify/api@1.0.37-unstable.0) (2019-06-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.36"></a>

## [1.0.36](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.36-unstable.3...@aws-amplify/api@1.0.36) (2019-06-17)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.36-unstable.3"></a>

## [1.0.36-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.36-unstable.2...@aws-amplify/api@1.0.36-unstable.3) (2019-06-14)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.36-unstable.2"></a>

## [1.0.36-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.36-unstable.1...@aws-amplify/api@1.0.36-unstable.2) (2019-05-31)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.36-unstable.1"></a>

## [1.0.36-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.35...@aws-amplify/api@1.0.36-unstable.1) (2019-05-24)

### Bug Fixes

- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws/aws-amplify/commit/9ce5a72))

<a name="1.0.35"></a>

## [1.0.35](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.35-unstable.2...@aws-amplify/api@1.0.35) (2019-05-14)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.35-unstable.2"></a>

## [1.0.35-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.35-unstable.1...@aws-amplify/api@1.0.35-unstable.2) (2019-05-14)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.35-unstable.1"></a>

## [1.0.35-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.35-unstable.0...@aws-amplify/api@1.0.35-unstable.1) (2019-05-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.35-unstable.0"></a>

## [1.0.35-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34...@aws-amplify/api@1.0.35-unstable.0) (2019-05-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34"></a>

## [1.0.34](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.9...@aws-amplify/api@1.0.34) (2019-05-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.9"></a>

## [1.0.34-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.8...@aws-amplify/api@1.0.34-unstable.9) (2019-05-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.8"></a>

## [1.0.34-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.7...@aws-amplify/api@1.0.34-unstable.8) (2019-05-06)

### Features

- **pubsub:** Enable PubSub to work along side GraphQL/Appsync ([d8c972d](https://github.com/aws/aws-amplify/commit/d8c972d))

<a name="1.0.34-unstable.7"></a>

## [1.0.34-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.6...@aws-amplify/api@1.0.34-unstable.7) (2019-04-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.6"></a>

## [1.0.34-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.5...@aws-amplify/api@1.0.34-unstable.6) (2019-04-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.5"></a>

## [1.0.34-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.4...@aws-amplify/api@1.0.34-unstable.5) (2019-04-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.4"></a>

## [1.0.34-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.3...@aws-amplify/api@1.0.34-unstable.4) (2019-04-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.3"></a>

## [1.0.34-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.2...@aws-amplify/api@1.0.34-unstable.3) (2019-04-17)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.2"></a>

## [1.0.34-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.1...@aws-amplify/api@1.0.34-unstable.2) (2019-04-16)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.1"></a>

## [1.0.34-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.34-unstable.0...@aws-amplify/api@1.0.34-unstable.1) (2019-04-12)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.34-unstable.0"></a>

## [1.0.34-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.33...@aws-amplify/api@1.0.34-unstable.0) (2019-04-12)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.33"></a>

## [1.0.33](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.33-unstable.0...@aws-amplify/api@1.0.33) (2019-04-11)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.33-unstable.0"></a>

## [1.0.33-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.32...@aws-amplify/api@1.0.33-unstable.0) (2019-04-10)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.32"></a>

## [1.0.32](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.32-unstable.1...@aws-amplify/api@1.0.32) (2019-04-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.32-unstable.1"></a>

## [1.0.32-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.32-unstable.0...@aws-amplify/api@1.0.32-unstable.1) (2019-04-08)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.32-unstable.0"></a>

## [1.0.32-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.31...@aws-amplify/api@1.0.32-unstable.0) (2019-04-07)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.31"></a>

## [1.0.31](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.31-unstable.1...@aws-amplify/api@1.0.31) (2019-04-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.31-unstable.1"></a>

## [1.0.31-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.31-unstable.0...@aws-amplify/api@1.0.31-unstable.1) (2019-04-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.31-unstable.0"></a>

## [1.0.31-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30...@aws-amplify/api@1.0.31-unstable.0) (2019-04-02)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30"></a>

## [1.0.30](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.7...@aws-amplify/api@1.0.30) (2019-03-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.7"></a>

## [1.0.30-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.6...@aws-amplify/api@1.0.30-unstable.7) (2019-03-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.6"></a>

## [1.0.30-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.5...@aws-amplify/api@1.0.30-unstable.6) (2019-03-25)

### Bug Fixes

- **api:** allow API options to be merged with root level options ([8965b36](https://github.com/aws/aws-amplify/commit/8965b36)), closes [#1302](https://github.com/aws/aws-amplify/issues/1302)

<a name="1.0.30-unstable.5"></a>

## [1.0.30-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.4...@aws-amplify/api@1.0.30-unstable.5) (2019-03-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.4"></a>

## [1.0.30-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.3...@aws-amplify/api@1.0.30-unstable.4) (2019-03-22)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.3"></a>

## [1.0.30-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.2...@aws-amplify/api@1.0.30-unstable.3) (2019-03-22)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.2"></a>

## [1.0.30-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.1...@aws-amplify/api@1.0.30-unstable.2) (2019-03-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.1"></a>

## [1.0.30-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.30-unstable.0...@aws-amplify/api@1.0.30-unstable.1) (2019-03-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.30-unstable.0"></a>

## [1.0.30-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.29...@aws-amplify/api@1.0.30-unstable.0) (2019-03-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.29"></a>

## [1.0.29](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.29-unstable.1...@aws-amplify/api@1.0.29) (2019-03-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.29-unstable.1"></a>

## [1.0.29-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.29-unstable.0...@aws-amplify/api@1.0.29-unstable.1) (2019-03-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.29-unstable.0"></a>

## [1.0.29-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.28...@aws-amplify/api@1.0.29-unstable.0) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.28"></a>

## [1.0.28](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27...@aws-amplify/api@1.0.28) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27"></a>

## [1.0.27](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.8...@aws-amplify/api@1.0.27) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.8"></a>

## [1.0.27-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.7...@aws-amplify/api@1.0.27-unstable.8) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.7"></a>

## [1.0.27-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.6...@aws-amplify/api@1.0.27-unstable.7) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.6"></a>

## [1.0.27-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.5...@aws-amplify/api@1.0.27-unstable.6) (2019-03-01)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.5"></a>

## [1.0.27-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.4...@aws-amplify/api@1.0.27-unstable.5) (2019-02-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.4"></a>

## [1.0.27-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.3...@aws-amplify/api@1.0.27-unstable.4) (2019-02-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.3"></a>

## [1.0.27-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.2...@aws-amplify/api@1.0.27-unstable.3) (2019-01-21)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.2"></a>

## [1.0.27-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.1...@aws-amplify/api@1.0.27-unstable.2) (2019-01-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.1"></a>

## [1.0.27-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.27-unstable.0...@aws-amplify/api@1.0.27-unstable.1) (2019-01-10)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.27-unstable.0"></a>

## [1.0.27-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.26...@aws-amplify/api@1.0.27-unstable.0) (2019-01-10)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.26"></a>

## [1.0.26](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.26-unstable.0...@aws-amplify/api@1.0.26) (2019-01-10)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.26-unstable.0"></a>

## [1.0.26-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.25...@aws-amplify/api@1.0.26-unstable.0) (2018-12-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.25"></a>

## [1.0.25](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.25-unstable.2...@aws-amplify/api@1.0.25) (2018-12-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.25-unstable.2"></a>

## [1.0.25-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.25-unstable.1...@aws-amplify/api@1.0.25-unstable.2) (2018-12-22)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.25-unstable.1"></a>

## [1.0.25-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.25-unstable.0...@aws-amplify/api@1.0.25-unstable.1) (2018-12-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.25-unstable.0"></a>

## [1.0.25-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.24...@aws-amplify/api@1.0.25-unstable.0) (2018-12-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.24"></a>

## [1.0.24](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.24-unstable.3...@aws-amplify/api@1.0.24) (2018-12-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.24-unstable.3"></a>

## [1.0.24-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.24-unstable.2...@aws-amplify/api@1.0.24-unstable.3) (2018-12-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.24-unstable.2"></a>

## [1.0.24-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.24-unstable.1...@aws-amplify/api@1.0.24-unstable.2) (2018-12-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.24-unstable.1"></a>

## [1.0.24-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.24-unstable.0...@aws-amplify/api@1.0.24-unstable.1) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.24-unstable.0"></a>

## [1.0.24-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.23...@aws-amplify/api@1.0.24-unstable.0) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.23"></a>

## [1.0.23](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22...@aws-amplify/api@1.0.23) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.23-unstable.0"></a>

## [1.0.23-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22...@aws-amplify/api@1.0.23-unstable.0) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22"></a>

## [1.0.22](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.12...@aws-amplify/api@1.0.22) (2018-12-03)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.12"></a>

## [1.0.22-unstable.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.11...@aws-amplify/api@1.0.22-unstable.12) (2018-12-03)

### Features

- **@aws-amplify/api,graphql:** DocumentNode support for GraphQL Client ([#2227](https://github.com/aws/aws-amplify/issues/2227)) ([f31d649](https://github.com/aws/aws-amplify/commit/f31d649)), closes [#1237](https://github.com/aws/aws-amplify/issues/1237)

<a name="1.0.22-unstable.11"></a>

## [1.0.22-unstable.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.10...@aws-amplify/api@1.0.22-unstable.11) (2018-11-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.10"></a>

## [1.0.22-unstable.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.9...@aws-amplify/api@1.0.22-unstable.10) (2018-11-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.9"></a>

## [1.0.22-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.8...@aws-amplify/api@1.0.22-unstable.9) (2018-11-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.8"></a>

## [1.0.22-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.7...@aws-amplify/api@1.0.22-unstable.8) (2018-11-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.7"></a>

## [1.0.22-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.6...@aws-amplify/api@1.0.22-unstable.7) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.6"></a>

## [1.0.22-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.5...@aws-amplify/api@1.0.22-unstable.6) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.5"></a>

## [1.0.22-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.4...@aws-amplify/api@1.0.22-unstable.5) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.4"></a>

## [1.0.22-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.3...@aws-amplify/api@1.0.22-unstable.4) (2018-11-17)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.3"></a>

## [1.0.22-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.2...@aws-amplify/api@1.0.22-unstable.3) (2018-11-16)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.2"></a>

## [1.0.22-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.1...@aws-amplify/api@1.0.22-unstable.2) (2018-11-16)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.1"></a>

## [1.0.22-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.22-unstable.0...@aws-amplify/api@1.0.22-unstable.1) (2018-11-15)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.22-unstable.0"></a>

## [1.0.22-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.21...@aws-amplify/api@1.0.22-unstable.0) (2018-11-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.21"></a>

## [1.0.21](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.21-unstable.1...@aws-amplify/api@1.0.21) (2018-11-12)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.21-unstable.1"></a>

## [1.0.21-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.21-unstable.0...@aws-amplify/api@1.0.21-unstable.1) (2018-11-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.21-unstable.0"></a>

## [1.0.21-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.20...@aws-amplify/api@1.0.21-unstable.0) (2018-11-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.20"></a>

## [1.0.20](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.20-unstable.0...@aws-amplify/api@1.0.20) (2018-11-01)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.20-unstable.0"></a>

## [1.0.20-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.19...@aws-amplify/api@1.0.20-unstable.0) (2018-10-30)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.19"></a>

## [1.0.19](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.19-unstable.1...@aws-amplify/api@1.0.19) (2018-10-29)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.19-unstable.1"></a>

## [1.0.19-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.19-unstable.0...@aws-amplify/api@1.0.19-unstable.1) (2018-10-29)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.19-unstable.0"></a>

## [1.0.19-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.18...@aws-amplify/api@1.0.19-unstable.0) (2018-10-29)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.18"></a>

## [1.0.18](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.18-unstable.3...@aws-amplify/api@1.0.18) (2018-10-17)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.18-unstable.3"></a>

## [1.0.18-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.18-unstable.2...@aws-amplify/api@1.0.18-unstable.3) (2018-10-16)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.18-unstable.2"></a>

## [1.0.18-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.18-unstable.1...@aws-amplify/api@1.0.18-unstable.2) (2018-10-08)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.18-unstable.1"></a>

## [1.0.18-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.18-unstable.0...@aws-amplify/api@1.0.18-unstable.1) (2018-10-05)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.18-unstable.0"></a>

## [1.0.18-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.17-unstable.1...@aws-amplify/api@1.0.18-unstable.0) (2018-10-05)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.17"></a>

## [1.0.17](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.17-unstable.1...@aws-amplify/api@1.0.17) (2018-10-04)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.17-unstable.1"></a>

## [1.0.17-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.17-unstable.0...@aws-amplify/api@1.0.17-unstable.1) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.17-unstable.0"></a>

## [1.0.17-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.16-unstable.4...@aws-amplify/api@1.0.17-unstable.0) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.16"></a>

## [1.0.16](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.16-unstable.4...@aws-amplify/api@1.0.16) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.16-unstable.4"></a>

## [1.0.16-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.16-unstable.3...@aws-amplify/api@1.0.16-unstable.4) (2018-10-01)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.16-unstable.3"></a>

## [1.0.16-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.16-unstable.2...@aws-amplify/api@1.0.16-unstable.3) (2018-09-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.16-unstable.2"></a>

## [1.0.16-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.16-unstable.1...@aws-amplify/api@1.0.16-unstable.2) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.16-unstable.1"></a>

## [1.0.16-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.16-unstable.0...@aws-amplify/api@1.0.16-unstable.1) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.16-unstable.0"></a>

## [1.0.16-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15...@aws-amplify/api@1.0.16-unstable.0) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15"></a>

## [1.0.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.9...@aws-amplify/api@1.0.15) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.9"></a>

## [1.0.15-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.8...@aws-amplify/api@1.0.15-unstable.9) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.8"></a>

## [1.0.15-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.7...@aws-amplify/api@1.0.15-unstable.8) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.7"></a>

## [1.0.15-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.6...@aws-amplify/api@1.0.15-unstable.7) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.6"></a>

## [1.0.15-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.4...@aws-amplify/api@1.0.15-unstable.6) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.5"></a>

## [1.0.15-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.4...@aws-amplify/api@1.0.15-unstable.5) (2018-09-25)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.4"></a>

## [1.0.15-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.3...@aws-amplify/api@1.0.15-unstable.4) (2018-09-25)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.3"></a>

## [1.0.15-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.2...@aws-amplify/api@1.0.15-unstable.3) (2018-09-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.2"></a>

## [1.0.15-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.1...@aws-amplify/api@1.0.15-unstable.2) (2018-09-22)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.15-unstable.1"></a>

## [1.0.15-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.15-unstable.0...@aws-amplify/api@1.0.15-unstable.1) (2018-09-22)

### Bug Fixes

- **pubsub,api-test:** Do not disconnect active mqtt connections when establishing new ones. ([#1649](https://github.com/aws/aws-amplify/issues/1649)) ([b19d688](https://github.com/aws/aws-amplify/commit/b19d688))

<a name="1.0.15-unstable.0"></a>

## [1.0.15-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.14...@aws-amplify/api@1.0.15-unstable.0) (2018-09-22)

### Bug Fixes

- **@aws-amplify/api:** Content-Type header on init options ([#1720](https://github.com/aws/aws-amplify/issues/1720)) ([dbe37e0](https://github.com/aws/aws-amplify/commit/dbe37e0))

<a name="1.0.14"></a>

## [1.0.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.14-unstable.0...@aws-amplify/api@1.0.14) (2018-09-21)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.14-unstable.0"></a>

## [1.0.14-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.13-unstable.3...@aws-amplify/api@1.0.14-unstable.0) (2018-09-21)

### Bug Fixes

- **@aws-amplify/api:** send websocket disconnect errors thru observable and add paho client on vendor ([#1698](https://github.com/aws/aws-amplify/issues/1698)) ([72c6b4b](https://github.com/aws/aws-amplify/commit/72c6b4b))
- bumping version for deploying on unstable tag ([#1706](https://github.com/aws/aws-amplify/issues/1706)) ([b5d6468](https://github.com/aws/aws-amplify/commit/b5d6468))

<a name="1.0.13"></a>

## [1.0.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.12...@aws-amplify/api@1.0.13) (2018-09-21)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.13-unstable.3"></a>

## [1.0.13-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.13-unstable.2...@aws-amplify/api@1.0.13-unstable.3) (2018-09-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.13-unstable.2"></a>

## [1.0.13-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.13-unstable.1...@aws-amplify/api@1.0.13-unstable.2) (2018-09-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.13-unstable.1"></a>

## [1.0.13-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.13-unstable.0...@aws-amplify/api@1.0.13-unstable.1) (2018-09-17)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.13-unstable.0"></a>

## [1.0.13-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.12...@aws-amplify/api@1.0.13-unstable.0) (2018-09-17)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.12"></a>

## [1.0.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.11...@aws-amplify/api@1.0.12) (2018-09-17)

### Bug Fixes

- **pubsub,api,appsync:** Use subscriber-id header (AppSync subscription) ([#1618](https://github.com/aws/aws-amplify/issues/1618)) ([03f2517](https://github.com/aws/aws-amplify/commit/03f2517))

<a name="1.0.11"></a>

## [1.0.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.10...@aws-amplify/api@1.0.11) (2018-09-12)

### Bug Fixes

- **pubsub:** Better handling of multiple AppSync subscriptions ([#1611](https://github.com/aws/aws-amplify/issues/1611)) ([6c86500](https://github.com/aws/aws-amplify/commit/6c86500))

<a name="1.0.10"></a>

## [1.0.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.10-unstable.0...@aws-amplify/api@1.0.10) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.10-unstable.0"></a>

## [1.0.10-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.9...@aws-amplify/api@1.0.10-unstable.0) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.9"></a>

## [1.0.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.8...@aws-amplify/api@1.0.9) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.9-unstable.1"></a>

## [1.0.9-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.8...@aws-amplify/api@1.0.9-unstable.1) (2018-08-30)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.8"></a>

## [1.0.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.26...@aws-amplify/api@1.0.8) (2018-08-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.26"></a>

## [1.0.7-unstable.26](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.25...@aws-amplify/api@1.0.7-unstable.26) (2018-08-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.25"></a>

## [1.0.7-unstable.25](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.24...@aws-amplify/api@1.0.7-unstable.25) (2018-08-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.24"></a>

## [1.0.7-unstable.24](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.23...@aws-amplify/api@1.0.7-unstable.24) (2018-08-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.23"></a>

## [1.0.7-unstable.23](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.21...@aws-amplify/api@1.0.7-unstable.23) (2018-08-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.22"></a>

## [1.0.7-unstable.22](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.21...@aws-amplify/api@1.0.7-unstable.22) (2018-08-25)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.21"></a>

## [1.0.7-unstable.21](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.20...@aws-amplify/api@1.0.7-unstable.21) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.20"></a>

## [1.0.7-unstable.20](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.19...@aws-amplify/api@1.0.7-unstable.20) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.19"></a>

## [1.0.7-unstable.19](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.17...@aws-amplify/api@1.0.7-unstable.19) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.18"></a>

## [1.0.7-unstable.18](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.17...@aws-amplify/api@1.0.7-unstable.18) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.17"></a>

## [1.0.7-unstable.17](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.15...@aws-amplify/api@1.0.7-unstable.17) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.16"></a>

## [1.0.7-unstable.16](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.15...@aws-amplify/api@1.0.7-unstable.16) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.15"></a>

## [1.0.7-unstable.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.14...@aws-amplify/api@1.0.7-unstable.15) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.14"></a>

## [1.0.7-unstable.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.13...@aws-amplify/api@1.0.7-unstable.14) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.13"></a>

## [1.0.7-unstable.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.11...@aws-amplify/api@1.0.7-unstable.13) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.12"></a>

## [1.0.7-unstable.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.11...@aws-amplify/api@1.0.7-unstable.12) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.11"></a>

## [1.0.7-unstable.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.10...@aws-amplify/api@1.0.7-unstable.11) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.10"></a>

## [1.0.7-unstable.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.9...@aws-amplify/api@1.0.7-unstable.10) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.9"></a>

## [1.0.7-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.8...@aws-amplify/api@1.0.7-unstable.9) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.8"></a>

## [1.0.7-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.7...@aws-amplify/api@1.0.7-unstable.8) (2018-08-22)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.7"></a>

## [1.0.7-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.6...@aws-amplify/api@1.0.7-unstable.7) (2018-08-22)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.6"></a>

## [1.0.7-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.5...@aws-amplify/api@1.0.7-unstable.6) (2018-08-21)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.5"></a>

## [1.0.7-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.4...@aws-amplify/api@1.0.7-unstable.5) (2018-08-21)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.4"></a>

## [1.0.7-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.3...@aws-amplify/api@1.0.7-unstable.4) (2018-08-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.3"></a>

## [1.0.7-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.2...@aws-amplify/api@1.0.7-unstable.3) (2018-08-19)

### Bug Fixes

- **aws-amplify-angular:** Angular rollup ([#1441](https://github.com/aws/aws-amplify/issues/1441)) ([eb84e01](https://github.com/aws/aws-amplify/commit/eb84e01))

<a name="1.0.7-unstable.2"></a>

## [1.0.7-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.1...@aws-amplify/api@1.0.7-unstable.2) (2018-08-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.1"></a>

## [1.0.7-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.7-unstable.0...@aws-amplify/api@1.0.7-unstable.1) (2018-08-16)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.7-unstable.0"></a>

## [1.0.7-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6...@aws-amplify/api@1.0.7-unstable.0) (2018-08-15)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6"></a>

## [1.0.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6-unstable.5...@aws-amplify/api@1.0.6) (2018-08-14)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6-unstable.5"></a>

## [1.0.6-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6-unstable.4...@aws-amplify/api@1.0.6-unstable.5) (2018-08-14)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6-unstable.4"></a>

## [1.0.6-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6-unstable.3...@aws-amplify/api@1.0.6-unstable.4) (2018-08-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6-unstable.3"></a>

## [1.0.6-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6-unstable.2...@aws-amplify/api@1.0.6-unstable.3) (2018-08-13)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6-unstable.2"></a>

## [1.0.6-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6-unstable.1...@aws-amplify/api@1.0.6-unstable.2) (2018-08-09)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6-unstable.1"></a>

## [1.0.6-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.6-unstable.0...@aws-amplify/api@1.0.6-unstable.1) (2018-08-07)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.6-unstable.0"></a>

## [1.0.6-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5...@aws-amplify/api@1.0.6-unstable.0) (2018-08-07)

### Bug Fixes

- **@aws-amplify/api:** error handling for signed requests in RestClient ([#1362](https://github.com/aws/aws-amplify/issues/1362)) ([fbbeffb](https://github.com/aws/aws-amplify/commit/fbbeffb))

<a name="1.0.5"></a>

## [1.0.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.7...@aws-amplify/api@1.0.5) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.7"></a>

## [1.0.5-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.6...@aws-amplify/api@1.0.5-unstable.7) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.6"></a>

## [1.0.5-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.5...@aws-amplify/api@1.0.5-unstable.6) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.5"></a>

## [1.0.5-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.3...@aws-amplify/api@1.0.5-unstable.5) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.3"></a>

## [1.0.5-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.2...@aws-amplify/api@1.0.5-unstable.3) (2018-07-31)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.2"></a>

## [1.0.5-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.1...@aws-amplify/api@1.0.5-unstable.2) (2018-07-31)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.1"></a>

## [1.0.5-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.5-unstable.0...@aws-amplify/api@1.0.5-unstable.1) (2018-07-30)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.5-unstable.0"></a>

## [1.0.5-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.4...@aws-amplify/api@1.0.5-unstable.0) (2018-07-30)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.4"></a>

## [1.0.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.4-unstable.1...@aws-amplify/api@1.0.4) (2018-07-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.4-unstable.1"></a>

## [1.0.4-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.4-unstable.0...@aws-amplify/api@1.0.4-unstable.1) (2018-07-28)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.4-unstable.0"></a>

## [1.0.4-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.14...@aws-amplify/api@1.0.4-unstable.0) (2018-07-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.15"></a>

## [1.0.3-unstable.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.14...@aws-amplify/api@1.0.3-unstable.15) (2018-07-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.14"></a>

## [1.0.3-unstable.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.13...@aws-amplify/api@1.0.3-unstable.14) (2018-07-27)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.13"></a>

## [1.0.3-unstable.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.12...@aws-amplify/api@1.0.3-unstable.13) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.12"></a>

## [1.0.3-unstable.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.11...@aws-amplify/api@1.0.3-unstable.12) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.11"></a>

## [1.0.3-unstable.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.10...@aws-amplify/api@1.0.3-unstable.11) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.10"></a>

## [1.0.3-unstable.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.9...@aws-amplify/api@1.0.3-unstable.10) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.9"></a>

## [1.0.3-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.8...@aws-amplify/api@1.0.3-unstable.9) (2018-07-25)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.8"></a>

## [1.0.3-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.7...@aws-amplify/api@1.0.3-unstable.8) (2018-07-25)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.7"></a>

## [1.0.3-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.6...@aws-amplify/api@1.0.3-unstable.7) (2018-07-25)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.6"></a>

## [1.0.3-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.5...@aws-amplify/api@1.0.3-unstable.6) (2018-07-24)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.5"></a>

## [1.0.3-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.4...@aws-amplify/api@1.0.3-unstable.5) (2018-07-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.4"></a>

## [1.0.3-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.3...@aws-amplify/api@1.0.3-unstable.4) (2018-07-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.3"></a>

## [1.0.3-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.2...@aws-amplify/api@1.0.3-unstable.3) (2018-07-23)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.2"></a>

## [1.0.3-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.1...@aws-amplify/api@1.0.3-unstable.2) (2018-07-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.1"></a>

## [1.0.3-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.3-unstable.0...@aws-amplify/api@1.0.3-unstable.1) (2018-07-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.3-unstable.0"></a>

## [1.0.3-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.2...@aws-amplify/api@1.0.3-unstable.0) (2018-07-20)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.2"></a>

## [1.0.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.2-unstable.1...@aws-amplify/api@1.0.2) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.2-unstable.1"></a>

## [1.0.2-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1...@aws-amplify/api@1.0.2-unstable.1) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.2-unstable.0"></a>

## [1.0.2-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1...@aws-amplify/api@1.0.2-unstable.0) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.1"></a>

## [1.0.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1-unstable.4...@aws-amplify/api@1.0.1) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.1-unstable.4"></a>

## [1.0.1-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1-unstable.3...@aws-amplify/api@1.0.1-unstable.4) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.1-unstable.3"></a>

## [1.0.1-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1-unstable.2...@aws-amplify/api@1.0.1-unstable.3) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.1-unstable.2"></a>

## [1.0.1-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1-unstable.1...@aws-amplify/api@1.0.1-unstable.2) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.1-unstable.1"></a>

## [1.0.1-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1...@aws-amplify/api@1.0.1-unstable.1) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="1.0.1-unstable.0"></a>

## [1.0.1-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/api@1.0.1...@aws-amplify/api@1.0.1-unstable.0) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/api

<a name="0.1.1-unstable.0"></a>

## 0.1.1-unstable.0 (2018-06-27)

**Note:** Version bump only for package @aws-amplify/api
