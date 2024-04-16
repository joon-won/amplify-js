/** @type {import("eslint").ESLint.ConfigData}*/
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	extends: [
		'eslint:recommended',
		'standard',
		'plugin:import/errors',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/stylistic',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: [
		'@stylistic',
		'@typescript-eslint',
		'unused-imports',
		'import',
		'jsdoc',
	],
	env: {
		es6: true,
		node: true,
	},
	ignorePatterns: [
		'dist',
		'node_modules',
		'.eslintrc.*',
		'rollup',
		'rollup.config.*',
		'setupTests.ts',
		'jest.setup.*',
		'jest.config.*',
		// 'packages/adapter-nextjs/__tests__',
		'packages/analytics/__tests__',
		'packages/api/__tests__',
		'packages/api-graphql/__tests__',
		'packages/api-rest/__tests__',
		'packages/auth/__tests__',
		// 'packages/aws-amplify/__tests__',
		// 'packages/core/__tests__',
		'packages/datastore/__tests__',
		'packages/datastore-storage-adapter/__tests__',
		'packages/geo/__tests__',
		'packages/interactions/__tests__',
		'packages/notifications/__tests__',
		'packages/predictions/__tests__',
		'packages/pubsub/__tests__',
		'packages/react-native/__tests__',
		'packages/rtn-push-notification/__tests__',
		'packages/rtn-web-browser/__tests__',
		'packages/storage/__tests__',
		// will enable lint by packages
		// 'adapter-nextjs',
		// 'packages/analytics',
		// 'packages/api',
		// 'packages/api-graphql',
		// 'packages/api-rest',
		// 'packages/auth',
		// 'packages/aws-amplify',
		// 'packages/core',
		'packages/datastore',
		'packages/datastore-storage-adapter',
		// 'packages/geo',
		// 'packages/interactions',
		// 'packages/notifications',
		// 'packages/predictions',
		// 'packages/pubsub',
		// 'packages/react-native',
		// 'packages/rtn-push-notification',
		// 'packages/rtn-web-browser',
		// 'packages/storage',
	],
	rules: {
		camelcase: [
			'error',
			{
				allow: [
					// exceptions for core package
					'phone_number',
					'search_indices',
					// exceptions for api packages
					'graphql_headers',
					// exceptions for the legacy config
					/^(aws_|amazon_)/,
					'access_key',
					'secret_key',
					'session_token',
					// exceptions for the auth package
					'redirect_uri',
					'response_type',
					'client_id',
					'identity_provider',
					'code_challenge',
					'code_challenge_method',
					'grant_type',
					'code_verifier',
					'logout_uri',
					'id_token',
					'access_token',
					'token_type',
					'expires_in',
					'error_description',
					// exceptions for the notifications package
					'campaign_id',
					'delivery_type',
					'treatment_id',
					'campaign_activity_id',
				],
			},
		],
		'import/no-deprecated': 'warn',
		'import/no-empty-named-blocks': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-relative-packages': 'error',
		'import/newline-after-import': 'error',
		'import/order': ['error', { 'newlines-between': 'always' }],
		'no-eval': 'error',
		'no-param-reassign': 'error',
		'no-shadow': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		'no-trailing-spaces': 'error',
		'no-return-await': 'error',
		'n/no-callback-literal': 'off',
		'object-shorthand': 'error',
		'prefer-destructuring': 'off',
		'promise/catch-or-return': [
			'error',
			{ terminationMethod: ['then', 'catch', 'asCallback', 'finally'] },
		],
		'space-before-function-paren': 'off',
		'sort-imports': ['error', { ignoreDeclarationSort: true }],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'valid-typeof': ['error', { requireStringLiterals: false }],
		'@stylistic/comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
				enums: 'always-multiline',
				generics: 'always-multiline',
				tuples: 'always-multiline',
			},
		],
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],
		'@stylistic/indent': 'off',
		'@stylistic/max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'@stylistic/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'@typescript-eslint/method-signature-style': ['error', 'method'],
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, variables: false, classes: false },
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/prefer-destructuring': [
			'error',
			{ object: true, array: false },
		],
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{ anonymous: 'never', named: 'never', asyncArrow: 'always' },
		],
		'jsdoc/no-undefined-types': 1,
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: ['packages/*/tsconfig.json', 'tsconfig.json'],
			},
		},
		'import/ignore': ['react-native'],
	},
};
