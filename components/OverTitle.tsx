import styled from 'styled-components';
import { media } from 'utils/media';

const OverTitle = styled.span`
  font-size: 28px;
  letter-spacing: 0.02em;
  font-weight: 500;
  line-height: 1.5;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

export default OverTitle;
