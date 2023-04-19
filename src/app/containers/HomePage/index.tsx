import {Dispatch} from 'redux';
import React, {useCallback, useEffect} from 'react'
import {useAnimeService} from '../../services/animeService';
import {Container} from './styled'
import {setAnimePage} from './homePageSlice';
import {GetAnimePage} from '../../services/animeService/__generated__/GetAnimePage';
import {useAppDispatch} from '../../hooks';
import {HotAnime} from './HotAnime';

export const HomePage = () => {

	const {setAnimePage} = actionDispatch(useAppDispatch());
	const {getAnimePage} = useAnimeService();

	const fetchAnimePage = useCallback(async () => {
		try {
			const animePage = await getAnimePage(0)

			if (animePage) setAnimePage(animePage);

		} catch (error) {
			console.log('there is an error here', error);
		}
	}, [getAnimePage, setAnimePage]);

	useEffect(() => {
		fetchAnimePage();
	}, [fetchAnimePage]);

	return (
		<Container>
			<HotAnime />
		</Container>
	)
}

const actionDispatch = (dispatch: Dispatch) => ({
	setAnimePage: (page: GetAnimePage['Page']) => dispatch(setAnimePage(page))
});