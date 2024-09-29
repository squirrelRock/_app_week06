import React from 'react';

import Layout from '../../components/Layout';
import { getAllIdsSecond, getDataSecond } from '../../lib/datalist';

// - getStaticProps() function is defined by next.js to retrieve data to use for the dynamic page
export async function getStaticProps( { params } ) {
  const itemData = await getDataSecond(params.id);
  return {
    props: {
      itemData
    }
  };
}

// - getStaticPaths() function  is defined by next.js, tells next.js all valid URLs: 1,2,3 etc.
export async function getStaticPaths() {
  const paths = await getAllIdsSecond();
  return {
    paths,
    fallback: false
  };
}


import Link from 'next/link';

export default function Card({ itemData }) {
 

  return (
    <Layout>
      <article className="card col-9">
        <div className={`card-body ${itemData.Gender === 1 ? 'male' : 'female'}`}>
          <h5 className="card-title character-title">Character: {itemData.Character}</h5>
          <p className="card-text small px-2 pt-2"><strong>Role: </strong>{itemData.Role}</p>
          <p className="card-text small px-2"><strong>Personality:</strong> {itemData.Personality}</p>
          
        
          <p className="card-text  small px-2"><strong>Description:</strong> {itemData.About}
          </p> 
          
          <hr/>
          <h6 className="card-subtitle mb-2 text-body-secondary d-flex justify-content-between align-items-center">
  <span>
    Actor: {'\u00A0'}
    <a href={itemData.IMDb} target="_blank" rel="noopener noreferrer" className="card-link">
      {itemData.Actor}
    </a>
  </span>
  <a href={itemData.IMDb} target="_blank" rel="noopener noreferrer" className="mark">
    <u>IMDb</u>
  </a>
</h6>
<Link href="/secondary" className="btn btn-secondary btn-sm small mt-2">
        Back
      </Link>

        </div>
      </article>
    </Layout>
  );
}