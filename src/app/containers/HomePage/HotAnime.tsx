import {createSelector} from "reselect";
import {useAppSelector} from '../../hooks';
import {makeSelectAnimePage} from './selectors';
import {AnimeCover, AnimeItemContainer, AnimeTitle, HotAnimeContainer} from './styled';

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({animePage}));

export const HotAnime = () => {

  const {animePage} = useAppSelector(stateSelector);

  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <HotAnimeContainer>
      {
        animePage.media?.map(anime => (
          <AnimeItemContainer key={anime?.id}>
            <AnimeCover>
              <img src={anime?.coverImage?.extraLarge || ''} alt={String(anime?.id)} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          </AnimeItemContainer>
        ))
      }
    </HotAnimeContainer>)
}
