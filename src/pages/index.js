import React,{useContext} from 'react';
import { Layout,HomepageCollectionsGrid,FeaturedProducts,SEO } from 'components';
import ProductContext from 'context/ProductContext'

const IndexPage = () =>{
  const {collections} = useContext(ProductContext)
  // console.log(collections)
  return(
    <Layout>
      <SEO description="non" title="Homepage"/>
      <HomepageCollectionsGrid 
       collections={
        collections.filter(
            collection => collection.title !== 'Featured Hats'
          )
        }/>
        {!!collections.find(collection => collection.title === 'Featured Hats'
        ) &&  <FeaturedProducts/>}
    </Layout>
  )
}

export default IndexPage;

