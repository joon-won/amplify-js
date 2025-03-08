# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.12.0 (2025-03-08)

### Bug Fixes

- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))
- **@aws-amplify/auth, amazon-cognito-identity-js:** Include clientMetadata for token refresh ([#7633](https://github.com/aws-amplify/amplify-js/issues/7633)) ([3a9efb0](https://github.com/aws-amplify/amplify-js/commit/3a9efb0b596cf2795d7e1424f011f8e59058ecfb))
- **@aws-amplify/auth:** add totpRequired callback to completeNewPassword ([#6292](https://github.com/aws-amplify/amplify-js/issues/6292)) ([6b52d0b](https://github.com/aws-amplify/amplify-js/commit/6b52d0b1e26ad0b3661536040af3d78ddf20b3e9))
- **@aws-amplify/auth:** add try cache for operations of auth storage ([96c100e](https://github.com/aws-amplify/amplify-js/commit/96c100eecee567df302e7905619dd94196f3901a))
- **@aws-amplify/auth:** add typescript declartions to Auth ([6f02a18](https://github.com/aws-amplify/amplify-js/commit/6f02a18a1d3b042eb1c6bdefa74f4c55c80b7b48))
- **@aws-amplify/auth:** Adjust Cognito error message checking for dis… ([#4546](https://github.com/aws-amplify/amplify-js/issues/4546)) ([2d4d24b](https://github.com/aws-amplify/amplify-js/commit/2d4d24b004e8a52901b673265abbf4fb7241c4e4)), closes [#4544](https://github.com/aws-amplify/amplify-js/issues/4544)
- **@aws-amplify/auth:** Adjust Cognito error message checking for dis… ([#4546](https://github.com/aws-amplify/amplify-js/issues/4546)) ([1baab78](https://github.com/aws-amplify/amplify-js/commit/1baab7807dbaed9bf3915f061053fa2da729fa99)), closes [#4544](https://github.com/aws-amplify/amplify-js/issues/4544)
- **@aws-amplify/auth:** allow return sub attribute to user ([fc48010](https://github.com/aws-amplify/amplify-js/commit/fc48010fe613f1a35284c1ed39f27ecd847ca3e2))
- **@aws-amplify/auth:** Always bypass the cache on setPreferredMFA method ([3b28c98](https://github.com/aws-amplify/amplify-js/commit/3b28c98d1f04713ee8b1b64a039006f81678917e))
- **@aws-amplify/auth:** Call replaceState before dispatchAuthEvent ([#5937](https://github.com/aws-amplify/amplify-js/issues/5937)) ([1e8d4ed](https://github.com/aws-amplify/amplify-js/commit/1e8d4ed9cdecf8b91d5032ae6125afe6b9048873))
- **@aws-amplify/auth:** check if has the right scope to send the request GetUserData ([20bd92b](https://github.com/aws-amplify/amplify-js/commit/20bd92bdf5b26ee8cd41e9975ff869ffd85458f2))
- **@aws-amplify/auth:** check if storage object is valid or not ([d93d36d](https://github.com/aws-amplify/amplify-js/commit/d93d36dd3056bd64cbbf457f13b2fc5eb0de8f27))
- **@aws-amplify/auth:** check if window object exists for browser usage ([17d6a3d](https://github.com/aws-amplify/amplify-js/commit/17d6a3d51303ba38927ccd148abec7185b3ceebd))
- **@aws-amplify/auth:** correctly throw the error when the refresh token is expired ([c61505a](https://github.com/aws-amplify/amplify-js/commit/c61505a9e935aa5cb5d7131f106787c47c03bb92))
- **@aws-amplify/auth:** currentAuthenticatedUser throws error when the user is disabled/deleted ([1b09e2f](https://github.com/aws-amplify/amplify-js/commit/1b09e2f976ad278b3d037e01624bef8a1ec3c310))
- **@aws-amplify/auth:** Default hash to `#` when null ([#6279](https://github.com/aws-amplify/amplify-js/issues/6279)) ([eb97194](https://github.com/aws-amplify/amplify-js/commit/eb9719467f7c143a26bfd2d598b3903ff0815731))
- **@aws-amplify/auth:** define validationData type as object literal ([#8045](https://github.com/aws-amplify/amplify-js/issues/8045)) ([6d0b67c](https://github.com/aws-amplify/amplify-js/commit/6d0b67c4ee4e2275707f462a315b9c8ea536b91d))
- **@aws-amplify/auth:** Device tracking name field fix ([#8502](https://github.com/aws-amplify/amplify-js/issues/8502)) ([02e2bfb](https://github.com/aws-amplify/amplify-js/commit/02e2bfba9ce240ee2cd1c5ae21b27693966a1f9b))
- **@aws-amplify/auth:** dispatching failure event when hosted UI and documentation enhancement for hosted UI ([b13e937](https://github.com/aws-amplify/amplify-js/commit/b13e9378bb67339470e544ab99e4af167158cfca))
- **@aws-amplify/auth:** Encode customState when storing to compare against incoming state for federated sign in ([#3784](https://github.com/aws-amplify/amplify-js/issues/3784)) ([1824134](https://github.com/aws-amplify/amplify-js/commit/182413480c44b286269ca2d160f05a133a468319))
- **@aws-amplify/auth:** expose tree-shaking for Webpack ([7ad2d4e](https://github.com/aws-amplify/amplify-js/commit/7ad2d4e7a2673481ab45b416caed7593b7973f32))
- **@aws-amplify/auth:** fix 'Not Supported' error on SSR ([7f7e93d](https://github.com/aws-amplify/amplify-js/commit/7f7e93d8e3bd885c120f0ef52509e9553b28effc))
- **@aws-amplify/auth:** Fix binding for Auth.currentCredentials ([#6809](https://github.com/aws-amplify/amplify-js/issues/6809)) ([912cf10](https://github.com/aws-amplify/amplify-js/commit/912cf105785584e9ba55f78c86dffed50b0bd6df))
- **@aws-amplify/auth:** fix getPreferredMfa and setPreferredMFA ([c5785b0](https://github.com/aws-amplify/amplify-js/commit/c5785b0f93ffe0efb43ec16acc79cd57cb6e6c5e))
- **@aws-amplify/auth:** fix issue [#1165](https://github.com/aws-amplify/amplify-js/issues/1165) and adds an api to get current preferred mfa type ([6f8a100](https://github.com/aws-amplify/amplify-js/commit/6f8a100966266b552a4298b42018ccda7ea2d0fe))
- **@aws-amplify/auth:** Fix OAuth multiple scopes ([#5850](https://github.com/aws-amplify/amplify-js/issues/5850)) ([f89e545](https://github.com/aws-amplify/amplify-js/commit/f89e545a93f370f0ce91b437514f833b03c6202b))
- **@aws-amplify/auth:** Fix OAuth scopes ([#5844](https://github.com/aws-amplify/amplify-js/issues/5844)) ([e71fee5](https://github.com/aws-amplify/amplify-js/commit/e71fee58bdd940f5fbcd4268f08f53e2b85168bd))
- **@aws-amplify/auth:** Fix react-native oauth signout ([#6376](https://github.com/aws-amplify/amplify-js/issues/6376)) ([c27b816](https://github.com/aws-amplify/amplify-js/commit/c27b8164995220090967f782ccd8e42ad4fa4bdb))
- **@aws-amplify/auth:** fix signIn event message ([#7151](https://github.com/aws-amplify/amplify-js/issues/7151)) ([60b0f9c](https://github.com/aws-amplify/amplify-js/commit/60b0f9cdc80a80f69fe4cfddf48f07166bc0f7de))
- **@aws-amplify/auth:** fix storage bug for auto sign in value ([#10139](https://github.com/aws-amplify/amplify-js/issues/10139)) ([06504e6](https://github.com/aws-amplify/amplify-js/commit/06504e649068f01b85392373fdf80e2ed2a6cada))
- **@aws-amplify/auth:** fix the way clientMetadata is passed ([#6941](https://github.com/aws-amplify/amplify-js/issues/6941)) ([a85c724](https://github.com/aws-amplify/amplify-js/commit/a85c7244b514faaaf82dc1b8f454226294747f6a))
- **@aws-amplify/auth:** Fix types for completeNewPassword ([#6657](https://github.com/aws-amplify/amplify-js/issues/6657)) ([84af018](https://github.com/aws-amplify/amplify-js/commit/84af018657a30382cd489c35a0ebc4c41a63bc26)), closes [#6634](https://github.com/aws-amplify/amplify-js/issues/6634)
- **@aws-amplify/auth:** fix typescript declaration for backward compatibility ([f43bbf4](https://github.com/aws-amplify/amplify-js/commit/f43bbf473753a0eade17ce0f39759449ccb50135))
- **@aws-amplify/auth:** for currentUserPoolUser, only throws error when the user is disabled or deleted ([a800747](https://github.com/aws-amplify/amplify-js/commit/a8007472f05bd087250116b4652da5001e09f440))
- **@aws-amplify/auth:** Force clear credentials when bypassCache: true ([#6581](https://github.com/aws-amplify/amplify-js/issues/6581)) ([128527c](https://github.com/aws-amplify/amplify-js/commit/128527c6834bafe37b2f4c6c5fca9029b03a7e3d))
- **@aws-amplify/auth:** get the user attributes after signing in ([c024263](https://github.com/aws-amplify/amplify-js/commit/c024263be8fe47c835d23efee4931462a91d11a6))
- **@aws-amplify/auth:** give the option to set Federated Identity Pool region ([f370b33](https://github.com/aws-amplify/amplify-js/commit/f370b33b38e13318875d567fc3dbc72148c8d14e))
- **@aws-amplify/auth:** Handle case when `signOut()` promise is rejected ([#3179](https://github.com/aws-amplify/amplify-js/issues/3179)) ([0a2efd4](https://github.com/aws-amplify/amplify-js/commit/0a2efd4526d956ffce219623ce59b14cb6eae075))
- **@aws-amplify/auth:** Handle URIs with no path part ([#8198](https://github.com/aws-amplify/amplify-js/issues/8198)) ([028e4ee](https://github.com/aws-amplify/amplify-js/commit/028e4ee1f7a660ae811b0e1ee846c978958719ae)), closes [#7468](https://github.com/aws-amplify/amplify-js/issues/7468)
- **@aws-amplify/auth:** Ignores case when converting strings to booleans for user attributes ([#8206](https://github.com/aws-amplify/amplify-js/issues/8206)) ([89a2250](https://github.com/aws-amplify/amplify-js/commit/89a225059f6c0232aca3e1f3659348a984a5f277))
- **@aws-amplify/auth:** Improve OAuth flow in react native ([#3698](https://github.com/aws-amplify/amplify-js/issues/3698)) ([799a1cf](https://github.com/aws-amplify/amplify-js/commit/799a1cfe59f7244f1cc51bdc0220a6c4ebf81455)), closes [#3681](https://github.com/aws-amplify/amplify-js/issues/3681)
- **@aws-amplify/auth:** incorrect return type for Auth.resendSignUp ([#5112](https://github.com/aws-amplify/amplify-js/issues/5112)) ([9164b37](https://github.com/aws-amplify/amplify-js/commit/9164b37cb7669c9dd08927dde58dccbefad25194))
- **@aws-amplify/auth:** Invalid session cleanup ([#9628](https://github.com/aws-amplify/amplify-js/issues/9628)) ([7459d54](https://github.com/aws-amplify/amplify-js/commit/7459d54ccb21576c1c5a4b45b4b72183364b681b))
- **@aws-amplify/auth:** NotAuthorizedException ([#4281](https://github.com/aws-amplify/amplify-js/issues/4281)) ([023f496](https://github.com/aws-amplify/amplify-js/commit/023f4960d80c9774d85cbc7593175d7380fcbed2))
- **@aws-amplify/auth:** put warning message in the federatedSignIn method ([9fff76a](https://github.com/aws-amplify/amplify-js/commit/9fff76a34e0c7522209e4afda41302d4223faafc))
- **@aws-amplify/auth:** Race condition fixes for OAuth flow ([#5929](https://github.com/aws-amplify/amplify-js/issues/5929)) ([4b6fd33](https://github.com/aws-amplify/amplify-js/commit/4b6fd33c88636bbe9aea81532857003ab52bc1be))
- **@aws-amplify/auth:** react-native - guard for window ([9254312](https://github.com/aws-amplify/amplify-js/commit/9254312a909a7c025920675ea5b8bec7c0c49459))
- **@aws-amplify/auth:** revert break changes in currentAuthenticatedUser ([7c806bd](https://github.com/aws-amplify/amplify-js/commit/7c806bdfced3fafc0db526b9b90d2b1141930047))
- **@aws-amplify/auth:** RN Linking removeEventListener() deprecated [#8902](https://github.com/aws-amplify/amplify-js/issues/8902) ([d9415e2](https://github.com/aws-amplify/amplify-js/commit/d9415e2b292d69418c40b58183098e04b1c8aad7))
- **@aws-amplify/auth:** signout promise on OAuth flow ([#6294](https://github.com/aws-amplify/amplify-js/issues/6294)) ([68af3ab](https://github.com/aws-amplify/amplify-js/commit/68af3abb54d5af4e1bcedacb8e2137e10e2c971c))
- **@aws-amplify/auth:** throw error when failed to sync items from AsyncStorage into Memory ([85c3f32](https://github.com/aws-amplify/amplify-js/commit/85c3f32c2939d11c32e6f129731723b8721637f0))
- **@aws-amplify/auth:** throw error when passing empty object to storage or cookieStorage in configuration ([816a827](https://github.com/aws-amplify/amplify-js/commit/816a827d16a8736d61ec571e19207c9a6b062d97))
- **@aws-amplify/auth:** typo ([2f411ad](https://github.com/aws-amplify/amplify-js/commit/2f411adaa1c4f692931e142f58543a01318aa48c))
- **@aws-amplify/auth:** User Attributes coerced to boolean ([#6180](https://github.com/aws-amplify/amplify-js/issues/6180)) ([8dd9295](https://github.com/aws-amplify/amplify-js/commit/8dd92959fbe11c328ec4f8e467c0929ed1e7e5ca))
- **@aws-amplify/auth:** User may not be fully signed out ([#3172](https://github.com/aws-amplify/amplify-js/issues/3172)) ([2678cc3](https://github.com/aws-amplify/amplify-js/commit/2678cc3f300bb8044b0eb3fdcdef69c9114fcdd5)), closes [#3117](https://github.com/aws-amplify/amplify-js/issues/3117)
- **@aws-amplify/auth:** Valide OAuth state only when generated by Amlify ([#3069](https://github.com/aws-amplify/amplify-js/issues/3069)) ([30e828f](https://github.com/aws-amplify/amplify-js/commit/30e828fa72ca065b9b90d958b0e70cdb427df4ae)), closes [#3054](https://github.com/aws-amplify/amplify-js/issues/3054) [#3055](https://github.com/aws-amplify/amplify-js/issues/3055)
- **@aws-amplify/auth:** Verify totp hub event ([#11049](https://github.com/aws-amplify/amplify-js/issues/11049)) ([2c5b5a7](https://github.com/aws-amplify/amplify-js/commit/2c5b5a7b0494ebb26eeae94885698253fa6c8ca5))
- **@aws-amplify/auth:** wait for cached data loaded into memory before calling getItem ([5fc6d77](https://github.com/aws-amplify/amplify-js/commit/5fc6d77c678ba9160777ad7533052793197ee679))
- **@aws-amplify/core,@aws-amplify/auth:** Use identityPoolRegion param correctly ([#10709](https://github.com/aws-amplify/amplify-js/issues/10709)) ([b4d2769](https://github.com/aws-amplify/amplify-js/commit/b4d27695b3e196cd14b486b9a8db778c9951bc29)), closes [#6462](https://github.com/aws-amplify/amplify-js/issues/6462)
- **@aws-amplify/core:** add try cache for operations of auth storage ([2bf8364](https://github.com/aws-amplify/amplify-js/commit/2bf83647f9ffec51df38786dd446033ef76bc3ba))
- **@aws-amplify/core:** Dummy commit to force version bump ([#8503](https://github.com/aws-amplify/amplify-js/issues/8503)) ([0670ec1](https://github.com/aws-amplify/amplify-js/commit/0670ec17a250089f42b669d53e072719d99a507b))
- **@aws-amplify/core:** refresh manually after TTL has passed ([#7288](https://github.com/aws-amplify/amplify-js/issues/7288)) ([74b895c](https://github.com/aws-amplify/amplify-js/commit/74b895c45e629edc5ecf333e2769f222ae500834))
- **@aws-amplify/core:** retry federation refresh token on network error ([#5728](https://github.com/aws-amplify/amplify-js/issues/5728)) ([bd07ee8](https://github.com/aws-amplify/amplify-js/commit/bd07ee8e8b987021e58b9c25d5e1ef524aa4abbc))
- **@aws-amplify/datastore:** add token to currentAuthenticatedUser for OIDC ([#6858](https://github.com/aws-amplify/amplify-js/issues/6858)) ([61f7478](https://github.com/aws-amplify/amplify-js/commit/61f7478609fce7dd2f25c562aeb887d3f3db4a67))
- **6774:** fixed 'signIn' not being called on successful verification of totp token ([15e7257](https://github.com/aws-amplify/amplify-js/commit/15e7257a306f4e773f0f71617cf569baaae4af9b))
- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))
- add module loader for web browser native module ([#12519](https://github.com/aws-amplify/amplify-js/issues/12519)) ([7dde343](https://github.com/aws-amplify/amplify-js/commit/7dde34332397efc47a174122df0a6efc24b61296))
- Add upkeep to platform/framework caches ([#11505](https://github.com/aws-amplify/amplify-js/issues/11505)) ([03aa356](https://github.com/aws-amplify/amplify-js/commit/03aa3560e921f08717594bdf679b62501bc6de77))
- **amazon-cognito-identity-is, @aws-amplify/auth:** upgrade crypto-js to 4.1.1 to fix bundle size issue ([#8626](https://github.com/aws-amplify/amplify-js/issues/8626)) ([b16f8e7](https://github.com/aws-amplify/amplify-js/commit/b16f8e7801790a59a8ad0c40b598f4962aada60e))
- **amazon-cognito-identity-js:** Missing cognito user challenge name … ([#10047](https://github.com/aws-amplify/amplify-js/issues/10047)) ([de0441b](https://github.com/aws-amplify/amplify-js/commit/de0441b4fa67409ccbc630c42890e2c58ee779fb)), closes [#6974](https://github.com/aws-amplify/amplify-js/issues/6974)
- **amazon-cognito-identity-js:** specify the correct userAgent/deviceName when remembering devices (React Native) ([#10724](https://github.com/aws-amplify/amplify-js/issues/10724)) ([01a5b84](https://github.com/aws-amplify/amplify-js/commit/01a5b84ea010f7fb66c4e19e73301cce82fc7370))
- **amazon-cognito-identity-js:** update random implementation ([#7090](https://github.com/aws-amplify/amplify-js/issues/7090)) ([7048453](https://github.com/aws-amplify/amplify-js/commit/70484532da8a9953384b00b223b2b3ba0c0e845e))
- **auth:** add signInDetails on refreshTokens action ([#13153](https://github.com/aws-amplify/amplify-js/issues/13153)) ([1aafa48](https://github.com/aws-amplify/amplify-js/commit/1aafa4837c45b96d7c8fca5ddacf973097fac19e))
- **auth:** Added missing UserContextData to Cognito User Pool operation SignUp ([#13477](https://github.com/aws-amplify/amplify-js/issues/13477)) ([e6c5f60](https://github.com/aws-amplify/amplify-js/commit/e6c5f60225c6ba0beeb4d5d2ae4cd55615062152))
- **auth:** adds retry logic on `ResourceNotFoundException` ([#12241](https://github.com/aws-amplify/amplify-js/issues/12241)) ([49b394d](https://github.com/aws-amplify/amplify-js/commit/49b394dc3bdc1a3426738f6f331b1ebc65d7d3af))
- **auth:** assign `USERNAME` param returned from service to RespondToAuthChallenge calls ([#12364](https://github.com/aws-amplify/amplify-js/issues/12364)) ([f4be43c](https://github.com/aws-amplify/amplify-js/commit/f4be43c98c73a0a034b31cf4378e2bafe7650176))
- **auth:** associate tokens with credentials ([#11958](https://github.com/aws-amplify/amplify-js/issues/11958)) ([5d62f18](https://github.com/aws-amplify/amplify-js/commit/5d62f18bfdd3821b9c8c92265a6a65891b49652e))
- **auth:** associate unAuth identityId to newly authenticated user's identityId ([#14207](https://github.com/aws-amplify/amplify-js/issues/14207)) ([1cd12bf](https://github.com/aws-amplify/amplify-js/commit/1cd12bf0aa68167ec31235c8f0333aba558cd72b))
- **auth:** bug fixes for credentialsProvider ([#11814](https://github.com/aws-amplify/amplify-js/issues/11814)) ([ed8aa8d](https://github.com/aws-amplify/amplify-js/commit/ed8aa8d6d28e960d5c6ceb873c86df0bf5b6aa8d))
- **auth:** Catch password reset Cognito API error response ([#11274](https://github.com/aws-amplify/amplify-js/issues/11274)) ([18012b0](https://github.com/aws-amplify/amplify-js/commit/18012b0e2856ac0a8fc87a8dee775ffb1528c487))
- **auth:** clear browser tab location before sending final success hub events during OAuth signIn ([#14188](https://github.com/aws-amplify/amplify-js/issues/14188)) ([e924f12](https://github.com/aws-amplify/amplify-js/commit/e924f1298d8ce0fc9ec9e9a21ad41e7f2cb9173a))
- **auth:** clear oauth data before initiating a new oauth flow ([#12409](https://github.com/aws-amplify/amplify-js/issues/12409)) ([4f5f749](https://github.com/aws-amplify/amplify-js/commit/4f5f749e18bb9c131e7083246b468ff2f3e86cde))
- **auth:** clear out identityId as well when clearing credentials for sign out ([#11908](https://github.com/aws-amplify/amplify-js/issues/11908)) ([6fd4a4f](https://github.com/aws-amplify/amplify-js/commit/6fd4a4f5997dd2e2e14bf710bc159b9dc2759f36))
- **auth:** correct unknownError typo ([#12634](https://github.com/aws-amplify/amplify-js/issues/12634)) ([f33cd0a](https://github.com/aws-amplify/amplify-js/commit/f33cd0aadc5d2dcb836b716dd5b0b8e5c440ffaf))
- **auth:** custom `userPoolEndpoint` cannot be applied on the server-side ([#13739](https://github.com/aws-amplify/amplify-js/issues/13739)) ([a76b594](https://github.com/aws-amplify/amplify-js/commit/a76b594562430a85fd37f00bb2788959f7a69d6a))
- **auth:** debouncing get user session calls ([#10654](https://github.com/aws-amplify/amplify-js/issues/10654)) ([056259d](https://github.com/aws-amplify/amplify-js/commit/056259d4b3c3f05d8a3b75565003b3ff1d4ea202))
- **auth:** deleteUser client resp parsing ([#12154](https://github.com/aws-amplify/amplify-js/issues/12154)) ([d6a98fd](https://github.com/aws-amplify/amplify-js/commit/d6a98fdb8dff79c4167f689f5c227bd63c0de130))
- **auth:** dispatch signInWithRedirect error ([#12653](https://github.com/aws-amplify/amplify-js/issues/12653)) ([271546d](https://github.com/aws-amplify/amplify-js/commit/271546de73cbbc8958ccd107a30bd5465ed01740))
- **auth:** Do not sign out client if Oauth signout fails ([#12520](https://github.com/aws-amplify/amplify-js/issues/12520)) ([5f52c64](https://github.com/aws-amplify/amplify-js/commit/5f52c64a47d3828f0f0f20f6588566647ccf871f))
- **auth:** first clear deviceTokens then signout ([#12230](https://github.com/aws-amplify/amplify-js/issues/12230)) ([bd7c838](https://github.com/aws-amplify/amplify-js/commit/bd7c8387185ef93c7ad9928a736dd4368d9a9c55))
- **auth:** handle multiple redirect links ([#12415](https://github.com/aws-amplify/amplify-js/issues/12415)) ([4cd6dc0](https://github.com/aws-amplify/amplify-js/commit/4cd6dc05bfd511ada7db414a954cca9e93add60e))
- **auth:** Impossibility to sign-in when RandomKeyPassword missing ([1ba64c4](https://github.com/aws-amplify/amplify-js/commit/1ba64c4f5d09365cd3df76b46073ac825519cf00))
- **auth:** improve error handling while refreshing auth tokens ([#12802](https://github.com/aws-amplify/amplify-js/issues/12802)) ([d0911f5](https://github.com/aws-amplify/amplify-js/commit/d0911f5f9108f224627491738c2eb7461af0639c))
- **auth:** listen for pageshow event listener ([9844af8](https://github.com/aws-amplify/amplify-js/commit/9844af82f8ea21090b123c64890fb356b25180e3))
- **auth:** oAuthStore is used before a valid OAuth config is confirmed ([#12748](https://github.com/aws-amplify/amplify-js/issues/12748)) ([ae64386](https://github.com/aws-amplify/amplify-js/commit/ae6438686a06f31a1bb69e4e8cadb584baac4b2a))
- **auth:** prevent urlListener from firing auth flow twice with the same URL ([#4798](https://github.com/aws-amplify/amplify-js/issues/4798)) ([cf8738a](https://github.com/aws-amplify/amplify-js/commit/cf8738ac5e7961a163ce158a7383bc27f693475f))
- **auth:** race condision when signInUserSession was skipped ([771adf9](https://github.com/aws-amplify/amplify-js/commit/771adf9bbd81a458ccf351c244629b17e10d0947))
- **auth:** refreshToken unawaited async operation caused race condition ([36de0bb](https://github.com/aws-amplify/amplify-js/commit/36de0bb25514c4724b573ff6810ba1b0203b022b))
- **auth:** Remove react-native related peerDependencies ([#2871](https://github.com/aws-amplify/amplify-js/issues/2871)) ([72f3d94](https://github.com/aws-amplify/amplify-js/commit/72f3d94bdfff374ca9d460744b04cb76dd3ed569))
- **auth:** remove redundant remove guest identityId call ([#13789](https://github.com/aws-amplify/amplify-js/issues/13789)) ([a0d1447](https://github.com/aws-amplify/amplify-js/commit/a0d1447b6234ab1678a837d90deddf805779bc3a))
- **auth:** remove username en/decode logic ([#12299](https://github.com/aws-amplify/amplify-js/issues/12299)) ([d917d53](https://github.com/aws-amplify/amplify-js/commit/d917d539516903046d5bcc3b4ba435af5e8f6227))
- **auth:** rename internal type AuthUserAttribute ([#12103](https://github.com/aws-amplify/amplify-js/issues/12103)) ([346d3b4](https://github.com/aws-amplify/amplify-js/commit/346d3b44e610c5a4dde491ae16ca87af587f38ae))
- **auth:** rename type CognitoAuthUser to AuthUser ([#12500](https://github.com/aws-amplify/amplify-js/issues/12500)) ([02a91a4](https://github.com/aws-amplify/amplify-js/commit/02a91a4f83f18b1a8d04f51d33d270b0c9720224))
- **auth:** replace window history with current browser session's state ([#12781](https://github.com/aws-amplify/amplify-js/issues/12781)) ([44fdfe8](https://github.com/aws-amplify/amplify-js/commit/44fdfe80476a59510514b842da3e93a6472bf506))
- **auth:** returns refreshToken from login ([#12284](https://github.com/aws-amplify/amplify-js/issues/12284)) ([bf9096c](https://github.com/aws-amplify/amplify-js/commit/bf9096c96df5ec2f2b3291215cff0cc02871550f))
- **auth:** revert session debouncer ([#10630](https://github.com/aws-amplify/amplify-js/issues/10630)) ([ad6b5c5](https://github.com/aws-amplify/amplify-js/commit/ad6b5c57e09c55e4a09f48f3140d83a9b3253cba)), closes [#10624](https://github.com/aws-amplify/amplify-js/issues/10624) [#10553](https://github.com/aws-amplify/amplify-js/issues/10553)
- **auth:** sends current user with attributes to hub ([#10947](https://github.com/aws-amplify/amplify-js/issues/10947)) ([4a9a71d](https://github.com/aws-amplify/amplify-js/commit/4a9a71d2299ff70591040cb481ec9e574ece5a60))
- **auth:** session debouncer loads empty signinUserSession ([0ec16d6](https://github.com/aws-amplify/amplify-js/commit/0ec16d6895a3b30d1daa2841d4654480345eac2a))
- **auth:** Setting Store Tokens should only clear tokens that no longer have a value ([#13584](https://github.com/aws-amplify/amplify-js/issues/13584)) ([3606482](https://github.com/aws-amplify/amplify-js/commit/3606482c980766466f2c3f27bd4887c550897c26))
- **auth:** setWaitForInflightOAuth wrongly sets new promise ([8ac3081](https://github.com/aws-amplify/amplify-js/commit/8ac308169d4f46d5b560500f62dca5c0cf9482d1))
- **auth:** signInWithRedirect to complete with code exchange in RN ([ffffbdf](https://github.com/aws-amplify/amplify-js/commit/ffffbdf88dd9004384861d8e1e52dbdfca011f2e))
- **auth:** signInWithRedirect urlListner attaches for non-browser env ([9f12035](https://github.com/aws-amplify/amplify-js/commit/9f12035aa63f1eaa303e9d02c8c008c5e441ff7a))
- **auth:** signUp should always return a userId ([#13181](https://github.com/aws-amplify/amplify-js/issues/13181)) ([962179b](https://github.com/aws-amplify/amplify-js/commit/962179bcc3c443e621e9bb7b522b638b0951df08))
- **auth:** Split urlListener into web/react-native ([b33fee0](https://github.com/aws-amplify/amplify-js/commit/b33fee06aae48b704c1310d7b3da4981e6518498)), closes [#2808](https://github.com/aws-amplify/amplify-js/issues/2808)
- **auth:** Unauthenticated identity throws AuthError without user … ([#10090](https://github.com/aws-amplify/amplify-js/issues/10090)) ([2ac9035](https://github.com/aws-amplify/amplify-js/commit/2ac903516ec295fbf098f6a6644000177f315184))
- **auth:** unsafe access to window object ([#12287](https://github.com/aws-amplify/amplify-js/issues/12287)) ([ee1c414](https://github.com/aws-amplify/amplify-js/commit/ee1c41456a3d9fa2bfdcce21a711d7c1e683a75d))
- **Auth:** update auth type names ([#12050](https://github.com/aws-amplify/amplify-js/issues/12050)) ([5c781a7](https://github.com/aws-amplify/amplify-js/commit/5c781a7947098754bd75a22a7c232d14276bfb56))
- **auth:** update FetchDevicesOutput output type to include name attribute ([#14186](https://github.com/aws-amplify/amplify-js/issues/14186)) ([289f3e8](https://github.com/aws-amplify/amplify-js/commit/289f3e8d1bbf8c95abffb553b612699f43cdccb5))
- **auth:** update service returned identity id to the in-memory store ([#14268](https://github.com/aws-amplify/amplify-js/issues/14268)) ([d7ada2b](https://github.com/aws-amplify/amplify-js/commit/d7ada2ba738bc6a482612096466ad916440e0247))
- **auth:** use AuthVerifiableAttributeKey interface ([#12417](https://github.com/aws-amplify/amplify-js/issues/12417)) ([b2a75ee](https://github.com/aws-amplify/amplify-js/commit/b2a75ee75e3ce03721e10e68f23c7ba5f538db80))
- **auth:** use base64Encoder instead of smithy base64 tool ([9af9114](https://github.com/aws-amplify/amplify-js/commit/9af91141e5fb0ed459aa95916124432124be9407))
- **auth:** use the amplify self-vended TextEncoder proxy ([c698de2](https://github.com/aws-amplify/amplify-js/commit/c698de2e08cf31125c7ce35d261350b5055eda1a))
- **auth:** vend the helpful types for custom providers ([#12497](https://github.com/aws-amplify/amplify-js/issues/12497)) ([875e28a](https://github.com/aws-amplify/amplify-js/commit/875e28aeca78b65cc391d82226eba58910978866))
- **auth:** webpack bundle cannot resolve class TokenOrchestrator ([c4cf6d5](https://github.com/aws-amplify/amplify-js/commit/c4cf6d57d06138e60ec4ad89c7b9a0f5e55062f8))
- **aws-amplify-angular:** Angular rollup ([#1441](https://github.com/aws-amplify/amplify-js/issues/1441)) ([eb84e01](https://github.com/aws-amplify/amplify-js/commit/eb84e012397b8ba4ef93083da7ccc52e1b3d39fb))
- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws-amplify/amplify-js/commit/9ce5a720a659ee01857feadc12f169fdc1c8cbaa))
- bump package versions ([#13254](https://github.com/aws-amplify/amplify-js/issues/13254)) ([aa490b9](https://github.com/aws-amplify/amplify-js/commit/aa490b9bcbd2a442d9726937cfa59ef8b7859306))
- bumping version for deploying on unstable tag ([#1706](https://github.com/aws-amplify/amplify-js/issues/1706)) ([b5d6468](https://github.com/aws-amplify/amplify-js/commit/b5d646875cf0121ca0bfac7897cde0852ca0a65f))
- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))
- **core, auth, aws-amplify-react:** fix tests ([bdd162c](https://github.com/aws-amplify/amplify-js/commit/bdd162c2dd03488168a299f8dd8c554f76ca8a12))
- **datastore:** crypto random numbers for ulid factory ([#12435](https://github.com/aws-amplify/amplify-js/issues/12435)) ([f405448](https://github.com/aws-amplify/amplify-js/commit/f405448e81a252e5f377d935a9f8d9d5c1532047))
- **deps:** avoid using implicit dependencies for auth ([#14122](https://github.com/aws-amplify/amplify-js/issues/14122)) ([f2a0b74](https://github.com/aws-amplify/amplify-js/commit/f2a0b74bfac5f10014e644c509d5cff5d5da9e59))
- device metadata for multiple users on single device ([#12209](https://github.com/aws-amplify/amplify-js/issues/12209)) ([e1cbf72](https://github.com/aws-amplify/amplify-js/commit/e1cbf72cd2538c72f90285ccded646d1121b92d1))
- function parameters partiy with signIn ([#8713](https://github.com/aws-amplify/amplify-js/issues/8713)) ([b5d4243](https://github.com/aws-amplify/amplify-js/commit/b5d424372d382e638bd58844ec34c512026cae02))
- **inapp:** remove implemented todos and add clearMessages API ([#12405](https://github.com/aws-amplify/amplify-js/issues/12405)) ([ef40632](https://github.com/aws-amplify/amplify-js/commit/ef4063250bf2fa484a1ec3cade10d34ea39318c8))
- Lower `tslib` version to improve dependency flattening ([#10588](https://github.com/aws-amplify/amplify-js/issues/10588)) ([a48a17b](https://github.com/aws-amplify/amplify-js/commit/a48a17b1b6adaf09305e338869129b4f7c380fc9))
- refactor to avoid importing from current index ([#12636](https://github.com/aws-amplify/amplify-js/issues/12636)) ([a353e0d](https://github.com/aws-amplify/amplify-js/commit/a353e0d777a1ca5e57aa4b2cda48d147ee1d4803))
- remove all existence of serviceOptions ([#12240](https://github.com/aws-amplify/amplify-js/issues/12240)) ([923fae0](https://github.com/aws-amplify/amplify-js/commit/923fae03496b835cbd4bd49d10f13744e175b080))
- remove deviceName from device management APIs ([#12258](https://github.com/aws-amplify/amplify-js/issues/12258)) ([261f2a5](https://github.com/aws-amplify/amplify-js/commit/261f2a548bcabce405f80ae4c1746e67eaf922aa))
- remove session test ([10fa350](https://github.com/aws-amplify/amplify-js/commit/10fa35015ac0e57d8239ca4b3aae8beee5f3ae9e))
- remove void SignOutOutput type ([#12257](https://github.com/aws-amplify/amplify-js/issues/12257)) ([2bf18e7](https://github.com/aws-amplify/amplify-js/commit/2bf18e7ea9d40b5ff1b637908d0bef9ecff1b43b))
- **repo:** \*\*/package.json files glob broke size-limit dual-publish ([923f5b1](https://github.com/aws-amplify/amplify-js/commit/923f5b16caf00ecc90987bd1eb7742d5ba5a98fd))
- Resolving in-flight OAuth promises when sign-in flow cancelled ([#12474](https://github.com/aws-amplify/amplify-js/issues/12474)) ([5e48cb1](https://github.com/aws-amplify/amplify-js/commit/5e48cb1c4c4a31357cd06f19b7f135f8a307bb06))
- Restore `tslib` dependencies for v5 ([#10512](https://github.com/aws-amplify/amplify-js/issues/10512)) ([b631360](https://github.com/aws-amplify/amplify-js/commit/b6313600557e822f76ddaee8d571d17aa534874c))
- Rollback the manual major version changes and change release command to increment the major versions ([#10638](https://github.com/aws-amplify/amplify-js/issues/10638)) ([660e5d9](https://github.com/aws-amplify/amplify-js/commit/660e5d9e7f18c514dc3c88322a1df6b5d5a5e796))
- **ssr-adapter:** refreshToken may return the same tokens across requests ([#13387](https://github.com/aws-amplify/amplify-js/issues/13387)) ([2e5e2f1](https://github.com/aws-amplify/amplify-js/commit/2e5e2f1ab49edfd4c5f4abbf2391633da29bd476))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))
- **storage|aws-amplify:** export server apis from the subpaths ([#11910](https://github.com/aws-amplify/amplify-js/issues/11910)) ([23fa46a](https://github.com/aws-amplify/amplify-js/commit/23fa46a9c714273449861baf12bfa6a2ebd1ce9e))
- Support tracking multiple inflight OAuth promise resolvers ([#12482](https://github.com/aws-amplify/amplify-js/issues/12482)) ([ad5c83e](https://github.com/aws-amplify/amplify-js/commit/ad5c83e05e2c32c9f23ff61a8f10395148f5757e))
- **tidy:** tidying up ([5956694](https://github.com/aws-amplify/amplify-js/commit/59566947078952aaedfa33a43b3418103dc07bcd))
- unintended commit ([165b1bf](https://github.com/aws-amplify/amplify-js/commit/165b1bf56ba3ebf52f1a7ad71d100b32553f59cc))
- Update Auth to import JS using named export ([#10033](https://github.com/aws-amplify/amplify-js/issues/10033)) ([11b537c](https://github.com/aws-amplify/amplify-js/commit/11b537c62fee74c04e4e3b72ba43a353ba5152c9))
- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))
- Update test references to removed export ([#12042](https://github.com/aws-amplify/amplify-js/issues/12042)) ([c39db56](https://github.com/aws-amplify/amplify-js/commit/c39db561ec6b866aea491246dbba3ddf5439d2f3))

### Features

- **@aws-amplify/auth:** Add a 'SUCCESS' response on successful call to forgotPasswordSubmit and verifyUserAttributes([#8744](https://github.com/aws-amplify/amplify-js/issues/8744)) ([1bd6c35](https://github.com/aws-amplify/amplify-js/commit/1bd6c35c115321d77f48a3954942dd57d7cf9056))
- **@aws-amplify/auth:** add SignInWithApple to supported providers ([#5402](https://github.com/aws-amplify/amplify-js/issues/5402)) ([c6e8162](https://github.com/aws-amplify/amplify-js/commit/c6e8162bd9a148453f3cb1f58960ed3a59a50a0b))
- **@aws-amplify/auth:** add the option to pass validation data when signing in ([13093e9](https://github.com/aws-amplify/amplify-js/commit/13093e9ec536437cc64d60276b5a78ede5417661))
- **@aws-amplify/auth:** adding capabilities for device tracking in JS ([3a9646a](https://github.com/aws-amplify/amplify-js/commit/3a9646a7ace4eb5b134ce96aadab620f8b93a8fb))
- **@aws-amplify/auth:** Allow bypassing cache on setPreferredMFA and getPreferredMFA methods ([83a8ccf](https://github.com/aws-amplify/amplify-js/commit/83a8ccfa1afdd790b9b1631b98cbb7bdc02544f6))
- **@aws-amplify/auth:** allow globalSignOut ([b8b24c7](https://github.com/aws-amplify/amplify-js/commit/b8b24c7f3dc4f20e9853ce73487d746d6093496e))
- **@aws-amplify/auth:** Auto sign in after sign up ([#10126](https://github.com/aws-amplify/amplify-js/issues/10126)) ([e54617f](https://github.com/aws-amplify/amplify-js/commit/e54617f2878244f0e391d2d49f5cd2e8a8c069f9)), closes [#6320](https://github.com/aws-amplify/amplify-js/issues/6320) [#3882](https://github.com/aws-amplify/amplify-js/issues/3882) [#3631](https://github.com/aws-amplify/amplify-js/issues/3631) [#6018](https://github.com/aws-amplify/amplify-js/issues/6018)
- **@aws-amplify/auth:** clientMetadata ([#4149](https://github.com/aws-amplify/amplify-js/issues/4149)) ([ac34816](https://github.com/aws-amplify/amplify-js/commit/ac34816df326331cfe04474fdf35790c52f4a1d3))
- **@aws-amplify/auth:** Delete user API exposed ([#9428](https://github.com/aws-amplify/amplify-js/issues/9428)) ([bf3d189](https://github.com/aws-amplify/amplify-js/commit/bf3d189c9e7e14342230fca8a0cbba6972e7b42c))
- **@aws-amplify/auth:** delete user attributes ([#7342](https://github.com/aws-amplify/amplify-js/issues/7342)) ([1b1df67](https://github.com/aws-amplify/amplify-js/commit/1b1df679d874e824bc89f95054008b2f46ae76cf))
- **@aws-amplify/auth:** Easier Federation with OAuth ([#3005](https://github.com/aws-amplify/amplify-js/issues/3005)) ([76cde59](https://github.com/aws-amplify/amplify-js/commit/76cde598c30ee8049798e5988261db9165cc775e))
- **@aws-amplify/auth:** Error messaging ([47ec74d](https://github.com/aws-amplify/amplify-js/commit/47ec74d3648a88fe6163fca3f53f0253ca5d6f5b))
- **@aws-amplify/auth:** publish ES2015/ESM artifacts ([6cf2c22](https://github.com/aws-amplify/amplify-js/commit/6cf2c22b9a9013092fa81ee51ff5f280d6152e1d))
- **@aws-amplify/auth:** remove crypto-js dependency ([#10591](https://github.com/aws-amplify/amplify-js/issues/10591)) ([daa4a98](https://github.com/aws-amplify/amplify-js/commit/daa4a983242fe2986991f4b9351de2d0a114915e))
- **@aws-amplify/core:** [Delivers [#168673137](https://github.com/aws-amplify/amplify-js/issues/168673137)] Migrate core category to aws sdk V3 ([#4077](https://github.com/aws-amplify/amplify-js/issues/4077)) ([beb73a4](https://github.com/aws-amplify/amplify-js/commit/beb73a4b1c051654750f5bdc3b20cde3a3aba37d))
- **@aws-amplify/ui-components:** User agent tracking for UI component packages ([#4804](https://github.com/aws-amplify/amplify-js/issues/4804)) ([15a0a2f](https://github.com/aws-amplify/amplify-js/commit/15a0a2fadeb96543721a6733faeb509efc26e1e2))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)
- add ability to set ephemeral session ([#12202](https://github.com/aws-amplify/amplify-js/issues/12202)) ([fcf47a0](https://github.com/aws-amplify/amplify-js/commit/fcf47a030aba2ffd2847ede879b44fe5c6dee5ad))
- add confirmSignIn API ([7d2327a](https://github.com/aws-amplify/amplify-js/commit/7d2327aeeb51068c5343f2b3d357bc05bf7f24c7))
- add confirmSignIn types ([954c01d](https://github.com/aws-amplify/amplify-js/commit/954c01defe9afbed225208a37bcfaae2b208fc94))
- add custom user-pool clients ([0570aba](https://github.com/aws-amplify/amplify-js/commit/0570abae2d4b0c29c8ac4e8262650a93824941bd))
- add handleSignUp prop to override auth signup method ([#8474](https://github.com/aws-amplify/amplify-js/issues/8474)) ([a5f2466](https://github.com/aws-amplify/amplify-js/commit/a5f2466454f0cc1e0223fb03e78142209cf1f033))
- add signIn helpers ([3c3091d](https://github.com/aws-amplify/amplify-js/commit/3c3091dfb513caf50355cdff24cc9dbde054ab20))
- add unit tests ([ef98d38](https://github.com/aws-amplify/amplify-js/commit/ef98d3888ab754b1691d579617251333d25b9fbf))
- Added additional Auth config fields & ability to override Cognito endpoint. ([#12236](https://github.com/aws-amplify/amplify-js/issues/12236)) ([6060984](https://github.com/aws-amplify/amplify-js/commit/606098437021ff03363009094dd79f84fe96f1dc))
- Added Prettier formatting ([4dfd9aa](https://github.com/aws-amplify/amplify-js/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))
- **auth,cognito-identity-js:** returning code delivery details as part of callback for updateAttributes, adds hub event to Auth.updateUserAttributes ([#10731](https://github.com/aws-amplify/amplify-js/issues/10731)) ([fc4940b](https://github.com/aws-amplify/amplify-js/commit/fc4940bc17e0deeb9e9ca2a00bed101e8ff7d3df))
- **auth/cognito:** base directory structure, service clients and signUp API ([#11075](https://github.com/aws-amplify/amplify-js/issues/11075)) ([5bdef02](https://github.com/aws-amplify/amplify-js/commit/5bdef0239204f53577393ab62448319854c46d19))
- **auth/cognito:** base directory structure, service clients and signUp API ([#11075](https://github.com/aws-amplify/amplify-js/issues/11075)) ([20ab772](https://github.com/aws-amplify/amplify-js/commit/20ab772e5552610c3fa4b975d9906d01309e848e))
- **auth:** add `customOAuthState` missing hub event ([#12090](https://github.com/aws-amplify/amplify-js/issues/12090)) ([7dec0f1](https://github.com/aws-amplify/amplify-js/commit/7dec0f1d3cb6bfb3a934c5c36b38c1eead445cc6))
- **auth:** add `fetchUserAttributes` API ([#11874](https://github.com/aws-amplify/amplify-js/issues/11874)) ([0112b4b](https://github.com/aws-amplify/amplify-js/commit/0112b4b7b169dd0a49b17486bc2f3e93050fa1c6))
- **auth:** add a default deviceName when remembering device ([#13022](https://github.com/aws-amplify/amplify-js/issues/13022)) ([5f34186](https://github.com/aws-amplify/amplify-js/commit/5f3418678a06ac43ed8bf700649703c1cf280eeb))
- **auth:** add auto sign-in support ([#12229](https://github.com/aws-amplify/amplify-js/issues/12229)) ([22c5e12](https://github.com/aws-amplify/amplify-js/commit/22c5e12042acfb9706fe06b5050658152206596a)), closes [#12153](https://github.com/aws-amplify/amplify-js/issues/12153)
- **auth:** add clearDeviceMetadata unit tests ([#12290](https://github.com/aws-amplify/amplify-js/issues/12290)) ([83080ea](https://github.com/aws-amplify/amplify-js/commit/83080eaa07c41a8ce822bd0ed2b22f41bc9bdb99))
- **auth:** add ConfirmDevice API ([#12107](https://github.com/aws-amplify/amplify-js/issues/12107)) ([7c9467d](https://github.com/aws-amplify/amplify-js/commit/7c9467d3c586d36535994cfd5b205f1cd767e6d8))
- **auth:** add confirmSignUp API ([#11610](https://github.com/aws-amplify/amplify-js/issues/11610)) ([c760c71](https://github.com/aws-amplify/amplify-js/commit/c760c7146a585d41c818545370531da6b52c4452))
- **auth:** add confirmUserAttribute API ([#11845](https://github.com/aws-amplify/amplify-js/issues/11845)) ([7cddc7c](https://github.com/aws-amplify/amplify-js/commit/7cddc7cea7e42102cd8f0d4c32d893cd8ca8e4ce))
- **auth:** add deleteUser API ([#12141](https://github.com/aws-amplify/amplify-js/issues/12141)) ([773e382](https://github.com/aws-amplify/amplify-js/commit/773e38212361c1f18283847c21ba13c4711a25ae)), closes [#11953](https://github.com/aws-amplify/amplify-js/issues/11953)
- **auth:** add deleteUserAttributes API ([#12128](https://github.com/aws-amplify/amplify-js/issues/12128)) ([aae63ba](https://github.com/aws-amplify/amplify-js/commit/aae63badb8b6fd658c463b603491af4c933377cd))
- **auth:** add fetchDevices api ([#12171](https://github.com/aws-amplify/amplify-js/issues/12171)) ([c4c4db8](https://github.com/aws-amplify/amplify-js/commit/c4c4db8f88f6f9c68b8f54b5197cad1957949e98))
- **auth:** add fetchMFAPreference API ([#11647](https://github.com/aws-amplify/amplify-js/issues/11647)) ([09305e5](https://github.com/aws-amplify/amplify-js/commit/09305e582f55799a596e65b95b0dd43eea3c0396))
- **auth:** add get/clear deviceMetadata mechanism ([#12127](https://github.com/aws-amplify/amplify-js/issues/12127)) ([332b312](https://github.com/aws-amplify/amplify-js/commit/332b312bc1ccf609e33e3d8f3072f3243025b1f5))
- **auth:** add getCurrentUser API ([#11867](https://github.com/aws-amplify/amplify-js/issues/11867)) ([6c9665d](https://github.com/aws-amplify/amplify-js/commit/6c9665d2729177ab153551cf491f5773f4aa27cc))
- **auth:** add hub events ([#11918](https://github.com/aws-amplify/amplify-js/issues/11918)) ([18c7cfe](https://github.com/aws-amplify/amplify-js/commit/18c7cfeafd60639b8fb85100ed2eed82dfa3883b))
- **auth:** add rememberDevice API ([#12160](https://github.com/aws-amplify/amplify-js/issues/12160)) ([8e82cb7](https://github.com/aws-amplify/amplify-js/commit/8e82cb74b3c1a25eb84b14a112139564e08fc449))
- **auth:** add sendUserAttributeVerificationCode api ([#12100](https://github.com/aws-amplify/amplify-js/issues/12100)) ([a1f612f](https://github.com/aws-amplify/amplify-js/commit/a1f612fd19d9db746ef15e869a5bb739bae85817))
- **auth:** add setUpTOTP API ([#11635](https://github.com/aws-amplify/amplify-js/issues/11635)) ([8c72064](https://github.com/aws-amplify/amplify-js/commit/8c720648b76ff9d97b9f4196bd6b38477fc1fa6b))
- **auth:** Add sign up error handling ([#11153](https://github.com/aws-amplify/amplify-js/issues/11153)) ([88e69d3](https://github.com/aws-amplify/amplify-js/commit/88e69d3d1846c5362478a55a582b0ce2f7fcb61a))
- **auth:** Add sign up error handling ([#11153](https://github.com/aws-amplify/amplify-js/issues/11153)) ([706a627](https://github.com/aws-amplify/amplify-js/commit/706a627f80bcf1575a7a47fa1c20fcd81b0502a1))
- **auth:** add signedIn and signedOut hub events ([#12135](https://github.com/aws-amplify/amplify-js/issues/12135)) ([f8d8448](https://github.com/aws-amplify/amplify-js/commit/f8d8448b43407418ebec722a88f42fcd7efee040))
- **auth:** add signInDetails to AuthUser interface ([#12439](https://github.com/aws-amplify/amplify-js/issues/12439)) ([dd382ee](https://github.com/aws-amplify/amplify-js/commit/dd382ee9463f024a869a79e91d975a4803dd3cd4))
- **auth:** add signInUserPassword API ([#11400](https://github.com/aws-amplify/amplify-js/issues/11400)) ([1dcf32f](https://github.com/aws-amplify/amplify-js/commit/1dcf32fa84fad6e5bf591787af06f6a0f58f1ce7)), closes [#11449](https://github.com/aws-amplify/amplify-js/issues/11449)
- **auth:** add signInWithCustomAuth API ([#11440](https://github.com/aws-amplify/amplify-js/issues/11440)) ([06018b0](https://github.com/aws-amplify/amplify-js/commit/06018b0f0292fb456ab2c1cab3225acc15f568a4))
- **auth:** add signInWithCustomSRPAuth API ([#11438](https://github.com/aws-amplify/amplify-js/issues/11438)) ([e263672](https://github.com/aws-amplify/amplify-js/commit/e2636724991376cc7750b70fa0216621fc623b83))
- **auth:** add SRP helpers ([#11358](https://github.com/aws-amplify/amplify-js/issues/11358)) ([0404a52](https://github.com/aws-amplify/amplify-js/commit/0404a52d074b1aaba14cc69fecf1d058ae621001))
- **auth:** add SRP sign-in API ([#11372](https://github.com/aws-amplify/amplify-js/issues/11372)) ([67fe215](https://github.com/aws-amplify/amplify-js/commit/67fe215428919fdbdc87426d631a554364dbda53))
- **auth:** add support for Email MFA ([#13945](https://github.com/aws-amplify/amplify-js/issues/13945)) ([42db720](https://github.com/aws-amplify/amplify-js/commit/42db720ac46d8c1bbd307cd21924b934e7b1b270)), closes [#13720](https://github.com/aws-amplify/amplify-js/issues/13720) [#13745](https://github.com/aws-amplify/amplify-js/issues/13745)
- **auth:** add updateMFAPreference API ([#11648](https://github.com/aws-amplify/amplify-js/issues/11648)) ([f014f93](https://github.com/aws-amplify/amplify-js/commit/f014f931195b4ca3b04771c5e201afc926da9547))
- **auth:** add updatePassword API ([#11663](https://github.com/aws-amplify/amplify-js/issues/11663)) ([40f4d24](https://github.com/aws-amplify/amplify-js/commit/40f4d248c751f6315236ce10716848414813a055))
- **auth:** add updateUserAttribute API ([#12106](https://github.com/aws-amplify/amplify-js/issues/12106)) ([b5f8c65](https://github.com/aws-amplify/amplify-js/commit/b5f8c65add0e91d183ee603078f6d1832ebe22fe))
- **auth:** add updateUserAttributes API ([#11807](https://github.com/aws-amplify/amplify-js/issues/11807)) ([05b2d2b](https://github.com/aws-amplify/amplify-js/commit/05b2d2b591e81e38801be227536930b543fdcc2f))
- **auth:** add verifyTOTPSetup API ([#11636](https://github.com/aws-amplify/amplify-js/issues/11636)) ([7a67a5f](https://github.com/aws-amplify/amplify-js/commit/7a67a5f2ad7642bdf764143ca5c9e01f8ebbcd0e))
- **auth:** adds local state management ([#11551](https://github.com/aws-amplify/amplify-js/issues/11551)) ([a907334](https://github.com/aws-amplify/amplify-js/commit/a907334ca737ece4f5e7d939e24f821280935e8d))
- **auth:** adds local state management ([#11551](https://github.com/aws-amplify/amplify-js/issues/11551)) ([#11603](https://github.com/aws-amplify/amplify-js/issues/11603)) ([1b75bab](https://github.com/aws-amplify/amplify-js/commit/1b75bab2d317b817ae6dffd314e5dd55d59bcf80))
- **Auth:** Allow sending login_hint, lang and nonce on signInWithRedirects ([#14089](https://github.com/aws-amplify/amplify-js/issues/14089)) ([a4063a1](https://github.com/aws-amplify/amplify-js/commit/a4063a177a802c86624faf0c4b605c75164b8641)), closes [#8951](https://github.com/aws-amplify/amplify-js/issues/8951)
- **auth:** credentials provider ([#11660](https://github.com/aws-amplify/amplify-js/issues/11660)) ([6a58dbe](https://github.com/aws-amplify/amplify-js/commit/6a58dbe96cc3303c2eb5cbe52ce7fa1c25d6e621))
- **auth:** Enable resumable SignIn ([#13483](https://github.com/aws-amplify/amplify-js/issues/13483)) ([f3421f1](https://github.com/aws-amplify/amplify-js/commit/f3421f190da7473c30b5688c281935645488c663))
- **auth:** Enable resumable SignIn ([#13855](https://github.com/aws-amplify/amplify-js/issues/13855)) ([#14074](https://github.com/aws-amplify/amplify-js/issues/14074)) ([fe315be](https://github.com/aws-amplify/amplify-js/commit/fe315be4da6d814f2b802cf1acbb00513ca238ac))
- **auth:** handles DEVICE_SRP_AUTH challengeName ([#12140](https://github.com/aws-amplify/amplify-js/issues/12140)) ([a622fec](https://github.com/aws-amplify/amplify-js/commit/a622fec25a90e0126528f60af7c7a4189965a0ba))
- **auth:** HostedUI oidc signout ([#13512](https://github.com/aws-amplify/amplify-js/issues/13512)) ([e8fb997](https://github.com/aws-amplify/amplify-js/commit/e8fb9973f8e3e3490619416a778ec1460cafaf9a)), closes [#13712](https://github.com/aws-amplify/amplify-js/issues/13712) [#13736](https://github.com/aws-amplify/amplify-js/issues/13736)
- **auth:** make a subset of auth apis runnable with the server context ([#11877](https://github.com/aws-amplify/amplify-js/issues/11877)) ([50d037e](https://github.com/aws-amplify/amplify-js/commit/50d037e28e562cabc24166a0998b035e0ce38af9))
- **auth:** make cognito auth providers impl. reusable ([5731e60](https://github.com/aws-amplify/amplify-js/commit/5731e602b894c95fd542133b84a874eb6cdbd72c))
- **auth:** make sign in SRP working with react-native ([91aa3ec](https://github.com/aws-amplify/amplify-js/commit/91aa3ec788dabe102b2d957a42d7b3d83c327ed7))
- **auth:** passwordless ([#14032](https://github.com/aws-amplify/amplify-js/issues/14032)) ([68c7f6f](https://github.com/aws-amplify/amplify-js/commit/68c7f6fbaa903ac8e45035bc25a71321a6240aec)), closes [#1](https://github.com/aws-amplify/amplify-js/issues/1) [#3](https://github.com/aws-amplify/amplify-js/issues/3) [#6](https://github.com/aws-amplify/amplify-js/issues/6) [#8](https://github.com/aws-amplify/amplify-js/issues/8) [#2](https://github.com/aws-amplify/amplify-js/issues/2) [#11](https://github.com/aws-amplify/amplify-js/issues/11) [#7](https://github.com/aws-amplify/amplify-js/issues/7) [#14](https://github.com/aws-amplify/amplify-js/issues/14) [#15](https://github.com/aws-amplify/amplify-js/issues/15) [#16](https://github.com/aws-amplify/amplify-js/issues/16) [#18](https://github.com/aws-amplify/amplify-js/issues/18) [#17](https://github.com/aws-amplify/amplify-js/issues/17) [#19](https://github.com/aws-amplify/amplify-js/issues/19) [#22](https://github.com/aws-amplify/amplify-js/issues/22)
- **auth:** resendSignUpCode API ([#11281](https://github.com/aws-amplify/amplify-js/issues/11281)) ([3b30331](https://github.com/aws-amplify/amplify-js/commit/3b3033111418d15df6a209135caacf3fa2e5d36e))
- **Auth:** resetPassword API rewrite + tests ([#11207](https://github.com/aws-amplify/amplify-js/issues/11207)) ([b24c30c](https://github.com/aws-amplify/amplify-js/commit/b24c30ca0a8fa156dd5b5821f6d78aa028d7a0e8))
- **auth:** set auth config to the auth providers instead of relying the singleton ([4143e97](https://github.com/aws-amplify/amplify-js/commit/4143e97e567364bc3cd72c6bc15f73db93985dc1))
- **auth:** standalone enable oauth listener for MPAs ([#12731](https://github.com/aws-amplify/amplify-js/issues/12731)) ([94d1fb2](https://github.com/aws-amplify/amplify-js/commit/94d1fb2c91a539d336e24c3fe86881422cce0474))
- **auth:** standalone enable oauth listener for MPAs ([#12768](https://github.com/aws-amplify/amplify-js/issues/12768)) ([ef15561](https://github.com/aws-amplify/amplify-js/commit/ef15561d92e370d046152da7dc763063a6ad5b76)), closes [#12753](https://github.com/aws-amplify/amplify-js/issues/12753)
- **aws-amplify-react-native:** Add withOAuth HOC for Cognito Hosted UI ([#2665](https://github.com/aws-amplify/amplify-js/issues/2665)) ([ac4d232](https://github.com/aws-amplify/amplify-js/commit/ac4d232a8ada0fd4f2e19c2e7196a8937dc63e0e))
- **aws-amplify-react:** adding loading page ([c47f72a](https://github.com/aws-amplify/amplify-js/commit/c47f72a07e4107c3838405c3a2e39fdc98a9d9d0))
- **aws-amplify:** set auth config in the adapter factory functions ([0f51120](https://github.com/aws-amplify/amplify-js/commit/0f51120a2bffeaaef1953f7f4328832390fb9520))
- **clients:** add useragent to cognito identity ([#11269](https://github.com/aws-amplify/amplify-js/issues/11269)) ([475f26b](https://github.com/aws-amplify/amplify-js/commit/475f26bc4d0c415ede4eaf4d5126023a43fb44de))
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))
- Cognito Advance Security features ([#12262](https://github.com/aws-amplify/amplify-js/issues/12262)) ([d298a26](https://github.com/aws-amplify/amplify-js/commit/d298a26418cdfb4b0d3a05bebccaaaca9e76b845))
- **cognito:** remove required domain param when create CookieStorage ([c985454](https://github.com/aws-amplify/amplify-js/commit/c985454b0af9f2205941ab95d6ec8c42748ab63d))
- **core:** add amplifyUuid and amplifyUrl with builtin polyfill loader for RN ([a4ad9e0](https://github.com/aws-amplify/amplify-js/commit/a4ad9e09d6098a53f4530d9fa9112c81b409a605))
- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- **core:** Hub refactor and tests ([7ac5bcf](https://github.com/aws-amplify/amplify-js/commit/7ac5bcfd409af5a8df9c39215287965839c5c9a9))
- disable request caching for cognito APIs ([#12020](https://github.com/aws-amplify/amplify-js/issues/12020)) ([6ba700b](https://github.com/aws-amplify/amplify-js/commit/6ba700bf0f3a8d9243b6c221ad2765f36278e2e7))
- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))
- **interactions:** adapt v6 api design ([#12285](https://github.com/aws-amplify/amplify-js/issues/12285)) ([76471b6](https://github.com/aws-amplify/amplify-js/commit/76471b6488efc37d7d0bdc1feb7fcbc97334ec7c))
- PubSub Add Options objects for all Providers and fix: Spelling error and deprecation of old exports ([#9683](https://github.com/aws-amplify/amplify-js/issues/9683)) ([b535af2](https://github.com/aws-amplify/amplify-js/commit/b535af2133b5460c6e8e2fcfd89e1fe235872c27))
- **react-native,core,storage:** add polyfill loaders ([1905829](https://github.com/aws-amplify/amplify-js/commit/1905829e58531e606210740b1bd889bee0ef7e21))
- Rename `endpoint` to `userPoolEndpoint` ([#12276](https://github.com/aws-amplify/amplify-js/issues/12276)) ([b047cd1](https://github.com/aws-amplify/amplify-js/commit/b047cd1d484d8ffe77a48e0ff19e9abbe85b0e73))
- **repo:** set up rollup to emit esm and cjs artifacts ([#12522](https://github.com/aws-amplify/amplify-js/issues/12522)) ([903a012](https://github.com/aws-amplify/amplify-js/commit/903a0123e51f69ff3476b6b15aa89a73b750f9dc))
- setup server subpath for core, auth and aws-amplify packages ([626de05](https://github.com/aws-amplify/amplify-js/commit/626de05cd81cdd8274f6631d0203082969cd2ed1))
- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))
- **storage:** Integrity changes for storage browser ([#13909](https://github.com/aws-amplify/amplify-js/issues/13909)) ([ec7bf6f](https://github.com/aws-amplify/amplify-js/commit/ec7bf6ff2fb4af84425eca4f2d68c2bef7f49d03)), closes [#13478](https://github.com/aws-amplify/amplify-js/issues/13478) [#13474](https://github.com/aws-amplify/amplify-js/issues/13474)
- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)
- Update signInWithRedirect to work with RN ([#12144](https://github.com/aws-amplify/amplify-js/issues/12144)) ([e90c05b](https://github.com/aws-amplify/amplify-js/commit/e90c05b1696870443b3bfb4846205a12926a9252))
- user agent enhancements - auth reduction ([#11465](https://github.com/aws-amplify/amplify-js/issues/11465)) ([f73abd2](https://github.com/aws-amplify/amplify-js/commit/f73abd2f3c9a377a4d14832c68ea2880a1372020))
- vend cognito identity provider types ([6b9b02f](https://github.com/aws-amplify/amplify-js/commit/6b9b02fbae056342ebfc2d5319caee340fa805d7))

### Reverts

- Revert "feat(auth): Enable resumable SignIn" (#13855) ([b26e719](https://github.com/aws-amplify/amplify-js/commit/b26e7199d25cbc1821ff7c45b8ad78b5544b7a2f)), closes [#13855](https://github.com/aws-amplify/amplify-js/issues/13855) [#13483](https://github.com/aws-amplify/amplify-js/issues/13483)
- Revert "chore(release): Publish [skip release]" ([241fa11](https://github.com/aws-amplify/amplify-js/commit/241fa1105e177d9e4afe59c40ee92656b87ae542))
- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)
- Revert "chore(repo): use typescript 5.0.2 across workspace" (#12941) ([dc04ba1](https://github.com/aws-amplify/amplify-js/commit/dc04ba18604291d9618a681e7ec4cdb801a355c8)), closes [#12941](https://github.com/aws-amplify/amplify-js/issues/12941)
- Revert "chore: Upgrade Prettier (#12582)" (#12600) ([cd937f5](https://github.com/aws-amplify/amplify-js/commit/cd937f56bef5f90a4b42638776656faf746c48aa)), closes [#12582](https://github.com/aws-amplify/amplify-js/issues/12582) [#12600](https://github.com/aws-amplify/amplify-js/issues/12600)
- Revert "feat: custom user agent Geo changes for UI handoff (#11632)" ([ba2ae71](https://github.com/aws-amplify/amplify-js/commit/ba2ae7183b096fac71e5d4ef9a5c160d11202841)), closes [#11632](https://github.com/aws-amplify/amplify-js/issues/11632)
- Revert "feat: custom user agent InternalCognitoUser (#11709)" ([12a232f](https://github.com/aws-amplify/amplify-js/commit/12a232f122d1ee4c875948e72ff3ec41fbd94ba8)), closes [#11709](https://github.com/aws-amplify/amplify-js/issues/11709)
- Revert "feat: custom user agent Auth changes for UI handoff (#11606)" ([71edbc4](https://github.com/aws-amplify/amplify-js/commit/71edbc4d47592af9850b7be7618a951c7fadef80)), closes [#11606](https://github.com/aws-amplify/amplify-js/issues/11606)
- Revert "feat: custom user agent InternalCognitoUserPool (#11716)" ([0bf2d23](https://github.com/aws-amplify/amplify-js/commit/0bf2d233ef51cc029d1714d40f7a9f493f9a9a5c)), closes [#11716](https://github.com/aws-amplify/amplify-js/issues/11716)
- Revert "feat: pipe auth user agent details through to service call (#11755)" ([812875f](https://github.com/aws-amplify/amplify-js/commit/812875fce7b85209486b7ff8cad8674fac43d12c)), closes [#11755](https://github.com/aws-amplify/amplify-js/issues/11755)
- Revert "fix: only register auth urlListener from InternalAuth instance (#11810)" ([6e7d838](https://github.com/aws-amplify/amplify-js/commit/6e7d8387d6e283983481de470c986ab55b4afdd0)), closes [#11810](https://github.com/aws-amplify/amplify-js/issues/11810)
- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))
- Revert "chore(release): Publish [ci skip]" ([9b03c49](https://github.com/aws-amplify/amplify-js/commit/9b03c49b0ba5eef09920017386c9fae139b6e0f9))
- **auth:** standalone enable oauth listener for MPAs ([#12753](https://github.com/aws-amplify/amplify-js/issues/12753)) ([0462761](https://github.com/aws-amplify/amplify-js/commit/04627618afe526dd776ee678b723ed6e697f440d)), closes [#12748](https://github.com/aws-amplify/amplify-js/issues/12748) [#12731](https://github.com/aws-amplify/amplify-js/issues/12731)

## [6.11.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.11.3...@aws-amplify/auth@6.11.4) (2025-03-07)

### Bug Fixes

- **auth:** associate unAuth identityId to newly authenticated user's identityId ([#14207](https://github.com/aws-amplify/amplify-js/issues/14207)) ([1cd12bf](https://github.com/aws-amplify/amplify-js/commit/1cd12bf0aa68167ec31235c8f0333aba558cd72b))
- **auth:** clear browser tab location before sending final success hub events during OAuth signIn ([#14188](https://github.com/aws-amplify/amplify-js/issues/14188)) ([e924f12](https://github.com/aws-amplify/amplify-js/commit/e924f1298d8ce0fc9ec9e9a21ad41e7f2cb9173a))
- **auth:** update service returned identity id to the in-memory store ([#14268](https://github.com/aws-amplify/amplify-js/issues/14268)) ([d7ada2b](https://github.com/aws-amplify/amplify-js/commit/d7ada2ba738bc6a482612096466ad916440e0247))

## [6.11.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.11.2...@aws-amplify/auth@6.11.3) (2025-03-05)

**Note:** Version bump only for package @aws-amplify/auth

## [6.11.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.11.1...@aws-amplify/auth@6.11.2) (2025-02-27)

**Note:** Version bump only for package @aws-amplify/auth

## [6.11.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.11.0...@aws-amplify/auth@6.11.1) (2025-02-20)

**Note:** Version bump only for package @aws-amplify/auth

# [6.11.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.10.2...@aws-amplify/auth@6.11.0) (2025-02-12)

### Bug Fixes

- **auth:** update FetchDevicesOutput output type to include name attribute ([#14186](https://github.com/aws-amplify/amplify-js/issues/14186)) ([289f3e8](https://github.com/aws-amplify/amplify-js/commit/289f3e8d1bbf8c95abffb553b612699f43cdccb5))

### Features

- support server-side auth flows with Cognito managed login ([#14168](https://github.com/aws-amplify/amplify-js/issues/14168)) ([825d338](https://github.com/aws-amplify/amplify-js/commit/825d338021964a48ffab07d7b5961c5afa63a50e)), closes [#13788](https://github.com/aws-amplify/amplify-js/issues/13788) [#13801](https://github.com/aws-amplify/amplify-js/issues/13801) [#13827](https://github.com/aws-amplify/amplify-js/issues/13827) [#13839](https://github.com/aws-amplify/amplify-js/issues/13839) [#13840](https://github.com/aws-amplify/amplify-js/issues/13840) [#13841](https://github.com/aws-amplify/amplify-js/issues/13841) [#14103](https://github.com/aws-amplify/amplify-js/issues/14103) [#14112](https://github.com/aws-amplify/amplify-js/issues/14112) [#14114](https://github.com/aws-amplify/amplify-js/issues/14114) [#14115](https://github.com/aws-amplify/amplify-js/issues/14115) [#14119](https://github.com/aws-amplify/amplify-js/issues/14119) [#14125](https://github.com/aws-amplify/amplify-js/issues/14125) [#14116](https://github.com/aws-amplify/amplify-js/issues/14116) [#14134](https://github.com/aws-amplify/amplify-js/issues/14134) [#14132](https://github.com/aws-amplify/amplify-js/issues/14132) [#14141](https://github.com/aws-amplify/amplify-js/issues/14141) [#14152](https://github.com/aws-amplify/amplify-js/issues/14152) [#14169](https://github.com/aws-amplify/amplify-js/issues/14169)

## [6.10.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.10.1...@aws-amplify/auth@6.10.2) (2025-02-04)

**Note:** Version bump only for package @aws-amplify/auth

## [6.10.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.10.0...@aws-amplify/auth@6.10.1) (2025-01-24)

### Bug Fixes

- **auth:** Setting Store Tokens should only clear tokens that no longer have a value ([#13584](https://github.com/aws-amplify/amplify-js/issues/13584)) ([3606482](https://github.com/aws-amplify/amplify-js/commit/3606482c980766466f2c3f27bd4887c550897c26))

# [6.10.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.9.1...@aws-amplify/auth@6.10.0) (2025-01-14)

### Bug Fixes

- **deps:** avoid using implicit dependencies for auth ([#14122](https://github.com/aws-amplify/amplify-js/issues/14122)) ([f2a0b74](https://github.com/aws-amplify/amplify-js/commit/f2a0b74bfac5f10014e644c509d5cff5d5da9e59))

### Features

- **Auth:** Allow sending login_hint, lang and nonce on signInWithRedirects ([#14089](https://github.com/aws-amplify/amplify-js/issues/14089)) ([a4063a1](https://github.com/aws-amplify/amplify-js/commit/a4063a177a802c86624faf0c4b605c75164b8641)), closes [#8951](https://github.com/aws-amplify/amplify-js/issues/8951)

## [6.9.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.9.0...@aws-amplify/auth@6.9.1) (2025-01-03)

**Note:** Version bump only for package @aws-amplify/auth

# [6.9.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.8.3...@aws-amplify/auth@6.9.0) (2024-12-19)

### Features

- **auth:** Enable resumable SignIn ([#13855](https://github.com/aws-amplify/amplify-js/issues/13855)) ([#14074](https://github.com/aws-amplify/amplify-js/issues/14074)) ([fe315be](https://github.com/aws-amplify/amplify-js/commit/fe315be4da6d814f2b802cf1acbb00513ca238ac))

## [6.8.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.8.2...@aws-amplify/auth@6.8.3) (2024-12-12)

**Note:** Version bump only for package @aws-amplify/auth

## [6.8.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.8.1...@aws-amplify/auth@6.8.2) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/auth

## [6.8.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.8.0...@aws-amplify/auth@6.8.1) (2024-12-03)

**Note:** Version bump only for package @aws-amplify/auth

# [6.8.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.7.0...@aws-amplify/auth@6.8.0) (2024-11-25)

### Features

- **auth:** passwordless ([#14032](https://github.com/aws-amplify/amplify-js/issues/14032)) ([68c7f6f](https://github.com/aws-amplify/amplify-js/commit/68c7f6fbaa903ac8e45035bc25a71321a6240aec)), closes [#1](https://github.com/aws-amplify/amplify-js/issues/1) [#3](https://github.com/aws-amplify/amplify-js/issues/3) [#6](https://github.com/aws-amplify/amplify-js/issues/6) [#8](https://github.com/aws-amplify/amplify-js/issues/8) [#2](https://github.com/aws-amplify/amplify-js/issues/2) [#11](https://github.com/aws-amplify/amplify-js/issues/11) [#7](https://github.com/aws-amplify/amplify-js/issues/7) [#14](https://github.com/aws-amplify/amplify-js/issues/14) [#15](https://github.com/aws-amplify/amplify-js/issues/15) [#16](https://github.com/aws-amplify/amplify-js/issues/16) [#18](https://github.com/aws-amplify/amplify-js/issues/18) [#17](https://github.com/aws-amplify/amplify-js/issues/17) [#19](https://github.com/aws-amplify/amplify-js/issues/19) [#22](https://github.com/aws-amplify/amplify-js/issues/22)

# [6.7.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.6.2...@aws-amplify/auth@6.7.0) (2024-11-20)

### Features

- **storage:** Integrity changes for storage browser ([#13909](https://github.com/aws-amplify/amplify-js/issues/13909)) ([ec7bf6f](https://github.com/aws-amplify/amplify-js/commit/ec7bf6ff2fb4af84425eca4f2d68c2bef7f49d03)), closes [#13478](https://github.com/aws-amplify/amplify-js/issues/13478) [#13474](https://github.com/aws-amplify/amplify-js/issues/13474)

## [6.6.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.6.1...@aws-amplify/auth@6.6.2) (2024-11-13)

**Note:** Version bump only for package @aws-amplify/auth

## [6.6.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.6.0...@aws-amplify/auth@6.6.1) (2024-11-12)

**Note:** Version bump only for package @aws-amplify/auth

# [6.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.5.5...@aws-amplify/auth@6.6.0) (2024-10-31)

### Features

- **auth:** add support for Email MFA ([#13945](https://github.com/aws-amplify/amplify-js/issues/13945)) ([42db720](https://github.com/aws-amplify/amplify-js/commit/42db720ac46d8c1bbd307cd21924b934e7b1b270)), closes [#13720](https://github.com/aws-amplify/amplify-js/issues/13720) [#13745](https://github.com/aws-amplify/amplify-js/issues/13745)

## [6.5.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.5.4...@aws-amplify/auth@6.5.5) (2024-10-29)

**Note:** Version bump only for package @aws-amplify/auth

## [6.5.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.5.3...@aws-amplify/auth@6.5.4) (2024-10-25)

**Note:** Version bump only for package @aws-amplify/auth

## [6.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.5.2...@aws-amplify/auth@6.5.3) (2024-10-21)

**Note:** Version bump only for package @aws-amplify/auth

## [6.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.5.1...@aws-amplify/auth@6.5.2) (2024-10-15)

**Note:** Version bump only for package @aws-amplify/auth

## [6.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.5.0...@aws-amplify/auth@6.5.1) (2024-10-05)

**Note:** Version bump only for package @aws-amplify/auth

# [6.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.4.2...@aws-amplify/auth@6.5.0) (2024-09-30)

### Bug Fixes

- **auth:** remove redundant remove guest identityId call ([#13789](https://github.com/aws-amplify/amplify-js/issues/13789)) ([a0d1447](https://github.com/aws-amplify/amplify-js/commit/a0d1447b6234ab1678a837d90deddf805779bc3a))

### Features

- **auth:** Enable resumable SignIn ([#13483](https://github.com/aws-amplify/amplify-js/issues/13483)) ([f3421f1](https://github.com/aws-amplify/amplify-js/commit/f3421f190da7473c30b5688c281935645488c663))

### Reverts

- Revert "feat(auth): Enable resumable SignIn" (#13855) ([b26e719](https://github.com/aws-amplify/amplify-js/commit/b26e7199d25cbc1821ff7c45b8ad78b5544b7a2f)), closes [#13855](https://github.com/aws-amplify/amplify-js/issues/13855) [#13483](https://github.com/aws-amplify/amplify-js/issues/13483)

## [6.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.4.1...@aws-amplify/auth@6.4.2) (2024-09-17)

**Note:** Version bump only for package @aws-amplify/auth

## [6.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.4.0...@aws-amplify/auth@6.4.1) (2024-09-16)

### Bug Fixes

- **auth:** custom `userPoolEndpoint` cannot be applied on the server-side ([#13739](https://github.com/aws-amplify/amplify-js/issues/13739)) ([a76b594](https://github.com/aws-amplify/amplify-js/commit/a76b594562430a85fd37f00bb2788959f7a69d6a))

# [6.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.17...@aws-amplify/auth@6.4.0) (2024-09-04)

### Features

- **auth:** HostedUI oidc signout ([#13512](https://github.com/aws-amplify/amplify-js/issues/13512)) ([e8fb997](https://github.com/aws-amplify/amplify-js/commit/e8fb9973f8e3e3490619416a778ec1460cafaf9a)), closes [#13712](https://github.com/aws-amplify/amplify-js/issues/13712) [#13736](https://github.com/aws-amplify/amplify-js/issues/13736)

## [6.3.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.16...@aws-amplify/auth@6.3.17) (2024-09-03)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.15...@aws-amplify/auth@6.3.16) (2024-08-26)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.14...@aws-amplify/auth@6.3.15) (2024-08-21)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.13...@aws-amplify/auth@6.3.14) (2024-08-15)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.12...@aws-amplify/auth@6.3.13) (2024-08-07)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.11...@aws-amplify/auth@6.3.12) (2024-08-05)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.10...@aws-amplify/auth@6.3.11) (2024-07-23)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.9...@aws-amplify/auth@6.3.10) (2024-07-22)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.8...@aws-amplify/auth@6.3.9) (2024-07-19)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.7...@aws-amplify/auth@6.3.8) (2024-07-08)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.6...@aws-amplify/auth@6.3.7) (2024-06-24)

### Bug Fixes

- **auth:** Added missing UserContextData to Cognito User Pool operation SignUp ([#13477](https://github.com/aws-amplify/amplify-js/issues/13477)) ([e6c5f60](https://github.com/aws-amplify/amplify-js/commit/e6c5f60225c6ba0beeb4d5d2ae4cd55615062152))

## [6.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.5...@aws-amplify/auth@6.3.6) (2024-06-18)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.4...@aws-amplify/auth@6.3.5) (2024-06-07)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.3...@aws-amplify/auth@6.3.4) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.2...@aws-amplify/auth@6.3.3) (2024-05-23)

**Note:** Version bump only for package @aws-amplify/auth

## [6.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.1...@aws-amplify/auth@6.3.2) (2024-05-16)

### Bug Fixes

- **ssr-adapter:** refreshToken may return the same tokens across requests ([#13387](https://github.com/aws-amplify/amplify-js/issues/13387)) ([2e5e2f1](https://github.com/aws-amplify/amplify-js/commit/2e5e2f1ab49edfd4c5f4abbf2391633da29bd476))

## [6.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.3.0...@aws-amplify/auth@6.3.1) (2024-05-13)

**Note:** Version bump only for package @aws-amplify/auth

# [6.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.2.2...@aws-amplify/auth@6.3.0) (2024-05-07)

### Features

- **auth:** add a default deviceName when remembering device ([#13022](https://github.com/aws-amplify/amplify-js/issues/13022)) ([5f34186](https://github.com/aws-amplify/amplify-js/commit/5f3418678a06ac43ed8bf700649703c1cf280eeb))

## [6.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.2.1...@aws-amplify/auth@6.2.2) (2024-04-29)

**Note:** Version bump only for package @aws-amplify/auth

## [6.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.0.29...@aws-amplify/auth@6.2.1) (2024-04-26)

### Bug Fixes

- **auth:** Impossibility to sign-in when RandomKeyPassword missing ([1ba64c4](https://github.com/aws-amplify/amplify-js/commit/1ba64c4f5d09365cd3df76b46073ac825519cf00))
- bump package versions ([#13254](https://github.com/aws-amplify/amplify-js/issues/13254)) ([aa490b9](https://github.com/aws-amplify/amplify-js/commit/aa490b9bcbd2a442d9726937cfa59ef8b7859306))

## [6.0.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.0.28...@aws-amplify/auth@6.0.29) (2024-04-24)

### Bug Fixes

- **auth:** listen for pageshow event listener ([9844af8](https://github.com/aws-amplify/amplify-js/commit/9844af82f8ea21090b123c64890fb356b25180e3))

## [6.0.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@6.0.27...@aws-amplify/auth@6.0.28) (2024-04-22)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.27 (2024-04-02)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.26 (2024-04-01)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.25 (2024-03-30)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.24 (2024-03-29)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.23 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.22 (2024-03-25)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.21 (2024-03-19)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.20 (2024-03-11)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.19 (2024-03-05)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.18 (2024-02-27)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.17 (2024-02-19)

### Reverts

- Revert "chore(release): Publish" (#13027) ([f6f4f42](https://github.com/aws-amplify/amplify-js/commit/f6f4f42befa04ed3c1502fa0adf17c6700abfddf)), closes [#13027](https://github.com/aws-amplify/amplify-js/issues/13027)

## 6.0.16 (2024-02-09)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.15 (2024-02-06)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.14 (2024-02-01)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.13 (2024-01-22)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.12 (2024-01-12)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.11 (2024-01-10)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.10 (2024-01-04)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.9 (2023-12-22)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.8 (2023-12-18)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.7 (2023-12-12)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.6 (2023-12-05)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.5 (2023-11-22)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.4 (2023-11-20)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.3 (2023-11-16)

**Note:** Version bump only for package @aws-amplify/auth

## 6.0.2 (2023-11-13)

**Note:** Version bump only for package @aws-amplify/auth

## 5.6.4 (2023-08-23)

**Note:** Version bump only for package @aws-amplify/auth

## 5.6.3 (2023-08-22)

**Note:** Version bump only for package @aws-amplify/auth

## 5.6.2 (2023-08-17)

**Note:** Version bump only for package @aws-amplify/auth

## 5.6.1 (2023-08-10)

**Note:** Version bump only for package @aws-amplify/auth

# [5.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.5.5...@aws-amplify/auth@5.6.0) (2023-07-31)

### Features

- custom user agent Geo changes for UI handoff ([#11632](https://github.com/aws-amplify/amplify-js/issues/11632)) ([01bfa8f](https://github.com/aws-amplify/amplify-js/commit/01bfa8f692737bd14422f7dc2eae11ed00c19048))

## [5.5.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.5.4...@aws-amplify/auth@5.5.5) (2023-07-20)

**Note:** Version bump only for package @aws-amplify/auth

## [5.5.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.5.3...@aws-amplify/auth@5.5.4) (2023-07-13)

**Note:** Version bump only for package @aws-amplify/auth

## [5.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.5.2...@aws-amplify/auth@5.5.3) (2023-06-28)

**Note:** Version bump only for package @aws-amplify/auth

## [5.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.5.1...@aws-amplify/auth@5.5.2) (2023-06-27)

### Bug Fixes

- **auth:** Catch password reset Cognito API error response ([#11274](https://github.com/aws-amplify/amplify-js/issues/11274)) ([18012b0](https://github.com/aws-amplify/amplify-js/commit/18012b0e2856ac0a8fc87a8dee775ffb1528c487))

## [5.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.5.0...@aws-amplify/auth@5.5.1) (2023-06-21)

### Bug Fixes

- Update getAmplifyUserAgent to retain original interface ([#11535](https://github.com/aws-amplify/amplify-js/issues/11535)) ([dc84cc8](https://github.com/aws-amplify/amplify-js/commit/dc84cc8bfa7811b5f4f8ac2f7e5ea1b5edc54fe1))

# [5.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.4.1...@aws-amplify/auth@5.5.0) (2023-06-20)

### Bug Fixes

- Add upkeep to platform/framework caches ([#11505](https://github.com/aws-amplify/amplify-js/issues/11505)) ([03aa356](https://github.com/aws-amplify/amplify-js/commit/03aa3560e921f08717594bdf679b62501bc6de77))

### Features

- **core:** API detection for 8 framework targets ([#11384](https://github.com/aws-amplify/amplify-js/issues/11384)) ([388f207](https://github.com/aws-amplify/amplify-js/commit/388f2074db0640f2d22aa7cd1a44d8eb8f2301d2))
- user agent enhancements - auth reduction ([#11465](https://github.com/aws-amplify/amplify-js/issues/11465)) ([f73abd2](https://github.com/aws-amplify/amplify-js/commit/f73abd2f3c9a377a4d14832c68ea2880a1372020))

## [5.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.4.0...@aws-amplify/auth@5.4.1) (2023-06-14)

**Note:** Version bump only for package @aws-amplify/auth

# [5.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.7...@aws-amplify/auth@5.4.0) (2023-06-05)

### Features

- **clients:** add useragent to cognito identity ([#11269](https://github.com/aws-amplify/amplify-js/issues/11269)) ([475f26b](https://github.com/aws-amplify/amplify-js/commit/475f26bc4d0c415ede4eaf4d5126023a43fb44de))
- **clients:** cognito identity client ([#11213](https://github.com/aws-amplify/amplify-js/issues/11213)) ([67e4017](https://github.com/aws-amplify/amplify-js/commit/67e40171385f02d0c9448fdc3e036d63e009ea34))
- **clients:** support CN partition by adding DNS suffix resolver ([#11311](https://github.com/aws-amplify/amplify-js/issues/11311)) ([9de2975](https://github.com/aws-amplify/amplify-js/commit/9de297519fdbaaf1e9b4ae98f12aed4137400222))

## [5.3.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.6...@aws-amplify/auth@5.3.7) (2023-05-27)

**Note:** Version bump only for package @aws-amplify/auth

## [5.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.5...@aws-amplify/auth@5.3.6) (2023-05-12)

**Note:** Version bump only for package @aws-amplify/auth

## [5.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.4...@aws-amplify/auth@5.3.5) (2023-05-04)

**Note:** Version bump only for package @aws-amplify/auth

## [5.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.3...@aws-amplify/auth@5.3.4) (2023-04-27)

**Note:** Version bump only for package @aws-amplify/auth

## [5.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.2...@aws-amplify/auth@5.3.3) (2023-04-20)

**Note:** Version bump only for package @aws-amplify/auth

## [5.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.1...@aws-amplify/auth@5.3.2) (2023-04-18)

**Note:** Version bump only for package @aws-amplify/auth

## [5.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.3.0...@aws-amplify/auth@5.3.1) (2023-04-13)

**Note:** Version bump only for package @aws-amplify/auth

# [5.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.2.3...@aws-amplify/auth@5.3.0) (2023-04-12)

### Features

- **auth/cognito:** base directory structure, service clients and signUp API ([#11075](https://github.com/aws-amplify/amplify-js/issues/11075)) ([20ab772](https://github.com/aws-amplify/amplify-js/commit/20ab772e5552610c3fa4b975d9906d01309e848e))
- **auth:** Add sign up error handling ([#11153](https://github.com/aws-amplify/amplify-js/issues/11153)) ([706a627](https://github.com/aws-amplify/amplify-js/commit/706a627f80bcf1575a7a47fa1c20fcd81b0502a1))

## [5.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.2.2...@aws-amplify/auth@5.2.3) (2023-04-06)

**Note:** Version bump only for package @aws-amplify/auth

## [5.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.2.1...@aws-amplify/auth@5.2.2) (2023-04-04)

**Note:** Version bump only for package @aws-amplify/auth

## [5.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.2.0...@aws-amplify/auth@5.2.1) (2023-03-30)

**Note:** Version bump only for package @aws-amplify/auth

# [5.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.15...@aws-amplify/auth@5.2.0) (2023-03-23)

### Features

- **cognito:** remove required domain param when create CookieStorage ([c985454](https://github.com/aws-amplify/amplify-js/commit/c985454b0af9f2205941ab95d6ec8c42748ab63d))

## [5.1.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.14...@aws-amplify/auth@5.1.15) (2023-03-21)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.13...@aws-amplify/auth@5.1.14) (2023-03-16)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.12...@aws-amplify/auth@5.1.13) (2023-03-13)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.11...@aws-amplify/auth@5.1.12) (2023-03-08)

### Bug Fixes

- **@aws-amplify/auth:** Verify totp hub event ([#11049](https://github.com/aws-amplify/amplify-js/issues/11049)) ([2c5b5a7](https://github.com/aws-amplify/amplify-js/commit/2c5b5a7b0494ebb26eeae94885698253fa6c8ca5))

## [5.1.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.10...@aws-amplify/auth@5.1.11) (2023-03-06)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.9...@aws-amplify/auth@5.1.10) (2023-02-24)

### Bug Fixes

- **auth:** sends current user with attributes to hub ([#10947](https://github.com/aws-amplify/amplify-js/issues/10947)) ([4a9a71d](https://github.com/aws-amplify/amplify-js/commit/4a9a71d2299ff70591040cb481ec9e574ece5a60))

## [5.1.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.8...@aws-amplify/auth@5.1.9) (2023-02-16)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.7...@aws-amplify/auth@5.1.8) (2023-02-09)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.6...@aws-amplify/auth@5.1.7) (2023-02-08)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.5...@aws-amplify/auth@5.1.6) (2023-01-30)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.4...@aws-amplify/auth@5.1.5) (2023-01-19)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.3...@aws-amplify/auth@5.1.4) (2023-01-13)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.2...@aws-amplify/auth@5.1.3) (2023-01-10)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.1...@aws-amplify/auth@5.1.2) (2022-12-27)

**Note:** Version bump only for package @aws-amplify/auth

## [5.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.1.0...@aws-amplify/auth@5.1.1) (2022-12-16)

### Bug Fixes

- **amazon-cognito-identity-js:** specify the correct userAgent/deviceName when remembering devices (React Native) ([#10724](https://github.com/aws-amplify/amplify-js/issues/10724)) ([01a5b84](https://github.com/aws-amplify/amplify-js/commit/01a5b84ea010f7fb66c4e19e73301cce82fc7370))

# [5.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.0.5...@aws-amplify/auth@5.1.0) (2022-12-15)

### Features

- **auth,cognito-identity-js:** returning code delivery details as part of callback for updateAttributes, adds hub event to Auth.updateUserAttributes ([#10731](https://github.com/aws-amplify/amplify-js/issues/10731)) ([fc4940b](https://github.com/aws-amplify/amplify-js/commit/fc4940bc17e0deeb9e9ca2a00bed101e8ff7d3df))

## [5.0.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.0.4...@aws-amplify/auth@5.0.5) (2022-12-06)

### Bug Fixes

- **@aws-amplify/core,@aws-amplify/auth:** Use identityPoolRegion param correctly ([#10709](https://github.com/aws-amplify/amplify-js/issues/10709)) ([b4d2769](https://github.com/aws-amplify/amplify-js/commit/b4d27695b3e196cd14b486b9a8db778c9951bc29)), closes [#6462](https://github.com/aws-amplify/amplify-js/issues/6462)

## [5.0.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.0.3...@aws-amplify/auth@5.0.4) (2022-11-23)

**Note:** Version bump only for package @aws-amplify/auth

## [5.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.0.2...@aws-amplify/auth@5.0.3) (2022-11-19)

**Note:** Version bump only for package @aws-amplify/auth

## [5.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.0.1...@aws-amplify/auth@5.0.2) (2022-11-16)

### Bug Fixes

- **auth:** debouncing get user session calls ([#10654](https://github.com/aws-amplify/amplify-js/issues/10654)) ([056259d](https://github.com/aws-amplify/amplify-js/commit/056259d4b3c3f05d8a3b75565003b3ff1d4ea202))

## [5.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@5.0.0...@aws-amplify/auth@5.0.1) (2022-11-11)

**Note:** Version bump only for package @aws-amplify/auth

# [5.0.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.14...@aws-amplify/auth@5.0.0) (2022-11-09)

### Bug Fixes

- Move cache sideEffects to align with other packages ([#10562](https://github.com/aws-amplify/amplify-js/pull/10562))
- Standardize `cache` named export to preserve interoperability with RN ([#10546](https://github.com/aws-amplify/amplify-js/issues/10546)) ([20b096b](https://github.com/aws-amplify/amplify-js/commit/20b096b1a34e6a102d08dabcedb38772f3a6caf7))

### Features

- Setup tslib & importHelpers to improve bundle size ([#10435](https://github.com/aws-amplify/amplify-js/pull/10435))
- Migrate auth and amazon-cognito-identity-js to use @aws-crypto/sha256-js ([#10523](https://github.com/aws-amplify/amplify-js/pull/10523))
- Remove (most) default exports ([10461](https://github.com/aws-amplify/amplify-js/pull/10461))
- **@aws-amplify/auth:** remove crypto-js dependency ([#10591](https://github.com/aws-amplify/amplify-js/issues/10591)) ([daa4a98](https://github.com/aws-amplify/amplify-js/commit/daa4a983242fe2986991f4b9351de2d0a114915e))
- add a typescript coverage report mechanism ([#10551](https://github.com/aws-amplify/amplify-js/issues/10551)) ([8e8df55](https://github.com/aws-amplify/amplify-js/commit/8e8df55b449f8bae2fe962fe282613d1b818cc5a)), closes [#10379](https://github.com/aws-amplify/amplify-js/issues/10379)

## [4.6.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.12...@aws-amplify/auth@4.6.13) (2022-10-27)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.11...@aws-amplify/auth@4.6.12) (2022-10-26)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.10...@aws-amplify/auth@4.6.11) (2022-10-25)

### Bug Fixes

- **@aws-amplify/datastore:** introduce "settlement" guarantees to stop() and clear() ([#10450](https://github.com/aws-amplify/amplify-js/issues/10450)) ([16c535b](https://github.com/aws-amplify/amplify-js/commit/16c535beda9386a027c2805f29a359fbeb8bac15)), closes [#10449](https://github.com/aws-amplify/amplify-js/issues/10449)

## [4.6.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.9...@aws-amplify/auth@4.6.10) (2022-10-14)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.8...@aws-amplify/auth@4.6.9) (2022-10-14)

### Bug Fixes

- **@aws-amplify/datastore:** introduce "settlement" guarantees to stop() and clear() ([#10055](https://github.com/aws-amplify/amplify-js/issues/10055)) ([c64d7d6](https://github.com/aws-amplify/amplify-js/commit/c64d7d6284bc7b41a5a65b4b47d35ea274aed6b3))

### Reverts

- "fix(@aws-amplify/datastore): introduce "settlement" guarantees to stop() and clear()" ([#10449](https://github.com/aws-amplify/amplify-js/issues/10449)) ([d726bcc](https://github.com/aws-amplify/amplify-js/commit/d726bccca9712b8f43bc273052f970f8f931dd8c)), closes [aws-amplify/amplify-js#10055](https://github.com/aws-amplify/amplify-js/issues/10055)

## [4.6.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.6...@aws-amplify/auth@4.6.8) (2022-09-30)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.6...@aws-amplify/auth@4.6.7) (2022-09-20)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.5...@aws-amplify/auth@4.6.6) (2022-09-08)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.4...@aws-amplify/auth@4.6.5) (2022-09-01)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.3...@aws-amplify/auth@4.6.4) (2022-08-23)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.2...@aws-amplify/auth@4.6.3) (2022-08-18)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.1...@aws-amplify/auth@4.6.2) (2022-08-16)

**Note:** Version bump only for package @aws-amplify/auth

## [4.6.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.6.0...@aws-amplify/auth@4.6.1) (2022-08-01)

### Bug Fixes

- **@aws-amplify/auth:** fix storage bug for auto sign in value ([#10139](https://github.com/aws-amplify/amplify-js/issues/10139)) ([06504e6](https://github.com/aws-amplify/amplify-js/commit/06504e649068f01b85392373fdf80e2ed2a6cada))
- **auth:** Unauthenticated identity throws AuthError without user … ([#10090](https://github.com/aws-amplify/amplify-js/issues/10090)) ([2ac9035](https://github.com/aws-amplify/amplify-js/commit/2ac903516ec295fbf098f6a6644000177f315184))

# [4.6.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.10...@aws-amplify/auth@4.6.0) (2022-07-28)

### Features

- **@aws-amplify/auth:** Auto sign in after sign up ([#10126](https://github.com/aws-amplify/amplify-js/issues/10126)) ([e54617f](https://github.com/aws-amplify/amplify-js/commit/e54617f2878244f0e391d2d49f5cd2e8a8c069f9)), closes [#6320](https://github.com/aws-amplify/amplify-js/issues/6320) [#3882](https://github.com/aws-amplify/amplify-js/issues/3882) [#3631](https://github.com/aws-amplify/amplify-js/issues/3631) [#6018](https://github.com/aws-amplify/amplify-js/issues/6018)

## [4.5.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.9...@aws-amplify/auth@4.5.10) (2022-07-21)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.8...@aws-amplify/auth@4.5.9) (2022-07-07)

### Bug Fixes

- **amazon-cognito-identity-js:** Missing cognito user challenge name … ([#10047](https://github.com/aws-amplify/amplify-js/issues/10047)) ([de0441b](https://github.com/aws-amplify/amplify-js/commit/de0441b4fa67409ccbc630c42890e2c58ee779fb)), closes [#6974](https://github.com/aws-amplify/amplify-js/issues/6974)
- Update Auth to import JS using named export ([#10033](https://github.com/aws-amplify/amplify-js/issues/10033)) ([11b537c](https://github.com/aws-amplify/amplify-js/commit/11b537c62fee74c04e4e3b72ba43a353ba5152c9))

## [4.5.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.7...@aws-amplify/auth@4.5.8) (2022-06-18)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.6...@aws-amplify/auth@4.5.7) (2022-06-15)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.5...@aws-amplify/auth@4.5.6) (2022-05-24)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.4...@aws-amplify/auth@4.5.5) (2022-05-23)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.3...@aws-amplify/auth@4.5.4) (2022-05-12)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.2...@aws-amplify/auth@4.5.3) (2022-05-03)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.1...@aws-amplify/auth@4.5.2) (2022-04-14)

**Note:** Version bump only for package @aws-amplify/auth

## [4.5.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.5.0...@aws-amplify/auth@4.5.1) (2022-04-04)

**Note:** Version bump only for package @aws-amplify/auth

# [4.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.4.4...@aws-amplify/auth@4.5.0) (2022-03-28)

### Features

- PubSub Add Options objects for all Providers and fix: Spelling error and deprecation of old exports ([#9683](https://github.com/aws-amplify/amplify-js/issues/9683)) ([b535af2](https://github.com/aws-amplify/amplify-js/commit/b535af2133b5460c6e8e2fcfd89e1fe235872c27))

## [4.4.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.4.3...@aws-amplify/auth@4.4.4) (2022-03-22)

**Note:** Version bump only for package @aws-amplify/auth

## [4.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.4.2...@aws-amplify/auth@4.4.3) (2022-03-10)

### Bug Fixes

- **@aws-amplify/auth:** Invalid session cleanup ([#9628](https://github.com/aws-amplify/amplify-js/issues/9628)) ([7459d54](https://github.com/aws-amplify/amplify-js/commit/7459d54ccb21576c1c5a4b45b4b72183364b681b))

## [4.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.4.1...@aws-amplify/auth@4.4.2) (2022-02-28)

**Note:** Version bump only for package @aws-amplify/auth

## [4.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.4.0...@aws-amplify/auth@4.4.1) (2022-02-03)

**Note:** Version bump only for package @aws-amplify/auth

# [4.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.20...@aws-amplify/auth@4.4.0) (2022-01-27)

### Features

- **@aws-amplify/auth:** Delete user API exposed ([#9428](https://github.com/aws-amplify/amplify-js/issues/9428)) ([bf3d189](https://github.com/aws-amplify/amplify-js/commit/bf3d189c9e7e14342230fca8a0cbba6972e7b42c))

## [4.3.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.19...@aws-amplify/auth@4.3.20) (2022-01-07)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.18...@aws-amplify/auth@4.3.19) (2021-12-16)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.17...@aws-amplify/auth@4.3.18) (2021-12-03)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.16...@aws-amplify/auth@4.3.17) (2021-12-02)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.15...@aws-amplify/auth@4.3.16) (2021-11-18)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.14...@aws-amplify/auth@4.3.15) (2021-11-16)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.13...@aws-amplify/auth@4.3.14) (2021-11-12)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.12...@aws-amplify/auth@4.3.13) (2021-11-09)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.11...@aws-amplify/auth@4.3.12) (2021-10-28)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.10...@aws-amplify/auth@4.3.11) (2021-10-21)

### Bug Fixes

- **@aws-amplify/auth:** RN Linking removeEventListener() deprecated [#8902](https://github.com/aws-amplify/amplify-js/issues/8902) ([d9415e2](https://github.com/aws-amplify/amplify-js/commit/d9415e2b292d69418c40b58183098e04b1c8aad7))

## [4.3.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.9...@aws-amplify/auth@4.3.10) (2021-10-07)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.8...@aws-amplify/auth@4.3.9) (2021-09-30)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.7...@aws-amplify/auth@4.3.8) (2021-09-24)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.6...@aws-amplify/auth@4.3.7) (2021-09-22)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.5...@aws-amplify/auth@4.3.6) (2021-09-17)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.4...@aws-amplify/auth@4.3.5) (2021-09-09)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.3...@aws-amplify/auth@4.3.4) (2021-09-07)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.2...@aws-amplify/auth@4.3.3) (2021-09-04)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.1...@aws-amplify/auth@4.3.2) (2021-09-02)

**Note:** Version bump only for package @aws-amplify/auth

## [4.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.3.0...@aws-amplify/auth@4.3.1) (2021-08-26)

**Note:** Version bump only for package @aws-amplify/auth

# [4.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.2.1...@aws-amplify/auth@4.3.0) (2021-08-19)

### Features

- **@aws-amplify/auth:** Add a 'SUCCESS' response on successful call to forgotPasswordSubmit and verifyUserAttributes([#8744](https://github.com/aws-amplify/amplify-js/issues/8744)) ([1bd6c35](https://github.com/aws-amplify/amplify-js/commit/1bd6c35c115321d77f48a3954942dd57d7cf9056))

## [4.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.2.0...@aws-amplify/auth@4.2.1) (2021-08-12)

### Bug Fixes

- function parameters partiy with signIn ([#8713](https://github.com/aws-amplify/amplify-js/issues/8713)) ([b5d4243](https://github.com/aws-amplify/amplify-js/commit/b5d424372d382e638bd58844ec34c512026cae02))

# [4.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.1.3...@aws-amplify/auth@4.2.0) (2021-07-28)

### Features

- **@aws-amplify/auth:** delete user attributes ([#7342](https://github.com/aws-amplify/amplify-js/issues/7342)) ([1b1df67](https://github.com/aws-amplify/amplify-js/commit/1b1df679d874e824bc89f95054008b2f46ae76cf))

## [4.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.1.2...@aws-amplify/auth@4.1.3) (2021-07-22)

### Bug Fixes

- **amazon-cognito-identity-is, @aws-amplify/auth:** upgrade crypto-js to 4.1.1 to fix bundle size issue ([#8626](https://github.com/aws-amplify/amplify-js/issues/8626)) ([b16f8e7](https://github.com/aws-amplify/amplify-js/commit/b16f8e7801790a59a8ad0c40b598f4962aada60e))

## [4.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.1.1...@aws-amplify/auth@4.1.2) (2021-07-16)

**Note:** Version bump only for package @aws-amplify/auth

## [4.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.1.0...@aws-amplify/auth@4.1.1) (2021-07-08)

**Note:** Version bump only for package @aws-amplify/auth

# [4.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.0.3...@aws-amplify/auth@4.1.0) (2021-06-24)

### Bug Fixes

- **@aws-amplify/auth:** Device tracking name field fix ([#8502](https://github.com/aws-amplify/amplify-js/issues/8502)) ([02e2bfb](https://github.com/aws-amplify/amplify-js/commit/02e2bfba9ce240ee2cd1c5ae21b27693966a1f9b))
- **@aws-amplify/core:** Dummy commit to force version bump ([#8503](https://github.com/aws-amplify/amplify-js/issues/8503)) ([0670ec1](https://github.com/aws-amplify/amplify-js/commit/0670ec17a250089f42b669d53e072719d99a507b))

### Features

- **@aws-amplify/auth:** adding capabilities for device tracking in JS ([3a9646a](https://github.com/aws-amplify/amplify-js/commit/3a9646a7ace4eb5b134ce96aadab620f8b93a8fb))
- add handleSignUp prop to override auth signup method ([#8474](https://github.com/aws-amplify/amplify-js/issues/8474)) ([a5f2466](https://github.com/aws-amplify/amplify-js/commit/a5f2466454f0cc1e0223fb03e78142209cf1f033))

## [4.0.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.0.2...@aws-amplify/auth@4.0.3) (2021-06-18)

**Note:** Version bump only for package @aws-amplify/auth

## [4.0.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@4.0.1...@aws-amplify/auth@4.0.2) (2021-06-10)

**Note:** Version bump only for package @aws-amplify/auth

## [4.0.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.33...@aws-amplify/auth@4.0.1) (2021-05-26)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.33](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.32...@aws-amplify/auth@3.4.33) (2021-05-14)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.32](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.31...@aws-amplify/auth@3.4.32) (2021-05-11)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.31](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.30...@aws-amplify/auth@3.4.31) (2021-05-06)

### Bug Fixes

- **@aws-amplify/auth:** Handle URIs with no path part ([#8198](https://github.com/aws-amplify/amplify-js/issues/8198)) ([028e4ee](https://github.com/aws-amplify/amplify-js/commit/028e4ee1f7a660ae811b0e1ee846c978958719ae)), closes [#7468](https://github.com/aws-amplify/amplify-js/issues/7468)
- **@aws-amplify/auth:** Ignores case when converting strings to booleans for user attributes ([#8206](https://github.com/aws-amplify/amplify-js/issues/8206)) ([89a2250](https://github.com/aws-amplify/amplify-js/commit/89a225059f6c0232aca3e1f3659348a984a5f277))

## [3.4.30](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.29...@aws-amplify/auth@3.4.30) (2021-04-15)

### Bug Fixes

- **@aws-amplify/auth:** define validationData type as object literal ([#8045](https://github.com/aws-amplify/amplify-js/issues/8045)) ([6d0b67c](https://github.com/aws-amplify/amplify-js/commit/6d0b67c4ee4e2275707f462a315b9c8ea536b91d))

## [3.4.29](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.28...@aws-amplify/auth@3.4.29) (2021-03-25)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.28](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.27...@aws-amplify/auth@3.4.28) (2021-03-18)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.27](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.26...@aws-amplify/auth@3.4.27) (2021-03-12)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.26](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.25...@aws-amplify/auth@3.4.26) (2021-03-08)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.25](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.24...@aws-amplify/auth@3.4.25) (2021-03-03)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.24](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.23...@aws-amplify/auth@3.4.24) (2021-02-25)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.23](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.22...@aws-amplify/auth@3.4.23) (2021-02-18)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.22](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.21...@aws-amplify/auth@3.4.22) (2021-02-15)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.21](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.20...@aws-amplify/auth@3.4.21) (2021-02-09)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.20](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.19...@aws-amplify/auth@3.4.20) (2021-02-03)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.19](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.18...@aws-amplify/auth@3.4.19) (2021-02-01)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.18](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.17...@aws-amplify/auth@3.4.18) (2021-01-29)

### Bug Fixes

- **@aws-amplify/auth, amazon-cognito-identity-js:** Include clientMetadata for token refresh ([#7633](https://github.com/aws-amplify/amplify-js/issues/7633)) ([3a9efb0](https://github.com/aws-amplify/amplify-js/commit/3a9efb0b596cf2795d7e1424f011f8e59058ecfb))

## [3.4.17](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.16...@aws-amplify/auth@3.4.17) (2021-01-07)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.16](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.15...@aws-amplify/auth@3.4.16) (2020-12-17)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.15](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.14...@aws-amplify/auth@3.4.15) (2020-12-10)

### Bug Fixes

- **@aws-amplify/core:** refresh manually after TTL has passed ([#7288](https://github.com/aws-amplify/amplify-js/issues/7288)) ([74b895c](https://github.com/aws-amplify/amplify-js/commit/74b895c45e629edc5ecf333e2769f222ae500834))
- **6774:** fixed 'signIn' not being called on successful verification of totp token ([15e7257](https://github.com/aws-amplify/amplify-js/commit/15e7257a306f4e773f0f71617cf569baaae4af9b))
- **tidy:** tidying up ([5956694](https://github.com/aws-amplify/amplify-js/commit/59566947078952aaedfa33a43b3418103dc07bcd))

## [3.4.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.13...@aws-amplify/auth@3.4.14) (2020-11-30)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.12...@aws-amplify/auth@3.4.13) (2020-11-23)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.11...@aws-amplify/auth@3.4.12) (2020-11-20)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.10...@aws-amplify/auth@3.4.11) (2020-11-13)

### Bug Fixes

- **@aws-amplify/auth:** fix signIn event message ([#7151](https://github.com/aws-amplify/amplify-js/issues/7151)) ([60b0f9c](https://github.com/aws-amplify/amplify-js/commit/60b0f9cdc80a80f69fe4cfddf48f07166bc0f7de))

## [3.4.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.9...@aws-amplify/auth@3.4.10) (2020-11-03)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.8...@aws-amplify/auth@3.4.9) (2020-10-31)

### Bug Fixes

- **amazon-cognito-identity-js:** update random implementation ([#7090](https://github.com/aws-amplify/amplify-js/issues/7090)) ([7048453](https://github.com/aws-amplify/amplify-js/commit/70484532da8a9953384b00b223b2b3ba0c0e845e))

## [3.4.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.7...@aws-amplify/auth@3.4.8) (2020-10-29)

### Bug Fixes

- **@aws-amplify/auth:** fix the way clientMetadata is passed ([#6941](https://github.com/aws-amplify/amplify-js/issues/6941)) ([a85c724](https://github.com/aws-amplify/amplify-js/commit/a85c7244b514faaaf82dc1b8f454226294747f6a))

## [3.4.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.6...@aws-amplify/auth@3.4.7) (2020-10-15)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.5...@aws-amplify/auth@3.4.6) (2020-10-01)

### Bug Fixes

- **@aws-amplify/datastore:** add token to currentAuthenticatedUser for OIDC ([#6858](https://github.com/aws-amplify/amplify-js/issues/6858)) ([61f7478](https://github.com/aws-amplify/amplify-js/commit/61f7478609fce7dd2f25c562aeb887d3f3db4a67))

## [3.4.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.4...@aws-amplify/auth@3.4.5) (2020-09-25)

### Bug Fixes

- Add files with Amplify.register to sideEffects array ([#6867](https://github.com/aws-amplify/amplify-js/issues/6867)) ([58ddbf8](https://github.com/aws-amplify/amplify-js/commit/58ddbf8811e44695d97b6ab8be8f7cd2a2242921))

## [3.4.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.3...@aws-amplify/auth@3.4.4) (2020-09-16)

### Bug Fixes

- **@aws-amplify/auth:** Fix binding for Auth.currentCredentials ([#6809](https://github.com/aws-amplify/amplify-js/issues/6809)) ([912cf10](https://github.com/aws-amplify/amplify-js/commit/912cf105785584e9ba55f78c86dffed50b0bd6df))

## [3.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.2...@aws-amplify/auth@3.4.3) (2020-09-15)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.1...@aws-amplify/auth@3.4.2) (2020-09-10)

**Note:** Version bump only for package @aws-amplify/auth

## [3.4.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.4.0...@aws-amplify/auth@3.4.1) (2020-09-03)

**Note:** Version bump only for package @aws-amplify/auth

# [3.4.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.6...@aws-amplify/auth@3.4.0) (2020-09-03)

### Features

- **SSR:** withSSRContext ([#6146](https://github.com/aws-amplify/amplify-js/issues/6146)) ([1cb1afd](https://github.com/aws-amplify/amplify-js/commit/1cb1afd1e56135908dceb2ef6403f0b3e78067fe))

## [3.3.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.5...@aws-amplify/auth@3.3.6) (2020-09-01)

### Bug Fixes

- **@aws-amplify/auth:** Fix types for completeNewPassword ([#6657](https://github.com/aws-amplify/amplify-js/issues/6657)) ([84af018](https://github.com/aws-amplify/amplify-js/commit/84af018657a30382cd489c35a0ebc4c41a63bc26)), closes [#6634](https://github.com/aws-amplify/amplify-js/issues/6634)
- **@aws-amplify/auth:** incorrect return type for Auth.resendSignUp ([#5112](https://github.com/aws-amplify/amplify-js/issues/5112)) ([9164b37](https://github.com/aws-amplify/amplify-js/commit/9164b37cb7669c9dd08927dde58dccbefad25194))

## [3.3.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.4...@aws-amplify/auth@3.3.5) (2020-08-19)

### Bug Fixes

- **@aws-amplify/auth:** Default hash to `#` when null ([#6279](https://github.com/aws-amplify/amplify-js/issues/6279)) ([eb97194](https://github.com/aws-amplify/amplify-js/commit/eb9719467f7c143a26bfd2d598b3903ff0815731))
- **@aws-amplify/auth:** Force clear credentials when bypassCache: true ([#6581](https://github.com/aws-amplify/amplify-js/issues/6581)) ([128527c](https://github.com/aws-amplify/amplify-js/commit/128527c6834bafe37b2f4c6c5fca9029b03a7e3d))

## [3.3.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.3...@aws-amplify/auth@3.3.4) (2020-08-06)

**Note:** Version bump only for package @aws-amplify/auth

## [3.3.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.2...@aws-amplify/auth@3.3.3) (2020-07-27)

**Note:** Version bump only for package @aws-amplify/auth

## [3.3.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.1...@aws-amplify/auth@3.3.2) (2020-07-22)

### Bug Fixes

- **@aws-amplify/auth:** add totpRequired callback to completeNewPassword ([#6292](https://github.com/aws-amplify/amplify-js/issues/6292)) ([6b52d0b](https://github.com/aws-amplify/amplify-js/commit/6b52d0b1e26ad0b3661536040af3d78ddf20b3e9))
- **@aws-amplify/auth:** Fix react-native oauth signout ([#6376](https://github.com/aws-amplify/amplify-js/issues/6376)) ([c27b816](https://github.com/aws-amplify/amplify-js/commit/c27b8164995220090967f782ccd8e42ad4fa4bdb))
- **@aws-amplify/auth:** signout promise on OAuth flow ([#6294](https://github.com/aws-amplify/amplify-js/issues/6294)) ([68af3ab](https://github.com/aws-amplify/amplify-js/commit/68af3abb54d5af4e1bcedacb8e2137e10e2c971c))

## [3.3.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.3.0...@aws-amplify/auth@3.3.1) (2020-07-09)

**Note:** Version bump only for package @aws-amplify/auth

# [3.3.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.14...@aws-amplify/auth@3.3.0) (2020-07-07)

### Bug Fixes

- **@aws-amplify/auth:** User Attributes coerced to boolean ([#6180](https://github.com/aws-amplify/amplify-js/issues/6180)) ([8dd9295](https://github.com/aws-amplify/amplify-js/commit/8dd92959fbe11c328ec4f8e467c0929ed1e7e5ca))

### Features

- **@aws-amplify/auth:** add SignInWithApple to supported providers ([#5402](https://github.com/aws-amplify/amplify-js/issues/5402)) ([c6e8162](https://github.com/aws-amplify/amplify-js/commit/c6e8162bd9a148453f3cb1f58960ed3a59a50a0b))

## [3.2.14](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.13...@aws-amplify/auth@3.2.14) (2020-06-18)

### Bug Fixes

- **@aws-amplify/auth:** Call replaceState before dispatchAuthEvent ([#5937](https://github.com/aws-amplify/amplify-js/issues/5937)) ([1e8d4ed](https://github.com/aws-amplify/amplify-js/commit/1e8d4ed9cdecf8b91d5032ae6125afe6b9048873))
- **@aws-amplify/core:** retry federation refresh token on network error ([#5728](https://github.com/aws-amplify/amplify-js/issues/5728)) ([bd07ee8](https://github.com/aws-amplify/amplify-js/commit/bd07ee8e8b987021e58b9c25d5e1ef524aa4abbc))

## [3.2.13](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.12...@aws-amplify/auth@3.2.13) (2020-06-09)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.12](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.11...@aws-amplify/auth@3.2.12) (2020-06-04)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.11](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.10...@aws-amplify/auth@3.2.11) (2020-06-03)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.10](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.9...@aws-amplify/auth@3.2.10) (2020-06-02)

### Bug Fixes

- **@aws-amplify/auth:** Race condition fixes for OAuth flow ([#5929](https://github.com/aws-amplify/amplify-js/issues/5929)) ([4b6fd33](https://github.com/aws-amplify/amplify-js/commit/4b6fd33c88636bbe9aea81532857003ab52bc1be))

## [3.2.9](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.8...@aws-amplify/auth@3.2.9) (2020-05-26)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.7...@aws-amplify/auth@3.2.8) (2020-05-22)

### Bug Fixes

- **@aws-amplify/auth:** Fix OAuth multiple scopes ([#5850](https://github.com/aws-amplify/amplify-js/issues/5850)) ([f89e545](https://github.com/aws-amplify/amplify-js/commit/f89e545a93f370f0ce91b437514f833b03c6202b))
- **@aws-amplify/auth:** Fix OAuth scopes ([#5844](https://github.com/aws-amplify/amplify-js/issues/5844)) ([e71fee5](https://github.com/aws-amplify/amplify-js/commit/e71fee58bdd940f5fbcd4268f08f53e2b85168bd))

## [3.2.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.6...@aws-amplify/auth@3.2.7) (2020-05-14)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.5...@aws-amplify/auth@3.2.6) (2020-04-30)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.4...@aws-amplify/auth@3.2.5) (2020-04-24)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.4](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.3...@aws-amplify/auth@3.2.4) (2020-04-14)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.2...@aws-amplify/auth@3.2.3) (2020-04-08)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.1...@aws-amplify/auth@3.2.2) (2020-04-07)

**Note:** Version bump only for package @aws-amplify/auth

## [3.2.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.2.0...@aws-amplify/auth@3.2.1) (2020-04-03)

**Note:** Version bump only for package @aws-amplify/auth

# [3.2.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.1.2...@aws-amplify/auth@3.2.0) (2020-04-02)

### Features

- **@aws-amplify/ui-components:** User agent tracking for UI component packages ([#4804](https://github.com/aws-amplify/amplify-js/issues/4804)) ([15a0a2f](https://github.com/aws-amplify/amplify-js/commit/15a0a2fadeb96543721a6733faeb509efc26e1e2))

## [3.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.1.1...@aws-amplify/auth@3.1.2) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/auth

## [3.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@3.1.0...@aws-amplify/auth@3.1.1) (2020-04-01)

**Note:** Version bump only for package @aws-amplify/auth

# [3.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.8...@aws-amplify/auth@3.1.0) (2020-03-31)

### Bug Fixes

- **@aws-amplify/auth:** expose tree-shaking for Webpack ([7ad2d4e](https://github.com/aws-amplify/amplify-js/commit/7ad2d4e7a2673481ab45b416caed7593b7973f32))
- **core, auth, aws-amplify-react:** fix tests ([bdd162c](https://github.com/aws-amplify/amplify-js/commit/bdd162c2dd03488168a299f8dd8c554f76ca8a12))

### Features

- **@aws-amplify/auth:** publish ES2015/ESM artifacts ([6cf2c22](https://github.com/aws-amplify/amplify-js/commit/6cf2c22b9a9013092fa81ee51ff5f280d6152e1d))
- **@aws-amplify/core:** [Delivers [#168673137](https://github.com/aws-amplify/amplify-js/issues/168673137)] Migrate core category to aws sdk V3 ([#4077](https://github.com/aws-amplify/amplify-js/issues/4077)) ([beb73a4](https://github.com/aws-amplify/amplify-js/commit/beb73a4b1c051654750f5bdc3b20cde3a3aba37d))

### Reverts

- Revert "Publish" ([1319d31](https://github.com/aws-amplify/amplify-js/commit/1319d319b69717e76660fbfa6f1a845195c6d635))

## [2.1.8](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.7...@aws-amplify/auth@2.1.8) (2020-03-30)

**Note:** Version bump only for package @aws-amplify/auth

## [2.1.7](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.6...@aws-amplify/auth@2.1.7) (2020-03-25)

**Note:** Version bump only for package @aws-amplify/auth

## [2.1.6](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.5...@aws-amplify/auth@2.1.6) (2020-02-28)

**Note:** Version bump only for package @aws-amplify/auth

## [2.1.5](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.3...@aws-amplify/auth@2.1.5) (2020-02-07)

### Bug Fixes

- **auth:** prevent urlListener from firing auth flow twice with the same URL ([#4798](https://github.com/aws-amplify/amplify-js/issues/4798)) ([cf8738a](https://github.com/aws-amplify/amplify-js/commit/cf8738ac5e7961a163ce158a7383bc27f693475f))
- **cache:** export correct module for RN ([#4786](https://github.com/aws-amplify/amplify-js/issues/4786)) ([a15730c](https://github.com/aws-amplify/amplify-js/commit/a15730cc50692d9d31a0f586c3544b3dcdbea659))

## [2.1.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.2...@aws-amplify/auth@2.1.3) (2020-01-10)

### Bug Fixes

- [#4311](https://github.com/aws-amplify/amplify-js/issues/4311) Update main entry field to point to CJS builds instead of webpack bundles ([#4678](https://github.com/aws-amplify/amplify-js/issues/4678)) ([54fbdf4](https://github.com/aws-amplify/amplify-js/commit/54fbdf4b1393567735fb7b5f4144db273f1a5f6a))

## [2.1.2](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.1...@aws-amplify/auth@2.1.2) (2019-12-18)

### Bug Fixes

- **@aws-amplify/auth:** Adjust Cognito error message checking for dis… ([#4546](https://github.com/aws-amplify/amplify-js/issues/4546)) ([2d4d24b](https://github.com/aws-amplify/amplify-js/commit/2d4d24b004e8a52901b673265abbf4fb7241c4e4)), closes [#4544](https://github.com/aws-amplify/amplify-js/issues/4544)

## [2.1.1](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@2.1.0...@aws-amplify/auth@2.1.1) (2019-12-03)

**Note:** Version bump only for package @aws-amplify/auth

# [2.1.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@1.5.0...@aws-amplify/auth@2.1.0) (2019-11-15)

### Bug Fixes

- **@aws-amplify/auth:** NotAuthorizedException ([#4281](https://github.com/aws-amplify/amplify-js/issues/4281)) ([023f496](https://github.com/aws-amplify/amplify-js/commit/023f4960d80c9774d85cbc7593175d7380fcbed2))

### Features

- enable watch mode for builds ([#4358](https://github.com/aws-amplify/amplify-js/issues/4358)) ([055e530](https://github.com/aws-amplify/amplify-js/commit/055e5308efc308ae6beee78f8963bb2f812e1f85))

# [1.5.0](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@1.4.3...@aws-amplify/auth@1.5.0) (2019-10-29)

### Features

- **@aws-amplify/auth:** clientMetadata ([#4149](https://github.com/aws-amplify/amplify-js/issues/4149)) ([ac34816](https://github.com/aws-amplify/amplify-js/commit/ac34816df326331cfe04474fdf35790c52f4a1d3))

## [1.4.3](https://github.com/aws-amplify/amplify-js/compare/@aws-amplify/auth@1.4.2...@aws-amplify/auth@1.4.3) (2019-10-23)

**Note:** Version bump only for package @aws-amplify/auth

## [1.4.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.4.0...@aws-amplify/auth@1.4.2) (2019-10-10)

**Note:** Version bump only for package @aws-amplify/auth

# [1.4.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.3.3...@aws-amplify/auth@1.4.0) (2019-10-10)

### Features

- Added Prettier formatting ([4dfd9aa](https://github.com/aws/aws-amplify/commit/4dfd9aa9ab900307c9d17c68448a6ca4aa08fd5a))

## [1.3.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.3.1...@aws-amplify/auth@1.3.3) (2019-09-13)

**Note:** Version bump only for package @aws-amplify/auth

## [1.3.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.3.0...@aws-amplify/auth@1.3.1) (2019-09-05)

**Note:** Version bump only for package @aws-amplify/auth

# [1.3.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.31...@aws-amplify/auth@1.3.0) (2019-09-04)

### Features

- **@aws-amplify/auth:** Error messaging ([47ec74d](https://github.com/aws/aws-amplify/commit/47ec74d))

## [1.2.31](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.30...@aws-amplify/auth@1.2.31) (2019-08-05)

### Bug Fixes

- **@aws-amplify/auth:** Encode customState when storing to compare against incoming state for federated sign in ([#3784](https://github.com/aws/aws-amplify/issues/3784)) ([1824134](https://github.com/aws/aws-amplify/commit/1824134))

## [1.2.30](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.29...@aws-amplify/auth@1.2.30) (2019-07-31)

**Note:** Version bump only for package @aws-amplify/auth

## [1.2.29](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.28...@aws-amplify/auth@1.2.29) (2019-07-30)

### Bug Fixes

- **@aws-amplify/auth:** Improve OAuth flow in react native ([#3698](https://github.com/aws/aws-amplify/issues/3698)) ([799a1cf](https://github.com/aws/aws-amplify/commit/799a1cf)), closes [#3681](https://github.com/aws/aws-amplify/issues/3681)

## [1.2.28](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.26...@aws-amplify/auth@1.2.28) (2019-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.27-unstable.1"></a>

## [1.2.27-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.27-unstable.0...@aws-amplify/auth@1.2.27-unstable.1) (2019-07-12)

### Bug Fixes

- **@aws-amplify/auth, aws-amplify-react-native:** Fix OAuth flow in react native ([#3633](https://github.com/aws/aws-amplify/issues/3633)) ([82e74fc](https://github.com/aws/aws-amplify/commit/82e74fc)), closes [#3399](https://github.com/aws/aws-amplify/issues/3399) [#3576](https://github.com/aws/aws-amplify/issues/3576) [#3247](https://github.com/aws/aws-amplify/issues/3247) [#3592](https://github.com/aws/aws-amplify/issues/3592) [#3210](https://github.com/aws/aws-amplify/issues/3210)

<a name="1.2.27-unstable.0"></a>

## [1.2.27-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.26...@aws-amplify/auth@1.2.27-unstable.0) (2019-07-10)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.26"></a>

## [1.2.26](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.26-unstable.0...@aws-amplify/auth@1.2.26) (2019-07-09)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.26-unstable.0"></a>

## [1.2.26-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.25...@aws-amplify/auth@1.2.26-unstable.0) (2019-06-27)

### Bug Fixes

- **@aws-amplify/auth:** Handle case when `signOut()` promise is rejected ([#3179](https://github.com/aws/aws-amplify/issues/3179)) ([0a2efd4](https://github.com/aws/aws-amplify/commit/0a2efd4))

<a name="1.2.25"></a>

## [1.2.25](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.25-unstable.3...@aws-amplify/auth@1.2.25) (2019-06-17)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.25-unstable.3"></a>

## [1.2.25-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.25-unstable.2...@aws-amplify/auth@1.2.25-unstable.3) (2019-06-14)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.25-unstable.2"></a>

## [1.2.25-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.25-unstable.1...@aws-amplify/auth@1.2.25-unstable.2) (2019-05-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.25-unstable.1"></a>

## [1.2.25-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.24...@aws-amplify/auth@1.2.25-unstable.1) (2019-05-24)

### Bug Fixes

- **@aws-amplify/auth:** check if storage object is valid or not ([d93d36d](https://github.com/aws/aws-amplify/commit/d93d36d))
- **aws-amplify:** manual version bumps for lerna issue ([9ce5a72](https://github.com/aws/aws-amplify/commit/9ce5a72))

<a name="1.2.24"></a>

## [1.2.24](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.24-unstable.1...@aws-amplify/auth@1.2.24) (2019-05-14)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.24-unstable.1"></a>

## [1.2.24-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.24-unstable.0...@aws-amplify/auth@1.2.24-unstable.1) (2019-05-13)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.24-unstable.0"></a>

## [1.2.24-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23...@aws-amplify/auth@1.2.24-unstable.0) (2019-05-09)

### Bug Fixes

- **@aws-amplify/auth:** react-native - guard for window ([9254312](https://github.com/aws/aws-amplify/commit/9254312))

<a name="1.2.23"></a>

## [1.2.23](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.8...@aws-amplify/auth@1.2.23) (2019-05-06)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.23-unstable.8"></a>

## [1.2.23-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.7...@aws-amplify/auth@1.2.23-unstable.8) (2019-05-06)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.23-unstable.7"></a>

## [1.2.23-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.6...@aws-amplify/auth@1.2.23-unstable.7) (2019-04-26)

### Bug Fixes

- **@aws-amplify/auth:** User may not be fully signed out ([#3172](https://github.com/aws/aws-amplify/issues/3172)) ([2678cc3](https://github.com/aws/aws-amplify/commit/2678cc3)), closes [#3117](https://github.com/aws/aws-amplify/issues/3117)

<a name="1.2.23-unstable.6"></a>

## [1.2.23-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.5...@aws-amplify/auth@1.2.23-unstable.6) (2019-04-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.23-unstable.5"></a>

## [1.2.23-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.4...@aws-amplify/auth@1.2.23-unstable.5) (2019-04-24)

### Bug Fixes

- **@aws-amplify/auth:** Always bypass the cache on setPreferredMFA method ([3b28c98](https://github.com/aws/aws-amplify/commit/3b28c98))

### Features

- **@aws-amplify/auth:** Allow bypassing cache on setPreferredMFA and getPreferredMFA methods ([83a8ccf](https://github.com/aws/aws-amplify/commit/83a8ccf))

<a name="1.2.23-unstable.4"></a>

## [1.2.23-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.3...@aws-amplify/auth@1.2.23-unstable.4) (2019-04-24)

### Bug Fixes

- **@aws-amplify/auth:** fix 'Not Supported' error on SSR ([7f7e93d](https://github.com/aws/aws-amplify/commit/7f7e93d))

<a name="1.2.23-unstable.3"></a>

## [1.2.23-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.2...@aws-amplify/auth@1.2.23-unstable.3) (2019-04-17)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.23-unstable.2"></a>

## [1.2.23-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.1...@aws-amplify/auth@1.2.23-unstable.2) (2019-04-16)

### Bug Fixes

- **@aws-amplify/auth:** throw error when passing empty object to storage or cookieStorage in configuration ([816a827](https://github.com/aws/aws-amplify/commit/816a827))

<a name="1.2.23-unstable.1"></a>

## [1.2.23-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.23-unstable.0...@aws-amplify/auth@1.2.23-unstable.1) (2019-04-12)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.23-unstable.0"></a>

## [1.2.23-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.22...@aws-amplify/auth@1.2.23-unstable.0) (2019-04-12)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.22"></a>

## [1.2.22](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.22-unstable.0...@aws-amplify/auth@1.2.22) (2019-04-11)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.22-unstable.0"></a>

## [1.2.22-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.21...@aws-amplify/auth@1.2.22-unstable.0) (2019-04-10)

### Bug Fixes

- **@aws-amplify/auth:** Valide OAuth state only when generated by Amlify ([#3069](https://github.com/aws/aws-amplify/issues/3069)) ([30e828f](https://github.com/aws/aws-amplify/commit/30e828f)), closes [#3054](https://github.com/aws/aws-amplify/issues/3054) [#3055](https://github.com/aws/aws-amplify/issues/3055)

<a name="1.2.21"></a>

## [1.2.21](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.21-unstable.1...@aws-amplify/auth@1.2.21) (2019-04-09)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.21-unstable.1"></a>

## [1.2.21-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.21-unstable.0...@aws-amplify/auth@1.2.21-unstable.1) (2019-04-08)

### Features

- **@aws-amplify/auth:** Easier Federation with OAuth ([#3005](https://github.com/aws/aws-amplify/issues/3005)) ([76cde59](https://github.com/aws/aws-amplify/commit/76cde59))

<a name="1.2.21-unstable.0"></a>

## [1.2.21-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.20...@aws-amplify/auth@1.2.21-unstable.0) (2019-04-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.20"></a>

## [1.2.20](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.20-unstable.1...@aws-amplify/auth@1.2.20) (2019-04-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.20-unstable.1"></a>

## [1.2.20-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.20-unstable.0...@aws-amplify/auth@1.2.20-unstable.1) (2019-04-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.20-unstable.0"></a>

## [1.2.20-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19...@aws-amplify/auth@1.2.20-unstable.0) (2019-04-02)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.19"></a>

## [1.2.19](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19-unstable.5...@aws-amplify/auth@1.2.19) (2019-03-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.19-unstable.5"></a>

## [1.2.19-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19-unstable.4...@aws-amplify/auth@1.2.19-unstable.5) (2019-03-28)

### Features

- **core:** Hub refactor and tests ([7ac5bcf](https://github.com/aws/aws-amplify/commit/7ac5bcf))

<a name="1.2.19-unstable.4"></a>

## [1.2.19-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19-unstable.3...@aws-amplify/auth@1.2.19-unstable.4) (2019-03-24)

### Bug Fixes

- **auth:** Remove react-native related peerDependencies ([#2871](https://github.com/aws/aws-amplify/issues/2871)) ([72f3d94](https://github.com/aws/aws-amplify/commit/72f3d94))

<a name="1.2.19-unstable.3"></a>

## [1.2.19-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19-unstable.2...@aws-amplify/auth@1.2.19-unstable.3) (2019-03-22)

### Bug Fixes

- **@aws-amplify/auth:** get the user attributes after signing in ([c024263](https://github.com/aws/aws-amplify/commit/c024263))

<a name="1.2.19-unstable.2"></a>

## [1.2.19-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19-unstable.1...@aws-amplify/auth@1.2.19-unstable.2) (2019-03-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.19-unstable.1"></a>

## [1.2.19-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.19-unstable.0...@aws-amplify/auth@1.2.19-unstable.1) (2019-03-19)

### Bug Fixes

- **@aws-amplify/auth:** check if has the right scope to send the request GetUserData ([20bd92b](https://github.com/aws/aws-amplify/commit/20bd92b))

<a name="1.2.19-unstable.0"></a>

## [1.2.19-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.18...@aws-amplify/auth@1.2.19-unstable.0) (2019-03-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.18"></a>

## [1.2.18](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.18-unstable.1...@aws-amplify/auth@1.2.18) (2019-03-06)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.18-unstable.1"></a>

## [1.2.18-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.18-unstable.0...@aws-amplify/auth@1.2.18-unstable.1) (2019-03-06)

### Bug Fixes

- **auth:** Split urlListener into web/react-native ([b33fee0](https://github.com/aws/aws-amplify/commit/b33fee0)), closes [#2808](https://github.com/aws/aws-amplify/issues/2808)

<a name="1.2.18-unstable.0"></a>

## [1.2.18-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.17...@aws-amplify/auth@1.2.18-unstable.0) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.17"></a>

## [1.2.17](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16...@aws-amplify/auth@1.2.17) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16"></a>

## [1.2.16](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.8...@aws-amplify/auth@1.2.16) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.8"></a>

## [1.2.16-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.7...@aws-amplify/auth@1.2.16-unstable.8) (2019-03-04)

### Features

- **aws-amplify-react-native:** Add withOAuth HOC for Cognito Hosted UI ([#2665](https://github.com/aws/aws-amplify/issues/2665)) ([ac4d232](https://github.com/aws/aws-amplify/commit/ac4d232))

<a name="1.2.16-unstable.7"></a>

## [1.2.16-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.6...@aws-amplify/auth@1.2.16-unstable.7) (2019-03-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.6"></a>

## [1.2.16-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.5...@aws-amplify/auth@1.2.16-unstable.6) (2019-03-01)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.5"></a>

## [1.2.16-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.4...@aws-amplify/auth@1.2.16-unstable.5) (2019-02-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.4"></a>

## [1.2.16-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.3...@aws-amplify/auth@1.2.16-unstable.4) (2019-02-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.3"></a>

## [1.2.16-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.2...@aws-amplify/auth@1.2.16-unstable.3) (2019-01-21)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.2"></a>

## [1.2.16-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.1...@aws-amplify/auth@1.2.16-unstable.2) (2019-01-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.1"></a>

## [1.2.16-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.16-unstable.0...@aws-amplify/auth@1.2.16-unstable.1) (2019-01-10)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.16-unstable.0"></a>

## [1.2.16-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.15...@aws-amplify/auth@1.2.16-unstable.0) (2019-01-10)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.15"></a>

## [1.2.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.15-unstable.0...@aws-amplify/auth@1.2.15) (2019-01-10)

### Bug Fixes

- **@aws-amplify/auth:** wait for cached data loaded into memory before calling getItem ([5fc6d77](https://github.com/aws/aws-amplify/commit/5fc6d77))

<a name="1.2.15-unstable.0"></a>

## [1.2.15-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.14...@aws-amplify/auth@1.2.15-unstable.0) (2018-12-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.14"></a>

## [1.2.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.14-unstable.2...@aws-amplify/auth@1.2.14) (2018-12-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.14-unstable.2"></a>

## [1.2.14-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.14-unstable.1...@aws-amplify/auth@1.2.14-unstable.2) (2018-12-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.14-unstable.1"></a>

## [1.2.14-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.14-unstable.0...@aws-amplify/auth@1.2.14-unstable.1) (2018-12-20)

### Bug Fixes

- **@aws-amplify/auth:** typo ([2f411ad](https://github.com/aws/aws-amplify/commit/2f411ad))

<a name="1.2.14-unstable.0"></a>

## [1.2.14-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.13...@aws-amplify/auth@1.2.14-unstable.0) (2018-12-19)

### Bug Fixes

- **@aws-amplify/auth:** put warning message in the federatedSignIn method ([9fff76a](https://github.com/aws/aws-amplify/commit/9fff76a))

<a name="1.2.13"></a>

## [1.2.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.13-unstable.3...@aws-amplify/auth@1.2.13) (2018-12-13)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.13-unstable.3"></a>

## [1.2.13-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.13-unstable.2...@aws-amplify/auth@1.2.13-unstable.3) (2018-12-13)

### Features

- **@aws-amplify/auth:** add the option to pass validation data when signing in ([13093e9](https://github.com/aws/aws-amplify/commit/13093e9))

<a name="1.2.13-unstable.2"></a>

## [1.2.13-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.13-unstable.1...@aws-amplify/auth@1.2.13-unstable.2) (2018-12-13)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.13-unstable.1"></a>

## [1.2.13-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.13-unstable.0...@aws-amplify/auth@1.2.13-unstable.1) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.13-unstable.0"></a>

## [1.2.13-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.12...@aws-amplify/auth@1.2.13-unstable.0) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.12"></a>

## [1.2.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11...@aws-amplify/auth@1.2.12) (2018-12-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.12-unstable.0"></a>

## [1.2.12-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11...@aws-amplify/auth@1.2.12-unstable.0) (2018-12-07)

### Features

- **amazon-cognito-identity-js:** cache the user data ([f4dd225](https://github.com/aws/aws-amplify/commit/f4dd225))

<a name="1.2.11"></a>

## [1.2.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.10...@aws-amplify/auth@1.2.11) (2018-12-03)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.10"></a>

## [1.2.11-unstable.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.9...@aws-amplify/auth@1.2.11-unstable.10) (2018-11-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.9"></a>

## [1.2.11-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.8...@aws-amplify/auth@1.2.11-unstable.9) (2018-11-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.8"></a>

## [1.2.11-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.7...@aws-amplify/auth@1.2.11-unstable.8) (2018-11-20)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.7"></a>

## [1.2.11-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.6...@aws-amplify/auth@1.2.11-unstable.7) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.6"></a>

## [1.2.11-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.5...@aws-amplify/auth@1.2.11-unstable.6) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.5"></a>

## [1.2.11-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.4...@aws-amplify/auth@1.2.11-unstable.5) (2018-11-19)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.4"></a>

## [1.2.11-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.3...@aws-amplify/auth@1.2.11-unstable.4) (2018-11-17)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.3"></a>

## [1.2.11-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.2...@aws-amplify/auth@1.2.11-unstable.3) (2018-11-16)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.2"></a>

## [1.2.11-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.1...@aws-amplify/auth@1.2.11-unstable.2) (2018-11-16)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.1"></a>

## [1.2.11-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.11-unstable.0...@aws-amplify/auth@1.2.11-unstable.1) (2018-11-15)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.11-unstable.0"></a>

## [1.2.11-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.10...@aws-amplify/auth@1.2.11-unstable.0) (2018-11-13)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.10"></a>

## [1.2.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.10-unstable.1...@aws-amplify/auth@1.2.10) (2018-11-12)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.10-unstable.1"></a>

## [1.2.10-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.10-unstable.0...@aws-amplify/auth@1.2.10-unstable.1) (2018-11-09)

### Features

- **aws-amplify-react:** adding loading page ([c47f72a](https://github.com/aws/aws-amplify/commit/c47f72a))

<a name="1.2.10-unstable.0"></a>

## [1.2.10-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.9...@aws-amplify/auth@1.2.10-unstable.0) (2018-11-06)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.9"></a>

## [1.2.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.9-unstable.0...@aws-amplify/auth@1.2.9) (2018-11-01)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.9-unstable.0"></a>

## [1.2.9-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.8...@aws-amplify/auth@1.2.9-unstable.0) (2018-10-30)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.8"></a>

## [1.2.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.8-unstable.1...@aws-amplify/auth@1.2.8) (2018-10-29)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.8-unstable.1"></a>

## [1.2.8-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.8-unstable.0...@aws-amplify/auth@1.2.8-unstable.1) (2018-10-29)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.8-unstable.0"></a>

## [1.2.8-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.7...@aws-amplify/auth@1.2.8-unstable.0) (2018-10-29)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.7"></a>

## [1.2.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.7-unstable.3...@aws-amplify/auth@1.2.7) (2018-10-17)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.7-unstable.3"></a>

## [1.2.7-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.7-unstable.2...@aws-amplify/auth@1.2.7-unstable.3) (2018-10-16)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.7-unstable.2"></a>

## [1.2.7-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.7-unstable.1...@aws-amplify/auth@1.2.7-unstable.2) (2018-10-08)

### Bug Fixes

- **@aws-amplify/auth:** throw error when failed to sync items from AsyncStorage into Memory ([85c3f32](https://github.com/aws/aws-amplify/commit/85c3f32))

<a name="1.2.7-unstable.1"></a>

## [1.2.7-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.7-unstable.0...@aws-amplify/auth@1.2.7-unstable.1) (2018-10-05)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.7-unstable.0"></a>

## [1.2.7-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.6-unstable.1...@aws-amplify/auth@1.2.7-unstable.0) (2018-10-05)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.6"></a>

## [1.2.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.6-unstable.1...@aws-amplify/auth@1.2.6) (2018-10-04)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.6-unstable.1"></a>

## [1.2.6-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.6-unstable.0...@aws-amplify/auth@1.2.6-unstable.1) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.6-unstable.0"></a>

## [1.2.6-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.5-unstable.4...@aws-amplify/auth@1.2.6-unstable.0) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.5"></a>

## [1.2.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.5-unstable.4...@aws-amplify/auth@1.2.5) (2018-10-03)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.5-unstable.4"></a>

## [1.2.5-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.5-unstable.3...@aws-amplify/auth@1.2.5-unstable.4) (2018-10-01)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.5-unstable.3"></a>

## [1.2.5-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.5-unstable.2...@aws-amplify/auth@1.2.5-unstable.3) (2018-09-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.5-unstable.2"></a>

## [1.2.5-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.5-unstable.1...@aws-amplify/auth@1.2.5-unstable.2) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.5-unstable.1"></a>

## [1.2.5-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.5-unstable.0...@aws-amplify/auth@1.2.5-unstable.1) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.5-unstable.0"></a>

## [1.2.5-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4...@aws-amplify/auth@1.2.5-unstable.0) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4"></a>

## [1.2.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.9...@aws-amplify/auth@1.2.4) (2018-09-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.9"></a>

## [1.2.4-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.8...@aws-amplify/auth@1.2.4-unstable.9) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.8"></a>

## [1.2.4-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.7...@aws-amplify/auth@1.2.4-unstable.8) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.7"></a>

## [1.2.4-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.6...@aws-amplify/auth@1.2.4-unstable.7) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.6"></a>

## [1.2.4-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.4...@aws-amplify/auth@1.2.4-unstable.6) (2018-09-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.5"></a>

## [1.2.4-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.4...@aws-amplify/auth@1.2.4-unstable.5) (2018-09-25)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.4"></a>

## [1.2.4-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.3...@aws-amplify/auth@1.2.4-unstable.4) (2018-09-25)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.3"></a>

## [1.2.4-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.2...@aws-amplify/auth@1.2.4-unstable.3) (2018-09-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.2"></a>

## [1.2.4-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.1...@aws-amplify/auth@1.2.4-unstable.2) (2018-09-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.1"></a>

## [1.2.4-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.4-unstable.0...@aws-amplify/auth@1.2.4-unstable.1) (2018-09-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.4-unstable.0"></a>

## [1.2.4-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.3...@aws-amplify/auth@1.2.4-unstable.0) (2018-09-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.3"></a>

## [1.2.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.3-unstable.0...@aws-amplify/auth@1.2.3) (2018-09-21)

### Bug Fixes

- **@aws-amplify/auth:** fix typescript declaration for backward compatibility ([f43bbf4](https://github.com/aws/aws-amplify/commit/f43bbf4))

<a name="1.2.3-unstable.0"></a>

## [1.2.3-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.2-unstable.3...@aws-amplify/auth@1.2.3-unstable.0) (2018-09-21)

### Bug Fixes

- bumping version for deploying on unstable tag ([#1706](https://github.com/aws/aws-amplify/issues/1706)) ([b5d6468](https://github.com/aws/aws-amplify/commit/b5d6468))

<a name="1.2.2"></a>

## [1.2.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.1...@aws-amplify/auth@1.2.2) (2018-09-21)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.2-unstable.3"></a>

## [1.2.2-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.2-unstable.2...@aws-amplify/auth@1.2.2-unstable.3) (2018-09-20)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.2-unstable.2"></a>

## [1.2.2-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.2-unstable.1...@aws-amplify/auth@1.2.2-unstable.2) (2018-09-20)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.2-unstable.1"></a>

## [1.2.2-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.2-unstable.0...@aws-amplify/auth@1.2.2-unstable.1) (2018-09-17)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.2-unstable.0"></a>

## [1.2.2-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.2.1...@aws-amplify/auth@1.2.2-unstable.0) (2018-09-17)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.2.1"></a>

## [1.2.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.1.2...@aws-amplify/auth@1.2.1) (2018-09-17)

### Bug Fixes

- **@aws-amplify/auth:** add typescript declartions to Auth ([6f02a18](https://github.com/aws/aws-amplify/commit/6f02a18))

<a name="1.1.2"></a>

## [1.1.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.1.1...@aws-amplify/auth@1.1.2) (2018-09-12)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.1.1"></a>

## [1.1.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.1.1-unstable.0...@aws-amplify/auth@1.1.1) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.1.1-unstable.0"></a>

## [1.1.1-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.1.0...@aws-amplify/auth@1.1.1-unstable.0) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.1.0"></a>

# [1.1.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.9-unstable.4...@aws-amplify/auth@1.1.0) (2018-09-09)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.9-unstable.4"></a>

## [1.0.9-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.9-unstable.3...@aws-amplify/auth@1.0.9-unstable.4) (2018-09-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.9-unstable.3"></a>

## [1.0.9-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.9-unstable.2...@aws-amplify/auth@1.0.9-unstable.3) (2018-09-06)

### Features

- **@aws-amplify/auth:** allow globalSignOut ([b8b24c7](https://github.com/aws/aws-amplify/commit/b8b24c7))

<a name="1.0.9-unstable.2"></a>

## [1.0.9-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.8...@aws-amplify/auth@1.0.9-unstable.2) (2018-08-31)

### Bug Fixes

- **@aws-amplify/auth:** allow return sub attribute to user ([fc48010](https://github.com/aws/aws-amplify/commit/fc48010))
- **@aws-amplify/auth:** correctly throw the error when the refresh token is expired ([c61505a](https://github.com/aws/aws-amplify/commit/c61505a))

<a name="1.0.9-unstable.1"></a>

## [1.0.9-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.8...@aws-amplify/auth@1.0.9-unstable.1) (2018-08-30)

### Bug Fixes

- **@aws-amplify/auth:** correctly throw the error when the refresh token is expired ([c61505a](https://github.com/aws/aws-amplify/commit/c61505a))

<a name="1.0.8"></a>

## [1.0.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.26...@aws-amplify/auth@1.0.8) (2018-08-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.26"></a>

## [1.0.7-unstable.26](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.25...@aws-amplify/auth@1.0.7-unstable.26) (2018-08-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.25"></a>

## [1.0.7-unstable.25](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.24...@aws-amplify/auth@1.0.7-unstable.25) (2018-08-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.24"></a>

## [1.0.7-unstable.24](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.23...@aws-amplify/auth@1.0.7-unstable.24) (2018-08-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.23"></a>

## [1.0.7-unstable.23](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.21...@aws-amplify/auth@1.0.7-unstable.23) (2018-08-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.22"></a>

## [1.0.7-unstable.22](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.21...@aws-amplify/auth@1.0.7-unstable.22) (2018-08-25)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.21"></a>

## [1.0.7-unstable.21](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.20...@aws-amplify/auth@1.0.7-unstable.21) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.20"></a>

## [1.0.7-unstable.20](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.19...@aws-amplify/auth@1.0.7-unstable.20) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.19"></a>

## [1.0.7-unstable.19](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.17...@aws-amplify/auth@1.0.7-unstable.19) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.18"></a>

## [1.0.7-unstable.18](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.17...@aws-amplify/auth@1.0.7-unstable.18) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.17"></a>

## [1.0.7-unstable.17](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.15...@aws-amplify/auth@1.0.7-unstable.17) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.16"></a>

## [1.0.7-unstable.16](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.15...@aws-amplify/auth@1.0.7-unstable.16) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.15"></a>

## [1.0.7-unstable.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.14...@aws-amplify/auth@1.0.7-unstable.15) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.14"></a>

## [1.0.7-unstable.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.13...@aws-amplify/auth@1.0.7-unstable.14) (2018-08-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.13"></a>

## [1.0.7-unstable.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.11...@aws-amplify/auth@1.0.7-unstable.13) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.12"></a>

## [1.0.7-unstable.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.11...@aws-amplify/auth@1.0.7-unstable.12) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.11"></a>

## [1.0.7-unstable.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.10...@aws-amplify/auth@1.0.7-unstable.11) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.10"></a>

## [1.0.7-unstable.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.9...@aws-amplify/auth@1.0.7-unstable.10) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.9"></a>

## [1.0.7-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.8...@aws-amplify/auth@1.0.7-unstable.9) (2018-08-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.8"></a>

## [1.0.7-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.7...@aws-amplify/auth@1.0.7-unstable.8) (2018-08-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.7"></a>

## [1.0.7-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.6...@aws-amplify/auth@1.0.7-unstable.7) (2018-08-22)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.6"></a>

## [1.0.7-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.5...@aws-amplify/auth@1.0.7-unstable.6) (2018-08-21)

### Bug Fixes

- **@aws-amplify/auth:** check if window object exists for browser usage ([17d6a3d](https://github.com/aws/aws-amplify/commit/17d6a3d))

<a name="1.0.7-unstable.5"></a>

## [1.0.7-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.4...@aws-amplify/auth@1.0.7-unstable.5) (2018-08-21)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.4"></a>

## [1.0.7-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.3...@aws-amplify/auth@1.0.7-unstable.4) (2018-08-20)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.3"></a>

## [1.0.7-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.2...@aws-amplify/auth@1.0.7-unstable.3) (2018-08-19)

### Bug Fixes

- **aws-amplify-angular:** Angular rollup ([#1441](https://github.com/aws/aws-amplify/issues/1441)) ([eb84e01](https://github.com/aws/aws-amplify/commit/eb84e01))

<a name="1.0.7-unstable.2"></a>

## [1.0.7-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.1...@aws-amplify/auth@1.0.7-unstable.2) (2018-08-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.1"></a>

## [1.0.7-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.7-unstable.0...@aws-amplify/auth@1.0.7-unstable.1) (2018-08-16)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.7-unstable.0"></a>

## [1.0.7-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6...@aws-amplify/auth@1.0.7-unstable.0) (2018-08-15)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.6"></a>

## [1.0.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6-unstable.5...@aws-amplify/auth@1.0.6) (2018-08-14)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.6-unstable.5"></a>

## [1.0.6-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6-unstable.4...@aws-amplify/auth@1.0.6-unstable.5) (2018-08-14)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.6-unstable.4"></a>

## [1.0.6-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6-unstable.3...@aws-amplify/auth@1.0.6-unstable.4) (2018-08-13)

### Bug Fixes

- **@aws-amplify/auth:** dispatching failure event when hosted UI and documentation enhancement for hosted UI ([b13e937](https://github.com/aws/aws-amplify/commit/b13e937))

<a name="1.0.6-unstable.3"></a>

## [1.0.6-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6-unstable.2...@aws-amplify/auth@1.0.6-unstable.3) (2018-08-13)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.6-unstable.2"></a>

## [1.0.6-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6-unstable.1...@aws-amplify/auth@1.0.6-unstable.2) (2018-08-09)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.6-unstable.1"></a>

## [1.0.6-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.6-unstable.0...@aws-amplify/auth@1.0.6-unstable.1) (2018-08-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.6-unstable.0"></a>

## [1.0.6-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5...@aws-amplify/auth@1.0.6-unstable.0) (2018-08-07)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.5"></a>

## [1.0.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.7...@aws-amplify/auth@1.0.5) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.5-unstable.7"></a>

## [1.0.5-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.6...@aws-amplify/auth@1.0.5-unstable.7) (2018-08-06)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.5-unstable.6"></a>

## [1.0.5-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.5...@aws-amplify/auth@1.0.5-unstable.6) (2018-08-06)

### Bug Fixes

- **@aws-amplify/auth:** for currentUserPoolUser, only throws error when the user is disabled or deleted ([a800747](https://github.com/aws/aws-amplify/commit/a800747))

<a name="1.0.5-unstable.5"></a>

## [1.0.5-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.3...@aws-amplify/auth@1.0.5-unstable.5) (2018-08-06)

### Bug Fixes

- **@aws-amplify/auth:** fix getPreferredMfa and setPreferredMFA ([c5785b0](https://github.com/aws/aws-amplify/commit/c5785b0))

<a name="1.0.5-unstable.3"></a>

## [1.0.5-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.2...@aws-amplify/auth@1.0.5-unstable.3) (2018-07-31)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.5-unstable.2"></a>

## [1.0.5-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.1...@aws-amplify/auth@1.0.5-unstable.2) (2018-07-31)

### Bug Fixes

- **@aws-amplify/auth:** revert break changes in currentAuthenticatedUser ([7c806bd](https://github.com/aws/aws-amplify/commit/7c806bd))

<a name="1.0.5-unstable.1"></a>

## [1.0.5-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.5-unstable.0...@aws-amplify/auth@1.0.5-unstable.1) (2018-07-30)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.5-unstable.0"></a>

## [1.0.5-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.4...@aws-amplify/auth@1.0.5-unstable.0) (2018-07-30)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.4"></a>

## [1.0.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.4-unstable.1...@aws-amplify/auth@1.0.4) (2018-07-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.4-unstable.1"></a>

## [1.0.4-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.4-unstable.0...@aws-amplify/auth@1.0.4-unstable.1) (2018-07-28)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.4-unstable.0"></a>

## [1.0.4-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.14...@aws-amplify/auth@1.0.4-unstable.0) (2018-07-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.15"></a>

## [1.0.3-unstable.15](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.14...@aws-amplify/auth@1.0.3-unstable.15) (2018-07-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.14"></a>

## [1.0.3-unstable.14](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.13...@aws-amplify/auth@1.0.3-unstable.14) (2018-07-27)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.13"></a>

## [1.0.3-unstable.13](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.12...@aws-amplify/auth@1.0.3-unstable.13) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.12"></a>

## [1.0.3-unstable.12](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.11...@aws-amplify/auth@1.0.3-unstable.12) (2018-07-26)

### Bug Fixes

- **@aws-amplify/auth:** currentAuthenticatedUser throws error when the user is disabled/deleted ([1b09e2f](https://github.com/aws/aws-amplify/commit/1b09e2f))

<a name="1.0.3-unstable.11"></a>

## [1.0.3-unstable.11](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.10...@aws-amplify/auth@1.0.3-unstable.11) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.10"></a>

## [1.0.3-unstable.10](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.9...@aws-amplify/auth@1.0.3-unstable.10) (2018-07-26)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.9"></a>

## [1.0.3-unstable.9](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.8...@aws-amplify/auth@1.0.3-unstable.9) (2018-07-25)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.8"></a>

## [1.0.3-unstable.8](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.7...@aws-amplify/auth@1.0.3-unstable.8) (2018-07-25)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.7"></a>

## [1.0.3-unstable.7](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.6...@aws-amplify/auth@1.0.3-unstable.7) (2018-07-25)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.6"></a>

## [1.0.3-unstable.6](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.5...@aws-amplify/auth@1.0.3-unstable.6) (2018-07-24)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.5"></a>

## [1.0.3-unstable.5](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.4...@aws-amplify/auth@1.0.3-unstable.5) (2018-07-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.4"></a>

## [1.0.3-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.3...@aws-amplify/auth@1.0.3-unstable.4) (2018-07-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.3"></a>

## [1.0.3-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.2...@aws-amplify/auth@1.0.3-unstable.3) (2018-07-23)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.2"></a>

## [1.0.3-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.1...@aws-amplify/auth@1.0.3-unstable.2) (2018-07-20)

### Bug Fixes

- **@aws-amplify/auth:** give the option to set Federated Identity Pool region ([f370b33](https://github.com/aws/aws-amplify/commit/f370b33))

<a name="1.0.3-unstable.1"></a>

## [1.0.3-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.3-unstable.0...@aws-amplify/auth@1.0.3-unstable.1) (2018-07-20)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.3-unstable.0"></a>

## [1.0.3-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.2...@aws-amplify/auth@1.0.3-unstable.0) (2018-07-20)

### Bug Fixes

- **@aws-amplify/auth:** fix issue [#1165](https://github.com/aws/aws-amplify/issues/1165) and adds an api to get current preferred mfa type ([6f8a100](https://github.com/aws/aws-amplify/commit/6f8a100))

<a name="1.0.2"></a>

## [1.0.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.2-unstable.1...@aws-amplify/auth@1.0.2) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.2-unstable.1"></a>

## [1.0.2-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1...@aws-amplify/auth@1.0.2-unstable.1) (2018-07-19)

### Bug Fixes

- **@aws-amplify/auth:** add try cache for operations of auth storage ([96c100e](https://github.com/aws/aws-amplify/commit/96c100e))
- **@aws-amplify/core:** add try cache for operations of auth storage ([2bf8364](https://github.com/aws/aws-amplify/commit/2bf8364))

<a name="1.0.2-unstable.0"></a>

## [1.0.2-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1...@aws-amplify/auth@1.0.2-unstable.0) (2018-07-19)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.1"></a>

## [1.0.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1-unstable.4...@aws-amplify/auth@1.0.1) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.1-unstable.4"></a>

## [1.0.1-unstable.4](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1-unstable.3...@aws-amplify/auth@1.0.1-unstable.4) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.1-unstable.3"></a>

## [1.0.1-unstable.3](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1-unstable.2...@aws-amplify/auth@1.0.1-unstable.3) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.1-unstable.2"></a>

## [1.0.1-unstable.2](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1-unstable.1...@aws-amplify/auth@1.0.1-unstable.2) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.1-unstable.1"></a>

## [1.0.1-unstable.1](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1...@aws-amplify/auth@1.0.1-unstable.1) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="1.0.1-unstable.0"></a>

## [1.0.1-unstable.0](https://github.com/aws/aws-amplify/compare/@aws-amplify/auth@1.0.1...@aws-amplify/auth@1.0.1-unstable.0) (2018-07-18)

**Note:** Version bump only for package @aws-amplify/auth

<a name="0.1.1-unstable.0"></a>

## 0.1.1-unstable.0 (2018-06-27)

**Note:** Version bump only for package @aws-amplify/auth
