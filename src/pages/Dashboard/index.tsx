import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="/">
        <img
          src="https://api.adorable.io/avatars/130/abott@adorable.png"
          alt="avatar"
        />
        <div>
          <strong>Autor</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="/">
        <img
          src="https://api.adorable.io/avatars/130/abott@adorable.png"
          alt="avatar"
        />
        <div>
          <strong>Autor</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="/">
        <img
          src="https://api.adorable.io/avatars/130/abott@adorable.png"
          alt="avatar"
        />
        <div>
          <strong>Autor</strong>
          <p>Descrição</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
