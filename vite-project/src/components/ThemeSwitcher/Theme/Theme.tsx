import './Theme.scss';
import { ThemeType } from '../../../services/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import BackgroundSlider from '../../BackgroundSlider/BackgroundSlider';
import { getRandomIntInclusive } from '../../../util/util';
import trashIcon from '@icons/trash.svg';

interface ThemeProps {
  theme: ThemeType;
  deleteTheme: (themeClass: string) => void;
}

const Theme: React.FC<ThemeProps> = ({ theme, deleteTheme }) => {
  const { selectedTheme, changeTheme } = useContext(ThemeContext);

  const getInterval = (): number => {
    return getRandomIntInclusive(15000, 25000);
  };

  const getAnimationDuration = (): number => {
    return getRandomIntInclusive(15, 25);
  };

  const interval = getInterval();
  const animationDuration = getAnimationDuration();

  return (
    <div className={`theme ${theme.class}`}>
      {/* <BackgroundSlider images={theme.images}> */}

      <div className="content">
        <div className="visual-and-button">
          <p className="title">{theme.name}</p>
          <div className="visual">
            <BackgroundSlider images={theme.images} interval={interval} animationDuration={animationDuration} />
          </div>
        </div>
        <div className="color-details">
          {theme.canEdit ? (
            <img
              src={trashIcon}
              className="trash-icon"
              onClick={() => {
                deleteTheme(theme.class);
              }}
            />
          ) : (
            <div className="trash-icon" />
          )}
          <div className="row">
            <p className="label">Primary:</p>
            <div className="color">
              <p>{theme.scss.primary_color}</p>
              <div className="primary colorpicker" />
            </div>
          </div>
          <div className="row">
            <p className="label">Secondary:</p>
            <div className="color">
              <p>{theme.scss.secondary_color}</p>
              <div className="secondary colorpicker" />
            </div>{' '}
          </div>
          <div className="row">
            <p className="label">Text:</p>
            <div className="color">
              <p>{theme.scss.default_text_color}</p>
              <div className="text-default colorpicker" />
            </div>{' '}
          </div>
          <div className="row">
            <p className="label">Highlight 1:</p>
            <div className="color">
              <p>{theme.scss.highlight_color_1}</p>
              <div className="highlight-1 colorpicker" />
            </div>
          </div>
          <div className="row">
            <p className="label">Highlight 2:</p>
            <div className="color">
              <p>{theme.scss.highlight_color_2}</p>
              <div className="highlight-2 colorpicker" />
            </div>
          </div>
          <div className="row">
            <p className="label">Highlight 3:</p>
            <div className="color">
              <p>{theme.scss.highlight_color_3}</p>
              <div className="highlight-3 colorpicker" />
            </div>
          </div>

          <button
            key={theme.class}
            onClick={() => changeTheme(theme)}
            className={theme.class === selectedTheme.class ? 'active' : ''}
          >
            <p>Apply Theme</p>
          </button>
        </div>
      </div>
      {/* </BackgroundSlider> */}
    </div>
  );
};
export default Theme;
