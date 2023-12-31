import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './components/RepositoryItem';
import useRepositories from './hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  // container:{
  //   // margin: 5
  // }
});

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const { repositories } = useRepositories();
  const { data, error, loading } = useQuery(GET_REPOSITORIES,{

    fetchPolicy:'cache-and-network'
  });
  // console.log(data)
  // const [ repositories, setRepositories] = useState();

  // const fetchRepositories = async () =>{
  //   const response = await fetch('http://192.168.43.93:5000/api/repositories')

  //   const json = await response.json();
  //   console.log(json)

  //   setRepositories(json)
  // }

  // useEffect(()=>{
  //   fetchRepositories();
  // },[])

  // Get the nodes from the edges array
  const repositoryNodes = data
      ? data.repositories.edges.map(edge=>edge.node)
      : [];
  return (
    <>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          // other props
          keyExtractor={(repository)=>(repository.id)}
          renderItem={({item})=><RepositoryItem repository={item} />}
        />
    </>
  );
};

export default RepositoryList;