import styled from 'styled-components';
import OverTitle from 'components/OverTitle';

export interface MobileDottedListProps {
  isOpened?: boolean;
  dotlist?: string[];
  fontSize?: string;
}

export default function MobileDottedList({ isOpened, fontSize, dotlist }: MobileDottedListProps) {
  return (
    <>
      {dotlist &&
        dotlist.map((str, index) => (
          <CustomOverTitle key={index}>
            <BulletPoint />
            {str}
          </CustomOverTitle>
        ))}
    </>
  );
}

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;

  margin-bottom: 1rem;
  width: 100%;
`;

const BulletPoint = styled.span`
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #4d91ff;
  margin-right: 0.5rem;
`;
