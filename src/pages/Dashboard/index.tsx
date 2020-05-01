import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Error, Repositories } from './styles';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const localStorageKey = 'github-explorer/repositories';

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Array<Repository>>(() => {
    const storeRepositories = localStorage.getItem(localStorageKey);
    if (storeRepositories) {
      return JSON.parse(storeRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(repositories));
  }, [repositories]);

  const handleAddRepository = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Informe o dono/repositório para a pesquisa!');
      return;
    }

    const existingRepository = repositories.some(
      (r) => r.full_name.toLowerCase().trim() === newRepo.toLowerCase().trim(),
    );

    try {
      if (!existingRepository) {
        const { data: repository } = await api.get(`/repos/${newRepo}`);
        setRepositories([...repositories, repository]);
      }

      setInputError('');
    } catch (error) {
      setInputError('Não foi possível obter os dados do repositório!');
    } finally {
      setNewRepo('');
    }
  };

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.id} to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.owner.login}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
