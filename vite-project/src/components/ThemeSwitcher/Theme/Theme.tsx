import './Theme.scss';
import { ThemeType } from '../../../services/theme';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import BackgroundSlider from '../../BackgroundSlider/BackgroundSlider';
import { getRandomIntInclusive } from '../../../util/util';
import trashIcon from '@icons/trash.svg';
import { HexColorPicker } from 'react-colorful';

interface ThemeProps {
  theme: ThemeType;
  deleteTheme: (themeClass: string) => void;
  onThemeChange: (theme: ThemeType) => void;
  saveTheme: (theme: ThemeType) => void;
}

const Theme: React.FC<ThemeProps> = ({ theme, deleteTheme, onThemeChange, saveTheme }) => {
  const { selectedTheme, changeTheme } = useContext(ThemeContext);
  const [targetColor, setTargetColor] = useState<keyof ThemeType['scss']>('primary_color');
  const [targetColorValue, setTargetColorValue] = useState<string>(theme.scss.primary_color);

  useEffect(() => {
    setTargetColorValue(theme.scss[targetColor]);
  }, [targetColor, theme]);

  const getInterval = (): number => {
    return getRandomIntInclusive(15000, 25000);
  };

  const getAnimationDuration = (): number => {
    return getRandomIntInclusive(15, 25);
  };

  const changeColor = (color: string) => {
    setTargetColorValue(color);

    const updatedScss = {
      ...theme.scss,
      [targetColor]: color,
    };

    const updatedTheme: ThemeType = {
      ...theme,
      scss: updatedScss,
    };

    onThemeChange(updatedTheme);
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
            {theme.images.length > 0 ? (
              <BackgroundSlider images={theme.images} interval={interval} animationDuration={animationDuration} />
            ) : (
              <>
                <HexColorPicker color={targetColorValue} onChange={changeColor} />
              </>
            )}
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
              <div
                className="primary colorpicker "
                style={{ backgroundColor: theme?.scss.primary_color }}
                onClick={() => {
                  setTargetColor('primary_color');
                }}
              />
            </div>
          </div>
          <div className="row">
            <p className="label">Secondary:</p>
            <div className="color">
              <p>{theme.scss.secondary_color}</p>
              <div
                className="secondary colorpicker"
                style={{ backgroundColor: theme?.scss.secondary_color }}
                onClick={() => {
                  setTargetColor('secondary_color');
                }}
              />
            </div>
          </div>
          <div className="row">
            <p className="label">Text:</p>
            <div className="color">
              <p>{theme.scss.default_text_color}</p>
              <div
                className="text-default colorpicker"
                style={{ backgroundColor: theme?.scss.default_text_color }}
                onClick={() => {
                  setTargetColor('default_text_color');
                }}
              />
            </div>
          </div>
          <div className="row">
            <p className="label">Highlight 1:</p>
            <div className="color">
              <p>{theme.scss.highlight_color_1}</p>
              <div
                className="highlight-1 colorpicker"
                style={{ backgroundColor: theme?.scss.highlight_color_1 }}
                onClick={() => {
                  setTargetColor('highlight_color_1');
                }}
              />
            </div>
          </div>
          <div className="row">
            <p className="label">Highlight 2:</p>
            <div className="color">
              <p>{theme.scss.highlight_color_2}</p>
              <div
                className="highlight-2 colorpicker"
                style={{ backgroundColor: theme?.scss.highlight_color_2 }}
                onClick={() => {
                  setTargetColor('highlight_color_2');
                }}
              />
            </div>
          </div>
          <div className="row">
            <p className="label">Highlight 3:</p>
            <div className="color">
              <p>{theme.scss.highlight_color_3}</p>
              <div
                className="highlight-3 colorpicker"
                style={{ backgroundColor: theme?.scss.highlight_color_3 }}
                onClick={() => {
                  setTargetColor('highlight_color_3');
                }}
              />
            </div>
          </div>
          <div className="theme-buttons">
            {theme.images.length === 0 && (
              <button
                key={`${theme.class} save`}
                onClick={() => saveTheme(theme)}
                className={theme.class === selectedTheme.class ? 'active' : ''}
              >
                <p>Save Theme</p>
              </button>
            )}
            <button
              key={`${theme.class} apply`}
              onClick={() => changeTheme(theme)}
              className={theme.class === selectedTheme.class ? 'active' : ''}
            >
              <p>Apply Theme</p>
            </button>
          </div>
        </div>
      </div>
      {/* </BackgroundSlider> */}
    </div>
  );
};
export default Theme;
