import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Informações de contacto</h3>
      <p>
        <span>
          <b>Email:</b>
        </span>{' '}
        automacao@raceland-sa.com
      </p>
      <p>
        <span>
          <b>Morada:</b>
        </span>{' '}
        R. Primeiro de Maio 614D, 4445-245 Alfena
      </p>
      <p>
        <span>
          <b>Telefone:</b>
        </span>{' '}
        +351 22 968 72 46
      </p>
      <p>
        <i>(Chamada para rede fixa nacional)</i>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    color: rgba(var(--text));
  }

  span {
    opacity: 1;
    color: rgba(var(--text));
  }
  i {
    font-size: 13px;
  }
`;
