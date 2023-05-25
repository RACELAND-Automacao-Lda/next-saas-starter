import styled from 'styled-components';

export interface DottedListProps {
  isOpened?: boolean;
  dotlist?: string[];
}

export default function DottedList({ isOpened, dotlist }: DottedListProps) {
  return (
    <>
      {dotlist &&
        dotlist.map((str, index) => (
          <ListItem key={index}>
            <StyledListDot /> <ListText isOpened={isOpened}>{str}</ListText>
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

const ListText = styled.span<{ isOpened?: boolean }>`
  font-size: 18px;
  margin-right: 1rem;
  z-index: 2;
`;

// Apply the updated styles to the list dots
const StyledListDot = styled.span`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #4d91ff;
  margin-right: 0.5rem;
`;
