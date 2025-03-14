import styled from 'styled-components';

export interface DottedListProps {
  isOpened?: boolean;
  dotlist?: string[];
  fontSize?: string;
}

export default function DottedList({ isOpened, fontSize, dotlist }: DottedListProps) {
  return (
    <>
      {dotlist &&
        dotlist.map((str, index) => (
          <ListItem key={index}>
            <StyledListDot />{' '}
            <ListText fontSize={fontSize} isOpened={isOpened}>
              {str}
            </ListText>
          </ListItem>
        ))}
    </>
  );
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0rem;
`;

const ListText = styled.span<{ fontSize?: string; isOpened?: boolean }>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : '18px')};
  margin-right: 3rem;
  z-index: 2;
  max-width: 100%;
  color: ${(p) => (p.isOpened ? 'white' : 'rgb(var(--text))')};
`;

// Apply the updated styles to the list dots
const StyledListDot = styled.span`
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #4d91ff;
  margin-right: 0.5rem;
`;
