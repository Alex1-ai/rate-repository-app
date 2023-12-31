import { gql } from "@apollo/client";


export const GET_REPOSITORIES = gql`
    query {
        repositories{
            edges {
                node {
                  id
                  fullName
                  description
                  language
                  forksCount
                  ratingAverage
                  stargazersCount
                  reviewCount
                  ownerAvatarUrl
                }
              }

        }
    }



`


export const IS_AUTHENTICATED = gql`
      {
        me {
          id
          username
        }
      }




`