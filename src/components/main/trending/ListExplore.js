import React, { Component } from 'react';
import ExploreMain from '../ExploreMain';
import Load from '../Load';
import ItemExploreV1 from './ItemExploreV1';
import ItemExploreV2 from './ItemExploreV2';
import ItemExploreV3 from './ItemExploreV3';
import ItemExploreV4 from './ItemExploreV4';
class ListExplore extends Component {
    render() {
        return (
            <div>

            <div className="mt-6 grid lg:grid-cols-3 grid-cols-2 gap-3 hover:text-yellow-700 uk-link-reset">
              <ItemExploreV1/>
              <ItemExploreV2/>
              <ItemExploreV1/>
              <ItemExploreV4/>
              <ItemExploreV1/>
              <ItemExploreV4/>
              </div>
              <div className="my-3 grid lg:grid-cols-4 grid-cols-2 gap-3 hover:text-yellow-700 uk-link-reset">
              <ItemExploreV3/>
              <ItemExploreV3/>
              <ItemExploreV3/>
              <ItemExploreV3/>
              </div>
              {/* Load more*/}
            
               <Load/>
           </div>
        );
    }
}

export default ListExplore;