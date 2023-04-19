// con este file se vincula en tiempo real el esquema del servidor y en las queries y
// en las mutation se pueden ver los valores reales de la api como se hace en el graphiql
// se necesita este plugin: Apollo GraphQL

module.exports = {
	client: {
		service: {
			name: 'anime',
			url: 'https://anilist.co/graphql',
			skipSSLValidation: true,
		},
	},
};
