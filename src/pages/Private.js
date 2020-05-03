import React from 'react';
import Layout from '../components/Layout';

import { useUser } from 'reactfire';

const Private = () => {
    
    const user = useUser();

    const center = {
        textAlign: 'center'
    }

    return ( 
        <Layout>
            <div style={center}>
                <h1>Private</h1>
                <p>Hello, { user.email}. This is your Private Page.</p>
            </div>
        </Layout>
     );
}
 
export default Private;