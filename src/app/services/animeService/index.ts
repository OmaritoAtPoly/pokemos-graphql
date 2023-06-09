import {apolloClient} from "../../graphql";
import {GET_ANIME_PAGE} from "./queries";
import {GetAnimePage} from "./__generated__/GetAnimePage";

// class AnimeService {

// 	async getAnimePage(page: Number, perPage = 5): Promise<GetAnimePage['Page']> {
// 		try {
// 			const response = await apolloClient.query({query: GET_ANIME_PAGE, variables: {page, perPage}})

// 			if (!response || !response.data) throw new Error("cannot get anime list");

// 			return response.data;

// 		} catch (error) {
// 			throw error
// 		}
// 	}
// }

export const useAnimeService = () => {


	const getAnimePage = async (page: Number, perPage = 5): Promise<GetAnimePage['Page']> => {
		try {
			const response = await apolloClient.query({query: GET_ANIME_PAGE, variables: {page, perPage}})

			if (!response || !response.data) throw new Error("cannot get anime list");

			return response.data.Page;

		} catch (error) {
			throw error
		}
	}

	return {getAnimePage};
}

// export default new AnimeService();