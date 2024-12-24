import { defineQuery } from "next-sanity";

export const QUESTIONS_QUERY = defineQuery(`*[_type == "question" && defined(slug.current) && !defined($search) || topic match $search || category match $search || author->name match $search ] | order(_createdAt desc) {
    _id, 
    topic, 
    slug, 
    _createdAt, 
    author -> {
      _id, name, image, bio, email, totalViews, totalQuestions, totalAnswers, totalPosts
    }, 
    views, 
    description,  
    category, 
    image
}`);

export const QUESTION_VIEWS_QUERY = defineQuery(`*[_type == 'question' && _id == $id][0]{
  _id, views
}`)

export const AUTHOR_BY_ID_QUERY = defineQuery(`*[_type == 'author' && _id == $id][0]{
  _id,
  id,
  name,
  username,
  email,
  image,
  bio,
  backgroundImage, 
  totalViews,
  totalQuestions, 
  totalAnswers, 
  totalPosts, 
  }`);

  export const QUESTIONS_BY_AUTHOR_QUERY = defineQuery(`*[_type == "question" && author._ref == $id] | order(_createdAt desc) {
     _id, 
    topic, 
    slug, 
    _createdAt, 
    author -> {
      _id, name, image, bio, email
    }, 
    views, 
    description,  
    category, 
    image
    }`)

