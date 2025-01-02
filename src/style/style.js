import { css } from 'styled-components';

export const TAG_COLOR = `#d7fa00`;
export const GRAY = `rgb(160, 160, 160)`;

export const flexMixin = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap',
}) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};

export const fontMixin = ({ size = '12px', weight = '400' }) => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
  `;
};
